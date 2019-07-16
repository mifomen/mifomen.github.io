var arr = document.getElementsByTagName('div')
var N=1

var links = document.getElementsByTagName('a');
for (var i = 0; i < links.length; i++) {
  links[i].addEventListener('click',function (evt) {
    evt.preventDefault();
    arr[N-1].classList.remove('showing')
    arr[N].classList.add('showing')
    N++
    console.log(CombatIndex + ' ' + MagicIndex + ' ' + StealthIndex)
    document.querySelector('.combat').textContent = CombatIndex;
    // document.querySelector('.magic').textContent = MagicIndex;
    // document.querySelector('.stealth').textContent = StealthIndex;
    resault();
  })
};
console.log('work')

CombatIndex=0
var MagicIndex=0
var StealthIndex=0

var Combat = function () {
  CombatIndex++
}
var Magic = function () {
  MagicIndex++
}
var Stealth = function () {
  StealthIndex++
}

var resault = function() {

if (CombatIndex>6 && MagicIndex>-1 && MagicIndex<4 && StealthIndex>-1 && StealthIndex<4) {
  document.querySelector('.combat').textContent = 'Воин';
} else {
  if (CombatIndex>-1 && CombatIndex<4 && MagicIndex>6 && StealthIndex>-1 && StealthIndex<4) {
    document.querySelector('.combat').textContent = 'Маг';
  } else {
    if (CombatIndex>-1 && CombatIndex<4 && MagicIndex>-1 && MagicIndex<4 && StealthIndex>6) {
      document.querySelector('.combat').textContent = 'Вор';
    } else {
      if (CombatIndex==6 && MagicIndex==4 && StealthIndex==0) {
        document.querySelector('.combat').textContent = 'Рыцарь';
      } else {
        if (CombatIndex==6 && MagicIndex==3 && StealthIndex==1) {
          document.querySelector('.combat').textContent = 'Варвар';
        } else {
          if (CombatIndex==6 && MagicIndex==2 && StealthIndex==2) {
            document.querySelector('.combat').textContent = 'Рыцарь';
          } else {
            if (CombatIndex==6 && MagicIndex==1 && StealthIndex==3) {
              document.querySelector('.combat').textContent = 'Паладин';
            } else {
              if (CombatIndex==6 && MagicIndex==0 && StealthIndex==4) {
                document.querySelector('.combat').textContent = 'Рыцарь';
              } else {
                if (CombatIndex==5 && MagicIndex==5 && StealthIndex==0) {
                  document.querySelector('.combat').textContent = 'Лучник';
                } else {
                  if (CombatIndex==5 && MagicIndex==4 && StealthIndex==1) {
                    document.querySelector('.combat').textContent = 'Лучник';
                  } else {
                    if (CombatIndex==5 && MagicIndex==3 && StealthIndex==2) {
                      document.querySelector('.combat').textContent = '=Лучник';
                    } else {
                      if (CombatIndex==5 && MagicIndex==2 && StealthIndex==3) {
                        document.querySelector('.combat').textContent = 'Разведчик';
                      } else {
                        if (CombatIndex==5 && MagicIndex==1 && StealthIndex==4) {
                          document.querySelector('.combat').textContent = 'Лучник';
                        } else {
                          if (CombatIndex==5 && MagicIndex==0 && StealthIndex==5) {
                            document.querySelector('.combat').textContent = 'Лучник';
                          } else {
                            if (CombatIndex==4 && MagicIndex==6 && StealthIndex==0) {
                              document.querySelector('.combat').textContent = 'Целитель';
                            } else {
                              if (CombatIndex==4 && MagicIndex>-1 && MagicIndex<6 && StealthIndex>-1 && StealthIndex<7)  {
                                document.querySelector('.combat').textContent = 'Жулик';
                              } else {
                                if (CombatIndex==3 && MagicIndex==6 && StealthIndex==1) {
                                  document.querySelector('.combat').textContent = 'Целитель';
                                } else {
                                 if (CombatIndex==3 && MagicIndex==5 && StealthIndex==2) {
                                  document.querySelector('.combat').textContent = 'Инквизитор';
                                } else {
                                 if (CombatIndex==3 && MagicIndex==4 && StealthIndex==3) {
                                  document.querySelector('.combat').textContent = 'Воин Слова';
                                } else {
                                 if (CombatIndex==3 && MagicIndex==4 && StealthIndex==4) {
                                  document.querySelector('.combat').textContent = 'Бард';
                                } else {
                                 if (CombatIndex==3 && MagicIndex==2 && StealthIndex==6) {
                                  document.querySelector('.combat').textContent = 'Пилигрим';
                                } else {
                                 if (CombatIndex==3 && MagicIndex==1 && StealthIndex==6) {
                                  document.querySelector('.combat').textContent = 'Шпион';
                                } else {
                                 if (CombatIndex==2 && MagicIndex==6 && StealthIndex==2) {
                                  document.querySelector('.combat').textContent = 'Чародей';
                                } else {
                                 if (CombatIndex==2 && MagicIndex==5 && StealthIndex==3) {
                                  document.querySelector('.combat').textContent = 'Инквизитор';
                                } else {
                                 if (CombatIndex==2 && MagicIndex==4 && StealthIndex==4) {
                                  document.querySelector('.combat').textContent = 'Воин слова';
                                } else {
                                 if (CombatIndex==2 && MagicIndex==3 && StealthIndex==5) {
                                  document.querySelector('.combat').textContent = 'Монах';
                                } else {
                                 if (CombatIndex==2 && MagicIndex==2 && StealthIndex==6) {
                                  document.querySelector('.combat').textContent = 'Акробат';
                                } else {
                                 if (CombatIndex==1 && MagicIndex==6 && StealthIndex==3) {
                                  document.querySelector('.combat').textContent = 'Боевой маг';
                                } else {
                                 if (CombatIndex==1 && MagicIndex==5 && StealthIndex==4) {
                                  document.querySelector('.combat').textContent = 'Инквизитор';
                                } else {
                                 if (CombatIndex==1 && MagicIndex==4 && StealthIndex==5) {
                                  document.querySelector('.combat').textContent = 'Воин Слова';
                                } else {
                                 if (CombatIndex==1 && MagicIndex==3 && StealthIndex==6) {
                                  document.querySelector('.combat').textContent = 'Ассасин';
                                } else {
                                 if (CombatIndex==0 && MagicIndex==6 && StealthIndex==4) {
                                  document.querySelector('.combat').textContent = 'Боевой маг';
                                  } else {
                                  if (CombatIndex==0 && MagicIndex==5 && StealthIndex==5) {
                                  document.querySelector('.combat').textContent = 'инквизитор';
                                  } else {
                                  if (CombatIndex==0 && MagicIndex==4 && StealthIndex==6) {
                                  document.querySelector('.combat').textContent = 'Меч ночи';
                                  } else {
                                  }
                                  }
                                }
                              }
                            }
                          }
                        }
                      }
                    }
                  }
                }
              }
            }
          }
        }
      }
    }
  }
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}

}


// document.querySelector('.combat').textContent = CombatIndex;
// document.querySelector('.magic').textContent = MagicIndex;
// document.querySelector('.stealth').textContent = StealthIndex;
// console.log(CombatIndex + ' ' + MagicIndex + ' ' + StealthIndex)
