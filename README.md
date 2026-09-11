# Interpretation Mirror

Interaktywny eksperyment pokazujący, jak łatwo nadać jednoznaczne znaczenie niejednoznacznemu zachowaniu.

Użytkownik przechodzi przez pięć krótkich sytuacji, odsłania możliwe wyjaśnienia i wskazuje najbardziej prawdopodobne. Aplikacja obserwuje wyłącznie przebieg tej sesji, a następnie tworzy trzy sprzeczne, ale możliwe interpretacje tych samych działań. Każdy wynik pokazuje zarówno wspierające go dane, jak i granice wnioskowania.

## Dlaczego powstał ten projekt

Interpretation Mirror nie próbuje opisywać osobowości użytkownika. Pokazuje różnicę między zarejestrowanym sygnałem a znaczeniem, które ktoś mu przypisuje.

Projekt eksploruje proces:

> sygnał → możliwe interpretacje → dowody → ograniczenia → ostrożny wniosek

To połączenie interaktywnej narracji, UX, psychologii decyzji i projektowania systemów, które nie ukrywają własnej niepewności.

## Najważniejsze funkcje

- pięć niejednoznacznych mikrosytuacji,
- rejestrowanie kolejności otwierania odpowiedzi,
- pomiar czasu do podjęcia decyzji,
- wykrywanie zmian wyboru,
- trzy alternatywne interpretacje z dowodami i ograniczeniami,
- zapis sesji wyłącznie w pamięci przeglądarki,
- eksport przebiegu do pliku JSON,
- reset i pełne usunięcie lokalnych danych,
- obsługa klawiatury,
- responsywny interfejs,
- respektowanie ustawienia ograniczenia animacji.

## Prywatność

Aplikacja nie korzysta z serwera, kont użytkowników ani zewnętrznej analityki. Przebieg eksperymentu pozostaje w `localStorage` na urządzeniu użytkownika. Dane mogą zostać wyeksportowane lub usunięte bezpośrednio z interfejsu.

## Technologie

- TypeScript
- React
- Vite
- CSS
- Local Storage API
- SVG

## Uruchomienie lokalne

Wymagany jest Node.js 20 lub nowszy.

```bash
npm install
npm run dev
```

Na Windowsie z blokadą skryptów PowerShell można użyć:

```powershell
npm.cmd install
npm.cmd run dev
```

Aplikacja będzie dostępna pod adresem pokazanym w terminalu, domyślnie `http://localhost:5173`.

## Kontrola przed publikacją

```bash
npm run check
npm run build
```

Polecenie `build` tworzy wersję produkcyjną w katalogu `dist`.

## Publikacja w GitHub Pages

Projekt zawiera gotowy workflow GitHub Actions. Po wysłaniu plików na gałąź
`main` przejdź do **Settings → Pages** i w sekcji **Build and deployment** ustaw
**Source: GitHub Actions**. Kolejne aktualizacje będą publikowane automatycznie.

## Struktura

```text
src/
├── App.tsx       # sceny, stan sesji i logika interpretacji
├── main.tsx      # punkt wejścia aplikacji
└── styles.css    # wygląd i responsywność
public/
└── favicon.svg
```

## Ważne zastrzeżenie

Interpretation Mirror jest eksperymentem dotyczącym granic wnioskowania. Nie jest narzędziem diagnostycznym, testem osobowości ani podstawą do podejmowania decyzji psychologicznych.

## Licencja

Kod jest dostępny na licencji MIT.
