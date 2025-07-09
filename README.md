# Issue
When using runInDurableObject, the id passed into the constructor of the Durable Object does not contain the name that is used to create the id.

This worked in `miniflare@4.20250617.5`.  It does not work at `miniflare@4.20250705.0`.

# Reproduction steps

```
rm -rf node_modules
pnpm install
pnpm test
```

Note that `package.good.json` passes.
