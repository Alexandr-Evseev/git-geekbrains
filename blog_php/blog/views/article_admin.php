<!DOCTYPE html>
<html lang="ru">
<head>
    <meta charset="UTF-8">
    <title>Александр Евсеев. Блог обо всём.</title>
    <link rel="stylesheet" href="../views/style.css">
</head>
<body class="Site">
<div class="container Site-content">
    <h1>Создание или редактирование статьи.</h1>
    <div class="article"><a href="../admin">Вернуться в админку.</a></div>
    <div class="article">
        <form method="post" action="index.php?action=<?= $_GET['action'] ?>&id=<?= $_GET['id'] ?>">
            <input type="text" name="title" value="<?= $article['title'] ?>" class="form-item"
                   placeholder="Название статьи." autofocus required><br>
            <input type="date" name="date" value="<?= $article['date'] ?>" class="form-item" required><br>
            <textarea class="form-item" name="content" rows="15" placeholder="Содержание статьи."
                      required><?= $article['content'] ?></textarea><br>
            <input type="submit" value="Сохранить" class="btn">
        </form>
    </div>
</div>
<footer>
    <p> Блог обо всем <br> Copyright &copy; 2018</p>
</footer>
</body>
</html>

