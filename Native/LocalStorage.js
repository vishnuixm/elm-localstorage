// import Native.Scheduler, Maybe //

var _atomicits$elm_localstorage$Native_LocalStorage = function(){

  function get(key){
    var value = localStorage.getItem(key);
    return _elm_lang$core$Native_Scheduler.succeed( (value === null) ? _em_lang$core$Maybe$Nothing : _elm_lang$core$Maybe$Just(value));
  }

  function set(key, value){
    localStorage.setItem(key, value);
    return _elm_lang$core$Native_Scheduler.succeed(value);
  }

  function remove(key){
    localStorage.removeItem(key);
    return _elm_lang$core$Native_Scheduler.succeed(key);
  }

  return {
    get: get,
    set: F2(set),
    remove: remove
  };

}();
