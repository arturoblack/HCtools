'use strict';

/**
 NA  -> No Action (no actions requred)
 MA  -> Movement Action
 PA  -> Power Action
 CCA -> Close Combat Action 
 RCA -> Range Combat ACtion
 FA  -> Free Action
 M   -> Moement
 CC  -> Close Combat
 RC  -> Range Combat
**/

CombinatorApp
.factory('Power', [
  function($resource){
    var powers = [
      { 
        name: 'SPEED',
        icon: 'speed',
        powers: [
          {
            name: 'FLURRY',
            color : '#D4003F',
            bcolor: '#1A1A1A',
            description: 'text_description',
            action: 'CCA',
            extra_actions: ['CC', 'CC']
          },
          {
            name: 'LEAP/CLIMB',
            color : '#FF9900',
            bcolor: '#1A1A1A',
            description: 'text_description',
            action: 'MA',
            extra_actions: ['M']
          },
          {
            name: 'PHASING/TELEPORT',
            color : '#FCF647',
            bcolor: '#1A1A1A',
            description: 'text_description',
            action: 'NA',
            extra_actions: ['M']
          },
          {
            name: 'EARTHBOUND/NEUTRALIZED',
            color : '#CCFF33',
            bcolor: '#1A1A1A',
            description: 'text_description',
            action: 'NA',
            extra_actions: []
          },
          {
            name: 'CHARGE',
            color : '#258F13',
            bcolor: '#1A1A1A',
            description: 'text_description',
            action: 'PA',
            extra_actions: ['M','CCA']
          },
          {
            name: 'MIND CONTROL',
            color : '#89C6E8',
            bcolor: '#1A1A1A',
            description: 'text_description',
            action: 'CCA/RCA',
            extra_actions: []
          },
          {
            name: 'PLASTICITY',
            color : '#292CFF',
            bcolor: '#E6E6E6',
            description: 'text_description',
            action: 'NA',
            extra_actions: []
          },
          {
            name: 'FORCE BLAST',
            color : '#750DA6',
            bcolor: '#E6E6E6',
            description: 'text_description',
            action: 'PA',
            extra_actions: []
          },
          {
            name: 'SIDESTEP',
            color : '#E368E3',
            bcolor: '#1A1A1A',
            description: 'text_description',
            action: 'FA',
            extra_actions: ['M']
          },
          {
            name: 'HYPERSONIC SPEED',
            color : '#694521',
            bcolor: '#E6E6E6',
            description: 'text_description',
            action: 'PA',
            extra_actions: ['M','RCA', 'CCA']
          },
          {
            name: 'STEALTH',
            color : '#000000',
            bcolor: '#E6E6E6',
            description: 'text_description',
            action: 'NA',
            extra_actions: []
          },
          {
            name: 'RUNNING SHOT',
            color : '#808080',
            bcolor: '#1A1A1A',
            description: 'text_description',
            action: 'PA',
            extra_actions: ['M','RCA']
          },
        ]
      },
      { 
        name: 'ATTACK',
        icon: 'attack',
        powers: [
          {
            name: 'BLADES/CLAWS/FANGS',
            color : '#D4003F',
            bcolor: '#1A1A1A',
            description: 'text_description',
            action: 'NA',
            extra_actions: []
          },
          {
            name: 'ENERGY EXPLOSION',
            color : '#FF9900',
            bcolor: '#1A1A1A',
            description: 'text_description',
            action: 'RCA',
            extra_actions: ['RC']
          },
          {
            name: 'PULSE WAVE',
            color : '#FCF647',
            bcolor: '#1A1A1A',
            description: 'text_description',
            action: 'RCA',
            extra_actions: []
          },
          {
            name: 'QUAKE',
            color : '#CCFF33',
            bcolor: '#1A1A1A',
            description: 'text_description',
            action: 'CCA',
            extra_actions: ['CC']
          },
          {
            name: 'SUPER STRENGTH',
            color : '#258F13',
            bcolor: '#1A1A1A',
            description: 'text_description',
            action: 'NA',
            extra_actions: []
          },
          {
            name: 'INCAPACITATE',
            color : '#89C6E8',
            bcolor: '#1A1A1A',
            description: 'text_description',
            action: 'CCA/RCA',
            extra_actions: ['CC', 'RC']
          },
          {
            name: 'PENETRATING/PSYCHIC BLAST',
            color : '#292CFF',
            bcolor: '#E6E6E6',
            description: 'text_description',
            action: 'RCA',
            extra_actions: ['RC']
          },
          {
            name: 'SMOKE CLOUD',
            color : '#750DA6',
            bcolor: '#E6E6E6',
            description: 'text_description',
            action: 'PA',
            extra_actions: []
          },
          {
            name: 'PRECISION STRIKE',
            color : '#E368E3',
            bcolor: '#1A1A1A',
            description: 'text_description',
            action: 'NA',
            extra_actions: []
          },
          {
            name: 'POISON',
            color : '#694521',
            bcolor: '#E6E6E6',
            description: 'text_description',
            action: 'FA',
            extra_actions: []
          },
          {
            name: 'STEAL ENERGY',
            color : '#000000',
            bcolor: '#E6E6E6',
            description: 'text_description',
            action: 'NA',
            extra_actions: []
          },
          {
            name: 'TELEKINESIS',
            color : '#808080',
            bcolor: '#1A1A1A',
            description: 'text_description',
            action: 'PA',
            extra_actions: []
          },
        ]
      },
      { 
        name: 'DEFENSE',
        icon: 'defense',
        powers: [
          {
            name: 'SUPER SENSES',
            color : '#D4003F',
            bcolor: '#1A1A1A',
            description: 'text_description',
            action: 'NA',
            extra_actions: []
          },
          {
            name: 'TOUGHNESS',

            color : '#FF9900',
            bcolor: '#1A1A1A',
            description: 'text_description',
            action: 'NA',
            extra_actions: []
          },
          {
            name: 'DEFEND',
            color : '#FCF647',
            bcolor: '#1A1A1A',
            description: 'text_description',
            action: 'NA',
            extra_actions: []
          },
          {
            name: 'COMBAT REFLEXES',
            color : '#CCFF33',
            bcolor: '#1A1A1A',
            description: 'text_description',
            action: 'NA',
            extra_actions: []
          },
          {
            name: 'ENERGY SHIELD/DEFLECTION',
            color : '#258F13',
            bcolor: '#1A1A1A',
            description: 'text_description',
            action: 'NA',
            extra_actions: []
          },
          {
            name: 'BARRIER',
            color : '#89C6E8',
            bcolor: '#1A1A1A',
            description: 'text_description',
            action: 'PA',
            extra_actions: []
          },
          {
            name: 'MASTERMIND',
            color : '#292CFF',
            bcolor: '#E6E6E6',
            description: 'text_description',
            action: 'NA',
            extra_actions: []
          },
          {
            name: 'WILLPOWER',
            color : '#750DA6',
            bcolor: '#E6E6E6',
            description: 'text_description',
            action: 'NA',
            extra_actions: []
          },
          {
            name: 'INVINCIBLE',
            color : '#E368E3',
            bcolor: '#1A1A1A',
            description: 'text_description',
            action: 'NA',
            extra_actions: []
          },
          {
            name: 'IMPERVIOUS',
            color : '#694521',
            bcolor: '#E6E6E6',
            description: 'text_description',
            action: 'NA',
            extra_actions: []
          },
          {
            name: 'REGENERATION',
            color : '#000000',
            bcolor: '#E6E6E6',
            description: 'text_description',
            action: 'PA',
            extra_actions: []
          },
          {
            name: 'INVULNERABILITY',
            color : '#808080',
            bcolor: '#1A1A1A',
            description: 'text_description',
            action: 'NA',
            extra_actions: []
          },
        ]
      },
      { 
        name: 'DAMAGE',
        icon: 'damage',
        powers: [
          {
            name: 'RANGED COMBAT EXPERT',
            color : '#D4003F',
            bcolor: '#1A1A1A',
            description: 'text_description',
            action: 'PA',
            extra_actions: ['RC']
          },
          {
            name: 'BATTLE FURY',
            color : '#FF9900',
            bcolor: '#1A1A1A',
            description: 'text_description',
            action: 'NA',
            extra_actions: []
          },
          {
            name: 'SUPPORT',
            color : '#FCF647',
            bcolor: '#1A1A1A',
            description: 'text_description',
            action: 'PA',
            extra_actions: []
          },
          {
            name: 'EXPLOIT WEAKNESS',
            color : '#CCFF33',
            bcolor: '#1A1A1A',
            description: 'text_description',
            action: 'CCA',
            extra_actions: ['CC']
          },
          {
            name: 'ENHANCEMENT',
            color : '#258F13',
            bcolor: '#1A1A1A',
            description: 'text_description',
            action: 'NA',
            extra_actions: []
          },
          {
            name: 'PROBABILITY CONTROL',
            color : '#89C6E8',
            bcolor: '#1A1A1A',
            description: 'text_description',
            action: 'NA',
            extra_actions: []
          },
          {
            name: 'SHAPE CHANGE',
            color : '#292CFF',
            bcolor: '#E6E6E6',
            description: 'text_description',
            action: 'NA',
            extra_actions: []
          },
          {
            name: 'CLOSE COMBAT EXPERT',
            color : '#750DA6',
            bcolor: '#E6E6E6',
            description: 'text_description',
            action: 'PA',
            extra_actions: ['CC']
          },
          {
            name: 'EMPOWER',
            color : '#E368E3',
            bcolor: '#1A1A1A',
            description: 'text_description',
            action: 'NA',
            extra_actions: []
          },
          {
            name: 'PERPLEX',
            color : '#694521',
            bcolor: '#E6E6E6',
            description: 'text_description',
            action: 'FA',
            extra_actions: []
          },
          {
            name: 'OUTWIT',
            color : '#000000',
            bcolor: '#E6E6E6',
            description: 'text_description',
            action: 'FA',
            extra_actions: []
          },
          {
            name: 'LEADERSHIP',
            color : '#808080',
            bcolor: '#1A1A1A',
            description: 'text_description',
            action: 'FA',
            extra_actions: []
          },
        ]
      },
    ]; //end powers

    /**
     * Objeto tipo modelo de powers
    **/
    var powersModel = {};

    /**
     * @return object powers: powers object
     * @description "deveulve la lista de poderes general" 
    **/
    powersModel.list = function(){
      return powers;
    };
    
    /**
     * @param action: action name
     * @return array list: list of mattched power object
     * @description "busca y devuelve un power object de acuerdo a su action" 
    **/
    powersModel.findInAction = function(action){
      var list = [];
      for (var i = powers.length - 1; i >= 0; i--) {
        for (var j = powers[i].powers.length - 1; j >= 0; j--) {
          if(powers[i].powers[j].action == action){
            list.push(powers[i].powers[j]);
          }
        }
      }
      return list;
    };
    
    /**
     * @param string action: action name
     * @return array list: list of mattched power object
     * @description "busca y devuelve un power object de acuerdo a su extra action"
    **/
    powersModel.findInExtraAction = function(action){
      var list = [];
      for (var i = powers.length - 1; i >= 0; i--) {
        for (var j = powers[i].powers.length - 1; j >= 0; j--) {
          for (var k = powers[i].powers[j].extra_actions.length - 1; k >= 0; k--) {
            if(powers[i].powers[j].extra_actions[k] == action){
              list.push(powers[i].powers[j]);
            }  
          }
        }
      }
      return list;
    };

    /**
     * @param action: action name
     * @return array list: list of mattched power object
     * @description "busca y devuelve un power object de acuerdo a su action" 
    **/
    powersModel.findBefore = function(action){
      return powersModel.findInExtraAction(action);
    };

    /**
     * @param list extra_actions: list of extra actions
     * @return array list: list of mattched power object
     * @description "busca las Action en la lista e extra action, luego las busca in las actiones"
    **/
    powersModel.findAfter = function(extra_actions){
      var list = [];
      for (var i = extra_actions.length - 1; i >= 0; i--) {
        if(extra_actions[i].substring(extra_actions[i].length -1) == 'A'){
          list = list.concat(powersModel.findInAction(extra_actions[i]));
        }
      };
      return list;
    };

    /**
     * @param string name: power name
     * @return object power: power object
     * @description "busca y devuelve un power object de acuerdo a su name"
    **/
    powersModel.find = function(name){
      for (var i = powers.length - 1; i >= 0; i--) {
        for (var j = powers[i].powers.length - 1; j >= 0; j--) {
          if(powers[i].powers[j].name == name){
            return powers[i].powers[j];
          }
        }
      }
      return {};
    };

    powersModel.findByType = function(){
      return [];
    };

    return powersModel;
  } // end all

]);
