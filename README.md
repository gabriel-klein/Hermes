# Hermes

O projeto foi construído com [Angular 10](https://angular.io/), [Firebase](https://firebase.google.com/) e [Pharser](https://phaser.io/).
A arquiterura do projeto foi baseada nesse [Documento](https://slides.com/loiane/angular-10-dicas-organizacao-modulos-vscode-boas-praticas).

# Desenvolvedores

[Gabriel Klein](https://github.com/gabriel-klein)
Iago Rodrigues
[João Victor Cruz](https://github.com/VictorBras)
Jônatas Sales
Pedro Valente

# Configurações Iniciais
### Pré Requisitos
[Node LTS](https://nodejs.org/en/)
[Angular Cli](https://angular.io/guide/setup-local)
Ou
[Docker](https://www.docker.com/get-started)

### Rodando pela primeira vez
#### Linux
##### Com Docker
`make init`
##### Sem Docker
`npm i`
`ng serve`

#### Windows (Não tenho Certeza)
##### Com Docker
No **PowerShell**
`docker-compose build`
`docker-compose run --rm app npm i`
`docker-compose up -d`
`docker-compose logs -f app` **~(Opcional)~**

##### Sem Docker
`npm i`
`ng serve`

# Subindo a Aplicação
### No Linux
##### Com Docker
`make up`

##### Sem Docker
`ng serve`

### No Windows
##### Com Docker
No **PowerShell**
`docker-compose up -d`
`docker-compose logs -f app` **~(Opcional)~**

##### Sem Docker
`ng serve`

# Derrubando a Aplicação
### No Linux
##### Com Docker
`make down`

##### Sem Docker
`crtl + c`

### No Windows
##### Com Docker
`docker-compose down`

##### Sem Docker
`crtl + c`