<!DOCTYPE html>
<html lang="ru">
<head>
    <meta charset="UTF-8">
    <title>Александр Евсеев. Блог обо всем.</title>
    <link rel="stylesheet" href="views/style.css">
</head>
<body class="Site">
<div class="container Site-content">
    <h1>Александр Евсеев. Заготовка, блог на PHP, с админкой.</h1>
    <!-- Кнопку перехода в админку можно скрыть или удалить, и переходить по URL */admin -->
    <div class="article"><a href="admin">Панель администратора</a></div>
    <main>
        <?php foreach ($articles as $a): ?>
            <div class="article">
                <h3><a href="article.php?id=<?= $a['id'] ?>"><?= $a['title'] ?></a></h3>
                <em>Опубликовано: <?= $a['date'] ?></em>
                <p><?= articles_intro($a['content']) ?></p>
            </div>
        <?php endforeach ?>
    </main>
</div>
<footer>
    <p> Блог обо всем <br> Copyright &copy; 2018</p>
</footer>
</body>
</html>

