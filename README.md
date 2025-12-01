# Info

For å bruke denne må du ha node lastet ned.

Se [node sin hjemside](https://nodejs.org/en/download) for installasjonsinstruksjoner

Når node er installert, så kan du starte prosjektet med

```bash
npm install
```

Dette vil installere filene som vil gjøre denne siden kjørbar

```bash
npm install -g wrangler
```

Derretter vil vi skrive inn kommandoen under

```bash
npm run dev
```

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

Vi har ingen funksjoner som må testes utenfor nettsiden i seg selv.
Alle funksjonene har en oppgave på nettsiden
Alle tokens er i .env og config filene er wrangler.jasonc og drizzle.config.ts

Det finnes allerede en konto som heter admin@admin.no og passordet er admin
Noe av informasjonen er kun placeholder for å vise hvordan det ser ut.
Det er mulig å lage egen konto hvis det ønskes.
