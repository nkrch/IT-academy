<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>VALID_FORM</title>
    <link rel="stylesheet" href="style.css">
</head>


<body>
    <form name="form" action="https://fe.it-academy.by/TestForm.php">

        <div>
            <label for="developers">Разработчики:</label>
            <input type="text" name="developers" onblur="main(0,event)"  onclick="this.focus()">
            <p></p>
        </div>

        <div>
            <label for="siteName">Название сайта:</label>
            <input type="text" name="siteName" onblur="main(1,event)" >
            <p></p>
        </div>




        <div>
            <label for="siteURL">URL сайта:</label>
            <input type="url" name="siteURL" onblur="main(2,event)" >
            <p></p>
        </div>

        <div>
            <label for="dateOfStart">Дата запуска сайта:</label>
            <input type="date" name="dateOfStart" onblur="main(3,event)" >
            <p></p>
        </div>

        <div>
            <label for="siteVisites">Посетителей в сутки:</label>
            <input type="number" name="siteVisites" onblur="main(4,event)" >
            <p></p>
        </div>

        <div>
            <label for="email">E-mail для связи:</label>
            <input type="text" name="email" onblur="main(5,event)" >
            <p></p>
        </div>

        <div>
            <label for="category">Рубрика каталога:</label>
            <select name="category" id="category" onblur="main(6,event)" 
                onclick="main(6,event)">
                <option value="1" onblur="main(6,event)"  onclick="main(6,event)">здоровье
                </option>
                <option value="2" onblur="main(6,event)"  onclick="main(6,event)">домашний уют
                </option>
                <option value="3" onblur="main(6,event)"  onclick="main(6,event)" selected>
                    бытовая техника</option>
            </select>
            <p></p>
        </div>

        <div>
            <label for="radio">Размещение:</label>

            <input type="radio" name="radio"  onclick="checked=true;mistake(7,'')" onblur="main(8,event)" class="radio" id="free" value="1">бесплатное</input>
            <input type="radio" name="radio"  onclick="checked=true;mistake(7,'')" onblur="main(8,event)" class="radio" id="pay" value="1">платное</input>
            <input type="radio" name="radio"  onclick="checked=true;mistake(7,'')" onblur="main(8,event)" class="radio" id="vip" value="1">VIP</input>
            <p id="radio"></p>
        </div>


        <label for="responces">Разрешить отзывы:</label>
        <input type="checkbox" name="responces" id="checkbox" onclick="main(8,event)">
        <br><br>
        <label for="description">Описание сайта:</label>
        <br><textarea name="description" cols="30" rows="10"  id="a" onblur="main(7,event);main(9,event)"></textarea>
        <p></p>
        <br><button type="submit" id="submit" onclick="validation()">Опубликовать</button>
    </form>
</body>
<script src="script.js"></script>

</html>
