type ObjDataType = {
  [key: string]: () => number
}

export type ObjType = {
  (x: Array<any>): ObjDataType
}

export const DataObj: ObjType = (x: Array<string>) => {
  return {
    A() {
      return reCalcValue(+x[0]);
    },
    B() {
      return reCalcValue(+x[1]);
    },
    C() {
      console.log(reCalcValue(+x[2]));
      return reCalcValue(+x[2]);
    },
    D() {
      return reCalcValue(this.A() + this.B() + this.C());
    },
    E() {
      return reCalcValue(this.A() + this.B() + this.C() + this.D());
    },
    F() {
      return reCalcValue(this.E() + this.D());
    },
    G() {
      return reCalcValue(this.F() + this.D());
    },
    H() {
      return reCalcValue(this.A() + this.B());
    },
    I() {
      return reCalcValue(this.B() + this.C());
    },
    J() {
      return reCalcValue(this.C() + this.D());
    },
    K() {
      return reCalcValue(this.A() + this.D());
    },
    L() {
      return reCalcValue(this.A() + this.E());
    },
    M() {
      return reCalcValue(this.B() + this.E());
    },
    N() {
      return reCalcValue(this.L() + this.E());
    },
    O() {
      return reCalcValue(this.M() + this.E());
    },
    P() {
      return reCalcValue(this.A() + this.L());
    },
    Q() {
      return reCalcValue(this.B() + this.M());
    },
    R() {
      return reCalcValue(this.C() + this.E());
    },
    S() {
      return reCalcValue(this.R() + this.F());
    },
    T() {
      return reCalcValue(this.R() + this.S());
    },
    U() {
      return reCalcValue(this.S() + this.F());
    },
    V() {
      return reCalcValue(this.B() + this.D());
    },
    W() {
      return reCalcValue(this.A() + this.C());
    },
    X() {
      return reCalcValue(this.W() + this.V());
    },
    Y() {
      return reCalcValue(this.H() + this.J());
    },
    Z() {
      return reCalcValue(this.I() + this.K());
    },
    AA() {
      return reCalcValue(this.Y() + this.Z());
    },
    BB() {
      return reCalcValue(this.X() + this.AA());
    },
    LL() {
      return reCalcValue(this.L() + this.M());
    },
    OO() {
      return reCalcValue(this.L() + this.M() + this.LL());
    },
    MM() {
      return reCalcValue(this.N() + this.O());
    },
    PP() {
      return reCalcValue(this.N() + this.O() + this.MM());
    },
    NN() {
      return reCalcValue(this.P() + this.Q());
    },
    QQ() {
      return reCalcValue(this.P() + this.Q() + this.NN());
    },
    SS() {
      return reCalcValue(this.E() + this.E());
    },
    WW() {
      return reCalcValue(this.E() + this.E() + this.SS());
    },
    TT() {
      return reCalcValue(this.A() + this.B());
    },
    XX() {
      return reCalcValue(this.A() + this.B() + this.TT());
    },
    VV() {
      return reCalcValue(this.C() + this.D());
    },
    ZZ() {
      return reCalcValue(this.C() + this.D() + this.VV());
    },
    RR() {
      return reCalcValue(this.F() + this.S() + this.R());
    },
    ff() {
      return reCalcValue(this.A() + this.B() + this.C() + this.D() + this.F());
    },
    EE() {
      return reCalcValue(this.ff() + this.E());
    },
    HH() {
      return reCalcValue(this.ff() + this.EE());
    },
    CC() {
      return reCalcValue(this.B() + this.C() + this.D() + this.F());
    },
    KK() {
      return reCalcValue(this.EE() + this.ff() + this.CC() + this.A());
    },
  };
};

const reCalcValue = (x: number): number => {

  if (x > 31) {
    let newValue = x.toString().split('');
    let sum = 0;
    for (let i = 0; i < newValue.length; i++) {
      sum = +newValue[i] + sum;
    }
    let newX = sum;
    if (newX > 22) {
      let newValue = newX.toString().split('');
      let sum = 0;
      for (let i = 0; i < newValue.length; i++) {
        sum = +newValue[i] + sum;
      }
      return sum;
    } else {
      return sum;
    }
  }
  if (x > 22) {
    let newValue = x.toString().split('');
    let sum = 0;
    for (let i = 0; i < newValue.length; i++) {
      sum = +newValue[i] + sum;
    }
    x = sum;
    return x;
  } else {
    return x;
  }
};


export const TalentsVar: Array<uiVarType> = [
  {
    A: {
      title: '',
      text: ''
    }

  },
  {
    B: {
      title: '',
      text: ''
    }
  },
  {
    C: {
      title: '',
      text: ''
    }
  }
];
export const FamilyKarmicManVar: Array<uiVarType> = [
  {
    H: {
      title: '',
      text: ''
    }

  },
  {
    I: {
      title: '',
      text: ''
    }
  }];
export const FamilyKarmicWomanVar: Array<uiVarType> = [
  {
    J: {
      title: '',
      text: ''
    }
  },
  {
    K: {
      title: '',
      text: ''
    }
  }
];
export const LmLlVar: Array<uiVarType> = [
  {M: {title: '', text: ''}},
  {L: {title: '', text: ''}},
  {LL: {title: '', text: ''}}
];

export const OOVar: Array<uiVarType> = [
  {OO: {title: '', text: ''}},
];

export const KarmicVar: Array<uiVarType> = [
  {
    D: {
      title: '',
      text: ''
    }
  },
  {
    G: {
      title: '',
      text: ''
    }
  }
];

export const Someone: Array<uiVarType> = [
  {
    V: {
      title: '',
      text: ''
    }
  },
  {
    W: {
      title: '',
      text: ''
    }
  },
  {
    X: {
      title: '',
      text: ''
    }
  }
];

export const SomeonePowerVar: Array<uiVarType> = [
  {
    E: {
      title: '',
      text: ''
    }
  },
];

export const EnergyVar: Array<uiVarType> = [
  {
    HH: {
      title: '',
      text: ''
    }
  },
];

export const Svar: Array<uiVarType> = [
  {
    S: {
      title: '',
      text: ''
    }
  }
];
export const RTvar: Array<uiVarType> = [
  {
    R: {
      title: '',
      text: ''
    },
  },
  {
    T: {
      title: '',
      text: ''
    },
  },
];
export const VWXvar: Array<uiVarType> = [
  {
    V: {
      title: '',
      text: ''
    },
  },
  {
    W: {
      title: '',
      text: ''
    },
  },
  {
    X: {
      title: '',
      text: ''
    },
  },
];
export const YZaAvar: Array<uiVarType> = [
  {
    Y: {
      title: '',
      text: ''
    },
  },
  {
    Z: {
      title: '',
      text: ''
    },
  },
  {
    AA: {
      title: '',
      text: ''
    },
  },
];
export const BBvar: Array<uiVarType> = [
  {
    BB: {
      title: '',
      text: ''
    },
  }
];
export const HHvar: Array<uiVarType> = [
  {
    HH: {
      title: '',
      text: ''
    },
  }
];
export const RRvar: Array<uiVarType> = [
  {
    RR: {
      title: '',
      text: ''
    },
  }
];
export const NOmMpPvar: Array<uiVarType> = [
  {
    N: {
      title: '',
      text: ''
    },
  },
  {
    O: {
      title: '',
      text: ''
    },
  },
  {
    MM: {
      title: '',
      text: ''
    },
  },
  {
    PP: {
      title: '',
      text: ''
    },
  },
];
export const PQnNqQvar: Array<uiVarType> = [
  {
    P: {
      title: '',
      text: ''
    },
  },
  {
    Q: {
      title: '',
      text: ''
    },
  },
  {
    NN: {
      title: '',
      text: ''
    },
  },
  {
    QQ: {
      title: '',
      text: ''
    },
  },
];
export const EEsSwWvar: Array<uiVarType> = [
  {
    E: {
      title: '',
      text: ''
    },
  },
  {
    E: {
      title: '',
      text: ''
    },
  },
  {
    SS: {
      title: '',
      text: ''
    },
  },
  {
    VV: {
      title: '',
      text: ''
    },
  },
];
export const CDvVzZvar: Array<uiVarType> = [
  {
    C: {
      title: '',
      text: ''
    },
  },
  {
    D: {
      title: '',
      text: ''
    },
  },
  {
    VV: {
      title: '',
      text: ''
    },
  },
  {
    ZZ: {
      title: '',
      text: ''
    },
  },
];
export const ABtTxXvar: Array<uiVarType> = [
  {
    A: {
      title: '',
      text: ''
    },
  },
  {
    B: {
      title: '',
      text: ''
    },
  },
  {
    TT: {
      title: '',
      text: ''
    },
  },
  {
    XX: {
      title: '',
      text: ''
    },
  },
];

export type contentType = {
  title: string
  text: string
}

export type linkContentType = {
  link: string
  text: string
}

export type uiVarType = {
  [key: string]: contentType
}

export function TalentsArray(x: Array<uiVarType>, y: ObjType, dateValue: Array<string>, t: Array<contentType>) {
  if (dateValue.length < 3) return;
  let newArr: any = [];
  for (let i = 0; i < x.length; i++) {
    newArr = [...newArr, {[`${Object.keys(x[i])}`]: DiffCase(y(dateValue)[`${Object.keys(x[i])}`](), t)}];
  }

  return newArr;
}

export function SimpleTalentsArray(x: Array<uiVarType>, y: ObjType, dateValue: Array<string>) {
  if (dateValue.length < 3) return;
  let newArr: any = [];
  for (let i = 0; i < x.length; i++) {
    newArr = [...newArr, {
      [`${Object.keys(x[i])}`]: y(dateValue)[`${Object.keys(x[i])}`]()
    }];
  }
  return newArr;
}

export const DiffCase = (x: number, y: Array<contentType>) => {
  for (let i = 0; i < y.length; i++) {
    if (x - 1 === i) {
      return y[i];
    }
  }
};




