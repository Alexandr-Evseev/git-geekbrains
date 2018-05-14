<!DOCTYPE html>
<html lang="ru">
<head>
    <meta charset="UTF-8">
    <title>Александр Евсеев. Блог обо всем.</title>
    <link rel="stylesheet" href="../views/style.css">
</head>
<body class="Site">
<div class="container Site-content">
    <h1>Александр Евсеев. Блог обо всем.</h1>
    <div class="article">
        <div> <a href="index.php?action=add&id=0">Добавить статью</a> <a href="../">Вернуться на главную.</a></div>
        <table class="admin-table">
            <tr class="string">
                <th>Дата</th>
                <th>Заголовок</th>
                <th></th>
                <th></th>
            </tr>
            <?php foreach ($articles as $a): ?>
                <tr>
                    <td><?= $a['date'] ?></td>
                    <td><?= $a['title'] ?></td>
                    <td><a href="index.php?action=edit&id=<?= $a['id'] ?>">Редактировать</a></td>
                    <td><a href="index.php?action=delete&id=<?= $a['id'] ?>">Удалить</a></td>
                </tr>
            <?php endforeach ?>
        </table>
    </div>
</div>
<footer>
    <p> Блог обо всем <br> Copyright &copy; 2018</p>
</footer>
</body>
</html>

