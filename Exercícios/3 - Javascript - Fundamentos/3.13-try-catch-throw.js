function tratarErro(erro) {
    //throw - lançar erro
    //throw new Error('...');
    //throw 10;
    //throw 'msg';
    //throw false;
    throw {
        nome: erro.name
    }
}
function imprimirNome(obj) {
    try {
        console.log(obj.name.toUpperCase() + '!!!');
    }
    catch(e) {
        tratarErro(e);
    }
    finally {
        //executado sempre, mesmo se ocorreu erro ou não
        console.log('executou mesmo assim!');
    }
}

const obj = { nome: 'Roberto' };
imprimirNome(obj);