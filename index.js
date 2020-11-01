class Cliente
{
    nombreCliente;
    dniCliente;
    rutCliente;
}

class CuentaCorriente
{
    numero;
    saldo;
    agencia;
}

const cliente1 = new Cliente();

cliente1.nombreCliente = "José";
cliente1.dniCliente = "13232";

const cuentaCorriente1 = new CuentaCorriente();

cuentaCorriente1.numero = "232323";
cuentaCorriente1.saldo = 5000;

const cliente2 = new Cliente();

cliente2.nombreCliente = "Leonardo";
cliente2.dniCliente = "13804050";

const cuentaCorriente2 = new CuentaCorriente();

cuentaCorriente2.numero = "123434343";
cuentaCorriente2.saldo = 1000;

console.log(cliente1);
console.log(cuentaCorriente1);
console.log(cliente2);
console.log(cuentaCorriente2);
