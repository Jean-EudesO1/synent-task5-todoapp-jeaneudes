# Rapport de projet — Tâche 5
## Application web de gestion de tâches

**Auteur :** Jean-Eudes Aka  
**Programme :** Stage de développement web — Synent Technologies  
**Date :** 14 octobre 2026  
**Dépôt :** https://github.com/Jean-EudesO1/synent-task5-todoapp-jeaneudes

## 1. Présentation

La tâche 5 consiste à développer une application de gestion de tâches en HTML, CSS et JavaScript. L’utilisateur doit pouvoir ajouter une tâche, la supprimer et la marquer comme terminée. Les données doivent rester disponibles après une actualisation grâce à localStorage.

Le projet réalisé propose une interface permettant d’effectuer ces opérations dans le navigateur. Il fonctionne sans backend : les tâches sont conservées localement sur l’appareil utilisé.

## 2. Objectifs

- Afficher une liste de tâches dans une interface claire.
- Ajouter une tâche à partir d’un champ de saisie.
- Supprimer une tâche devenue inutile.
- Identifier les tâches terminées.
- Enregistrer les tâches et leur état avec localStorage.
- Restaurer la liste au chargement de la page.
- Proposer une mise en page adaptée aux différentes largeurs d’écran et améliorer l’utilisation au clavier.

## 3. Technologies et outils

| Technologie ou outil | Rôle |
|---|---|
| HTML | Structure de l’interface, champ de saisie et commandes |
| CSS | Présentation, alignement et adaptation mobile |
| JavaScript | Gestion des actions et mise à jour de la liste |
| localStorage | Conservation locale des tâches et de leur état |
| JSON | Sérialisation et lecture des données stockées |
| VS Code | Édition du projet |
| PowerShell | Exécution des commandes Git |
| Git et GitHub | Historique et publication du code |

## 4. Structure du projet

```text
synent-task5-todoapp-jeaneudes/
  index.html
  style.css
  script.js
  README.md
  docs/
    rapport-task5.md
    screenshots/
```

index.html définit les éléments de la page. style.css contient leur mise en forme. script.js gère les événements, la liste et sa sauvegarde. Le README explique le projet et son lancement. Le dossier docs rassemble le rapport et les captures de soumission.

## 5. Fonctionnalités

### 5.1 Ajout d’une tâche

L’utilisateur saisit le texte d’une tâche et déclenche l’ajout. JavaScript traite la saisie, actualise les données de la liste et affiche la nouvelle tâche. La sauvegarde locale est mise à jour pour conserver cette modification.

La validation de la saisie doit éviter l’ajout d’un élément sans contenu. Ce comportement fait partie des contrôles manuels utiles avant la soumission.

### 5.2 Suppression

Une commande permet de retirer une tâche de la liste. La suppression doit être répercutée à la fois dans l’affichage et dans les données sauvegardées, afin que la tâche ne réapparaisse pas après actualisation.

### 5.3 Tâche terminée

L’utilisateur peut marquer une tâche comme terminée. L’interface distingue cet état de celui d’une tâche à effectuer. L’état de complétion est également conservé avec les données de la tâche.

La capture nommée **« tâche terminée »** illustre cette fonctionnalité. Son nom doit être conservé lorsqu’elle est référencée dans la documentation, avec son extension réelle.

### 5.4 Persistance avec localStorage

localStorage stocke des valeurs sous forme de texte. L’application convertit donc les données en JSON pour les enregistrer, puis les lit pour reconstruire la liste au chargement.

Le principe du parcours est le suivant :

1. Charger les tâches enregistrées lors de l’ouverture de la page.
2. Afficher la liste restaurée.
3. Traiter les ajouts, suppressions et changements d’état.
4. Enregistrer la liste mise à jour après ces actions.

La capture **« essai localstorage »** a été préparée pour illustrer l’essai de conservation des tâches après actualisation.

La sauvegarde est propre au navigateur et à l’origine du site utilisée. Elle ne constitue ni un compte utilisateur ni une synchronisation sur plusieurs appareils. Un effacement des données du navigateur peut supprimer la liste.

## 6. Notions mises en pratique

Le développement a permis de travailler la structure HTML, les associations label/input, les styles CSS, les événements JavaScript et la manipulation du DOM.

La gestion de la liste repose sur des données que l’interface représente à l’écran. Chaque action modifie ces données, actualise l’affichage et déclenche la sauvegarde. Cette organisation permet de maintenir une cohérence entre l’état visible et l’état conservé.

