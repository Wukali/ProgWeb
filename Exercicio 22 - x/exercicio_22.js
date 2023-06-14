document.addEventListener("DOMContentLoaded", function() {
    var btnCalcular = document.getElementById("btnCalcular");
    btnCalcular.addEventListener("click", calcularBonus);
});

function calcularBonus() {
    var totalFaturacao = parseFloat(document.getElementById("totalFaturacao").value);
    var desempenho = parseFloat(document.getElementById("desempenho").value);
    var totalFuncionarios = parseInt(document.getElementById("totalFuncionarios").value);

    var bonus = totalFaturacao * desempenho / totalFuncionarios;

    var bonusElement = document.getElementById("bonus");
    bonusElement.textContent = bonus.toFixed(2);
}
