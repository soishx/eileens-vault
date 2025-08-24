---
publish:
created: 2025-08-23T22:56:09.099+08:00
modified: 2025-08-24T13:58:09.099+08:00
---
Github sync:
```
npx quartz sync --no-pull
```

Run:
```
npx quartz build --serve
```

git remote set-url origin https://soishx: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@github.com/soishx/eileens-vault.git

git remote -v

repo roken:
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

mklink /D "C:\Users\gxs82\quartz\content\AP CSA" "C:\Users\gxs82\Documents\SFLS_AIP\eileens-vault\AP CSA"

mklink /D "C:\Users\gxs82\quartz\content\AP Physics" "C:\Users\gxs82\Documents\SFLS_AIP\eileens-vault\AP Physics"

Get-ChildItem "C:\Users\gxs82\quartz\content" -Directory | Where-Object { $_.Attributes -band [IO.FileAttributes]::ReparsePoint } | Remove-Item -Force

mklink /D "C:\Users\gxs82\quartz\content\Images" "C:\Users\gxs82\Documents\SFLS_AIP\eileens-vault\Images"

