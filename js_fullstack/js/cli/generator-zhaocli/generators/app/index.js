var Generator = require('yeoman-generator');

module.exports = class extends Generator {
   // The name `constructor` is important here
   constructor(args, opts) {
    // Calling the super constructor is important so our generator is correctly set up
    super(args, opts);

    // Next, add your custom code
    this.option('babel'); // This method adds support for a `--babel` flag
  }

  method1() {
    this.log('method 1 just ran');
  }

  method2() {
    this.log('method 2 just ran');
  }
  async prompting() {
    // inquirer
    const answers = await this.prompt([
      {
        type: "input",
        name: "name",
        message: "Your project name",
        default: this.appname // Default to current folder name
      },
      {
        type: "confirm",
        name: "cool",
        message: "use lodash ??"
      },
      {
        type: 'list',
        name:'installTool',
        message: '请选择你要使用的包管理器',
        choices: ['npm','yarn']
      },
    ]);
    this.appname = answers.name
    this.cool = answers.cool
    this.installTool = answers.installTool
    this.log("app name", answers.name);
    this.log("cool feature", answers.cool);
    this.log("installTool", answers.installTool);
 
  }
  install() {
    // 这里会通过 yarn 或者 npm 自动安装 package.json里面的依赖
    this.installTool === 'yarn'? this.yarnInstall() : this.npmInstall()
    // 如何用 cnpm install
  }

  writing() {
    this.fs.copyTpl(
      this.templatePath('./'),
      this.destinationPath('./'),
      { 
        appname: this.appname, 
        cool: this.cool, 
        installTool: this.installTool, 
      }
    );
    if(this.cool) {
      this.fs.extendJSON(
        this.destinationPath('package.json'),
        {
          dependencies: {
            lodash: "^4.17.15"
          }
        }
      )
    }
  }
 


};