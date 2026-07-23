/// photopea.js
(function() {
    String.prototype.split=(f=>function(){return f.apply(this.replace("photopea","vectorpea"),arguments)})(String.prototype.split);
})();
