# Info

For å bruke denne må du ha node lastet ned.

Se [node sin hjemside](https://nodejs.org/en/download) for installasjonsinstruksjoner

Når node er installert, så kan du starte prosjektet med å åpne terminalen og skrive i rootmappa

```bash
npm install
```

Dette vil installere filene som vil gjøre denne siden kjørbar

Derretter laster vi ned wrangler for å kunne opperere databasen

```bash
npm install -g wrangler
```

Derretter skriver man wrangler login for å få tilgang til databasen som er på cloudflare !NB er viktig for at det skal funke

```bash
wrangler login
```

Da vil du få et popup vindu av cloudflare. Bruk hvilken som helst konto for oAuth
Da trykker du på allow så kan du lukke vinduet

Derretter vil vi skrive inn kommandoen under

```bash
wrangler d1 migrations apply premcompanion-db
```

Da får du opp en promt som spør om du vil migrere
Da trykker du på Y for YES

for at din lokale database skal få tilgang til tabellen

Derretter skriver man npm run dev for å starte dev hosten

```bash
npm run dev
```

Første npm run dev vil feile hvis du er for sjapp
men andre npm run dev vil fungere og gi riktig utfall

Dette vil starte serveren og gi mulighet til å åpne nettsiden
Hvis du vil lukke serveren eller restarte pga. teknisk problem så kan du bruke kontrollene under

```
CTRL + C
```

Dette vil resette terminalen slik at du kan kjøre oppstarten igjen.

Med pnpm:

```bash
pnpm install
pnpm run dev
```

Med npm:

```bash
npm install
npm run dev
```

//

Vi har ingen funksjoner som må testes utenfor nettsiden i seg selv bortsett fra databasen
Alle tokens er i .env og config filene er wrangler.jasonc og drizzle.config.ts

På profile siden vil du få tilgang til å logge deg inn, men problemet er at du ikke har en bruker
så da kan du trykke på "Create User" for å kunne lage deg en bruker. (DEN SKAL IKKE VÆRE EKTE- bruk falsk mail og passord f. eks test@test.no, passord: test1)

Noe av informasjonen er kun placeholder for å vise hvordan det ser ut.

Databasen på cloudflare vil bli slettet etter eksamensvurdering er tilbake.
