import { EntityRequestionFunction, GotRequestFunction } from '../@types/global';
import QuickbooksOnline from '../online';
import api from './api.json';

const calls: Record<string, string> = {
  Create: 'create',
  Delete: 'delete',
  GetAll: 'find',
  GetById: 'get',
  GetDetails: 'get',
  Query: 'get',
  Read: 'get',
  ReadAll: 'find',
  ReadById: 'get',
  ReadByID: 'get',
  Update: 'update',
  Void: 'delete',
};

// const clientId = 'ABTmnztwWA27aO1GI6k1bzY5TKWC9MD6Y2HJMEDgbZKElciL6f';
// const clientSecret = 'ymcAws8pDP4o9zJlYGrS08KREne0yEDfgIZU31IV';
const realmId = '4620816365168536300';
// const refreshToken = 'AB11635726011LuQGg4FPqqNqKEcPGXxqFMTx38fLLJr2duoHl';
const accessToken =
  'eyJlbmMiOiJBMTI4Q0JDLUhTMjU2IiwiYWxnIjoiZGlyIn0..scOm-R9xGBtlHYfXugIQXw.Dq5NLHk6lt6x9g5xfJsmXpuyI-rNH_pv8LfRK8tgC46GyTFVnd9bRHter1n1WPlIbUF0MCOUYnzOfZEsSYlJb2BX9952yRellV7_Vi-iHLsIL6TkmMEfbQK7mA7sVv9lEehysCq7zKR7XLlv-ORp47_ASguSriKVvBrANxYU8qE7zAKmmAbXTmZFg7OCoAhPTjP49d2GMPh0wSYMam-c9djitWU6XACNYqwtFyrEAi7vL5eaze3nLqsVNNhCIRcTl5rDFSqeUzJV9EsX6Ke64NYpKOXWpK3OPM-OaWW-y5x53wCyWY-fuVFCPXPKBhjoL7CIf_BpiYtHOAs-4ygceANgIf0lg68tNZfLWhDQ9DvbNNXEb82V9LZNXB_DBCUb_89RFauM75rSfSXC73NNe-EuDlGbGJ8ubCUz-IzUT51QP85h0bnTs7HwYJMEO4pLBlMri3SaXiCDjtwBwLee5F0ZfygWeLKU8Ff5HBoajTrC9IaFqeUDxi7dd_qqm58jH2mcAza8IDwCP6VYaNgFpWRf-YDHaApjz6OqdhwFWJrq2Aoo28t__Kp2sUMqv2s5k46ExpN8NuWxXlxu5h1ttEwWixRHtMJq3qKRbYkV6_Wl5Dlx4HvHpUL6dO2D2-7tbBGNnlLAnjhurmIMJCL7p-Ks-2V3bIXt1k_0bC4GAmgb-i4UvN0I9zFbJ5PHrfEB5xO87CB4ZMy9GHTuwzM_PKhncCr3Xn-bIQH_Dmb2Z_kCWvXW2CZ1Niqm0RF2aAQJMndGDKloq2QSrwCgrTk-7wvyE_5Uc9lIg5g2ID6-Nk2YW42ehcUGcZY3ZMXbxNl0O7WHQES4VzPsbL2N8eOBnG5p4e2Pgf0mGOaLsY_Z7V8.AQElOF7Be5cXZzZ2-F-Upg';

const online = new QuickbooksOnline({
  accessToken,
  // use the sandbox?
  debug: false,
  // enable debugging?
  minorVersion: '59',

  realmId,
  useSandbox: process.env.NODE_ENV !== 'production',
});

const run = async () => {
  try {
    await Promise.all(
      api.item.map(async collection => {
        const name = collection.name;
        // @ts-ignore
        await collection.item.reduce(
          async (prom: Promise<any>, request: any) => {
            await prom;
            const requestName = request.name.replace(/\w+?\s?-\s?/, '');
            const requestType = calls[request.name.replace(/\w+?\s?-\s?/, '')];

            let methodName = requestType + name;
            if (requestName.toLowerCase().includes('all')) {
              if (methodName[methodName.length - 1] === 'y')
                methodName = methodName.slice(0, -1) + 'ies';
              else if (methodName[methodName.length - 1] === 's') {
                if (methodName[methodName.length - 2] !== 'e')
                  methodName += 'es';
              } else methodName += 's';
            }
            if (name === 'Reports') methodName = 'report' + requestName;
            let data = undefined;
            try {
              const method = online[
                methodName as Exclude<keyof QuickbooksOnline, 'client' | 'got'>
              ] as GotRequestFunction | EntityRequestionFunction;
              if (!method) {
                console.log('Missing Request:', methodName);
                return;
              }
              const req = request.request as Record<string, any>;
              if (req?.body?.raw) {
                try {
                  data = JSON.parse(req?.body?.raw);
                } catch (e) {
                  data = req?.body?.raw;
                }

                await method(data);
                console.log('SUCCESS:', methodName);
              }
            } catch (e: any) {
              console.log('FAILED', methodName, data, e.response.body);
            }
          },
          Promise.resolve()
        );
      })
    );
  } catch (e) {}
};

run();
