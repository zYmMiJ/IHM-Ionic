# IHM-Ionic

## Sommaire

- [Installation](https://github.com/zYmMiJ/IHM-Ionic/blob/master/README.md#installation-dionic)

  - [Installation d'un projet](https://github.com/zYmMiJ/IHM-Ionic/blob/master/README.md#installation)
  
  - [Création d'un projet](https://github.com/zYmMiJ/IHM-Ionic/blob/master/README.md#cr%C3%A9ation-dun-projet)

  - [Lancement d'un projet](https://github.com/zYmMiJ/IHM-Ionic/blob/master/README.md#lancement-du-projet)

- [Création d'une application](https://github.com/zYmMiJ/IHM-Ionic/blob/master/README.md#cr%C3%A9ation-dune-application-todolist)
  
  - [Création d'une page](https://github.com/zYmMiJ/IHM-Ionic/blob/master/README.md#g%C3%A9n%C3%A9ration-dune-page)

  - [Création d'un composant](https://github.com/zYmMiJ/IHM-Ionic/blob/master/README.md#g%C3%A9n%C3%A9ration-dune-page)
  
  - [Création d'un module](https://github.com/zYmMiJ/IHM-Ionic/blob/master/README.md#cr%C3%A9ation-dun-module)
  
     - [Partage de composant](https://github.com/zYmMiJ/IHM-Ionic/blob/master/README.md#partage-de-composant)
     
  - [Création d'un service](https://github.com/zYmMiJ/IHM-Ionic/blob/master/README.md#cr%C3%A9ation-dun-service)

  - [Rooting](https://github.com/zYmMiJ/IHM-Ionic/blob/master/README.md#routing)
  
  - [Theming](https://github.com/zYmMiJ/IHM-Ionic/blob/master/README.md#theming)

- [Build](https://github.com/zYmMiJ/IHM-Ionic/blob/master/README.md#build)

  - [Android](https://github.com/zYmMiJ/IHM-Ionic/blob/master/README.md#android)
  
  
## Require

__Pour l'installation :__
  - [x] NodeJS
  - [x] npm
  
__Environnement de développement :__

__Languages et/ou compétences__
  - [x] Angular
  - [x] HTML
  - [x] CSS
  
## Installation d'Ionic

Le lien d'installation vers le site d'ionic : https://ionicframework.com/docs/installation/cli

### Installation
```
npm install -g ionic
```
### Création d'un projet

Les différent templates de projet de base :

![IONIC Project](ionic_project.PNG)

Nous choississons de créer un projet vide pour ce tutoriel.
```
ionic start tuto
```
Pour notre tutoriel nous choisirons de construire un projet angular et le template blank

![Choice Project](choice_project.PNG)

### Lancement du projet

On lance le projet :

```
cd tuto
ionic serve
```

On obtient :

![Blank Project](blank_project.PNG)


## Création d'une application (todolist)

### Création d'une page

On génère une page :

```
ionic generate page pages/tasks/create
```

Il est conseillé de regrouper ces pages dans un seul et même dossier.

![Create Page](create_pages.PNG)

Pour cela on déplacera notre page Home dans pages comme ci-dessus.

Puis pour la suite de ce tuto nous créons  d'autres pages:

```

``` 

### Création d'un composant

Un composant est blablabal

Notre application comportera différents composants :

```
ionic generate component components/side-menu
```

On obtient en finale ceci :

![Composants](all_composants_files.PNG)

Pour la suite de ce tuto nous créons d'autres components :

```
ionic generate component components/tasks
```

### Création d'un module

#### Partage de composant

### Création d'un service

### Création d'une modal Page

Création d'une page modal :

```
ionic g page example-modal
```

Ajouter dans `app.module.ts` dans imports :

`import { ExampleModalPageModule } from './example-modal/example-modal.module';`

et dans @NgModule imports : []

`ExampleModalPageModule`

### Routing

Pour IONIC 5:Angular il est conseiller de d'utliser Angular rooter : https://angular.io/guide/router.

La définition des routes se fait dans le fichier `app-rooting.module.ts` .

Lors de la création d'une page une route est créer automatiquement, comme ici pour notre pagre list/create :

![Create Page](routes.PNG)

Pour accéder à notre page il suffit d'ajouter à une balise :

![Create Page](route_balise.PNG)

### TodoList

Une fois toutes nos pages,modules,services,composants créés, la structure de notre projet est celle-ci:

![Project Structure](project_structure.PNG)

#### Navigation vers une autre page

Dans `pages/home/home.page.html`, vous ajouterez ce bouton :

```html
<ion-content>
  
  <!-- Bouton ajout d'une nouvelle tache -->
  <ion-fab vertical="bottom" horizontal="end" slot="fixed">
    <ion-fab-button size="small" color="primary" routerLink="/createTask" routerLinkActive="active">
      <ion-icon name="add"></ion-icon>
    </ion-fab-button> 
  </ion-fab>
  
</ion-content>
```

Ce bouton doit vous renvoyer vers la page `create\tasks`, cependant cela ne fonctionne pas il faut modifier la route par défaut.

Modifiez cette route dans `app-rooting.module.ts` comme ceci :

![Route Modification](route_modification.PNG)

Ionic fournit aussi des outils de navigation comme le retour arrière.

Remplacer le code html présent dans `tasks/create/create.page.html` par : 

```html
<!-- Back button with custom text and icon -->
<ion-header>
  <ion-toolbar> 
    <ion-title>Création de tâches</ion-title>
    <ion-buttons slot="start">
      <ion-back-button
          [text]="buttonText"
          [icon]="buttonIcon">
      </ion-back-button>
    </ion-buttons>
  </ion-toolbar>
</ion-header>
```
Vous obtenez ceci :

![Back](route_back.PNG)

#### Modal Page

Pour accéder à notre modal page créer auparavant, nous créons un bouton qui lancera cette modal Page.

Copiez ce code dans le content de `pages/homt/home.html` :

```html
  <ion-button expand="block" (click)="openModal()">Créer Liste</ion-button>
```

Comme vous pouvez le voir on déclare un event click qui lancera une fonction openModal().

les imports 
### Theming


### Composants Graphiques

Ionic comporte une multitude de composant de base que vous pouvez retrouver ici : https://ionicframework.com/docs/components . Cette doc renseigne aussi les différentes propriétés, events, methods, personnalisation css etc... et un exemple d'usage d'un composant.

Dans le cadre de notre application nous allons tout d'abord créer un bouton pour accéder à la page création d'une liste.

Nous utiliserons un "floationg button action" (ion-fab).





I think you should use an
`<addr>` element here instead.

```javascript
function fancyAlert(arg) {
  if(arg) {
    $.facebox({div:'#foo'})
  }
}
```


- [x] @mentions, #refs, [links](), **formatting**, and <del>tags</del> supported
- [x] list syntax required (any unordered or ordered list supported)
- [x] this is a complete item
- [ ] this is an incomplete item


First Header | Second Header
------------ | -------------
Content from cell 1 | Content from cell 2
Content in the first column | Content in the second column

## Build

### Android
