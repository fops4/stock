Voici un exemple de fichier `README.md` pour ton projet de gestion des stocks avec MongoDB, Express, et Node.js. Ce fichier fournit une description du projet, explique la structure de la base de données, les routes API CRUD, les étapes d'installation et l'utilisation des données Mockaroo.

```markdown
# Projet de Gestion de Stock

## But du projet

Ce projet a pour objectif de fournir une application de gestion de stock simple pour une PME. L'application permet de gérer les produits en stock, avec la possibilité de créer, lire, mettre à jour et supprimer des articles. L'interface est construite avec React pour le front-end et le back-end utilise Node.js avec Express.js et MongoDB pour la gestion des données.

## Structure de la base de données

La base de données utilise MongoDB et contient une collection principale appelée `Products`. Chaque produit a les champs suivants :

- **_id** (ObjectId) : Identifiant unique du produit.
- **name** (String) : Nom du produit.
- **category** (String) : Catégorie du produit.
- **quantity** (Number) : Quantité en stock du produit.
- **price** (Number) : Prix du produit en FCFA.
- **supplier** (String) : Fournisseur du produit.
- **inStock** (Boolean) : Indique si le produit est actuellement en stock.

Voici un exemple de document dans la collection `Products` :

```json
{
  "_id": "605c72ef1532071b2b9f13e8",
  "name": "Produit A",
  "category": "Électronique",
  "quantity": 50,
  "price": 10000,
  "supplier": "Fournisseur XYZ",
  "inStock": true
}
```

## Routes/API CRUD

### 1. Créer un produit

**Route** : `POST /api/products`  
**Description** : Ajoute un nouveau produit dans le stock.  
**Corps de la requête** :
```json
{
  "name": "Produit A",
  "category": "Électronique",
  "quantity": 50,
  "price": 10000,
  "supplier": "Fournisseur XYZ",
  "inStock": true
}
```
**Réponse** :
```json
{
  "message": "Produit ajouté avec succès",
  "product": { ... }
}
```

### 2. Lire tous les produits

**Route** : `GET /api/products`  
**Description** : Récupère la liste de tous les produits en stock.  
**Réponse** :
```json
[
  {
    "_id": "605c72ef1532071b2b9f13e8",
    "name": "Produit A",
    "category": "Électronique",
    "quantity": 50,
    "price": 10000,
    "supplier": "Fournisseur XYZ",
    "inStock": true
  },
  ...
]
```

### 3. Lire un produit par ID

**Route** : `GET /api/products/:id`  
**Description** : Récupère un produit spécifique par son ID.  
**Réponse** :
```json
{
  "_id": "605c72ef1532071b2b9f13e8",
  "name": "Produit A",
  "category": "Électronique",
  "quantity": 50,
  "price": 10000,
  "supplier": "Fournisseur XYZ",
  "inStock": true
}
```

### 4. Mettre à jour un produit

**Route** : `PUT /api/products/:id`  
**Description** : Met à jour les informations d'un produit par son ID.  
**Corps de la requête** :
```json
{
  "name": "Produit A modifié",
  "category": "Électronique",
  "quantity": 45,
  "price": 9500,
  "supplier": "Fournisseur XYZ",
  "inStock": true
}
```
**Réponse** :
```json
{
  "message": "Produit mis à jour avec succès",
  "product": { ... }
}
```

### 5. Supprimer un produit

**Route** : `DELETE /api/products/:id`  
**Description** : Supprime un produit par son ID.  
**Réponse** :
```json
{
  "message": "Produit supprimé avec succès"
}
```

## Étapes d'installation

### Prérequis
- Node.js installé
- MongoDB installé ou accès à une instance MongoDB

### Installation du backend

1. Clonez le dépôt Git :
   ```bash
   git clone https://github.com/votre-utilisateur/projet-gestion-stock.git
   ```

2. Accédez au répertoire du projet :
   ```bash
   cd projet-gestion-stock
   ```

3. Installez les dépendances :
   ```bash
   npm install
   ```

4. Créez un fichier `.env` à la racine du projet et configurez les variables d'environnement (comme la connexion à MongoDB) :
   ```env
   MONGO_URI=mongodb://localhost:27017/stock
   PORT=5000
   ```

5. Démarrez l'application :
   ```bash
   npm start
   ```

L'application sera accessible sur `http://localhost:5000`.

### Installation du frontend

1. Accédez au répertoire du frontend :
   ```bash
   cd frontend
   ```

2. Installez les dépendances :
   ```bash
   npm install
   ```

3. Démarrez l'application React :
   ```bash
   npm start
   ```

L'interface sera accessible sur `http://localhost:3000`.

## Données Mockaroo

Pour générer des données fictives, nous avons utilisé Mockaroo. Voici les étapes pour générer et importer des données :

1. Rendez-vous sur [Mockaroo](https://mockaroo.com/).
2. Créez un schéma de données avec les champs suivants :
   - **name** (String)
   - **category** (String)
   - **quantity** (Number)
   - **price** (Number)
   - **supplier** (String)
   - **inStock** (Boolean)
3. Générez entre 30 et 50 documents au format JSON.
4. Téléchargez le fichier généré et importez-le dans MongoDB en utilisant MongoDB Compass ou la commande suivante dans MongoDB Shell :
   ```bash
   mongoimport --db stock --collection products --file products.json --jsonArray
   ```

---

## Conclusion

Ce projet permet de gérer les produits en stock avec une interface simple et un backend robuste utilisant MongoDB et Express.js. Il offre des fonctionnalités CRUD essentielles et peut être facilement étendu avec de nouvelles fonctionnalités comme la gestion des utilisateurs, des rapports, etc.
```

### Points clés à vérifier et compléter :
- **Variables d'environnement :** Assure-toi de définir la chaîne de connexion MongoDB (`MONGO_URI`) dans le fichier `.env`.
- **Données Mockaroo :** Génère des données réalistes et assure-toi qu'elles respectent la structure définie dans la base de données.