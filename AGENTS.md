<!-- LOVABLE:BEGIN -->
> [!IMPORTANT]
> This project is connected to [Lovable](https://lovable.dev). Avoid rewriting
> published git history — force pushing, or rebasing/amending/squashing commits
> that are already pushed — as it rewrites history on Lovable's side and the
> user will likely lose their project history.
>
> Commits you push to the connected branch sync back to Lovable and show up in
> the editor, so keep the branch in a working state.
<!-- LOVABLE:END -->

## Project rules
- Vulnerable XSS lab lives only in `src/components/local-lab.tsx`, loaded via a `import.meta.env.DEV` guarded dynamic import plus an exact loopback hostname check (`src/lib/lab-policy.ts`); why: it must never ship to public hosting.
- Lab payload is a single fixed harmless alert run inside a `sandbox="allow-scripts"` iframe with a strict CSP; never interpolate user input into it.
- Public comments render as React text only (never `dangerouslySetInnerHTML`); data persists in browser IndexedDB (`src/lib/local-store.ts`) because a local database was requested.
- Visual styling is hand-written semantic CSS in `src/styles.css` using oklch tokens; product photos are crops in `src/assets`.
