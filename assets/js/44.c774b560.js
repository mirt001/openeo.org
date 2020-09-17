(window.webpackJsonp=window.webpackJsonp||[]).push([[44],{253:function(e,t,o){"use strict";o.r(t);var n=o(3),a=Object(n.a)({},(function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[o("h1",{attrs:{id:"authentication"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#authentication"}},[e._v("#")]),e._v(" Authentication")]),e._v(" "),o("p",[e._v("While a couple of openEO operations can be done anonymously, most of the interesting parts of the API require you to identify as a registered user. openEO specifies two ways to authenticate as a user:")]),e._v(" "),o("ul",[o("li",[o("a",{attrs:{href:"https://en.wikipedia.org/wiki/OpenID_Connect",target:"_blank",rel:"noopener noreferrer"}},[e._v("OpenID Connect"),o("OutboundLink")],1),e._v(" (recommended, but not always straightforward to use)")]),e._v(" "),o("li",[o("a",{attrs:{href:"https://en.wikipedia.org/wiki/Basic_access_authentication",target:"_blank",rel:"noopener noreferrer"}},[e._v("HTTP Basic"),o("OutboundLink")],1),e._v(" (not recommended, but practically easier in some situations)")])]),e._v(" "),o("h2",{attrs:{id:"http-basic"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#http-basic"}},[e._v("#")]),e._v(" HTTP Basic")]),e._v(" "),o("p",[e._v("Let's start with the easiest authentication method, based on the HTTP Basic authentication scheme. It is however "),o("em",[e._v("not recommended")]),e._v(" for various reasons, such as its limited "),o("em",[e._v("security")]),e._v(" measures. For example, if you are connecting to a backend with a "),o("code",[e._v("http://")]),e._v(" URL (unencrypted; discouraged in openEO) instead of a "),o("code",[e._v("https://")]),e._v(" one (encrypted), you should certainly not use HTTP Basic authentication.")]),e._v(" "),o("p",[e._v("With these security related caveats out of the way, you authenticate using your username and password. The clients usually have a "),o("code",[e._v("authenticate_basic")]),e._v(" method for this or graphical clients (e.g. QGIS and the Web Editor) will ask for your username and password directly.")]),e._v(" "),o("div",{staticClass:"custom-block tip"},[o("p",{staticClass:"custom-block-title"},[e._v("Further Information")]),e._v(" "),o("ul",[o("li",[o("a",{attrs:{href:"https://open-eo.github.io/openeo-js-client/1.0.0-rc.2/BasicProvider.html",target:"_blank",rel:"noopener noreferrer"}},[e._v("JS Client Documentation"),o("OutboundLink")],1)]),e._v(" "),o("li",[o("a",{attrs:{href:"https://open-eo.github.io/openeo-python-client/auth.html#basic-http-auth",target:"_blank",rel:"noopener noreferrer"}},[e._v("Python Client Documentation"),o("OutboundLink")],1)]),e._v(" "),o("li",[o("a",{attrs:{href:"https://github.com/Open-EO/openeo-r-client/blob/master/man/BasicAuth.Rd",target:"_blank",rel:"noopener noreferrer"}},[e._v("R Client Documentation"),o("OutboundLink")],1)])])]),e._v(" "),o("h2",{attrs:{id:"openid-connect"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#openid-connect"}},[e._v("#")]),e._v(" OpenID Connect")]),e._v(" "),o("p",[e._v("OpenID Connect (OIDC) is an identity layer on top of the OAuth 2.0 protocol. It is a quite an extensive stack of interacting actors and protocols, and an in-depth discussion of its architecture would lead us too far here. However, in the context of working with openEO, these OpenID Connect concepts are useful to understand:")]),e._v(" "),o("ul",[o("li",[o("p",[e._v("There is "),o("strong",[e._v("decoupling")]),e._v(" between:")]),e._v(" "),o("ul",[o("li",[e._v("the "),o("em",[e._v("OpenID Connect identity provider")]),e._v(" (the platform that handles the authentication of the user)")]),e._v(" "),o("li",[e._v("the "),o("em",[e._v("openEO backend")]),e._v(", which manages earth observation collections and executes your algorithms")])]),e._v(" "),o("p",[e._v("Instead of managing the authentication procedure itself, a backend first forwards a user to the log-in page of a OpenID Connect provider, such as an (external) organization like Google or Microsoft. The user can log in there with an existing account (or create a new one) and then generally has to explicitly grant access to basic profile information (e.g. email address) that the backend will use to identify the user.")]),e._v(" "),o("p",[e._v("Note that with this approach, the backend does not have to take care of all the security and privacy challenges of properly handling user registration, authentication, etc. Also, it allows the user to securely reuse an existing account registered with an established organization, instead of having to register yet another account with some web service.")])]),e._v(" "),o("li",[o("p",[e._v("Your openEO script or application acts as a so called "),o("strong",[e._v("OpenID Connect client")]),e._v(", with an associated "),o("strong",[e._v("client ID")]),e._v(". This practically means that, apart from a user account, you need a client ID as well (and often a client secret too) when authenticating.")]),e._v(" "),o("p",[e._v("The details of how to obtain the client ID and secret largely depend on the backend and OpenID Connect provider: you might have to register a client yourself, or you might have to use an existing client ID. Consult the openEO backend (documentation) about how to obtain client ID (and secret).")])]),e._v(" "),o("li",[o("p",[e._v('There are several possible "'),o("strong",[e._v("flows")]),e._v('" (also called "grants") to complete the whole OpenID Connect authentication dance:')]),e._v(" "),o("ul",[o("li",[e._v("Authorization Code Flow")]),e._v(" "),o("li",[e._v("Device Flow")]),e._v(" "),o("li",[e._v("Client Credentials Flow")]),e._v(" "),o("li",[e._v("Resource Owner Password flow")]),e._v(" "),o("li",[e._v("Refresh Token Flow")])]),e._v(" "),o("p",[e._v("Picking the right flow highly depends on your use case and context: are you working interactively, are you working in a browser based environment, should your application be able to work without user interaction in the background, what does the OpenID Connect provider support, ...?")])])]),e._v(" "),o("p",[e._v("OpenID Connect is clearly more complex than HTTP Basic Authentication. In the sections below we will discuss the practical details of each flow.")]),e._v(" "),o("div",{staticClass:"custom-block tip"},[o("p",{staticClass:"custom-block-title"},[e._v("Note")]),e._v(" "),o("p",[e._v("A backend might support "),o("strong",[e._v("multiple OpenID Connect providers")]),e._v(". If there is only one, the openEO client libraries will usually pick it automatically, but otherwise you may need to decide explicitly which provider to authenticate against.")])]),e._v(" "),o("div",{staticClass:"custom-block tip"},[o("p",{staticClass:"custom-block-title"},[e._v("Further Information")]),e._v(" "),o("ul",[o("li",[o("a",{attrs:{href:"https://open-eo.github.io/openeo-js-client/1.0.0-rc.2/OidcProvider.html",target:"_blank",rel:"noopener noreferrer"}},[e._v("JS Client Documentation"),o("OutboundLink")],1)]),e._v(" "),o("li",[o("a",{attrs:{href:"https://open-eo.github.io/openeo-python-client/auth.html#openid-connect-based-authentication",target:"_blank",rel:"noopener noreferrer"}},[e._v("Python Client Documentation"),o("OutboundLink")],1)]),e._v(" "),o("li",[o("a",{attrs:{href:"https://github.com/Open-EO/openeo-r-client/blob/master/man/OIDCAuth.Rd",target:"_blank",rel:"noopener noreferrer"}},[e._v("R Client Documentation"),o("OutboundLink")],1)])])]),e._v(" "),o("h3",{attrs:{id:"authorization-code-flow"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#authorization-code-flow"}},[e._v("#")]),e._v(" Authorization Code Flow")]),e._v(" "),o("p",[e._v("This is the most popular and widely supported OpenID Connect flow in the general web development world. However, it requires an environment that can be hard to get right when using in other environments like a mobile app or a CLI (command line interface). Some prerequisites must be met:")]),e._v(" "),o("ul",[o("li",[e._v("You are working interactively (e.g. in a Jupyter notebook, in a Python or R shell or running a script manually)")]),e._v(" "),o("li",[e._v("You have access to a web browser (preferably on the same machine as your application), to authenticate with the OpenID Connect provider")]),e._v(" "),o("li",[e._v("The web browser has (network) access")]),e._v(" "),o("li",[e._v("A URL must be whitelisted in the OpenID client's \"redirect URL\" configuration at the OpenID Connect provider's side.")])]),e._v(" "),o("h3",{attrs:{id:"device-flow"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#device-flow"}},[e._v("#")]),e._v(" Device Flow")]),e._v(" "),o("p",[e._v("The device flow (also called device authorization grant) is a relatively new OpenID Connect flow and it is not as widely supported across different OpenID Connect Providers as the other flows. It provides a nice alternative that is roughly comparable to the authorization code flow but without the previously mentioned issues related to short-living webservers, network access and browser redirects.")]),e._v(" "),o("p",[e._v("The device flow is only suited for interactive use cases and requires a web browser for the authentication with the OpenID Connect provider. However, it can be any web browser, even one on your mobile phone. There is no networking magic required to be able to access any short-living background webserver like with the authorization code flow.")]),e._v(" "),o("p",[e._v('The "magic" is that the client will show a message like this:')]),e._v(" "),o("div",{staticClass:"language- extra-class"},[o("pre",[o("code",[e._v("To authenticate: visit https://provider.example.com/device\nand enter the user code 'DTNY-KLNX'.\n")])])]),o("p",[e._v("You should now visit this URL. Usually it is intentionally a short URL to make it feasible to type it instead of copy-pasting it (e.g. on another device). Authenticate with the OpenID Connect provider and enter the user code shown in the message. Meanwhile, the client library is usually actively polling the OpenID Connect provider and when you successfully complete the authentication and entering of the user code, it will receive the necessary tokens for authenticated communication with the backend.")]),e._v(" "),o("h3",{attrs:{id:"client-credentials-flow"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#client-credentials-flow"}},[e._v("#")]),e._v(" Client Credentials Flow")]),e._v(" "),o("p",[e._v("The Client Credentials flow directly uses the client ID and secret to authenticate. It does not involve interactive authentication through a web browser, which makes it useful for "),o("strong",[e._v("non-interactive use cases")]),e._v(".")]),e._v(" "),o("p",[e._v("The downside is of the Client Credentials flow is that it can be challenging or even impossible with a given OpenID Connect provider, to set up a client that supports this. Also, your openEO backend might not allow it, because technically you are authenticating a "),o("em",[e._v("client")]),e._v(", and not a "),o("em",[e._v("user")]),e._v(".")]),e._v(" "),o("h3",{attrs:{id:"resource-owner-password-flow"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#resource-owner-password-flow"}},[e._v("#")]),e._v(" Resource Owner Password flow")]),e._v(" "),o("p",[e._v("With the Resource Owner Password flow you directly pass the user (and client) credentials. Like the Client Credentials flow, it is useful for "),o("strong",[e._v("non-interactive uses cases")]),e._v(".")]),e._v(" "),o("p",[e._v("However, usage of the Resource Owner Password flow is "),o("strong",[e._v("generally discouraged")]),e._v(" because of its poor security features (e.g. OAuth/OIDC was designed to avoid passing and storing user passwords unnecessarily). It is also not widely supported across OpenID Connect providers, probably due to its weak security measures.")]),e._v(" "),o("h3",{attrs:{id:"refresh-token-flow"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#refresh-token-flow"}},[e._v("#")]),e._v(" Refresh Token Flow")]),e._v(" "),o("p",[e._v("When OpenID Connect authentication completes successfully, the client receives an access token to be used when doing authenticated calls to the backend. The access token usually has a short lifetime to reduce the security risk when it would be stolen or intercepted. The client also receives a "),o("em",[e._v("refresh token")]),e._v(" that can be used, through the Refresh Token flow, to easily request a new access token, without having to re-authenticate, which makes it useful for "),o("strong",[e._v("non-interactive uses cases")]),e._v(".")]),e._v(" "),o("p",[e._v("However, as it needs an existing refresh token, the Refresh Token Flow requires "),o("strong",[e._v("first to authenticate with one of the other flows")]),e._v(" (but in practice it might not be required very often because refresh tokens usually have a relatively long lifetime).")])])}),[],!1,null,null,null);t.default=a.exports}}]);