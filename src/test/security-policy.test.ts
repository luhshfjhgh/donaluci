import { describe,it,expect } from 'vitest';
import { frameDocument,isAllowedPayload,isLocalLabAllowed,TEST_PAYLOAD } from '@/lib/lab-policy';
import { commentSchema } from '@/lib/local-store';
describe('local lab isolation',()=>{
 it('never enables lab in production, even on localhost',()=>{expect(isLocalLabAllowed(false,'localhost')).toBe(false);});
 it('rejects every public or lookalike hostname',()=>{for(const host of ['example.com','localhost.evil.test','attackerlocalhost','id-preview.lovable.app'])expect(isLocalLabAllowed(true,host)).toBe(false);});
 it('allows exact local loopback in development',()=>{for(const host of ['localhost','127.0.0.1','[::1]'])expect(isLocalLabAllowed(true,host)).toBe(true);});
 it('executes only the fixed harmless example, never arbitrary input',()=>{expect(isAllowedPayload(TEST_PAYLOAD)).toBe(true);expect(frameDocument('<script>fetch("https://example.com")</script>','12345678-1234-1234-1234-123456789abc')).toBe('');});
 it('blocks external communication and forms inside the frame',()=>{const doc=frameDocument(TEST_PAYLOAD,'12345678-1234-1234-1234-123456789abc');expect(doc).toContain("connect-src 'none'");expect(doc).toContain("default-src 'none'");expect(doc).toContain("form-action 'none'");expect(doc).not.toContain('allow-same-origin');});
 it('rejects forged nonce injection',()=>{expect(frameDocument(TEST_PAYLOAD,'x\" onload=alert(1)')).toBe('');});
});
describe('safe comments',()=>{
 it('validates names and comment length',()=>{expect(commentSchema.safeParse({name:'a',text:'ok'}).success).toBe(false);expect(commentSchema.safeParse({name:'Visitante',text:'x'.repeat(1001)}).success).toBe(false);expect(commentSchema.safeParse({name:'Visitante',text:'Comentário de teste'}).success).toBe(true);});
});
