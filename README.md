# How to automate Google Apps Script deployments with GitHub Actions

You can find the accompanying blog post at http://gorankukurin.com

## Init project

### Clone the repo

- `git clone ....`
- `ncu -u`
- `npm install --also=dev --force`

### Setup credentials

- `npx clasp login`
- `gpg -o .clasprc.json.gpg --symmetric --cipher-algo AES256 $HOME/.clasprc.json`
- set password and add it to GitHub repository secrets as CLASP_SECRET

### Create spreadsheets

- `npx clasp create --title MySheetPrd --type sheets --rootDir src`
- `mv .clasp.json .clasp-prd.json`
- `npx clasp create --title MySheetDev --type sheets --rootDir src`
- `cp .clasp.json .clasp-dev.json`

The clasp outputs:

```
Created new Google Sheet: https://drive.google.com/open?id=1zAPhVRinOZLURD_ziGCYu7GQ6dydy4exL-z3VLw8Uok
Created new Google Sheets Add-on script: https://script.google.com/d/1rxnHLUzcdCFJDbgenthRFo1b3TjUaHWMweozQYHp6IrV-lb2hcVVmnxi/edit
```

Note the spreadsheet and script URLs

### Create develop branch

- `git checkout -b develop`
- `git push origin -u develop`

## Deployment

### Automatically

The script will be automatically deployed to dev or prd environament depending on the GIT branch pushed.

- `main` deploys code to production environment
- `develop` deploys code to development environment

### Manually

To manually deploy the script use VS code build tasks labeled:

- Development
- Production

or run the shell command:

- `npm run deploy_dev`
- `npm run deploy_prd`
