'use strict';

/* global app */

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

app
.factory('Power', [
  function(){
    var powers = [
      { 
        name: 'SPEED',
        icon: 'speed',
        powers: [
          {
            name: 'FLURRY',
            names: { en:'FLURRY', es:'DobleAtaqueS'},
            bcolor : '#D4003F',
            color: '#1A1A1A',
            description: {en:'text_description', es:'descripción'},
            action: 'CCA',
            extra_actions: ['CC', 'CC']
          },
          {
            name: 'LEAP/CLIMB',
            names: { en:'LEAP/CLIMB', es:'name'},
            bcolor : '#FF9900',
            color: '#1A1A1A',
            description: 'text_description',
            action: 'MA',
            extra_actions: ['M']
          },
          {
            name: 'PHASING/TELEPORT',
            names: { en:'PHASING/TELEPORT', es:'name'},
            bcolor : '#FCF647',
            color: '#1A1A1A',
            description: 'text_description',
            action: 'NA',
            extra_actions: ['M']
          },
          {
            name: 'EARTHBOUND/NEUTRALIZED',
            names: { en:'EARTHBOUND/NEUTRALIZED', es:'name'},
            bcolor : '#8BC34A',
            color: '#1A1A1A',
            description: 'text_description',
            action: 'NA',
            extra_actions: []
          },
          {
            name: 'CHARGE',
            names: { en:'CHARGE', es:'name'},
            bcolor : '#5DB356',
            color: '#1A1A1A',
            description: 'text_description',
            action: 'PA',
            extra_actions: ['M','CCA']
          },
          {
            name: 'MIND CONTROL',
            names: { en:'MIND CONTROL', es:'name'},
            bcolor : '#89C6E8',
            color: '#1A1A1A',
            description: 'text_description',
            action: 'CCA-RCA',
            extra_actions: []
          },
          {
            name: 'PLASTICITY',
            names: { en:'PLASTICITY', es:'name'},
            bcolor : '#3F51B5',
            color: '#E6E6E6',
            description: 'text_description',
            action: 'NA',
            extra_actions: []
          },
          {
            name: 'FORCE BLAST',
            names: { en:'FORCE BLAST', es:'name'},
            bcolor : '#750DA6',
            color: '#E6E6E6',
            description: 'text_description',
            action: 'PA',
            extra_actions: []
          },
          {
            name: 'SIDESTEP',
            names: { en:'SIDESTEP', es:'name'},
            bcolor : '#E368E3',
            color: '#1A1A1A',
            description: 'text_description',
            action: 'FA',
            extra_actions: ['M']
          },
          {
            name: 'HYPERSONIC SPEED',
            names: { en:'HYPERSONIC SPEED', es:'name'},
            bcolor : '#694521',
            color: '#E6E6E6',
            description: 'text_description',
            action: 'PA',
            extra_actions: ['M','RCA', 'CCA']
          },
          {
            name: 'STEALTH',
            names: { en:'STEALTH', es:'name'},
            bcolor : '#000000',
            color: '#E6E6E6',
            description: 'text_description',
            action: 'NA',
            extra_actions: []
          },
          {
            name: 'RUNNING SHOT',
            names: { en:'RUNNING SHOT', es:'name'},
            bcolor : '#808080',
            color: '#1A1A1A',
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
            names: { en:'BLADES/CLAWS/FANGS', es:'name'},
            bcolor : '#D4003F',
            color: '#1A1A1A',
            description: 'text_description',
            action: 'NA',
            extra_actions: []
          },
          {
            name: 'ENERGY EXPLOSION',
            names: { en:'ENERGY EXPLOSION', es:'name'},
            bcolor : '#FF9900',
            color: '#1A1A1A',
            description: 'text_description',
            action: 'RCA',
            extra_actions: ['RC']
          },
          {
            name: 'PULSE WAVE',
            names: { en:'PULSE WAVE', es:'name'},
            bcolor : '#FCF647',
            color: '#1A1A1A',
            description: 'text_description',
            action: 'RCA',
            extra_actions: []
          },
          {
            name: 'QUAKE',
            names: { en:'QUAKE', es:'name'},
            bcolor : '#8BC34A',
            color: '#1A1A1A',
            description: 'text_description',
            action: 'CCA',
            extra_actions: ['CC']
          },
          {
            name: 'SUPER STRENGTH',
            names: { en:'SUPER STRENGTH', es:'name'},
            bcolor : '#5DB356',
            color: '#1A1A1A',
            description: 'text_description',
            action: 'NA',
            extra_actions: []
          },
          {
            name: 'INCAPACITATE',
            names: { en:'INCAPACITATE', es:'name'},
            bcolor : '#89C6E8',
            color: '#1A1A1A',
            description: 'text_description',
            action: 'CCA-RCA',
            extra_actions: ['CC', 'RC']
          },
          {
            name: 'PENETRATING/PSYCHIC BLAST',
            names: { en:'PENETRATING/PSYCHIC BLAST', es:'name'},
            bcolor : '#3F51B5',
            color: '#E6E6E6',
            description: 'text_description',
            action: 'RCA',
            extra_actions: ['RC']
          },
          {
            name: 'SMOKE CLOUD',
            names: { en:'SMOKE CLOUD', es:'name'},
            bcolor : '#750DA6',
            color: '#E6E6E6',
            description: 'text_description',
            action: 'PA',
            extra_actions: []
          },
          {
            name: 'PRECISION STRIKE',
            names: { en:'PRECISION STRIKE', es:'name'},
            bcolor : '#E368E3',
            color: '#1A1A1A',
            description: 'text_description',
            action: 'NA',
            extra_actions: []
          },
          {
            name: 'POISON',
            names: { en:'POISON', es:'name'},
            bcolor : '#694521',
            color: '#E6E6E6',
            description: 'text_description',
            action: 'FA',
            extra_actions: []
          },
          {
            name: 'STEAL ENERGY',
            names: { en:'STEAL ENERGY', es:'name'},
            bcolor : '#000000',
            color: '#E6E6E6',
            description: 'text_description',
            action: 'NA',
            extra_actions: []
          },
          {
            name: 'TELEKINESIS',
            names: { en:'TELEKINESIS', es:'name'},
            bcolor : '#808080',
            color: '#1A1A1A',
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
            names: { en:'SUPER SENSES', es:'name'},
            bcolor : '#D4003F',
            color: '#1A1A1A',
            description: 'text_description',
            action: 'NA',
            extra_actions: []
          },
          {
            name: 'TOUGHNESS',
            names: { en:'TOUGHNESS', es:'name'},

            bcolor : '#FF9900',
            color: '#1A1A1A',
            description: 'text_description',
            action: 'NA',
            extra_actions: []
          },
          {
            name: 'DEFEND',
            names: { en:'DEFEND', es:'name'},
            bcolor : '#FCF647',
            color: '#1A1A1A',
            description: 'text_description',
            action: 'NA',
            extra_actions: []
          },
          {
            name: 'COMBAT REFLEXES',
            names: { en:'COMBAT REFLEXES', es:'name'},
            bcolor : '#8BC34A',
            color: '#1A1A1A',
            description: 'text_description',
            action: 'NA',
            extra_actions: []
          },
          {
            name: 'ENERGY SHIELD/DEFLECTION',
            names: { en:'ENERGY SHIELD/DEFLECTION', es:'name'},
            bcolor : '#5DB356',
            color: '#1A1A1A',
            description: 'text_description',
            action: 'NA',
            extra_actions: []
          },
          {
            name: 'BARRIER',
            names: { en:'BARRIER', es:'name'},
            bcolor : '#89C6E8',
            color: '#1A1A1A',
            description: 'text_description',
            action: 'PA',
            extra_actions: []
          },
          {
            name: 'MASTERMIND',
            names: { en:'MASTERMIND', es:'name'},
            bcolor : '#3F51B5',
            color: '#E6E6E6',
            description: 'text_description',
            action: 'NA',
            extra_actions: []
          },
          {
            name: 'WILLPOWER',
            names: { en:'WILLPOWER', es:'name'},
            bcolor : '#750DA6',
            color: '#E6E6E6',
            description: 'text_description',
            action: 'NA',
            extra_actions: []
          },
          {
            name: 'INVINCIBLE',
            names: { en:'INVINCIBLE', es:'name'},
            bcolor : '#E368E3',
            color: '#1A1A1A',
            description: 'text_description',
            action: 'NA',
            extra_actions: []
          },
          {
            name: 'IMPERVIOUS',
            names: { en:'IMPERVIOUS', es:'name'},
            bcolor : '#694521',
            color: '#E6E6E6',
            description: 'text_description',
            action: 'NA',
            extra_actions: []
          },
          {
            name: 'REGENERATION',
            names: { en:'REGENERATION', es:'name'},
            bcolor : '#000000',
            color: '#E6E6E6',
            description: 'text_description',
            action: 'PA',
            extra_actions: []
          },
          {
            name: 'INVULNERABILITY',
            names: { en:'INVULNERABILITY', es:'name'},
            bcolor : '#808080',
            color: '#1A1A1A',
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
            names: { en:'RANGED COMBAT EXPERT', es:'name'},
            bcolor : '#D4003F',
            color: '#1A1A1A',
            description: 'text_description',
            action: 'PA',
            extra_actions: ['RC']
          },
          {
            name: 'BATTLE FURY',
            names: { en:'BATTLE FURY', es:'name'},
            bcolor : '#FF9900',
            color: '#1A1A1A',
            description: 'text_description',
            action: 'NA',
            extra_actions: []
          },
          {
            name: 'SUPPORT',
            names: { en:'SUPPORT', es:'name'},
            bcolor : '#FCF647',
            color: '#1A1A1A',
            description: 'text_description',
            action: 'PA',
            extra_actions: []
          },
          {
            name: 'EXPLOIT WEAKNESS',
            names: { en:'EXPLOIT WEAKNESS', es:'name'},
            bcolor : '#8BC34A',
            color: '#1A1A1A',
            description: 'text_description',
            action: 'CCA',
            extra_actions: ['CC']
          },
          {
            name: 'ENHANCEMENT',
            names: { en:'ENHANCEMENT', es:'name'},
            bcolor : '#5DB356',
            color: '#1A1A1A',
            description: 'text_description',
            action: 'NA',
            extra_actions: []
          },
          {
            name: 'PROBABILITY CONTROL',
            names: { en:'PROBABILITY CONTROL', es:'name'},
            bcolor : '#89C6E8',
            color: '#1A1A1A',
            description: 'text_description',
            action: 'NA',
            extra_actions: []
          },
          {
            name: 'SHAPE CHANGE',
            names: { en:'SHAPE CHANGE', es:'name'},
            bcolor : '#3F51B5',
            color: '#E6E6E6',
            description: 'text_description',
            action: 'NA',
            extra_actions: []
          },
          {
            name: 'CLOSE COMBAT EXPERT',
            names: { en:'CLOSE COMBAT EXPERT', es:'name'},
            bcolor : '#750DA6',
            color: '#E6E6E6',
            description: 'text_description',
            action: 'PA',
            extra_actions: ['CC']
          },
          {
            name: 'EMPOWER',
            names: { en:'EMPOWER', es:'name'},
            bcolor : '#E368E3',
            color: '#1A1A1A',
            description: 'text_description',
            action: 'NA',
            extra_actions: []
          },
          {
            name: 'PERPLEX',
            names: { en:'PERPLEX', es:'name'},
            bcolor : '#694521',
            color: '#E6E6E6',
            description: 'text_description',
            action: 'FA',
            extra_actions: []
          },
          {
            name: 'OUTWIT',
            names: { en:'OUTWIT', es:'name'},
            bcolor : '#000000',
            color: '#E6E6E6',
            description: 'text_description',
            action: 'FA',
            extra_actions: []
          },
          {
            name: 'LEADERSHIP',
            names: { en:'LEADERSHIP', es:'name'},
            bcolor : '#808080',
            color: '#1A1A1A',
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
      }
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
