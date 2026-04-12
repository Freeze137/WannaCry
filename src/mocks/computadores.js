const ComputadorAlvo = require('../domain/ComputadorAlvo');
const DadosArquivo = require('../domain/DadosArquivo');

function criarArquivos(prefixo) {
  return [
    new DadosArquivo({ id: `${prefixo}-1`, caminho: `C:/docs/${prefixo}/financeiro.xlsx`, tipo: 'xlsx', acessoUsuario: true }),
    new DadosArquivo({ id: `${prefixo}-2`, caminho: `C:/docs/${prefixo}/contrato.docx`, tipo: 'docx', acessoUsuario: true }),
    new DadosArquivo({ id: `${prefixo}-3`, caminho: `C:/docs/${prefixo}/backup.txt`, tipo: 'txt', acessoUsuario: false })
  ];
}

module.exports = [
  new ComputadorAlvo({
    id: 'HOST-01',
    ip: '192.168.0.10',
    so: 'Windows 7',
    patchAplicado: false,
    smbv1Ativo: true,
    arquivos: criarArquivos('host01')
  }),
  new ComputadorAlvo({
    id: 'HOST-02',
    ip: '192.168.0.11',
    so: 'Windows 10',
    patchAplicado: true,
    smbv1Ativo: false,
    arquivos: criarArquivos('host02')
  }),
  new ComputadorAlvo({
    id: 'HOST-03',
    ip: '192.168.0.12',
    so: 'Windows Server 2012',
    patchAplicado: false,
    smbv1Ativo: true,
    arquivos: criarArquivos('host03')
  })
];
