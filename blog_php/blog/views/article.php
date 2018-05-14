<!DOCTYPE html>
<html lang="ru">
<head>
    <meta charset="UTF-8">
    <title>Александр Евсеев. Блог обо всем.</title>
    <link rel="stylesheet" href="views/style.css">
</head>
<body class="Site">
<div class="container Site-content"">
    <h1>Александр Евсеев. Блог обо всём.</h1>
    <main >
        <div class="article">
            <h3>
                <?= $article['title'] ?>
            </h3>
            <em>Опубликовано: <?= $article['date'] ?></em>
            <p><?= $article['content'] ?></p>
        </div>
        <div class="article"><a href="/">Вернуться на главную.</a></div>
    </main>
</div>
<footer>
    <p> Блог обо всем <br> Copyright &copy; 2018</p>
</footer>
</body>
</html>