Le projet comprend également une amélioration de l’accessibilité et de la navigation au clavier, enregistrée dans un commit dédié. Ces aspects doivent être vérifiés sur les commandes effectivement présentes dans la version finale.

## 7. Méthodologie de développement

Le projet a été réalisé progressivement dans VS Code, avec des explications et des essais à chaque étape : structure HTML, présentation CSS, ajout des interactions, sauvegarde locale, documentation puis accessibilité.

| Étape | Résultat | Commit |
|---|---|---|
| 1 | Structure HTML de la liste | `24dacf5` |
| 2 | Style CSS et adaptation mobile | `b880eee` |
| 3 | Gestion des tâches et sauvegarde locale | `e05f22e` |
| 4 | Documentation et instructions de lancement | `3168178` |
| 5 | Accessibilité et navigation au clavier | `a4d0c61` |

Les cinq commits ont été confirmés dans le terminal. Le push initial de la branche main vers GitHub a également été confirmé. Le rapport et les captures constituent un complément de soumission qui peut être enregistré dans un nouveau commit.

## 8. Tests et résultats

Pendant le développement, l’auteur a confirmé que l’ajout fonctionnait, puis que l’application fonctionnait après l’intégration de localStorage. La préparation de la soumission comprend des captures de l’interface, de l’ajout, de la suppression, d’une tâche terminée et d’un essai localStorage.

| Fonction | Élément de validation disponible |
|---|---|
| Affichage de la liste | Capture de l’interface avec tâches |
| Ajout | Essai confirmé pendant le développement et capture préparée |
| Suppression | Capture montrant la liste après suppression |
| Complétion | Capture « tâche terminée » |
| Persistance | Fonctionnement confirmé après intégration et capture « essai localstorage » |
| Historique Git | Cinq commits et push initial confirmés |

Les captures sont préparées par l’auteur ; elles ne sont pas intégrées dans ce document et n’ont pas fait l’objet d’une inspection indépendante pour sa rédaction. Aucun résultat de tests automatisés n’a été communiqué.

### Contrôles complémentaires

Avant la livraison, vérifier qu’une saisie vide n’ajoute aucune tâche, que la suppression reste effective après actualisation et que l’état terminé est restauré. Tester aussi les commandes au clavier et l’affichage dans une fenêtre étroite. Ces vérifications ne sont pas annoncées comme déjà toutes effectuées.

## 9. Lancement local

1. Ouvrir le dossier du projet dans VS Code.
2. Ouvrir index.html dans le navigateur ou utiliser un serveur local si disponible.
3. Saisir une tâche et effectuer les actions proposées.
4. Actualiser la page en conservant la même adresse pour vérifier la restauration.

L’utilisation d’un serveur local et d’une adresse stable facilite les essais de stockage. Les fichiers HTML, CSS et JavaScript doivent conserver leurs chemins relatifs.

## 10. Captures de soumission

Les cinq vues préparées sont :

- Interface avec tâches.
- Ajout d’une tâche.
- Suppression d’une tâche.
- **« tâche terminée »**.
- **« essai localstorage »**.

Les fichiers sont à placer dans docs/screenshots/. Les noms choisis par l’auteur peuvent être conservés. Les liens du README doivent utiliser les noms et extensions exacts ; les intitulés ci-dessus ne supposent pas une extension particulière.

## 11. Limites et perspectives

L’application ne prévoit pas de connexion à un compte, de base de données distante ou de synchronisation entre appareils. Les données restent locales et peuvent être perdues si le stockage du navigateur est effacé.

Des évolutions possibles sont le filtrage des tâches selon leur état, l’édition de leur texte, des dates d’échéance et l’export des données. Une synchronisation distante demanderait une architecture supplémentaire avec un backend et une gestion des comptes. Ces possibilités ne sont pas présentées comme des fonctionnalités réalisées.

## 12. Conclusion

La tâche 5 a permis de développer une application web de gestion de tâches avec ajout, suppression, complétion et sauvegarde locale. Le projet met en pratique les interactions JavaScript et la persistance avec localStorage dans une interface HTML/CSS.

Le code, les cinq commits initiaux, le README, ce rapport et les captures préparées rendent le travail présentable et traçable. Les limites de stockage local sont explicitement identifiées, et les contrôles complémentaires permettent de finaliser la validation avant soumission.
