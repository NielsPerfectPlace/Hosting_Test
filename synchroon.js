import { UserSession } from '@esri/arcgis-rest-auth';
import esriId from "@arcgis/core/identity/IdentityManager";

UserSession.beginOAuth2({
  // register an app of your own to create a unique clientId
  clientId: "FX1W0S1vVixlMeOX",
})
  .then(session)

var checkUser = esriId.checkSignInStatus().userId

if (checkUser == "niels_PerfectPlace") { 
  window.location.href = 'htpps://www.google.nl';
}
