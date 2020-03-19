/* Ao converter o nosso ts para js, inicialmente deu um erro, porque, quando temos uma propriedade
    que possuí o "export default", durante a conversao para js o 'tsc' nao cosegue encontrar isso,
    e acaba tentando realizar a importação desse "default".    
    Diante disso, por isso utilizamos essa nomenclatura ao importar a lib.

    import * as  express from 'express';

    Em tese existe outra forma de fazer isso definindo alguma configurações do 'tsc'. 
    Confira la em notes ou no próprio file.
*/
import * as  express from 'express';


const app = express();

app.get('/', (req, res) => {
    return res.send('Hello World');
});

app.listen(3333);
