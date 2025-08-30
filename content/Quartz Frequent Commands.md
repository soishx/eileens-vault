---
publish:
created: 2025-08-23T22:56:09.099+08:00
modified: 2025-08-30T09:42:17.1717+08:00
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

---

https://chatgpt.com/c/68abb86c-8788-8321-8ffa-c4b8f2c51549
ChatGPT 说 npx quartz sync 的作用是把 github 上的远程修改拉下来，这我不需要。以后的发布和备份流程可以完全用 git：
```powershell
git add .
git commit -m "更新笔记"
git push
```
误删了本地文件可以使用这个命令把文件拉回来（第一次用时输入用户名`soishx`和 token`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`）：
```powershell
git clone https://github.com/soishx/eileens-vault.git
```
---
让 GPT 写了个脚本，以后在 bash 里输入一下命令运行，一键备份发布：
```bash
./update.sh
```

## Theme
ChatGPT-refined:

```ts
      colors: {

        lightMode: {

          light: "#FFF2E0",

          lightgray: "#E5E5E5",

          gray: "#B8B8B8",

          darkgray: "#4E4E4E",

          dark: "#2B2B2B",

          secondary: "#8B6FE8",

          tertiary: "#A2AADB",

          highlight: "rgba(139, 111, 232, 0.25)",

          textHighlight: "#D7E0FF",

        },

        darkMode: {

          light: "#2E2B50",

          lightgray: "#4A4759",

          gray: "#767676",

          darkgray: "#D4D4D4",

          dark: "#FFFFFF",

          secondary: "#A3C7D6",

          tertiary: "#7B5FA9",

          highlight: "rgba(163, 199, 214, 0.25)",

          textHighlight: "#D0B3FF",

        },

      },

```

ChatGPT designed:

