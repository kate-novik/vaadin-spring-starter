var startDay = $('#BREForm_root\\.task\\.basicClaimData\\.policyData\\.policyStartDate');
var endDay = $('#BREForm_root\\.task\\.basicClaimData\\.policyData\\.policyEndDate');
startDay.attr('maxdate', 0);
startDay.datepicker('option', 'maxDate', 0);
if (startDay.val() !== '') {
  var diff = Math.ceil((new Date(startDay.datepicker('getDate')).getTime() - new Date()) / (1000 * 3600 * 24));
  endDay.attr('mindate', diff);
  endDay.datepicker('option', 'minDate', diff);
} else {
  endDay.attr('mindate', '');
  endDay.datepicker('option', 'minDate', '');
}
;

var startDay = $('#BREForm_root\\.task\\.basicClaimData\\.policyData\\.policyStartDate');
var endDay = $('#BREForm_root\\.task\\.basicClaimData\\.policyData\\.policyEndDate');
startDay.attr('maxdate', 0);
startDay.datepicker('option', 'maxDate', 0);
if (startDay.val() !== '') {
  var diff = Math.ceil((new Date(startDay.datepicker('getDate')).getTime() - new Date()) / (1000 * 3600 * 24));
  endDay.attr('mindate', diff);
  endDay.datepicker('option', 'minDate', diff);
} else {
  endDay.attr('mindate', '');
  endDay.datepicker('option', 'minDate', '');
}
;

var startDay = $('#BREForm_root\\.task\\.basicClaimData\\.policyData\\.policyStartDate');
var endDay = $('#BREForm_root\\.task\\.basicClaimData\\.policyData\\.policyEndDate');
if (startDay.val() !== '') {
  var diff = Math.ceil((new Date(startDay.datepicker('getDate')).getTime() - new Date()) / (1000 * 3600 * 24));
  endDay.attr('mindate', diff);
  endDay.datepicker('option', 'minDate', diff);
  endDay.trigger('blur');
} else {
  endDay.attr('mindate', '');
  endDay.datepicker('option', 'minDate', '');
  endDay.trigger('blur');
}
;

var startDay = $('#BREForm_root\\.task\\.basicClaimData\\.policyData\\.policyStartDate');
var endDay = $('#BREForm_root\\.task\\.basicClaimData\\.policyData\\.policyEndDate');
if (startDay.val() !== '') {
  var diff = Math.ceil((new Date(startDay.datepicker('getDate')).getTime() - new Date()) / (1000 * 3600 * 24));
  endDay.attr('mindate', diff);
  endDay.datepicker('option', 'minDate', diff);
  endDay.trigger('blur');
} else {
  endDay.attr('mindate', '');
  endDay.datepicker('option', 'minDate', '');
  endDay.trigger('blur');
}
;

var startDay = $('#BREForm_root\\.task\\.basicClaimData\\.policyData\\.policyStartDate');
var endDay = $('#BREForm_root\\.task\\.basicClaimData\\.policyData\\.policyEndDate');
startDay.attr('maxdate', 0);
startDay.datepicker('option', 'maxDate', 0);
if (startDay.val() !== '') {
  var diff = Math.ceil((new Date(startDay.datepicker('getDate')).getTime() - new Date()) / (1000 * 3600 * 24));
  endDay.attr('mindate', diff);
  endDay.datepicker('option', 'minDate', diff);
} else {
  endDay.attr('mindate', '');
  endDay.datepicker('option', 'minDate', '');
}
;

var startDay = $('#BREForm_root\\.task\\.basicClaimData\\.policyData\\.policyStartDate');
var endDay = $('#BREForm_root\\.task\\.basicClaimData\\.policyData\\.policyEndDate');
var min;
var max;
if (startDay.val() !== '') {
  var diff = Math.ceil((new Date(startDay.datepicker('getDate')).getTime() - new Date()) / (1000 * 3600 * 24));
  endDay.attr('mindate', diff);
  startDay.attr('maxdate', 0);
} else {
  if (endDay.val() !== '') {
    var diff = Math.ceil((new Date(endDay.datepicker('getDate')).getTime() - new Date()) / (1000 * 3600 * 24));
    startDay.attr('maxdate', diff);
  }
  endDay.attr('mindate', '');
}
;

var startDay = $('#BREForm_root\\.task\\.basicClaimData\\.policyData\\.policyStartDate');
var endDay = $('#BREForm_root\\.task\\.basicClaimData\\.policyData\\.policyEndDate');
var min;
var max;
if (startDay.val() !== '') {
  var diff = Math.ceil((new Date(startDay.datepicker('getDate')).getTime() - new Date()) / (1000 * 3600 * 24));
  endDay.attr('mindate', diff);
  startDay.attr('maxdate', 0);
} else {
  if (endDay.val() !== '') {
    var diff = Math.ceil((new Date(endDay.datepicker('getDate')).getTime() - new Date()) / (1000 * 3600 * 24));
    startDay.attr('maxdate', diff);
  }
  endDay.attr('mindate', '');
}
;

var startDay = $('#BREForm_root\\.task\\.basicClaimData\\.policyData\\.policyStartDate');
var endDay = $('#BREForm_root\\.task\\.basicClaimData\\.policyData\\.policyEndDate');
var min;
var max;
if (startDay.val()) {
  min = Math.ceil((new Date(startDay.datepicker('getDate')).getTime() - new Date()) / (1000 * 3600 * 24));
} else {
  min = '';
}
;
if (!startDay.val() && endDay.val() && ((new Date(endDay.datepicker('getDate')).getTime()) < new Date())) {
  max = Math.ceil((new Date(endDay.datepicker('getDate')).getTime() - new Date()) / (1000 * 3600 * 24));
} else {
  max = 0;
}
;
startDay.attr('maxdate', max);
endDay.attr('mindate', min);

//-----------
//prev onchange
var startDay = $('#BREForm_root\\.task\\.basicClaimData\\.policyData\\.policyStartDate');
var endDay = $('#BREForm_root\\.task\\.basicClaimData\\.policyData\\.policyEndDate');
if (startDay.val() !== '') {
  var diff = Math.ceil((new Date(startDay.datepicker('getDate')).getTime() - new Date()) / (1000 * 3600 * 24));
  endDay.attr('mindate', diff);
  endDay.datepicker('option', 'minDate', diff);
  endDay.trigger('blur');
} else {
  endDay.attr('mindate', '');
  endDay.datepicker('option', 'minDate', '');
  endDay.trigger('blur');
}
;
//curr onchange startday
var startDay = $('#BREForm_root\\.task\\.basicClaimData\\.policyData\\.policyStartDate');
var endDay = $('#BREForm_root\\.task\\.basicClaimData\\.policyData\\.policyEndDate');
var min;
var max;
if (startDay.val() !== '') {
  min = Math.ceil((new Date(startDay.datepicker('getDate')).getTime() - new Date()) / (1000 * 3600 * 24));
  max = 0;
  startDay.attr('maxdate', max);
  startDay.datepicker('option', 'maxDate', max);
  startDay.trigger('blur');
} else {
  min = '';
}
;
endDay.attr('mindate', min);
endDay.datepicker('option', 'minDate', min);
endDay.trigger('blur');

//--------------------------
//curr onchange endDay
var startDay = $('#BREForm_root\\.task\\.basicClaimData\\.policyData\\.policyStartDate');
var endDay = $('#BREForm_root\\.task\\.basicClaimData\\.policyData\\.policyEndDate');
var max;
if (!startDay.val() && endDay.val() && ((new Date(endDay.datepicker('getDate')).getTime()) < new Date())) {
  max = Math.ceil((new Date(endDay.datepicker('getDate')).getTime() - new Date()) / (1000 * 3600 * 24));
  startDay.attr('maxdate', max);
  startDay.datepicker('option', 'maxDate', max);
}
;

// Delete
// FieldAttributes	root.task.basicClaimData.policyData.policyStartDate	maxDate=0

var elems = $('[dateformat].dateField');
var defaultDateFormat = 'dd/MM/yy';
var dateFieldOnChangeListener = function (event) {
  var sourceElement = event.srcElement;
  var originalValue = $(sourceElement).val();
  if (typeof originalValue === 'undefined') {return;}
  ;var regexp = new RegExp('\\d{2}/\\d{2}/\\d{2}');
  if (regexp.test(originalValue) && originalValue.length == 8) {return;}
  ;var formatedDate = transformDateToDefaultFormat(originalValue);
  var datePattern = sourceElement.getAttribute('dateformat');
  if (typeof datePattern != 'undefined' && datePattern.toUpperCase() != 'YYYY') {formatedDate = changeDateFormat(formatedDate, datePattern);}
  ;$(sourceElement).val(formatedDate);
};
var changeDateFormat = function (date, newPattern) {
  if (typeof moment != 'undefined') {
    var newDateTimeStamp = moment(date, defaultDateFormat.toUpperCase());
    return newDateTimeStamp.format(newPattern.toUpperCase());
  }
  ;
  return date;
};
for (var index = 0; index < elems.length; index++) {
  var elem = elems[index];
  $(elem).on('change', dateFieldOnChangeListener);
}
;var transformDateToDefaultFormat = function (sourceDate) {
  var regexp = new RegExp('\\d{8}');
  sourceDate = sourceDate.trimLeft();
  if (regexp.test(sourceDate)) {return sourceDate.substring(0, 2) + '/' + sourceDate.substring(2, 4) + '/' + sourceDate.substring(6, 8);}
  ;regexp = new RegExp('\\d{2}/\\d{2}/\\d{4}');
  if (regexp.test(sourceDate)) {return sourceDate.substring(0, sourceDate.length - 4) + sourceDate.substring(sourceDate.length - 2, sourceDate.length);}
  ;regexp = new RegExp('\\d/\\d{2}/\\d{4}');
  if (regexp.test(sourceDate)) {return '0' + sourceDate.substring(0, sourceDate.length - 4) + sourceDate.substring(sourceDate.length - 2, sourceDate.length);}
  ;regexp = new RegExp('\\d/\\d{2}/\\d{2}');
  if (regexp.test(sourceDate)) {return '0' + sourceDate;}
  ;
  return sourceDate;
};

var elems = $('[dateformat].dateField');
var defaultDateFormat = 'dd/MM/yy';
var dateFieldOnChangeListener = function (event) {
  var sourceElement = event.srcElement;
  var originalValue = $(sourceElement).val();
  if (typeof originalValue === 'undefined') {return;}
  ;var regexp = new RegExp('\\d{2}/\\d{2}/\\d{2}');
  if (regexp.test(originalValue) && originalValue.length == 8) {return;}
  ;var formatedDate = transformDateToDefaultFormat(originalValue);
  var datePattern = sourceElement.getAttribute('dateformat');
  if (typeof datePattern != 'undefined' && datePattern.toUpperCase() != 'YYYY') {formatedDate = changeDateFormat(formatedDate, datePattern);}
  ;$(sourceElement).val(formatedDate);
};
var changeDateFormat = function (date, newPattern) {
  if (typeof moment != 'undefined') {
    var newDateTimeStamp = moment(date, defaultDateFormat.toUpperCase());
    return newDateTimeStamp.format(newPattern.toUpperCase());
  }
  ;
  return date;
};
for (var index = 0; index < elems.length; index++) {
  var elem = elems[index];
  $(elem).on('change', dateFieldOnChangeListener);
}
;var transformDateToDefaultFormat = function (sourceDate) {
  var regexp = new RegExp('\\d{8}');
  sourceDate = sourceDate.trimLeft();
  if (regexp.test(sourceDate)) {return sourceDate.substring(0, 2) + '/' + sourceDate.substring(2, 4) + '/' + sourceDate.substring(6, 8);}
  ;regexp = new RegExp('\\d{2}/\\d{2}/\\d{4}');
  if (regexp.test(sourceDate)) {return sourceDate.substring(0, sourceDate.length - 4) + sourceDate.substring(sourceDate.length - 2, sourceDate.length);}
  ;regexp = new RegExp('\\d/\\d{2}/\\d{4}');
  if (regexp.test(sourceDate)) {return '0' + sourceDate.substring(0, sourceDate.length - 4) + sourceDate.substring(sourceDate.length - 2, sourceDate.length);}
  ;regexp = new RegExp('\\d/\\d{2}/\\d{2}');
  if (regexp.test(sourceDate)) {return '0' + sourceDate;}
  ;
  return sourceDate;
};

var startDay = $('#BREForm_root\\.task\\.basicClaimData\\.policyData\\.policyStartDate');
var endDay = $('#BREForm_root\\.task\\.basicClaimData\\.policyData\\.policyEndDate');
var min;
var max;
if (startDay.val()) {
  min = Math.ceil((new Date(startDay.datepicker('getDate')).getTime() - new Date()) / (1000 * 3600 * 24));
  max = 0;
  startDay.attr('maxdate', max);
  startDay.datepicker('option', 'maxDate', max);
} else {min = '';}
;endDay.attr('mindate', min);
endDay.datepicker('option', 'minDate', min);
endDay.trigger('blur');

var startDay = $('#BREForm_root\\.task\\.basicClaimData\\.policyData\\.policyStartDate');
var endDay = $('#BREForm_root\\.task\\.basicClaimData\\.policyData\\.policyEndDate');
var min;
var max;
if (startDay.val()) {min = Math.ceil((new Date(startDay.datepicker('getDate')).getTime() - new Date()) / (1000 * 3600 * 24));} else {min = '';}
;
if (!startDay.val() && endDay.val() && ((new Date(endDay.datepicker('getDate')).getTime()) < new Date())) {max = Math.ceil((new Date(endDay.datepicker('getDate')).getTime() - new Date()) / (1000 * 3600 * 24));} else {max = '0';}
;startDay.attr('maxdate', max);
endDay.attr('mindate', min);

var startDay = $('#BREForm_root\\.task\\.basicClaimData\\.policyData\\.policyStartDate');
var endDay = $('#BREForm_root\\.task\\.basicClaimData\\.policyData\\.policyEndDate');
var max;
if (!startDay.val() && endDay.val() && ((new Date(endDay.datepicker('getDate')).getTime()) < new Date())) {
  max = '' + Math.ceil((new Date(endDay.datepicker('getDate')).getTime() - new Date()) / (1000 * 3600 * 24));
} else { max = '';}
startDay.attr('maxdate', max);
startDay.datepicker('option', 'maxDate', max);
;

var startDay = $('#BREForm_root\\.task\\.basicClaimData\\.policyData\\.policyStartDate');
var endDay = $('#BREForm_root\\.task\\.basicClaimData\\.policyData\\.policyEndDate');
var max;
if (!startDay.val() && endDay.val() && ((new Date(endDay.datepicker('getDate')).getTime()) < new Date())) {max = '' + Math.ceil((new Date(endDay.datepicker('getDate')).getTime() - new Date()) / (1000 * 3600 * 24));} else { max = '0';}
startDay.attr('maxdate', max);
startDay.datepicker('option', 'maxDate', max);

var startDay = $('#BREForm_root\\.task\\.basicClaimData\\.policyData\\.policyStartDate');
var endDay = $('#BREForm_root\\.task\\.basicClaimData\\.policyData\\.policyEndDate');
startDay.trigger('blur');
var min;
var max;
if (startDay.val()) {
  min = '' + Math.ceil((new Date(startDay.datepicker('getDate')).getTime() - new Date()) / (1000 * 3600 * 24));
  max = '0';
  startDay.attr('maxdate', max);
  startDay.datepicker('option', 'maxDate', max);
} else {
  if (!startDay.val() && endDay.val() && ((new Date(endDay.datepicker('getDate')).getTime()) < new Date())) {max = '' + Math.ceil((new Date(endDay.datepicker('getDate')).getTime() - new Date()) / (1000 * 3600 * 24));} else { max = '0';}
  startDay.attr('maxdate', max);
  startDay.datepicker('option', 'maxDate', max);
  min = '';}
;endDay.attr('mindate', min);
endDay.datepicker('option', 'minDate', min);
endDay.trigger('blur');