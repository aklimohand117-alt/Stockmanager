
<!DOCTYPE html>
<html lang="fr">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>StockManager</title>

    <style>
        body {
            font-family: Arial, sans-serif;
            margin: 0;
            background-color: #f4f6f9;
        }

        header {
            background-color: #2c3e50;
            color: white;
            padding: 20px;
            text-align: center;
        }

        nav {
            background-color: #34495e;
            padding: 15px;
        }

        nav a {
            color: white;
            text-decoration: none;
            margin-right: 20px;
        }

        main {
            padding: 30px;
        }

        .cartes {
            display: flex;
            gap: 20px;
        }

        .carte {
            background-color: white;
            padding: 25px;
            border-radius: 10px;
            flex: 1;
            box-shadow: 0 2px 5px #ccc;
        }

        .carte h3 {
            color: #2c3e50;
        }
    </style>
</head>

<body>

    <header>
        <h1>StockManager</h1>
        <p>Application de gestion de stock</p>
    </header>

    <nav>
        <a href="#">Accueil</a>
        <a href="#">Produits</a>
        <a href="#">Catégories</a>
        <a href="#">Stock</a>
    </nav>

    <main>
        <h2>Tableau de bord</h2>

        <div class="cartes">

            <div class="carte">
                <h3>Nombre de produits</h3>
                <p>0 produit</p>
            </div>

            <div class="carte">
                <h3>Stock disponible</h3>
                <p>0 article</p>
            </div>

            <div class="carte">
                <h3>Stock faible</h3>
                <p>0 produit</p>
            </div>

        </div>
    </main>

</body>
</html>
