export const TEST_PAYLOAD = '<script>alert("Teste XSS inofensivo")</script>';
export function isLocalLabAllowed(dev:boolean,hostname:string) {return dev && ['localhost','127.0.0.1','[::1]'].includes(hostname);}
export function isAllowedPayload(value:string) {return value === TEST_PAYLOAD;}
export function frameDocument(payload:string,nonce:string) {
 if (!isAllowedPayload(payload) || !/^[a-f0-9-]{36}$/.test(nonce)) return '';
 return `<!doctype html><html><head><meta http-equiv="Content-Security-Policy" content="default-src 'none'; script-src 'nonce-${nonce}'; connect-src 'none'; img-src 'none'; style-src 'none'; form-action 'none'; base-uri 'none'"></head><body><p>Visitante fictício visualizou o comentário armazenado.</p><script nonce="${nonce}">window.alert = function(message) {document.querySelector('p').textContent = 'Alerta inofensivo: ' + message; parent.postMessage({type:'doce-aroma-xss',nonce:'${nonce}'},'*');};</script><script nonce="${nonce}">alert("Teste XSS inofensivo")</script></body></html>`;
}
