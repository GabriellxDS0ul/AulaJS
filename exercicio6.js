document.write("<h1> Aula 01 - Exercício 6</h1>")
    
        var qtd = Number(prompt("Digite a quantidade:"));
        var preco = Number(prompt("Digite o preço:"));


        var subtotal = qtd * preco;
        var desconto = subtotal * 0.10;
        var total = subtotal - desconto;

        alert(
            "Subtotal: R$ " + subtotal + "\n" +
            "Desconto (10%): R$ " + desconto + "\n" +
            "Valor Final: R$ " + total
        );
