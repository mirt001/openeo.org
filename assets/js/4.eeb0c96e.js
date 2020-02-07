(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{116:function(e,t,s){var a={"./0.4/developers/api/errors.json":117,"./1.0/developers/api/errors.json":118};function n(e){var t=r(e);return s(t)}function r(e){if(!s.o(a,e)){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}return a[e]}n.keys=function(){return Object.keys(a)},n.resolve=r,e.exports=n,n.id=116},117:function(e){e.exports=JSON.parse('{"Internal":{"description":"An internal server error with a proprietary message.","message":"Server error: {message}","http":500,"tags":["General"]},"NotFound":{"description":"To be used if the requested resource does not exist. Note: Unsupported endpoints MUST send an \'FeatureUnsupported\' error. There are also specialized errors for missing jobs (JobNotFound), files (FileNotFound), etc.","message":"Resource not found.","http":404,"tags":["General"]},"FeatureUnsupported":{"description":"The back-end responds with this error whenever an endpoint is specified in the openEO API, but is not supported.","message":"Feature not supported.","http":501,"tags":["General"]},"InfrastructureMaintenance":{"description":"Service is currently not available, but the infrastructure is currently undergoing maintenance work.","message":"Service is not available at the moment due to maintenance work. Please try again later.","http":503,"tags":["General"]},"InfrastructureBusy":{"description":"Service is generally available, but the infrastructure can\'t handle it at the moment as too many requests are processed.","message":"Service is not available at the moment due to overloading. Please try again later.","http":503,"tags":["General"]},"Timeout":{"description":"The request took too long and timed out.","message":"Request timed out.","http":408,"tags":["General","Job Management"]},"CRSInvalid":{"description":"Invalid or unsupported CRS specified.","message":"CRS \'{crs}\' is invalid.","http":400,"tags":["Processes"]},"CoordinateOutOfBounds":{"description":null,"message":"Coordinate is out of bounds.","http":400,"tags":["Processes"]},"BudgetInvalid":{"description":"The budget is too low as it is either smaller than or equal to 0 or below the costs.","message":"The budget is too low.","http":400,"tags":["Job Management","Secondary Services Management"]},"NoDataForUpdate":{"description":"For PATCH requests: No valid data specified at all.","message":"No valid data specified to be updated.","http":400,"tags":["Job Management","Secondary Services Management","Process Graph Management"]},"PropertyNotEditable":{"description":"For PATCH requests: The specified parameter can\'t be updated. It is read-only.","message":"Property \'{property}\' is read-only.","http":400,"tags":["Job Management","Secondary Services Management","Process Graph Management"]},"WebSocketUpgradeNotRequested":{"description":"In order to subscribe the connection must be upgradable to WebSockets.","message":"Client sent invalid request to establish subscriptions.","http":400,"tags":["Subscriptions"]},"CollectionNotFound":{"description":"The requested collection does not exist.","message":"Collection does not exist.","http":404,"tags":["EO Data Discovery","Processes"]},"StorageFailure":{"description":"Server couldn\'t store file(s) due to server-side reasons.","message":"Unable to store file(s).","http":500,"tags":["File Management","Job Management"]},"StorageQuotaExceeded":{"description":"The storage quota has been exceeded by the user.","message":"Insufficient Storage.","http":400,"tags":["File Management","Job Management"]},"FileNotFound":{"description":"The requested file does not exist.","message":"File does not exist.","http":404,"tags":["File Management","Processes"]},"FilePathInvalid":{"description":"The specified path is invalid or not accessible. Path could contain invalid characters, an invalid user ID or point to an existing folder or a location outside of the user folder.","message":"File path is invalid.","http":400,"tags":["File Management"]},"FileOperationUnsupported":{"description":"The specified path is not a file and the operation is only supported for files. Path is likely a directory.","message":"Operation is only supported for files.","http":400,"tags":["File Management"]},"ContentTypeInvalid":{"description":"The specified media (MIME) type used in the Content-Type header is not allowed.","message":"The media type is not supported. Allowed: {types}","http":400,"tags":["File Management","General"]},"FileTypeInvalid":{"description":"File format, file extension or media (MIME) type is not allowed.","message":"File type not allowed. Allowed file types: {types}","http":400,"tags":["File Management"]},"FileSizeExceeded":{"description":"File exceeds allowed maximum file size.","message":"File size it too large. Maximum file size: {size}","http":400,"tags":["File Management"]},"FileContentInvalid":{"description":"The content of the file is invalid.","message":"File content is invalid.","http":400,"tags":["File Management","Processes"]},"FileLocked":{"description":"The file is locked by a running job or another process.","message":"File \'{file}\' is locked.","http":400,"tags":["File Management"]},"ProcessGraphNotFound":{"description":"The requested process graph does not exist.","message":"Process graph does not exist.","http":404,"tags":["Process Graph Management"]},"ProcessGraphMissing":{"description":null,"message":"No valid process graph specified.","http":400,"tags":["Process Graph Management","Job Management","Secondary Services Management"]},"VariableValueMissing":{"description":null,"message":"No value specified for process graph variable \'{variable_id}\'.","http":400,"tags":["Process Graph Management","Job Management","Secondary Services Management"]},"VariableDefaultValueTypeInvalid":{"description":null,"message":"The default value for the process graph variable \'{variable_id}\' is not of type \'{type}\'.","http":400,"tags":["Process Graph Management","Job Management"]},"VariableIdInvalid":{"description":null,"message":"A specified variable ID is not valid.","http":400,"tags":["Process Graph Management","Job Management"]},"VariableTypeInvalid":{"description":null,"message":"The data type for the process graph variable \'{variable_id}\' is invalid. Must be one of: string, boolean, number, array or object.","http":400,"tags":["Process Graph Management","Job Management"]},"ProcessUnsupported":{"description":null,"message":"Process \'{process}\' is not supported.","http":400,"tags":["Processes"]},"ProcessArgumentUnsupported":{"description":null,"message":"Process \'{process}\' does not support argument \'{argument}\'.","http":400,"tags":["Processes"]},"ProcessArgumentInvalid":{"description":null,"message":"The argument \'{argument}\' in process \'{process}\' is invalid: {reason}","http":400,"tags":["Processes"]},"ProcessArgumentRequired":{"description":null,"message":"Process \'{process}\' requires argument \'{argument}\'.","http":400,"tags":["Processes"]},"ProcessArgumentsMissing":{"description":null,"message":"Process \'{process}\' requires at least {min_parameters} parameters.","http":400,"tags":["Processes"]},"JobNotFound":{"description":"The requested job does not exist.","message":"The job does not exist.","http":404,"tags":["Job Management","Processes"]},"FormatUnsupported":{"description":null,"message":"Output format not supported.","http":400,"tags":["Job Management"]},"FormatArgumentUnsupported":{"description":null,"message":"Output format argument \'{argument}\' is not supported.","http":400,"tags":["Job Management"]},"FormatArgumentInvalid":{"description":null,"message":"The output format argument \'{argument}\' is invalid: {reason}","http":400,"tags":["Job Management"]},"FormatUnsuitable":{"description":null,"message":"Data can\'t be transformed into the requested output format.","http":400,"tags":["Job Management"]},"JobLocked":{"description":"The job is currently locked due to a running batch computation and can\'t be modified meanwhile.","message":"Job is locked due to a queued or running batch computation.","http":400,"tags":["Job Management"]},"JobNotFinished":{"description":null,"message":"Job has not finished computing the results yet. Please try again later.","http":400,"tags":["Job Management"]},"JobNotStarted":{"description":"Job has not been queued or started yet or was canceled and not restarted by the user.","message":"Job hasn\'t been started yet.","http":400,"tags":["Job Management"]},"PaymentRequired":{"description":"The budget required to fulfil the request are insufficient.","message":"Payment required.","http":402,"tags":["Job Management","Secondary Services Management"]},"BillingPlanInvalid":{"description":"The billing plan is not on the list of available plans.","message":"The billing plan is not valid.","http":400,"tags":["Job Management","Secondary Services Management"]},"AuthenticationRequired":{"description":"The client did not provide any authentication details for a resource requiring authentication or the provided authentication details are not correct.","message":"Unauthorized.","http":401,"tags":["Account Management"]},"AuthenticationSchemeInvalid":{"description":"Invalid authentication scheme (e.g. Bearer).","message":"Authentication method not supported.","http":403,"tags":["Account Management"]},"TokenInvalid":{"description":"Authorization token invalid or expired.","message":"Session has expired.","http":403,"tags":["Account Management"]},"CredentialsInvalid":{"description":null,"message":"Credentials are not correct.","http":403,"tags":["Account Management"]},"ServiceNotFound":{"description":"The requested secondary service does not exist.","message":"Service does not exist.","http":404,"tags":["Secondary Services Management"]},"ServiceUnsupported":{"description":null,"message":"Secondary service type is not supported.","http":400,"tags":["Secondary Services Management"]},"ServiceArgumentUnsupported":{"description":null,"message":"Secondary service argument \'{argument}\' is not supported.","http":400,"tags":["Secondary Services Management"]},"ServiceArgumentInvalid":{"description":null,"message":"The secondary service argument \'{argument}\' is invalid: {reason}","http":400,"tags":["Secondary Services Management"]},"ServiceArgumentRequired":{"description":null,"message":"Required secondary service argument \'{argument}\' is missing.","http":400,"tags":["Secondary Services Management"]}}')},118:function(e){e.exports=JSON.parse('{"Internal":{"description":"An internal server error with a proprietary message.","message":"Server error: {message}","http":500,"tags":["General"]},"NotFound":{"description":"To be used if the requested resource does not exist. Note: There are specialized errors for missing jobs (JobNotFound), files (FileNotFound), etc. Unsupported endpoints MAY send an \'FeatureUnsupported\' (501) error.","message":"Resource not found.","http":404,"tags":["General"]},"FeatureUnsupported":{"description":"The back-end responds with this error whenever an endpoint is specified in the openEO API, but is not supported.","message":"Feature not supported.","http":501,"tags":["General"]},"InfrastructureMaintenance":{"description":"Service is currently not available, but the infrastructure is currently undergoing maintenance work.","message":"Service is not available at the moment due to maintenance work. Please try again later.","http":503,"tags":["General"]},"InfrastructureBusy":{"description":"Service is generally available, but the infrastructure can\'t handle it at the moment as too many requests are processed.","message":"Service is not available at the moment due to overloading. Please try again later.","http":503,"tags":["General"]},"RequestTimeout":{"description":"The request took too long and timed out.","message":"Request timed out.","http":408,"tags":["General","Job Management"]},"CRSInvalid":{"description":"Invalid or unsupported CRS specified.","message":"CRS \'{crs}\' is invalid.","http":400,"tags":["Processes"]},"CoordinateOutOfBounds":{"description":null,"message":"Coordinate is out of bounds.","http":400,"tags":["Processes"]},"BudgetInvalid":{"description":"The budget is too low as it is either smaller than or equal to 0 or below the costs.","message":"The budget is too low.","http":400,"tags":["Job Management","Secondary Services Management"]},"NoDataForUpdate":{"description":"For PATCH requests: No valid data specified at all.","message":"No valid data specified to be updated.","http":400,"tags":["Job Management","Secondary Services Management","Process Graph Management"]},"PropertyNotEditable":{"description":"For PATCH requests: The specified parameter can\'t be updated. It is read-only.","message":"Property \'{property}\' is read-only.","http":400,"tags":["Job Management","Secondary Services Management","Process Graph Management"]},"CollectionNotFound":{"description":"The requested collection does not exist.","message":"Collection \'{identifier}\' does not exist.","http":404,"tags":["EO Data Discovery","Processes"]},"StorageFailure":{"description":"Server couldn\'t store file(s) due to server-side reasons.","message":"Unable to store file(s).","http":500,"tags":["File Management","Job Management"]},"StorageQuotaExceeded":{"description":"The storage quota has been exceeded by the user.","message":"Insufficient Storage.","http":400,"tags":["File Management","Job Management"]},"FileNotFound":{"description":"The requested file does not exist.","message":"File \'{file}\' does not exist.","http":404,"tags":["File Management","Processes"]},"FilePathInvalid":{"description":"The specified path is invalid or not accessible. Path could contain invalid characters, point to an existing folder or a location outside of the user folder.","message":"File path is invalid.","http":400,"tags":["File Management"]},"FileOperationUnsupported":{"description":"The specified path is not a file and the operation is only supported for files. Path is likely a directory.","message":"Operation is only supported for files.","http":400,"tags":["File Management"]},"ContentTypeInvalid":{"description":"The specified media (MIME) type used in the Content-Type header is not allowed.","message":"The media type is not supported. Allowed: {types}","http":400,"tags":["File Management","General"]},"FileTypeInvalid":{"description":"File format, file extension or media (MIME) type is not allowed.","message":"File type not allowed. Allowed file types: {types}","http":400,"tags":["File Management"]},"FileSizeExceeded":{"description":"File exceeds allowed maximum file size.","message":"File size it too large. Maximum file size: {size}","http":400,"tags":["File Management"]},"FileContentInvalid":{"description":"The content of the file is invalid.","message":"File content is invalid.","http":400,"tags":["File Management","Processes"]},"FileLocked":{"description":"The file is locked by a running job or another process.","message":"File \'{file}\' is locked.","http":400,"tags":["File Management"]},"ProcessGraphNotFound":{"description":"The requested user-defined process does not exist.","message":"User-defined process \'{identifier}\' does not exist.","http":404,"tags":["Process Graph Management"]},"ProcessGraphMissing":{"description":null,"message":"No valid process graph specified.","http":400,"tags":["Process Graph Management","Job Management","Secondary Services Management"]},"ProcessGraphComplexity":{"description":"The process graph is too complex for synchronous processing and likely to time out. Please use a batch job instead.","message":"The process graph is too complex for for synchronous processing. Please use a batch job instead.","http":400,"tags":["Job Management"]},"ProcessUnsupported":{"description":null,"message":"Process \'{process}\' is not supported.","http":400,"tags":["Processes"]},"ProcessArgumentUnsupported":{"description":null,"message":"Process \'{process}\' does not support argument \'{argument}\'.","http":400,"tags":["Processes"]},"ProcessArgumentInvalid":{"description":null,"message":"The argument \'{argument}\' in process \'{process}\' is invalid: {reason}","http":400,"tags":["Processes"]},"ProcessArgumentRequired":{"description":null,"message":"Process \'{process}\' requires argument \'{argument}\'.","http":400,"tags":["Processes"]},"ProcessArgumentsMissing":{"description":null,"message":"Process \'{process}\' requires at least {min_parameters} parameters.","http":400,"tags":["Processes"]},"JobNotFound":{"description":"The requested job does not exist.","message":"The job \'{identifier}\' does not exist.","http":404,"tags":["Job Management","Processes"]},"FormatUnsupported":{"description":null,"message":"Output format not supported.","http":400,"tags":["Job Management"]},"FormatArgumentUnsupported":{"description":null,"message":"Output format argument \'{argument}\' is not supported.","http":400,"tags":["Job Management"]},"FormatArgumentInvalid":{"description":null,"message":"The output format argument \'{argument}\' is invalid: {reason}","http":400,"tags":["Job Management"]},"FormatUnsuitable":{"description":null,"message":"Data can\'t be transformed into the requested output format.","http":400,"tags":["Job Management"]},"JobLocked":{"description":"The job is currently locked due to a running batch computation and can\'t be modified meanwhile.","message":"Job is locked due to a queued or running batch computation.","http":400,"tags":["Job Management"]},"JobNotFinished":{"description":null,"message":"Job has not finished computing the results yet. Please try again later.","http":400,"tags":["Job Management"]},"JobNotStarted":{"description":"Job has not been queued or started yet or was canceled and not restarted by the user.","message":"Job hasn\'t been started yet.","http":400,"tags":["Job Management"]},"PaymentRequired":{"description":"The budget required to fulfil the request are insufficient.","message":"Payment required.","http":402,"tags":["Job Management","Secondary Services Management"]},"BillingPlanInvalid":{"description":"The billing plan is not on the list of available plans.","message":"The billing plan is not valid.","http":400,"tags":["Job Management","Secondary Services Management"]},"AuthenticationRequired":{"description":"The client did not provide any authentication details for a resource requiring authentication or the provided authentication details are not correct.","message":"Unauthorized.","http":401,"tags":["Account Management"]},"AuthenticationSchemeInvalid":{"description":"Invalid authentication scheme (e.g. Bearer).","message":"Authentication method not supported.","http":403,"tags":["Account Management"]},"TokenInvalid":{"description":"Authorization token invalid or expired.","message":"Session has expired.","http":403,"tags":["Account Management"]},"CredentialsInvalid":{"description":null,"message":"Credentials are not correct.","http":403,"tags":["Account Management"]},"ServiceNotFound":{"description":"The requested secondary service does not exist.","message":"Service \'{identifier}\' does not exist.","http":404,"tags":["Secondary Services Management"]},"ServiceUnsupported":{"description":null,"message":"Secondary service type is not supported.","http":400,"tags":["Secondary Services Management"]},"ServiceArgumentUnsupported":{"description":null,"message":"Secondary service argument \'{argument}\' is not supported.","http":400,"tags":["Secondary Services Management"]},"ServiceArgumentInvalid":{"description":null,"message":"The secondary service argument \'{argument}\' is invalid: {reason}","http":400,"tags":["Secondary Services Management"]},"ServiceArgumentRequired":{"description":null,"message":"Required secondary service argument \'{argument}\' is missing.","http":400,"tags":["Secondary Services Management"]}}')},17:function(e,t,s){"use strict";var a={computed:{unreleased(){return null!==this.version.apiTag.match(/(draft|alpha|beta)/i)},versioned(){return null!==this.$page.regularPath.match(/\/documentation\/([^\/]+)\//)},otherVersions(){return this.$site.themeConfig.versions.map((e,t)=>{var s=this.$site.themeConfig.versions[this.versionIndex],a=this.$site.themeConfig.versions[t];return e.regularPath=this.$page.regularPath.replace(s.path,a.path),e}).filter((e,t)=>t!==this.versionIndex&&this.$site.pages.findIndex(t=>t.regularPath==e.regularPath)>=0)},version(){return this.$site.themeConfig.versions[this.versionIndex]},defaultVersion(){return this.$site.themeConfig.versions[this.$site.themeConfig.defaultVersion]},versionIndex(){const{themeConfig:e}=this.$site;var t=this.$page.regularPath.match(/\/documentation\/([^\/]+)\//);if(Array.isArray(t)&&"string"==typeof t[1])for(var s in e.versions)if(e.versions[s].folder===t[1])return parseInt(s);return 0}}},n=s(0),r=Object(n.a)(a,void 0,void 0,!1,null,null,null);t.a=r.exports},179:function(e,t,s){"use strict";s.r(t);var a={name:"ErrorCodes",mixins:[s(17).a],props:["file"],data:()=>({errors:{},tags:[]}),filters:{slugify:e=>e.toLowerCase().replace(" ","_")},created(){var e;try{e=!function(){var e=new Error("Cannot find module 'undefined'");throw e.code="MODULE_NOT_FOUND",e}()}catch(t){e=s(116)("./"+this.version.folder+"/developers/api/errors.json")}for(var t in e){var a=e[t];for(var n in a.description||(a.description=""),a.message||console.log("No message specified for error: "+t),a.http||console.log("No HTTP status code specified for error: "+t),a.tags&&Array.isArray(a.tags)&&0!==a.tags.length||console.warn("No tags specified for error: "+t),a.tags){var r=a.tags[n];void 0===this.errors[r]&&(this.errors[r]={}),this.errors[r][t]=a}}this.tags=Object.keys(this.errors),this.tags.sort()}},n=s(0),r=Object(n.a)(a,(function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{staticClass:"error-codes"},[s("p",[e._v("The whole table of error codes is available as "),s("a",{attrs:{href:"/documentation/"+e.version.folder+"/api/errors.json",target:"_blank"}},[e._v("JSON file")]),e._v(", which can be used by implementors to automatically generate error responses.")]),e._v(" "),e._l(e.tags,(function(t){return s("div",[s("a",{attrs:{name:e._f("slugify")(t)}}),e._v(" "),s("h2",[e._v(e._s(t))]),e._v(" "),s("table",[e._m(0,!0),e._v(" "),e._l(e.errors[t],(function(t,a){return s("tr",[s("td",[e._v(e._s(a))]),e._v(" "),s("td",[e._v(e._s(t.description))]),e._v(" "),s("td",[e._v(e._s(t.message))]),e._v(" "),s("td",[e._v(e._s(t.http))])])}))],2)])}))],2)}),[function(){var e=this.$createElement,t=this._self._c||e;return t("tr",[t("th",{attrs:{width:"20%"}},[this._v("openEO Error Code")]),this._v(" "),t("th",{attrs:{width:"40%"}},[this._v("Description")]),this._v(" "),t("th",{attrs:{width:"35%"}},[this._v("Example Message")]),this._v(" "),t("th",{attrs:{width:"5%"}},[this._v("HTTP Status Code")])])}],!1,null,null,null);t.default=r.exports}}]);