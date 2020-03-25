const {AutoLanguageClient} = require('atom-languageclient');

class ExampleLanguageClient extends AutoLanguageClient {
  getGrammarScopes () { return [ 'source.js', 'javascript' ] }
  getLanguageName () { return 'JavaScript' }
  getServerName () { return 'Language Server Example' }

  getConnectionType() { return 'ipc' }

  startServerProcess () {
    const path = `${__dirname.replace("atom/lib", "")}vscode/server/out/server.js`;
    const startServer = require.resolve(path);
    return super.spawnChildNode([startServer, '--node-ipc'], {
      stdio: [null, null, null, 'ipc']
    })
  }
}

module.exports = new ExampleLanguageClient()
