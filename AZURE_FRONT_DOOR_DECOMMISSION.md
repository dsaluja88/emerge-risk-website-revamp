# Azure Front Door decommission

## Target routing

| Hostname | Azure target |
| --- | --- |
| `www.aiqariskradar.com` | `riskradar-homepage` (`mango-cliff-0152a340f.3.azurestaticapps.net`) |
| `app.aiqariskradar.com` | `riskradar-frontend` (`lively-beach-06658560f.7.azurestaticapps.net`) |
| Browser API traffic | `riskradar-api.azurewebsites.net` |

The DNS zone is hosted by GoDaddy (`ns29.domaincontrol.com` and `ns30.domaincontrol.com`).

## Safe cutover order

1. In GoDaddy, create a CNAME with host `app`, value
   `lively-beach-06658560f.7.azurestaticapps.net`, and TTL 600 seconds.
2. After it resolves publicly, bind `app.aiqariskradar.com` to the
   `riskradar-frontend` Static Web App and wait for status `Ready`.
3. Deploy the marketing site with `NEXT_PUBLIC_APP_URL=https://app.aiqariskradar.com`
   and verify login, signup, and API calls.
4. In GoDaddy, replace the `www` CNAME value
   `aiqariskradar-live2-dsdpb4f2ava5ddf5.z01.azurefd.net` with
   `mango-cliff-0152a340f.3.azurestaticapps.net`.
5. Remove `www.aiqariskradar.com` from `riskradar-frontend`, bind it to
   `riskradar-homepage`, and wait for status `Ready`.
6. Verify HTTPS and all public pages on `www`, login on `app`, signup against
   App Service, password-reset URLs, and backend health.
7. Update the backend `FRONTEND_URL` to `https://app.aiqariskradar.com` and keep
   both `www` and `app` in `CORS_ORIGINS` during DNS propagation.
8. After successful checks and at least one DNS TTL, delete the Front Door
   profile `riskradar-frontdoor-v2`. Remove the old WordPress hosting only after
   confirming it has no unrelated sites or mail services.

Do not delete Front Door before steps 1-7 are complete. It is the active origin
for `www.aiqariskradar.com` until the GoDaddy CNAME is replaced.
