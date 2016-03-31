// Generated by CoffeeScript 1.10.0
var AuthorizeResponse, Response, exports,
  extend = function(child, parent) { for (var key in parent) { if (hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; },
  hasProp = {}.hasOwnProperty;

Response = require('./response');

AuthorizeResponse = (function(superClass) {
  var UsageReport;

  extend(AuthorizeResponse, superClass);

  UsageReport = (function() {
    function UsageReport(options) {
      this.metric = options.metric;
      this.period = options.period;
      this.current_value = options.current_value;
      this.max_value = options.max_value;
      this.period_start = options.period_start;
      this.period_end = options.period_end;
    }

    UsageReport.prototype.period_start = function() {};

    UsageReport.prototype.period_end = function() {};

    UsageReport.prototype.is_exceeded = function() {
      return this.current_value > this.max_value;
    };

    return UsageReport;

  })();

  function AuthorizeResponse(usage_reports) {
    this.usage_reports = usage_reports;
    this.usage_reports = [];
    this.plan = null;
  }

  AuthorizeResponse.prototype.add_usage_reports = function(options) {
    return this.usage_reports.push(new UsageReport(options));
  };

  AuthorizeResponse.prototype.set_plan = function(plan) {
    this.plan = plan;
  };

  return AuthorizeResponse;

})(Response);

module.exports = exports = AuthorizeResponse;