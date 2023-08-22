function T() {
  this.log1 = function () {
    console.log(this);
  };
}

const logger = new T();

T.prototype.log2 = () => console.log(this);
logger.log3 = () => console.log(this);
T.prototype.log4 = function () {
  console.log(this);
};
logger.log5 = function () {
  console.log(this);
};

logger.log1();
logger.log2();
logger.log3();
logger.log4();
logger.log5();
