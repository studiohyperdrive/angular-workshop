# DesignosourceTest

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 1.7.3.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `-prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).

---------------------------------------

# Workshop

## Warm up

### Installeer de angular CLI

```
npm install -g @angular/cli
```

### Genereer een nieuwe angular app met de CLI

```
$ ng new designo-demo
```

of met sass support

```
$ ng new designo-demo --style=scss
```

### Overloop folder structuur

### Gebruik boostrap en een icon set _(optioneel)_

Voeg deze twee CDN's toe aan `./src/index.html` 

```
<!-- BOOTRAP CDN -->
<link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0-beta.3/css/bootstrap.min.css" integrity="sha384-Zug+QiDoJOrZ5t4lssLdxGhVrurbmBWopoEl+M6BdEfwnCJZtKxi1KgxUyJq13dy" crossorigin="anonymous">

<!-- ICON SET -->
<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/open-iconic/1.1.1/font/css/open-iconic-bootstrap.css">
```

### Bewerk `./src/app/app.component.html`

Verwijder de huidige content en voeg toe:

```
<div class="container">
    <h2>Hello world!</h2>
</div>
```

### Maak een angular component

Maak een folder `./src/app/components/hello-world`

Maak in die folder twee bestanden:

De template: `hello-world.component.html`

```
<h2>Hello world!</h2>
```

De controller: `hello-world.component.ts`

```
import { Component } from '@angular/core';

@Component({
  selector: 'app-hello-world',
  templateUrl: './hello-world.component.html',
})
export class HelloWorldComponent {
}
```

### Voeg de component toe aan de angular app

Update het bestand `./src/app/app.module` 

importeer `HelloWorldComponent`

```
import { HelloWorldComponent } from './hello-world/hello-world.component';
```

en voeg toe aan de `declarations` property van de module.

```
imports: [
    HelloWorldComponent
]
```

### Verzamel de componenten in één `index.ts` file _(optioneel)_

### Gebruik de component in `./src/app/app.component.html`

```
<app-hello-world></app-hello-world>
```

### Maak de component generiek

Voeg een input toe

```
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-hello-world',
  templateUrl: './hello-world.component.html',
})
export class HelloWorldComponent {
  @Input() public name = 'designo';
}
```

Gebruik het input field

```
<app-hello-world name="Jasper"></app-hello-world>
```

## Routing

### Maak twee pages (home en todo)

Maak twee folders:  
-  `./src/app/pages/home`
-  `./src/app/pages/todo`

Met telkens twee bestanden:  
- `[name].page.html`
- `[name].page.ts`

> Zelfde principe als bij components, let op afspraak om pages te suffixen met `page` ipv `component`. 

### Voeg pages toe aan aan de angular app 

### Maak een routing module

Maak een bestand `./src/app/app-routing.module`

```
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { HomePageComponent } from './pages/home/home.page';
import { TodoPageComponent } from './pages/todo/todo.page';

const ROUTES = [
  { path: 'home', component: HomePageComponent },
  // Todo: Add todo page
];

@NgModule({
  imports: [
    RouterModule.forRoot(ROUTES)
  ],
  exports: [RouterModule],
})
export class AppRoutingModule { }
```

_(optional)_ Add redirect for root

```
{ path: '', redirectTo: 'home', pathMatch: 'full' },
```

Import `AppRoutingModule` in `AppModule`

### Voeg een router-outlet toe aan `./src/app/app.component.html`

Verplaats de huidige content naar de `home.page` template en voeg toe:

```
<div class="container">
    <router-outlet></router-outlet>
</div>
```

### Maak een nav component

Maak met behulp van de `routerLink` en de `routerLinkActive` directives een navigation component met volgende template:

```
<header class="mt-3 mb-3">
  <nav class="navbar navbar-expand-lg navbar-light bg-light">
    <div class="collapse navbar-collapse">
      <ul class="navbar-nav">
        <li class="nav-item" >
          <a class="nav-link">Home</a>
        </li>
        <li class="nav-item">
          <a class="nav-link">Todo</a>
        </li>
      </ul>
    </div>
  </nav>
</header>
```

Gebruik de nav component in `./src/app/app.component.html`

## Todo list

### Maak een todo-list component

Pas de stappen uit de vorige componenten opnieuw toe voor deze component. 

Gebruik een `public` property `items` en een function `toggleItem()`

Gebruik volgende template en vul verder aan:

```
<div class="card" style="width: 18rem;">
  <div class="card-header">
    <!-- title -->
  </div>
  <ul class="list-group list-group-flush">
    <!-- Loop over the items -->
    <!-- Add click event -->
    <li class="list-group-item">
      <!-- done: oi-check || !done: oi-x -->
      <span class="icon oi"></span>
      <span class="description"><!-- description --></span>
    </li>
  </ul>
</div>
``` 

> Gebruik `*ngFor`, `[ngClass]` en `(click)`

### Voeg styling toe specifiek voor de component _(optioneel)_

Gebruik scss:
```
.list-group-item {
  .icon {
    padding-right: 10px;
  }
}
```

Voeg toe aan component: 
```
styleUrls: ['./todo-list.component.scss'],
```

> Deze styling zal enkel beschikbaar zijn voor deze component

### Render de component op de `todo.page`

### Maak een "domme component" van de todo-list (stap 1)

Vervang de `items` property door een `input` en definier de dummy items op de page component. 

### Maak gebruik van een interface _(optioneel)_

Maak een bestand `./src/app/app.interaces.ts` en definier een `TodoItem` interface. Gebruik de interface waar nodig. 

> Best practise: probeer overal properties en parameters te typen met basic types of custom interfaces.

### Maak een "domme component" van de todo-list (stap 2)

Gebruik een `Output` en een `EventEmitter` voor het togglen van een todo-item. 

### Gebruik een service voor het beheren van de todo-items

Maak een folder `services` op het zelfde niveau als `pages` en `components` en voeg een `todo-items` service toe.

Expose twee functies in de service `fetchAll` en update die de lijst van `items` kunnen manipuleren of exposen. 

> Tip: bewaar de todoItems `by id`. Zo zijn ze makkelijker te bewerken. 

Provide de service in de angular app en gebruik op de todo-list pagina.
