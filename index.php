<!DOCTYPE html>
<html lang="fr">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>StockManager - Accueil</title>
    <link rel="stylesheet" href="style.css">
</head>

<body>

<header class="header">
    <h2>Stock<span>Manager</span></h2>
    <div class="header-right">Gestion de stock</div>
</header>

<nav class="navbar">
    <a href="index.php" class="active">Accueil</a>
    <a href="produits.html">Produits</a>
    <a href="connexion.html">Connexion</a>
</nav>

<main class="container">

    <section class="welcome">
        <h1>Tableau de bord</h1>
        <p>Bienvenue dans votre espace de gestion de stock.</p>
    </section>

    <section class="stats">

        <div class="stat-card blue">
            <h3>Nombre de produits</h3>
            <p>120</p>
        </div>

        <div class="stat-card green">
            <h3>Catégories</h3>
            <p>8</p>
        </div>

        <div class="stat-card orange">
            <h3>Stock faible</h3>
            <p>5</p>
        </div>

        <div class="stat-card purple">
            <h3>Fournisseurs</h3>
            <p>12</p>
        </div>

    </section>

    <section class="quick-actions">

        <h2>Actions rapides</h2>

        <div class="buttons">
            <a href="produits.html" class="btn">
                Gestion des produits
            </a>

            <a href="connexion.html" class="btn">
                Se connecter
            </a>
        </div>

    </section>

</main>

</body>
</html>