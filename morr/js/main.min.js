var arr = document.getElementsByTagName('div')
var N=1

var links = document.getElementsByTagName('a');
for (var i = 0; i < links.length; i++) {
  links[i].addEventListener('click',function (evt) {
    evt.preventDefault();
    arr[N-1].classList.remove('showing')
    arr[N].classList.add('showing')
    N++
    // console.log(CombatIndex + ' ' + MagicIndex + ' ' + StealthIndex)
    document.querySelector('.combat').textContent = CombatIndex;
    // document.querySelector('.magic').textContent = MagicIndex;
    // document.querySelector('.stealth').textContent = StealthIndex;
    resault();
  })
};
// console.log('work')

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
  document.querySelector('.combat').textContent = 'Warrior';
} else {
  if (CombatIndex>-1 && CombatIndex<4 && MagicIndex>6 && StealthIndex>-1 && StealthIndex<4) {
    document.querySelector('.combat').textContent = 'Mage';
  } else {
    if (CombatIndex>-1 && CombatIndex<4 && MagicIndex>-1 && MagicIndex<4 && StealthIndex>6) {
      document.querySelector('.combat').textContent = 'Thief';
    } else {
      if (CombatIndex==6 && MagicIndex==4 && StealthIndex==0) {
        document.querySelector('.combat').textContent = 'Knight';
      } else {
        if (CombatIndex==6 && MagicIndex==3 && StealthIndex==1) {
          document.querySelector('.combat').textContent = 'Barbarian';
        } else {
          if (CombatIndex==6 && MagicIndex==2 && StealthIndex==2) {
            document.querySelector('.combat').textContent = 'Knight';
          } else {
            if (CombatIndex==6 && MagicIndex==1 && StealthIndex==3) {
              document.querySelector('.combat').textContent = 'Crusader';
            } else {
              if (CombatIndex==6 && MagicIndex==0 && StealthIndex==4) {
                document.querySelector('.combat').textContent = 'Knight';
              } else {
                if (CombatIndex==5 && MagicIndex==5 && StealthIndex==0) {
                  document.querySelector('.combat').textContent = 'Archer';
                } else {
                  if (CombatIndex==5 && MagicIndex==4 && StealthIndex==1) {
                    document.querySelector('.combat').textContent = 'Archer';
                  } else {
                    if (CombatIndex==5 && MagicIndex==3 && StealthIndex==2) {
                      document.querySelector('.combat').textContent = 'Archer';
                    } else {
                      if (CombatIndex==5 && MagicIndex==2 && StealthIndex==3) {
                        document.querySelector('.combat').textContent = 'Scout';
                      } else {
                        if (CombatIndex==5 && MagicIndex==1 && StealthIndex==4) {
                          document.querySelector('.combat').textContent = 'Archer';
                        } else {
                          if (CombatIndex==5 && MagicIndex==0 && StealthIndex==5) {
                            document.querySelector('.combat').textContent = 'Archer';
                          } else {
                            if (CombatIndex==4 && MagicIndex==6 && StealthIndex==0) {
                              document.querySelector('.combat').textContent = 'Healer';
                            } else {
                              if (CombatIndex==4 && MagicIndex>-1 && MagicIndex<6 && StealthIndex>-1 && StealthIndex<7)  {
                                document.querySelector('.combat').textContent = 'Rogue';
                              } else {
                                if (CombatIndex==3 && MagicIndex==6 && StealthIndex==1) {
                                  document.querySelector('.combat').textContent = 'Healer';
                                } else {
                                 if (CombatIndex==3 && MagicIndex==5 && StealthIndex==2) {
                                  document.querySelector('.combat').textContent = 'Witchhunter';
                                } else {
                                 if (CombatIndex==3 && MagicIndex==4 && StealthIndex==3) {
                                  document.querySelector('.combat').textContent = 'Spellsword';
                                } else {
                                 if (CombatIndex==3 && MagicIndex==4 && StealthIndex==4) {
                                  document.querySelector('.combat').textContent = 'Bard';
                                } else {
                                 if (CombatIndex==3 && MagicIndex==2 && StealthIndex==6) {
                                  document.querySelector('.combat').textContent = 'Pilgrim';
                                } else {
                                 if (CombatIndex==3 && MagicIndex==1 && StealthIndex==6) {
                                  document.querySelector('.combat').textContent = 'Agent/Spy';
                                } else {
                                 if (CombatIndex==2 && MagicIndex==6 && StealthIndex==2) {
                                  document.querySelector('.combat').textContent = 'Sorcerer';
                                } else {
                                 if (CombatIndex==2 && MagicIndex==5 && StealthIndex==3) {
                                  document.querySelector('.combat').textContent = 'Witchhunter';
                                } else {
                                 if (CombatIndex==2 && MagicIndex==4 && StealthIndex==4) {
                                  document.querySelector('.combat').textContent = 'Spellsword';
                                } else {
                                 if (CombatIndex==2 && MagicIndex==3 && StealthIndex==5) {
                                  document.querySelector('.combat').textContent = 'Monk';
                                } else {
                                 if (CombatIndex==2 && MagicIndex==2 && StealthIndex==6) {
                                  document.querySelector('.combat').textContent = 'Acrobat';
                                } else {
                                 if (CombatIndex==1 && MagicIndex==6 && StealthIndex==3) {
                                  document.querySelector('.combat').textContent = 'Battlemage';
                                } else {
                                 if (CombatIndex==1 && MagicIndex==5 && StealthIndex==4) {
                                  document.querySelector('.combat').textContent = 'Witchhunter';
                                } else {
                                 if (CombatIndex==1 && MagicIndex==4 && StealthIndex==5) {
                                  document.querySelector('.combat').textContent = 'Spellsword';
                                } else {
                                 if (CombatIndex==1 && MagicIndex==3 && StealthIndex==6) {
                                  document.querySelector('.combat').textContent = 'Assassin';
                                } else {
                                 if (CombatIndex==0 && MagicIndex==6 && StealthIndex==4) {
                                  document.querySelector('.combat').textContent = 'Battlemage';
                                  } else {
                                  if (CombatIndex==0 && MagicIndex==5 && StealthIndex==5) {
                                  document.querySelector('.combat').textContent = 'Witchhunter';
                                  } else {
                                  if (CombatIndex==0 && MagicIndex==4 && StealthIndex==6) {
                                  document.querySelector('.combat').textContent = 'Nightblade';
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
