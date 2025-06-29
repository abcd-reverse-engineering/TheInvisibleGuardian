window.skins={};
                function __extends(d, b) {
                    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
                        function __() {
                            this.constructor = d;
                        }
                    __.prototype = b.prototype;
                    d.prototype = new __();
                };
                window.generateEUI = {};
                generateEUI.paths = {};
                generateEUI.styles = undefined;
                generateEUI.skins = {"Setting":"resource/eui_skins/Setting.exml","SettingButton":"resource/eui_skins/SettingButton.exml","SettingToggle":"resource/eui_skins/SettingToggle.exml","ChapterJump":"resource/eui_skins/ChapterJump.exml","VideoRetry":"resource/eui_skins/VideoRetry.exml","Chapter":"resource/eui_skins/Chapter.exml","Record":"resource/eui_skins/Record.exml","HiddenStory":"resource/eui_skins/HiddenStory.exml","HiddenStoryItem":"resource/eui_skins/HiddenStoryItem.exml","Exclamation":"resource/eui_skins/Exclamation.exml","Skin.Rank":"resource/eui_skins/Rank.exml","Prompt":"resource/eui_skins/Prompt.exml"};generateEUI.paths['resource/eui_skins/BadEnd.exml'] = window.BadEndSkin = (function (_super) {
	__extends(BadEndSkin, _super);
	var BadEndSkin$Skin1 = 	(function (_super) {
		__extends(BadEndSkin$Skin1, _super);
		function BadEndSkin$Skin1() {
			_super.call(this);
			this.skinParts = ["labelDisplay"];
			
			this.elementsContent = [this._Image1_i(),this.labelDisplay_i()];
			this.states = [
				new eui.State ("up",
					[
					])
				,
				new eui.State ("down",
					[
						new eui.SetProperty("_Image1","source","jiesuan_fanhuigushixian_btn02_png")
					])
				,
				new eui.State ("disabled",
					[
					])
				,
				new eui.State ("move",
					[
						new eui.SetProperty("_Image1","source","jiesuan_fanhuigushixian_btn01_png")
					])
			];
		}
		var _proto = BadEndSkin$Skin1.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			this._Image1 = t;
			t.percentHeight = 100;
			t.source = "jiesuan_fanhuigushixian_btn00_png";
			t.percentWidth = 100;
			return t;
		};
		_proto.labelDisplay_i = function () {
			var t = new eui.Label();
			this.labelDisplay = t;
			t.horizontalCenter = 0;
			t.verticalCenter = 0;
			return t;
		};
		return BadEndSkin$Skin1;
	})(eui.Skin);

	var BadEndSkin$Skin2 = 	(function (_super) {
		__extends(BadEndSkin$Skin2, _super);
		function BadEndSkin$Skin2() {
			_super.call(this);
			this.skinParts = ["labelDisplay"];
			
			this.elementsContent = [this._Image1_i(),this.labelDisplay_i()];
			this.states = [
				new eui.State ("up",
					[
					])
				,
				new eui.State ("down",
					[
						new eui.SetProperty("_Image1","source","jiesuan_bangzhu_btn02_png")
					])
				,
				new eui.State ("disabled",
					[
					])
				,
				new eui.State ("move",
					[
						new eui.SetProperty("_Image1","source","jiesuan_bangzhu_btn01_png")
					])
			];
		}
		var _proto = BadEndSkin$Skin2.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			this._Image1 = t;
			t.percentHeight = 100;
			t.source = "jiesuan_bangzhu_btn00_png";
			t.percentWidth = 100;
			return t;
		};
		_proto.labelDisplay_i = function () {
			var t = new eui.Label();
			this.labelDisplay = t;
			t.horizontalCenter = 0;
			t.verticalCenter = 0;
			return t;
		};
		return BadEndSkin$Skin2;
	})(eui.Skin);

	var BadEndSkin$Skin3 = 	(function (_super) {
		__extends(BadEndSkin$Skin3, _super);
		function BadEndSkin$Skin3() {
			_super.call(this);
			this.skinParts = ["labelDisplay"];
			
			this.elementsContent = [this._Image1_i(),this.labelDisplay_i()];
			this.states = [
				new eui.State ("up",
					[
					])
				,
				new eui.State ("down",
					[
						new eui.SetProperty("_Image1","source","jiesuan_bencimianfei_btn02_png")
					])
				,
				new eui.State ("disabled",
					[
					])
				,
				new eui.State ("move",
					[
						new eui.SetProperty("_Image1","source","jiesuan_bencimianfei_btn01_png")
					])
			];
		}
		var _proto = BadEndSkin$Skin3.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			this._Image1 = t;
			t.percentHeight = 100;
			t.source = "jiesuan_bencimianfei_btn00_png";
			t.percentWidth = 100;
			return t;
		};
		_proto.labelDisplay_i = function () {
			var t = new eui.Label();
			this.labelDisplay = t;
			t.horizontalCenter = 0;
			t.verticalCenter = 0;
			return t;
		};
		return BadEndSkin$Skin3;
	})(eui.Skin);

	var BadEndSkin$Skin4 = 	(function (_super) {
		__extends(BadEndSkin$Skin4, _super);
		function BadEndSkin$Skin4() {
			_super.call(this);
			this.skinParts = ["labelDisplay"];
			
			this.elementsContent = [this._Rect1_i(),this._Image1_i(),this.labelDisplay_i()];
			this.states = [
				new eui.State ("up",
					[
					])
				,
				new eui.State ("down",
					[
						new eui.SetProperty("_Image1","source","tongyong_fanhui_icon02_png")
					])
				,
				new eui.State ("disabled",
					[
					])
				,
				new eui.State ("move",
					[
						new eui.SetProperty("_Image1","source","tongyong_fanhui_icon01_png")
					])
			];
		}
		var _proto = BadEndSkin$Skin4.prototype;

		_proto._Rect1_i = function () {
			var t = new eui.Rect();
			t.bottom = 0;
			t.fillAlpha = 0;
			t.left = 0;
			t.right = 0;
			t.top = 0;
			return t;
		};
		_proto._Image1_i = function () {
			var t = new eui.Image();
			this._Image1 = t;
			t.left = 29;
			t.source = "tongyong_fanhui_icon00_png";
			t.top = 3;
			return t;
		};
		_proto.labelDisplay_i = function () {
			var t = new eui.Label();
			this.labelDisplay = t;
			t.fontFamily = "fangzheng";
			t.size = 30;
			t.textColor = 0xffffff;
			t.verticalCenter = 0;
			t.x = 88;
			return t;
		};
		return BadEndSkin$Skin4;
	})(eui.Skin);

	function BadEndSkin() {
		_super.call(this);
		this.skinParts = ["startTween","freeTween","firstTween","textInfo","image0","textTitle","imgMedal","image","image1","gMedal","image6","image5","btnStory","image7","gStory","btnPass","image3","image2","btnFree","image4","btnFreepass","group","gFirstbadend","gFirstrevive","gContent","layRect","btnReturn"];
		
		this.height = 1080;
		this.width = 1920;
		this.startTween_i();
		this.freeTween_i();
		this.firstTween_i();
		this.elementsContent = [this._Rect1_i(),this._Image1_i(),this.gContent_i(),this.layRect_i(),this.btnReturn_i()];
		
		eui.Binding.$bindProperties(this, ["image"],[0],this._TweenItem1,"target");
		eui.Binding.$bindProperties(this, [0],[],this._Object1,"alpha");
		eui.Binding.$bindProperties(this, [1.5],[],this._Object1,"scaleX");
		eui.Binding.$bindProperties(this, [1.5],[],this._Object1,"scaleY");
		eui.Binding.$bindProperties(this, [0.35],[],this._Object2,"alpha");
		eui.Binding.$bindProperties(this, [0],[],this._Object3,"alpha");
		eui.Binding.$bindProperties(this, [2],[],this._Object3,"scaleX");
		eui.Binding.$bindProperties(this, [1.75],[],this._Object3,"scaleY");
		eui.Binding.$bindProperties(this, ["textTitle"],[0],this._TweenItem2,"target");
		eui.Binding.$bindProperties(this, [0],[],this._Object4,"alpha");
		eui.Binding.$bindProperties(this, [1],[],this._Object5,"alpha");
		eui.Binding.$bindProperties(this, [0],[],this._Object6,"alpha");
		eui.Binding.$bindProperties(this, [1],[],this._Object7,"alpha");
		eui.Binding.$bindProperties(this, [0.3],[],this._Object8,"alpha");
		eui.Binding.$bindProperties(this, [1],[],this._Object9,"alpha");
		eui.Binding.$bindProperties(this, ["image0"],[0],this._TweenItem3,"target");
		eui.Binding.$bindProperties(this, [1],[],this._Object10,"alpha");
		eui.Binding.$bindProperties(this, [0],[],this._Object10,"scaleX");
		eui.Binding.$bindProperties(this, [0],[],this._Object10,"scaleY");
		eui.Binding.$bindProperties(this, [1],[],this._Object11,"alpha");
		eui.Binding.$bindProperties(this, [1],[],this._Object11,"scaleX");
		eui.Binding.$bindProperties(this, [1],[],this._Object11,"scaleY");
		eui.Binding.$bindProperties(this, ["group"],[0],this._TweenItem4,"target");
		eui.Binding.$bindProperties(this, [0],[],this._Object12,"alpha");
		eui.Binding.$bindProperties(this, [1],[],this._Object13,"alpha");
		eui.Binding.$bindProperties(this, ["textInfo"],[0],this._TweenItem5,"target");
		eui.Binding.$bindProperties(this, [0],[],this._Object14,"alpha");
		eui.Binding.$bindProperties(this, [1],[],this._Object15,"alpha");
		eui.Binding.$bindProperties(this, ["image1"],[0],this._TweenItem6,"target");
		eui.Binding.$bindProperties(this, [0],[],this._Object16,"alpha");
		eui.Binding.$bindProperties(this, [1],[],this._Object17,"alpha");
		eui.Binding.$bindProperties(this, [0],[],this._Object18,"alpha");
		eui.Binding.$bindProperties(this, ["image2"],[0],this._TweenItem7,"target");
		eui.Binding.$bindProperties(this, [0],[],this._Object20,"alpha");
		eui.Binding.$bindProperties(this, [0.7],[],this._Object21,"alpha");
		eui.Binding.$bindProperties(this, [1],[],this._Object22,"alpha");
		eui.Binding.$bindProperties(this, [1.15],[],this._Object22,"scaleX");
		eui.Binding.$bindProperties(this, [1.55],[],this._Object22,"scaleY");
		eui.Binding.$bindProperties(this, [0],[],this._Object23,"alpha");
		eui.Binding.$bindProperties(this, [1.28],[],this._Object23,"scaleX");
		eui.Binding.$bindProperties(this, [2],[],this._Object23,"scaleY");
		eui.Binding.$bindProperties(this, ["image3"],[0],this._TweenItem8,"target");
		eui.Binding.$bindProperties(this, [0],[],this._Object25,"alpha");
		eui.Binding.$bindProperties(this, [0.7],[],this._Object26,"alpha");
		eui.Binding.$bindProperties(this, [1],[],this._Object27,"alpha");
		eui.Binding.$bindProperties(this, [1.15],[],this._Object27,"scaleX");
		eui.Binding.$bindProperties(this, [1.55],[],this._Object27,"scaleY");
		eui.Binding.$bindProperties(this, [0],[],this._Object28,"alpha");
		eui.Binding.$bindProperties(this, [1.28],[],this._Object28,"scaleX");
		eui.Binding.$bindProperties(this, [2],[],this._Object28,"scaleY");
		eui.Binding.$bindProperties(this, ["image4"],[0],this._TweenItem9,"target");
		eui.Binding.$bindProperties(this, [0],[],this._Object30,"alpha");
		eui.Binding.$bindProperties(this, [1],[],this._Object31,"alpha");
		eui.Binding.$bindProperties(this, [0],[],this._Object32,"alpha");
		eui.Binding.$bindProperties(this, [0],[],this._Object33,"alpha");
		eui.Binding.$bindProperties(this, [1],[],this._Object34,"alpha");
		eui.Binding.$bindProperties(this, [0],[],this._Object35,"alpha");
		eui.Binding.$bindProperties(this, ["image5"],[0],this._TweenItem10,"target");
		eui.Binding.$bindProperties(this, [0],[],this._Object37,"alpha");
		eui.Binding.$bindProperties(this, [0.7],[],this._Object38,"alpha");
		eui.Binding.$bindProperties(this, [1],[],this._Object39,"alpha");
		eui.Binding.$bindProperties(this, [1.15],[],this._Object39,"scaleX");
		eui.Binding.$bindProperties(this, [1.55],[],this._Object39,"scaleY");
		eui.Binding.$bindProperties(this, [0],[],this._Object40,"alpha");
		eui.Binding.$bindProperties(this, [1.28],[],this._Object40,"scaleX");
		eui.Binding.$bindProperties(this, [2],[],this._Object40,"scaleY");
		eui.Binding.$bindProperties(this, ["image6"],[0],this._TweenItem11,"target");
		eui.Binding.$bindProperties(this, [0],[],this._Object42,"alpha");
		eui.Binding.$bindProperties(this, [0.7],[],this._Object43,"alpha");
		eui.Binding.$bindProperties(this, [1],[],this._Object44,"alpha");
		eui.Binding.$bindProperties(this, [1.15],[],this._Object44,"scaleX");
		eui.Binding.$bindProperties(this, [1.55],[],this._Object44,"scaleY");
		eui.Binding.$bindProperties(this, [0],[],this._Object45,"alpha");
		eui.Binding.$bindProperties(this, [1.28],[],this._Object45,"scaleX");
		eui.Binding.$bindProperties(this, [2],[],this._Object45,"scaleY");
		eui.Binding.$bindProperties(this, ["image7"],[0],this._TweenItem12,"target");
		eui.Binding.$bindProperties(this, [0],[],this._Object47,"alpha");
		eui.Binding.$bindProperties(this, [1],[],this._Object48,"alpha");
		eui.Binding.$bindProperties(this, [0],[],this._Object49,"alpha");
		eui.Binding.$bindProperties(this, [0],[],this._Object50,"alpha");
		eui.Binding.$bindProperties(this, [1],[],this._Object51,"alpha");
		eui.Binding.$bindProperties(this, [0],[],this._Object52,"alpha");
	}
	var _proto = BadEndSkin.prototype;

	_proto.startTween_i = function () {
		var t = new egret.tween.TweenGroup();
		this.startTween = t;
		t.items = [this._TweenItem1_i(),this._TweenItem2_i(),this._TweenItem3_i(),this._TweenItem4_i(),this._TweenItem5_i(),this._TweenItem6_i()];
		return t;
	};
	_proto._TweenItem1_i = function () {
		var t = new egret.tween.TweenItem();
		this._TweenItem1 = t;
		t.paths = [this._Set1_i(),this._To1_i(),this._To2_i()];
		return t;
	};
	_proto._Set1_i = function () {
		var t = new egret.tween.Set();
		t.props = this._Object1_i();
		return t;
	};
	_proto._Object1_i = function () {
		var t = {};
		this._Object1 = t;
		return t;
	};
	_proto._To1_i = function () {
		var t = new egret.tween.To();
		t.duration = 500;
		t.props = this._Object2_i();
		return t;
	};
	_proto._Object2_i = function () {
		var t = {};
		this._Object2 = t;
		return t;
	};
	_proto._To2_i = function () {
		var t = new egret.tween.To();
		t.duration = 850;
		t.props = this._Object3_i();
		return t;
	};
	_proto._Object3_i = function () {
		var t = {};
		this._Object3 = t;
		return t;
	};
	_proto._TweenItem2_i = function () {
		var t = new egret.tween.TweenItem();
		this._TweenItem2 = t;
		t.paths = [this._Wait1_i(),this._Set2_i(),this._To3_i(),this._To4_i(),this._To5_i(),this._To6_i(),this._To7_i()];
		return t;
	};
	_proto._Wait1_i = function () {
		var t = new egret.tween.Wait();
		t.duration = 1350;
		return t;
	};
	_proto._Set2_i = function () {
		var t = new egret.tween.Set();
		t.props = this._Object4_i();
		return t;
	};
	_proto._Object4_i = function () {
		var t = {};
		this._Object4 = t;
		return t;
	};
	_proto._To3_i = function () {
		var t = new egret.tween.To();
		t.duration = 200;
		t.props = this._Object5_i();
		return t;
	};
	_proto._Object5_i = function () {
		var t = {};
		this._Object5 = t;
		return t;
	};
	_proto._To4_i = function () {
		var t = new egret.tween.To();
		t.duration = 150;
		t.props = this._Object6_i();
		return t;
	};
	_proto._Object6_i = function () {
		var t = {};
		this._Object6 = t;
		return t;
	};
	_proto._To5_i = function () {
		var t = new egret.tween.To();
		t.duration = 150;
		t.props = this._Object7_i();
		return t;
	};
	_proto._Object7_i = function () {
		var t = {};
		this._Object7 = t;
		return t;
	};
	_proto._To6_i = function () {
		var t = new egret.tween.To();
		t.duration = 100;
		t.props = this._Object8_i();
		return t;
	};
	_proto._Object8_i = function () {
		var t = {};
		this._Object8 = t;
		return t;
	};
	_proto._To7_i = function () {
		var t = new egret.tween.To();
		t.duration = 100;
		t.props = this._Object9_i();
		return t;
	};
	_proto._Object9_i = function () {
		var t = {};
		this._Object9 = t;
		return t;
	};
	_proto._TweenItem3_i = function () {
		var t = new egret.tween.TweenItem();
		this._TweenItem3 = t;
		t.paths = [this._Wait2_i(),this._Set3_i(),this._To8_i()];
		return t;
	};
	_proto._Wait2_i = function () {
		var t = new egret.tween.Wait();
		t.duration = 1150;
		return t;
	};
	_proto._Set3_i = function () {
		var t = new egret.tween.Set();
		t.props = this._Object10_i();
		return t;
	};
	_proto._Object10_i = function () {
		var t = {};
		this._Object10 = t;
		return t;
	};
	_proto._To8_i = function () {
		var t = new egret.tween.To();
		t.duration = 1000;
		t.props = this._Object11_i();
		return t;
	};
	_proto._Object11_i = function () {
		var t = {};
		this._Object11 = t;
		return t;
	};
	_proto._TweenItem4_i = function () {
		var t = new egret.tween.TweenItem();
		this._TweenItem4 = t;
		t.paths = [this._Wait3_i(),this._Set4_i(),this._To9_i()];
		return t;
	};
	_proto._Wait3_i = function () {
		var t = new egret.tween.Wait();
		t.duration = 2650;
		return t;
	};
	_proto._Set4_i = function () {
		var t = new egret.tween.Set();
		t.props = this._Object12_i();
		return t;
	};
	_proto._Object12_i = function () {
		var t = {};
		this._Object12 = t;
		return t;
	};
	_proto._To9_i = function () {
		var t = new egret.tween.To();
		t.duration = 1350;
		t.props = this._Object13_i();
		return t;
	};
	_proto._Object13_i = function () {
		var t = {};
		this._Object13 = t;
		return t;
	};
	_proto._TweenItem5_i = function () {
		var t = new egret.tween.TweenItem();
		this._TweenItem5 = t;
		t.paths = [this._Wait4_i(),this._Set5_i(),this._To10_i()];
		return t;
	};
	_proto._Wait4_i = function () {
		var t = new egret.tween.Wait();
		t.duration = 550;
		return t;
	};
	_proto._Set5_i = function () {
		var t = new egret.tween.Set();
		t.props = this._Object14_i();
		return t;
	};
	_proto._Object14_i = function () {
		var t = {};
		this._Object14 = t;
		return t;
	};
	_proto._To10_i = function () {
		var t = new egret.tween.To();
		t.duration = 1450;
		t.props = this._Object15_i();
		return t;
	};
	_proto._Object15_i = function () {
		var t = {};
		this._Object15 = t;
		return t;
	};
	_proto._TweenItem6_i = function () {
		var t = new egret.tween.TweenItem();
		this._TweenItem6 = t;
		t.paths = [this._Set6_i(),this._To11_i(),this._To12_i()];
		return t;
	};
	_proto._Set6_i = function () {
		var t = new egret.tween.Set();
		t.props = this._Object16_i();
		return t;
	};
	_proto._Object16_i = function () {
		var t = {};
		this._Object16 = t;
		return t;
	};
	_proto._To11_i = function () {
		var t = new egret.tween.To();
		t.duration = 300;
		t.props = this._Object17_i();
		return t;
	};
	_proto._Object17_i = function () {
		var t = {};
		this._Object17 = t;
		return t;
	};
	_proto._To12_i = function () {
		var t = new egret.tween.To();
		t.duration = 700;
		t.props = this._Object18_i();
		return t;
	};
	_proto._Object18_i = function () {
		var t = {};
		this._Object18 = t;
		return t;
	};
	_proto.freeTween_i = function () {
		var t = new egret.tween.TweenGroup();
		this.freeTween = t;
		t.items = [this._TweenItem7_i(),this._TweenItem8_i(),this._TweenItem9_i()];
		return t;
	};
	_proto._TweenItem7_i = function () {
		var t = new egret.tween.TweenItem();
		this._TweenItem7 = t;
		t.props = this._Object19_i();
		t.paths = [this._Set7_i(),this._To13_i(),this._To14_i(),this._To15_i()];
		return t;
	};
	_proto._Object19_i = function () {
		var t = {};
		t.loop = "true";
		return t;
	};
	_proto._Set7_i = function () {
		var t = new egret.tween.Set();
		t.props = this._Object20_i();
		return t;
	};
	_proto._Object20_i = function () {
		var t = {};
		this._Object20 = t;
		return t;
	};
	_proto._To13_i = function () {
		var t = new egret.tween.To();
		t.duration = 500;
		t.props = this._Object21_i();
		return t;
	};
	_proto._Object21_i = function () {
		var t = {};
		this._Object21 = t;
		return t;
	};
	_proto._To14_i = function () {
		var t = new egret.tween.To();
		t.duration = 1050;
		t.props = this._Object22_i();
		return t;
	};
	_proto._Object22_i = function () {
		var t = {};
		this._Object22 = t;
		return t;
	};
	_proto._To15_i = function () {
		var t = new egret.tween.To();
		t.duration = 2450;
		t.props = this._Object23_i();
		return t;
	};
	_proto._Object23_i = function () {
		var t = {};
		this._Object23 = t;
		return t;
	};
	_proto._TweenItem8_i = function () {
		var t = new egret.tween.TweenItem();
		this._TweenItem8 = t;
		t.props = this._Object24_i();
		t.paths = [this._Wait5_i(),this._Set8_i(),this._To16_i(),this._To17_i(),this._To18_i()];
		return t;
	};
	_proto._Object24_i = function () {
		var t = {};
		t.loop = "true";
		return t;
	};
	_proto._Wait5_i = function () {
		var t = new egret.tween.Wait();
		t.duration = 2000;
		return t;
	};
	_proto._Set8_i = function () {
		var t = new egret.tween.Set();
		t.props = this._Object25_i();
		return t;
	};
	_proto._Object25_i = function () {
		var t = {};
		this._Object25 = t;
		return t;
	};
	_proto._To16_i = function () {
		var t = new egret.tween.To();
		t.duration = 500;
		t.props = this._Object26_i();
		return t;
	};
	_proto._Object26_i = function () {
		var t = {};
		this._Object26 = t;
		return t;
	};
	_proto._To17_i = function () {
		var t = new egret.tween.To();
		t.duration = 1050;
		t.props = this._Object27_i();
		return t;
	};
	_proto._Object27_i = function () {
		var t = {};
		this._Object27 = t;
		return t;
	};
	_proto._To18_i = function () {
		var t = new egret.tween.To();
		t.duration = 2150;
		t.props = this._Object28_i();
		return t;
	};
	_proto._Object28_i = function () {
		var t = {};
		this._Object28 = t;
		return t;
	};
	_proto._TweenItem9_i = function () {
		var t = new egret.tween.TweenItem();
		this._TweenItem9 = t;
		t.props = this._Object29_i();
		t.paths = [this._Set9_i(),this._To19_i(),this._To20_i(),this._To21_i(),this._To22_i(),this._To23_i()];
		return t;
	};
	_proto._Object29_i = function () {
		var t = {};
		t.loop = "true";
		return t;
	};
	_proto._Set9_i = function () {
		var t = new egret.tween.Set();
		t.props = this._Object30_i();
		return t;
	};
	_proto._Object30_i = function () {
		var t = {};
		this._Object30 = t;
		return t;
	};
	_proto._To19_i = function () {
		var t = new egret.tween.To();
		t.duration = 500;
		t.props = this._Object31_i();
		return t;
	};
	_proto._Object31_i = function () {
		var t = {};
		this._Object31 = t;
		return t;
	};
	_proto._To20_i = function () {
		var t = new egret.tween.To();
		t.duration = 800;
		t.props = this._Object32_i();
		return t;
	};
	_proto._Object32_i = function () {
		var t = {};
		this._Object32 = t;
		return t;
	};
	_proto._To21_i = function () {
		var t = new egret.tween.To();
		t.duration = 700;
		t.props = this._Object33_i();
		return t;
	};
	_proto._Object33_i = function () {
		var t = {};
		this._Object33 = t;
		return t;
	};
	_proto._To22_i = function () {
		var t = new egret.tween.To();
		t.duration = 500;
		t.props = this._Object34_i();
		return t;
	};
	_proto._Object34_i = function () {
		var t = {};
		this._Object34 = t;
		return t;
	};
	_proto._To23_i = function () {
		var t = new egret.tween.To();
		t.duration = 800;
		t.props = this._Object35_i();
		return t;
	};
	_proto._Object35_i = function () {
		var t = {};
		this._Object35 = t;
		return t;
	};
	_proto.firstTween_i = function () {
		var t = new egret.tween.TweenGroup();
		this.firstTween = t;
		t.items = [this._TweenItem10_i(),this._TweenItem11_i(),this._TweenItem12_i()];
		return t;
	};
	_proto._TweenItem10_i = function () {
		var t = new egret.tween.TweenItem();
		this._TweenItem10 = t;
		t.props = this._Object36_i();
		t.paths = [this._Set10_i(),this._To24_i(),this._To25_i(),this._To26_i()];
		return t;
	};
	_proto._Object36_i = function () {
		var t = {};
		t.loop = "true";
		return t;
	};
	_proto._Set10_i = function () {
		var t = new egret.tween.Set();
		t.props = this._Object37_i();
		return t;
	};
	_proto._Object37_i = function () {
		var t = {};
		this._Object37 = t;
		return t;
	};
	_proto._To24_i = function () {
		var t = new egret.tween.To();
		t.duration = 500;
		t.props = this._Object38_i();
		return t;
	};
	_proto._Object38_i = function () {
		var t = {};
		this._Object38 = t;
		return t;
	};
	_proto._To25_i = function () {
		var t = new egret.tween.To();
		t.duration = 1050;
		t.props = this._Object39_i();
		return t;
	};
	_proto._Object39_i = function () {
		var t = {};
		this._Object39 = t;
		return t;
	};
	_proto._To26_i = function () {
		var t = new egret.tween.To();
		t.duration = 2450;
		t.props = this._Object40_i();
		return t;
	};
	_proto._Object40_i = function () {
		var t = {};
		this._Object40 = t;
		return t;
	};
	_proto._TweenItem11_i = function () {
		var t = new egret.tween.TweenItem();
		this._TweenItem11 = t;
		t.props = this._Object41_i();
		t.paths = [this._Wait6_i(),this._Set11_i(),this._To27_i(),this._To28_i(),this._To29_i()];
		return t;
	};
	_proto._Object41_i = function () {
		var t = {};
		t.loop = "true";
		return t;
	};
	_proto._Wait6_i = function () {
		var t = new egret.tween.Wait();
		t.duration = 2000;
		return t;
	};
	_proto._Set11_i = function () {
		var t = new egret.tween.Set();
		t.props = this._Object42_i();
		return t;
	};
	_proto._Object42_i = function () {
		var t = {};
		this._Object42 = t;
		return t;
	};
	_proto._To27_i = function () {
		var t = new egret.tween.To();
		t.duration = 500;
		t.props = this._Object43_i();
		return t;
	};
	_proto._Object43_i = function () {
		var t = {};
		this._Object43 = t;
		return t;
	};
	_proto._To28_i = function () {
		var t = new egret.tween.To();
		t.duration = 1050;
		t.props = this._Object44_i();
		return t;
	};
	_proto._Object44_i = function () {
		var t = {};
		this._Object44 = t;
		return t;
	};
	_proto._To29_i = function () {
		var t = new egret.tween.To();
		t.duration = 2150;
		t.props = this._Object45_i();
		return t;
	};
	_proto._Object45_i = function () {
		var t = {};
		this._Object45 = t;
		return t;
	};
	_proto._TweenItem12_i = function () {
		var t = new egret.tween.TweenItem();
		this._TweenItem12 = t;
		t.props = this._Object46_i();
		t.paths = [this._Set12_i(),this._To30_i(),this._To31_i(),this._To32_i(),this._To33_i(),this._To34_i()];
		return t;
	};
	_proto._Object46_i = function () {
		var t = {};
		t.loop = "true";
		return t;
	};
	_proto._Set12_i = function () {
		var t = new egret.tween.Set();
		t.props = this._Object47_i();
		return t;
	};
	_proto._Object47_i = function () {
		var t = {};
		this._Object47 = t;
		return t;
	};
	_proto._To30_i = function () {
		var t = new egret.tween.To();
		t.duration = 500;
		t.props = this._Object48_i();
		return t;
	};
	_proto._Object48_i = function () {
		var t = {};
		this._Object48 = t;
		return t;
	};
	_proto._To31_i = function () {
		var t = new egret.tween.To();
		t.duration = 800;
		t.props = this._Object49_i();
		return t;
	};
	_proto._Object49_i = function () {
		var t = {};
		this._Object49 = t;
		return t;
	};
	_proto._To32_i = function () {
		var t = new egret.tween.To();
		t.duration = 700;
		t.props = this._Object50_i();
		return t;
	};
	_proto._Object50_i = function () {
		var t = {};
		this._Object50 = t;
		return t;
	};
	_proto._To33_i = function () {
		var t = new egret.tween.To();
		t.duration = 500;
		t.props = this._Object51_i();
		return t;
	};
	_proto._Object51_i = function () {
		var t = {};
		this._Object51 = t;
		return t;
	};
	_proto._To34_i = function () {
		var t = new egret.tween.To();
		t.duration = 800;
		t.props = this._Object52_i();
		return t;
	};
	_proto._Object52_i = function () {
		var t = {};
		this._Object52 = t;
		return t;
	};
	_proto._Rect1_i = function () {
		var t = new eui.Rect();
		t.bottom = 0;
		t.left = 0;
		t.right = 0;
		t.top = 0;
		return t;
	};
	_proto._Image1_i = function () {
		var t = new eui.Image();
		t.bottom = 0;
		t.left = 0;
		t.right = 0;
		t.source = "be_bg_jpg";
		t.top = 0;
		return t;
	};
	_proto.gContent_i = function () {
		var t = new eui.Group();
		this.gContent = t;
		t.height = 1080;
		t.horizontalCenter = 0;
		t.verticalCenter = 0;
		t.width = 1920;
		t.elementsContent = [this._Group1_i(),this.textTitle_i(),this.gMedal_i(),this.group_i(),this.gFirstbadend_i(),this.gFirstrevive_i()];
		return t;
	};
	_proto._Group1_i = function () {
		var t = new eui.Group();
		t.height = 108;
		t.horizontalCenter = 0;
		t.width = 1724;
		t.y = 472;
		t.elementsContent = [this.textInfo_i(),this.image0_i()];
		return t;
	};
	_proto.textInfo_i = function () {
		var t = new eui.Label();
		this.textInfo = t;
		t.alpha = 0;
		t.bottom = 42;
		t.fontFamily = "Microsoft YaHei";
		t.horizontalCenter = 0;
		t.lineSpacing = 16;
		t.scaleX = 1;
		t.scaleY = 1;
		t.size = 26;
		t.text = "";
		t.textAlign = "center";
		t.textColor = 0xffffff;
		t.verticalAlign = "middle";
		return t;
	};
	_proto.image0_i = function () {
		var t = new eui.Image();
		this.image0 = t;
		t.alpha = 0;
		t.height = 2;
		t.horizontalCenter = 0;
		t.scale9Grid = new egret.Rectangle(12,0,76,2);
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "jiesuan_fenge_png";
		t.width = 1724;
		t.y = 106;
		return t;
	};
	_proto.textTitle_i = function () {
		var t = new eui.Label();
		this.textTitle = t;
		t.alpha = 0;
		t.fontFamily = "Microsoft YaHei";
		t.horizontalCenter = 0;
		t.scaleX = 1;
		t.scaleY = 1;
		t.size = 22;
		t.text = "";
		t.textAlign = "center";
		t.textColor = 0xd3cdbd;
		t.x = 667;
		t.y = 595;
		return t;
	};
	_proto.gMedal_i = function () {
		var t = new eui.Group();
		this.gMedal = t;
		t.height = 162;
		t.horizontalCenter = 0;
		t.width = 162;
		t.y = 290;
		t.elementsContent = [this.imgMedal_i(),this.image_i(),this.image1_i()];
		return t;
	};
	_proto.imgMedal_i = function () {
		var t = new eui.Image();
		this.imgMedal = t;
		t.horizontalCenter = 0;
		t.source = "jiesuan_huizhang_icon_png";
		t.verticalCenter = 0;
		return t;
	};
	_proto.image_i = function () {
		var t = new eui.Image();
		this.image = t;
		t.alpha = 0;
		t.horizontalCenter = 0;
		t.source = "guangquan01_png";
		t.verticalCenter = 0;
		return t;
	};
	_proto.image1_i = function () {
		var t = new eui.Image();
		this.image1 = t;
		t.alpha = 0;
		t.height = 182;
		t.horizontalCenter = 1;
		t.source = "yinhuizhang_light_png";
		t.verticalCenter = 2;
		t.width = 182;
		return t;
	};
	_proto.group_i = function () {
		var t = new eui.Group();
		this.group = t;
		t.alpha = 0;
		t.horizontalCenter = 0;
		t.y = 696;
		t.elementsContent = [this.gStory_i(),this.btnPass_i(),this.btnFreepass_i()];
		return t;
	};
	_proto.gStory_i = function () {
		var t = new eui.Group();
		this.gStory = t;
		t.height = 65;
		t.width = 303;
		t.x = 380;
		t.y = 0;
		t.elementsContent = [this.image6_i(),this.image5_i(),this.btnStory_i(),this.image7_i()];
		return t;
	};
	_proto.image6_i = function () {
		var t = new eui.Image();
		this.image6 = t;
		t.alpha = 0;
		t.height = 65;
		t.horizontalCenter = 0;
		t.source = "tongyong_queding_effect1_png";
		t.verticalCenter = 0;
		t.width = 303;
		return t;
	};
	_proto.image5_i = function () {
		var t = new eui.Image();
		this.image5 = t;
		t.alpha = 0;
		t.height = 65;
		t.horizontalCenter = 0;
		t.source = "tongyong_queding_effect1_png";
		t.verticalCenter = 0;
		t.width = 303;
		return t;
	};
	_proto.btnStory_i = function () {
		var t = new eui.Button();
		this.btnStory = t;
		t.horizontalCenter = 0;
		t.label = "";
		t.verticalCenter = 0;
		t.skinName = BadEndSkin$Skin1;
		return t;
	};
	_proto.image7_i = function () {
		var t = new eui.Image();
		this.image7 = t;
		t.alpha = 0;
		t.height = 65;
		t.horizontalCenter = 0;
		t.source = "waifaguang1_png";
		t.touchEnabled = false;
		t.verticalCenter = 0;
		t.width = 303;
		return t;
	};
	_proto.btnPass_i = function () {
		var t = new eui.Button();
		this.btnPass = t;
		t.label = "";
		t.x = 0;
		t.y = 0;
		t.skinName = BadEndSkin$Skin2;
		return t;
	};
	_proto.btnFreepass_i = function () {
		var t = new eui.Group();
		this.btnFreepass = t;
		t.height = 65;
		t.width = 303;
		t.x = 0;
		t.y = 0;
		t.elementsContent = [this.image3_i(),this.image2_i(),this.btnFree_i(),this.image4_i()];
		return t;
	};
	_proto.image3_i = function () {
		var t = new eui.Image();
		this.image3 = t;
		t.alpha = 0;
		t.height = 65;
		t.horizontalCenter = 0;
		t.source = "tongyong_queding_effect1_png";
		t.verticalCenter = 0;
		t.width = 303;
		return t;
	};
	_proto.image2_i = function () {
		var t = new eui.Image();
		this.image2 = t;
		t.alpha = 0;
		t.height = 65;
		t.horizontalCenter = 0;
		t.source = "tongyong_queding_effect1_png";
		t.verticalCenter = 0;
		t.width = 303;
		return t;
	};
	_proto.btnFree_i = function () {
		var t = new eui.Button();
		this.btnFree = t;
		t.height = 65;
		t.label = "";
		t.width = 303;
		t.x = 0;
		t.y = 0;
		t.skinName = BadEndSkin$Skin3;
		return t;
	};
	_proto.image4_i = function () {
		var t = new eui.Image();
		this.image4 = t;
		t.alpha = 0;
		t.height = 65;
		t.horizontalCenter = 0;
		t.source = "waifaguang1_png";
		t.touchEnabled = false;
		t.verticalCenter = 0;
		t.width = 303;
		return t;
	};
	_proto.gFirstbadend_i = function () {
		var t = new eui.Group();
		this.gFirstbadend = t;
		t.visible = false;
		t.x = 698;
		t.y = 34;
		t.elementsContent = [this._Exclamation1_i(),this._Label1_i()];
		return t;
	};
	_proto._Exclamation1_i = function () {
		var t = new Component.Exclamation();
		t.height = 58;
		t.width = 58;
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto._Label1_i = function () {
		var t = new eui.Label();
		t.fontFamily = "Microsoft YaHei";
		t.size = 22;
		t.text = "一个结局并不是终点，去故事线探索新的剧情";
		t.textColor = 0xffffff;
		t.verticalCenter = 0;
		t.x = 68;
		return t;
	};
	_proto.gFirstrevive_i = function () {
		var t = new eui.Group();
		this.gFirstrevive = t;
		t.visible = false;
		t.x = 676;
		t.y = 35;
		t.elementsContent = [this._Exclamation2_i(),this._Label2_i()];
		return t;
	};
	_proto._Exclamation2_i = function () {
		var t = new Component.Exclamation();
		t.height = 58;
		t.width = 58;
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto._Label2_i = function () {
		var t = new eui.Label();
		t.fontFamily = "Microsoft YaHei";
		t.size = 22;
		t.text = "当你陷入困境时，可以使用帮助功能，本次新手赠送";
		t.textColor = 0xffffff;
		t.verticalCenter = 0;
		t.x = 68;
		return t;
	};
	_proto.layRect_i = function () {
		var t = new eui.Rect();
		this.layRect = t;
		t.bottom = 0;
		t.fillAlpha = 0.4;
		t.left = 0;
		t.right = 0;
		t.top = 0;
		t.visible = false;
		return t;
	};
	_proto.btnReturn_i = function () {
		var t = new eui.Button();
		this.btnReturn = t;
		t.height = 62;
		t.label = "返回";
		t.width = 150;
		t.x = 0;
		t.y = 0;
		t.skinName = BadEndSkin$Skin4;
		return t;
	};
	return BadEndSkin;
})(eui.Skin);generateEUI.paths['resource/eui_skins/ButtonIndex.exml'] = window.ButtonIndexSkin = (function (_super) {
	__extends(ButtonIndexSkin, _super);
	function ButtonIndexSkin() {
		_super.call(this);
		this.skinParts = ["buttonTween","bg","lock","icon","labelDisplay","label"];
		
		this.height = 62;
		this.width = 408;
		this.buttonTween_i();
		this.elementsContent = [this.bg_i(),this.icon_i(),this.label_i()];
		this._Image1_i();
		
		this.lock_i();
		
		this.states = [
			new eui.State ("up",
				[
					new eui.AddItems("_Image1","icon",0,"")
				])
			,
			new eui.State ("down",
				[
					new eui.AddItems("_Image1","icon",0,""),
					new eui.SetProperty("bg","source","shouye_xuanxiangdibu_btn02_png"),
					new eui.SetProperty("_Image1","source","shouye_rukou_zhuangshi_01_png"),
					new eui.SetProperty("labelDisplay","textColor",0xa2a2a2)
				])
			,
			new eui.State ("disabled",
				[
					new eui.AddItems("lock","icon",1,""),
					new eui.SetProperty("labelDisplay","alpha",0.3)
				])
			,
			new eui.State ("move",
				[
					new eui.AddItems("_Image1","icon",0,""),
					new eui.SetProperty("bg","source","shouye_xuanxiangdibu_btn01_png")
				])
		];
		
		eui.Binding.$bindProperties(this, ["label"],[0],this._TweenItem1,"target");
		eui.Binding.$bindProperties(this, [0],[],this._Object1,"alpha");
		eui.Binding.$bindProperties(this, [30],[],this._Object1,"x");
		eui.Binding.$bindProperties(this, [0],[],this._Object2,"alpha");
		eui.Binding.$bindProperties(this, [1],[],this._Object3,"alpha");
		eui.Binding.$bindProperties(this, [90],[],this._Object3,"x");
		eui.Binding.$bindProperties(this, ["icon"],[0],this._TweenItem2,"target");
		eui.Binding.$bindProperties(this, [0],[],this._Object4,"alpha");
		eui.Binding.$bindProperties(this, [1],[],this._Object5,"alpha");
		eui.Binding.$bindProperties(this, [0],[],this._Object6,"alpha");
		eui.Binding.$bindProperties(this, [1],[],this._Object7,"alpha");
		eui.Binding.$bindProperties(this, [0.3],[],this._Object8,"alpha");
		eui.Binding.$bindProperties(this, [1],[],this._Object9,"alpha");
		eui.Binding.$bindProperties(this, ["bg"],[0],this._TweenItem3,"target");
		eui.Binding.$bindProperties(this, [0],[],this._Object10,"alpha");
		eui.Binding.$bindProperties(this, [0],[],this._Object10,"scaleX");
		eui.Binding.$bindProperties(this, [34],[],this._Object10,"x");
		eui.Binding.$bindProperties(this, [0],[],this._Object11,"alpha");
		eui.Binding.$bindProperties(this, [0],[],this._Object11,"scaleX");
		eui.Binding.$bindProperties(this, [34],[],this._Object11,"x");
		eui.Binding.$bindProperties(this, [1],[],this._Object12,"alpha");
		eui.Binding.$bindProperties(this, [1],[],this._Object12,"scaleX");
		eui.Binding.$bindProperties(this, [0],[],this._Object12,"x");
	}
	var _proto = ButtonIndexSkin.prototype;

	_proto.buttonTween_i = function () {
		var t = new egret.tween.TweenGroup();
		this.buttonTween = t;
		t.items = [this._TweenItem1_i(),this._TweenItem2_i(),this._TweenItem3_i()];
		return t;
	};
	_proto._TweenItem1_i = function () {
		var t = new egret.tween.TweenItem();
		this._TweenItem1 = t;
		t.paths = [this._Set1_i(),this._Wait1_i(),this._Set2_i(),this._To1_i()];
		return t;
	};
	_proto._Set1_i = function () {
		var t = new egret.tween.Set();
		t.props = this._Object1_i();
		return t;
	};
	_proto._Object1_i = function () {
		var t = {};
		this._Object1 = t;
		return t;
	};
	_proto._Wait1_i = function () {
		var t = new egret.tween.Wait();
		t.duration = 250;
		return t;
	};
	_proto._Set2_i = function () {
		var t = new egret.tween.Set();
		t.props = this._Object2_i();
		return t;
	};
	_proto._Object2_i = function () {
		var t = {};
		this._Object2 = t;
		return t;
	};
	_proto._To1_i = function () {
		var t = new egret.tween.To();
		t.duration = 250;
		t.props = this._Object3_i();
		return t;
	};
	_proto._Object3_i = function () {
		var t = {};
		this._Object3 = t;
		return t;
	};
	_proto._TweenItem2_i = function () {
		var t = new egret.tween.TweenItem();
		this._TweenItem2 = t;
		t.paths = [this._Set3_i(),this._Wait2_i(),this._Set4_i(),this._Wait3_i(),this._Set5_i(),this._Wait4_i(),this._Set6_i(),this._Wait5_i(),this._Set7_i(),this._Wait6_i(),this._Set8_i()];
		return t;
	};
	_proto._Set3_i = function () {
		var t = new egret.tween.Set();
		t.props = this._Object4_i();
		return t;
	};
	_proto._Object4_i = function () {
		var t = {};
		this._Object4 = t;
		return t;
	};
	_proto._Wait2_i = function () {
		var t = new egret.tween.Wait();
		t.duration = 50;
		return t;
	};
	_proto._Set4_i = function () {
		var t = new egret.tween.Set();
		t.props = this._Object5_i();
		return t;
	};
	_proto._Object5_i = function () {
		var t = {};
		this._Object5 = t;
		return t;
	};
	_proto._Wait3_i = function () {
		var t = new egret.tween.Wait();
		t.duration = 50;
		return t;
	};
	_proto._Set5_i = function () {
		var t = new egret.tween.Set();
		t.props = this._Object6_i();
		return t;
	};
	_proto._Object6_i = function () {
		var t = {};
		this._Object6 = t;
		return t;
	};
	_proto._Wait4_i = function () {
		var t = new egret.tween.Wait();
		t.duration = 50;
		return t;
	};
	_proto._Set6_i = function () {
		var t = new egret.tween.Set();
		t.props = this._Object7_i();
		return t;
	};
	_proto._Object7_i = function () {
		var t = {};
		this._Object7 = t;
		return t;
	};
	_proto._Wait5_i = function () {
		var t = new egret.tween.Wait();
		t.duration = 50;
		return t;
	};
	_proto._Set7_i = function () {
		var t = new egret.tween.Set();
		t.props = this._Object8_i();
		return t;
	};
	_proto._Object8_i = function () {
		var t = {};
		this._Object8 = t;
		return t;
	};
	_proto._Wait6_i = function () {
		var t = new egret.tween.Wait();
		t.duration = 50;
		return t;
	};
	_proto._Set8_i = function () {
		var t = new egret.tween.Set();
		t.props = this._Object9_i();
		return t;
	};
	_proto._Object9_i = function () {
		var t = {};
		this._Object9 = t;
		return t;
	};
	_proto._TweenItem3_i = function () {
		var t = new egret.tween.TweenItem();
		this._TweenItem3 = t;
		t.paths = [this._Set9_i(),this._Wait7_i(),this._Set10_i(),this._To2_i()];
		return t;
	};
	_proto._Set9_i = function () {
		var t = new egret.tween.Set();
		t.props = this._Object10_i();
		return t;
	};
	_proto._Object10_i = function () {
		var t = {};
		this._Object10 = t;
		return t;
	};
	_proto._Wait7_i = function () {
		var t = new egret.tween.Wait();
		t.duration = 200;
		return t;
	};
	_proto._Set10_i = function () {
		var t = new egret.tween.Set();
		t.props = this._Object11_i();
		return t;
	};
	_proto._Object11_i = function () {
		var t = {};
		this._Object11 = t;
		return t;
	};
	_proto._To2_i = function () {
		var t = new egret.tween.To();
		t.duration = 300;
		t.props = this._Object12_i();
		return t;
	};
	_proto._Object12_i = function () {
		var t = {};
		this._Object12 = t;
		return t;
	};
	_proto.bg_i = function () {
		var t = new eui.Image();
		this.bg = t;
		t.alpha = 0;
		t.height = 62;
		t.scale9Grid = new egret.Rectangle(51,7,306,48);
		t.source = "shouye_xuanxiangdibu_btn00_png";
		t.width = 408;
		return t;
	};
	_proto.icon_i = function () {
		var t = new eui.Group();
		this.icon = t;
		t.alpha = 0;
		t.x = 1;
		t.y = 0;
		t.elementsContent = [];
		return t;
	};
	_proto._Image1_i = function () {
		var t = new eui.Image();
		this._Image1 = t;
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "xuanxiang_btn_tishi_png";
		t.touchEnabled = false;
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto.lock_i = function () {
		var t = new eui.Image();
		this.lock = t;
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "shouye_rukou_zhuangshi_suo_png";
		t.touchEnabled = false;
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto.label_i = function () {
		var t = new eui.Group();
		this.label = t;
		t.alpha = 0;
		t.bottom = 0;
		t.top = 0;
		t.x = 90;
		t.elementsContent = [this.labelDisplay_i()];
		return t;
	};
	_proto.labelDisplay_i = function () {
		var t = new eui.Label();
		this.labelDisplay = t;
		t.alpha = 1;
		t.fontFamily = "fangzheng";
		t.size = 28;
		t.text = "";
		t.textColor = 0xffffff;
		t.verticalCenter = 0;
		t.x = 0;
		return t;
	};
	return ButtonIndexSkin;
})(eui.Skin);generateEUI.paths['resource/eui_skins/ButtonIndexSkew.exml'] = window.ButtonIndexSkewSkin = (function (_super) {
	__extends(ButtonIndexSkewSkin, _super);
	function ButtonIndexSkewSkin() {
		_super.call(this);
		this.skinParts = ["buttonTween","bg","lock","icon","labelDisplay","label"];
		
		this.height = 62;
		this.width = 408;
		this.buttonTween_i();
		this.elementsContent = [this.bg_i(),this.icon_i(),this.label_i()];
		this._Image1_i();
		
		this.lock_i();
		
		this.states = [
			new eui.State ("up",
				[
					new eui.AddItems("_Image1","icon",0,"")
				])
			,
			new eui.State ("down",
				[
					new eui.AddItems("_Image1","icon",0,""),
					new eui.SetProperty("bg","source","shouye_xuanxiangdibu_btn02_png"),
					new eui.SetProperty("_Image1","source","shouye_rukou_zhuangshi_01_png"),
					new eui.SetProperty("labelDisplay","textColor",0xa2a2a2)
				])
			,
			new eui.State ("disabled",
				[
					new eui.AddItems("lock","icon",1,""),
					new eui.SetProperty("labelDisplay","alpha",0.3)
				])
			,
			new eui.State ("move",
				[
					new eui.AddItems("_Image1","icon",0,""),
					new eui.SetProperty("bg","source","shouye_xuanxiangdibu_btn01_png")
				])
		];
		
		eui.Binding.$bindProperties(this, ["label"],[0],this._TweenItem1,"target");
		eui.Binding.$bindProperties(this, [0],[],this._Object1,"alpha");
		eui.Binding.$bindProperties(this, [30],[],this._Object1,"right");
		eui.Binding.$bindProperties(this, [0],[],this._Object2,"alpha");
		eui.Binding.$bindProperties(this, [1],[],this._Object3,"alpha");
		eui.Binding.$bindProperties(this, [90],[],this._Object3,"right");
		eui.Binding.$bindProperties(this, ["icon"],[0],this._TweenItem2,"target");
		eui.Binding.$bindProperties(this, [0],[],this._Object4,"alpha");
		eui.Binding.$bindProperties(this, [1],[],this._Object5,"alpha");
		eui.Binding.$bindProperties(this, [0],[],this._Object6,"alpha");
		eui.Binding.$bindProperties(this, [1],[],this._Object7,"alpha");
		eui.Binding.$bindProperties(this, [0.3],[],this._Object8,"alpha");
		eui.Binding.$bindProperties(this, [1],[],this._Object9,"alpha");
		eui.Binding.$bindProperties(this, ["bg"],[0],this._TweenItem3,"target");
		eui.Binding.$bindProperties(this, [0],[],this._Object10,"alpha");
		eui.Binding.$bindProperties(this, [0],[],this._Object10,"scaleX");
		eui.Binding.$bindProperties(this, [374],[],this._Object10,"x");
		eui.Binding.$bindProperties(this, [0],[],this._Object11,"alpha");
		eui.Binding.$bindProperties(this, [0],[],this._Object11,"scaleX");
		eui.Binding.$bindProperties(this, [374],[],this._Object11,"x");
		eui.Binding.$bindProperties(this, [1],[],this._Object12,"alpha");
		eui.Binding.$bindProperties(this, [1],[],this._Object12,"scaleX");
		eui.Binding.$bindProperties(this, [408],[],this._Object12,"x");
	}
	var _proto = ButtonIndexSkewSkin.prototype;

	_proto.buttonTween_i = function () {
		var t = new egret.tween.TweenGroup();
		this.buttonTween = t;
		t.items = [this._TweenItem1_i(),this._TweenItem2_i(),this._TweenItem3_i()];
		return t;
	};
	_proto._TweenItem1_i = function () {
		var t = new egret.tween.TweenItem();
		this._TweenItem1 = t;
		t.paths = [this._Set1_i(),this._Wait1_i(),this._Set2_i(),this._To1_i()];
		return t;
	};
	_proto._Set1_i = function () {
		var t = new egret.tween.Set();
		t.props = this._Object1_i();
		return t;
	};
	_proto._Object1_i = function () {
		var t = {};
		this._Object1 = t;
		return t;
	};
	_proto._Wait1_i = function () {
		var t = new egret.tween.Wait();
		t.duration = 250;
		return t;
	};
	_proto._Set2_i = function () {
		var t = new egret.tween.Set();
		t.props = this._Object2_i();
		return t;
	};
	_proto._Object2_i = function () {
		var t = {};
		this._Object2 = t;
		return t;
	};
	_proto._To1_i = function () {
		var t = new egret.tween.To();
		t.duration = 250;
		t.props = this._Object3_i();
		return t;
	};
	_proto._Object3_i = function () {
		var t = {};
		this._Object3 = t;
		return t;
	};
	_proto._TweenItem2_i = function () {
		var t = new egret.tween.TweenItem();
		this._TweenItem2 = t;
		t.paths = [this._Set3_i(),this._Wait2_i(),this._Set4_i(),this._Wait3_i(),this._Set5_i(),this._Wait4_i(),this._Set6_i(),this._Wait5_i(),this._Set7_i(),this._Wait6_i(),this._Set8_i()];
		return t;
	};
	_proto._Set3_i = function () {
		var t = new egret.tween.Set();
		t.props = this._Object4_i();
		return t;
	};
	_proto._Object4_i = function () {
		var t = {};
		this._Object4 = t;
		return t;
	};
	_proto._Wait2_i = function () {
		var t = new egret.tween.Wait();
		t.duration = 50;
		return t;
	};
	_proto._Set4_i = function () {
		var t = new egret.tween.Set();
		t.props = this._Object5_i();
		return t;
	};
	_proto._Object5_i = function () {
		var t = {};
		this._Object5 = t;
		return t;
	};
	_proto._Wait3_i = function () {
		var t = new egret.tween.Wait();
		t.duration = 50;
		return t;
	};
	_proto._Set5_i = function () {
		var t = new egret.tween.Set();
		t.props = this._Object6_i();
		return t;
	};
	_proto._Object6_i = function () {
		var t = {};
		this._Object6 = t;
		return t;
	};
	_proto._Wait4_i = function () {
		var t = new egret.tween.Wait();
		t.duration = 50;
		return t;
	};
	_proto._Set6_i = function () {
		var t = new egret.tween.Set();
		t.props = this._Object7_i();
		return t;
	};
	_proto._Object7_i = function () {
		var t = {};
		this._Object7 = t;
		return t;
	};
	_proto._Wait5_i = function () {
		var t = new egret.tween.Wait();
		t.duration = 50;
		return t;
	};
	_proto._Set7_i = function () {
		var t = new egret.tween.Set();
		t.props = this._Object8_i();
		return t;
	};
	_proto._Object8_i = function () {
		var t = {};
		this._Object8 = t;
		return t;
	};
	_proto._Wait6_i = function () {
		var t = new egret.tween.Wait();
		t.duration = 50;
		return t;
	};
	_proto._Set8_i = function () {
		var t = new egret.tween.Set();
		t.props = this._Object9_i();
		return t;
	};
	_proto._Object9_i = function () {
		var t = {};
		this._Object9 = t;
		return t;
	};
	_proto._TweenItem3_i = function () {
		var t = new egret.tween.TweenItem();
		this._TweenItem3 = t;
		t.paths = [this._Set9_i(),this._Wait7_i(),this._Set10_i(),this._To2_i()];
		return t;
	};
	_proto._Set9_i = function () {
		var t = new egret.tween.Set();
		t.props = this._Object10_i();
		return t;
	};
	_proto._Object10_i = function () {
		var t = {};
		this._Object10 = t;
		return t;
	};
	_proto._Wait7_i = function () {
		var t = new egret.tween.Wait();
		t.duration = 250;
		return t;
	};
	_proto._Set10_i = function () {
		var t = new egret.tween.Set();
		t.props = this._Object11_i();
		return t;
	};
	_proto._Object11_i = function () {
		var t = {};
		this._Object11 = t;
		return t;
	};
	_proto._To2_i = function () {
		var t = new egret.tween.To();
		t.duration = 250;
		t.props = this._Object12_i();
		return t;
	};
	_proto._Object12_i = function () {
		var t = {};
		this._Object12 = t;
		return t;
	};
	_proto.bg_i = function () {
		var t = new eui.Image();
		this.bg = t;
		t.alpha = 0;
		t.skewY = 180;
		t.source = "shouye_xuanxiangdibu_btn00_png";
		t.x = 408;
		return t;
	};
	_proto.icon_i = function () {
		var t = new eui.Group();
		this.icon = t;
		t.alpha = 0;
		t.right = 1;
		t.y = 0;
		t.elementsContent = [];
		return t;
	};
	_proto._Image1_i = function () {
		var t = new eui.Image();
		this._Image1 = t;
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "xuanxiang_btn_tishi_png";
		t.touchEnabled = false;
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto.lock_i = function () {
		var t = new eui.Image();
		this.lock = t;
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "shouye_rukou_zhuangshi_suo_png";
		t.touchEnabled = false;
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto.label_i = function () {
		var t = new eui.Group();
		this.label = t;
		t.alpha = 0;
		t.bottom = 0;
		t.right = 90;
		t.top = 0;
		t.elementsContent = [this.labelDisplay_i()];
		return t;
	};
	_proto.labelDisplay_i = function () {
		var t = new eui.Label();
		this.labelDisplay = t;
		t.alpha = 1;
		t.fontFamily = "fangzheng";
		t.size = 28;
		t.text = "";
		t.textColor = 0xffffff;
		t.verticalCenter = 0;
		t.x = 0;
		return t;
	};
	return ButtonIndexSkewSkin;
})(eui.Skin);generateEUI.paths['resource/eui_skins/ButtonSettingArrow.exml'] = window.ButtonSettingArrowSkin = (function (_super) {
	__extends(ButtonSettingArrowSkin, _super);
	function ButtonSettingArrowSkin() {
		_super.call(this);
		this.skinParts = [];
		
		this.height = 64;
		this.width = 64;
		this.elementsContent = [this._Image1_i()];
		this.states = [
			new eui.State ("up",
				[
				])
			,
			new eui.State ("down",
				[
					new eui.SetProperty("_Image1","source","shezhi_tiaokongdian_btn02_png")
				])
			,
			new eui.State ("disabled",
				[
					new eui.SetProperty("_Image1","source","shezhi_tiaokongdian_btn03_png")
				])
			,
			new eui.State ("move",
				[
					new eui.SetProperty("_Image1","source","shezhi_tiaokongdian_btn01_png")
				])
		];
	}
	var _proto = ButtonSettingArrowSkin.prototype;

	_proto._Image1_i = function () {
		var t = new eui.Image();
		this._Image1 = t;
		t.bottom = 0;
		t.left = 0;
		t.right = 0;
		t.source = "shezhi_tiaokongdian_btn00_png";
		t.top = 0;
		return t;
	};
	return ButtonSettingArrowSkin;
})(eui.Skin);generateEUI.paths['resource/eui_skins/Storyline_Tips.exml'] = window.Storyline_TipsSkin = (function (_super) {
	__extends(Storyline_TipsSkin, _super);
	function Storyline_TipsSkin() {
		_super.call(this);
		this.skinParts = ["desc"];
		
		this.elementsContent = [this._Image1_i(),this.desc_i()];
	}
	var _proto = Storyline_TipsSkin.prototype;

	_proto._Image1_i = function () {
		var t = new eui.Image();
		t.scale9Grid = new egret.Rectangle(5,5,135,33);
		t.source = "tongyong_xuanfutips_xiao_png";
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto.desc_i = function () {
		var t = new eui.Label();
		this.desc = t;
		t.fontFamily = "Microsoft YaHei";
		t.horizontalCenter = 0;
		t.size = 16;
		t.text = "";
		t.textColor = 0xdecc9d;
		t.y = 14;
		return t;
	};
	return Storyline_TipsSkin;
})(eui.Skin);generateEUI.paths['resource/eui_skins/ButtonStoryLocation.exml'] = window.ButtonStoryLocationSkin = (function (_super) {
	__extends(ButtonStoryLocationSkin, _super);
	function ButtonStoryLocationSkin() {
		_super.call(this);
		this.skinParts = ["buttonTween","icon","tips"];
		
		this.height = 72;
		this.width = 72;
		this.buttonTween_i();
		this.elementsContent = [this._Image1_i(),this.tips_i()];
		this.icon_i();
		
		this.states = [
			new eui.State ("up",
				[
					new eui.AddItems("icon","",2,"tips")
				])
			,
			new eui.State ("down",
				[
					new eui.SetProperty("_Image1","source","gushixian_dingwei_btn_02_png")
				])
			,
			new eui.State ("disabled",
				[
				])
			,
			new eui.State ("move",
				[
					new eui.SetProperty("_Image1","source","gushixian_dingwei_btn_01_png")
				])
		];
		
		eui.Binding.$bindProperties(this, ["icon"],[0],this._TweenItem1,"target");
		eui.Binding.$bindProperties(this, [8],[],this._Object2,"y");
		eui.Binding.$bindProperties(this, [12.3],[],this._Object3,"y");
		eui.Binding.$bindProperties(this, [8],[],this._Object4,"y");
		eui.Binding.$bindProperties(this, [12.3],[],this._Object5,"y");
		eui.Binding.$bindProperties(this, [8],[],this._Object6,"y");
		eui.Binding.$bindProperties(this, [12.3],[],this._Object7,"y");
		eui.Binding.$bindProperties(this, [8],[],this._Object8,"y");
	}
	var _proto = ButtonStoryLocationSkin.prototype;

	_proto.buttonTween_i = function () {
		var t = new egret.tween.TweenGroup();
		this.buttonTween = t;
		t.items = [this._TweenItem1_i()];
		return t;
	};
	_proto._TweenItem1_i = function () {
		var t = new egret.tween.TweenItem();
		this._TweenItem1 = t;
		t.props = this._Object1_i();
		t.paths = [this._Set1_i(),this._To1_i(),this._To2_i(),this._To3_i(),this._To4_i(),this._To5_i(),this._To6_i()];
		return t;
	};
	_proto._Object1_i = function () {
		var t = {};
		t.loop = "true";
		return t;
	};
	_proto._Set1_i = function () {
		var t = new egret.tween.Set();
		t.props = this._Object2_i();
		return t;
	};
	_proto._Object2_i = function () {
		var t = {};
		this._Object2 = t;
		return t;
	};
	_proto._To1_i = function () {
		var t = new egret.tween.To();
		t.duration = 1000;
		t.props = this._Object3_i();
		return t;
	};
	_proto._Object3_i = function () {
		var t = {};
		this._Object3 = t;
		return t;
	};
	_proto._To2_i = function () {
		var t = new egret.tween.To();
		t.duration = 1000;
		t.props = this._Object4_i();
		return t;
	};
	_proto._Object4_i = function () {
		var t = {};
		this._Object4 = t;
		return t;
	};
	_proto._To3_i = function () {
		var t = new egret.tween.To();
		t.duration = 1000;
		t.props = this._Object5_i();
		return t;
	};
	_proto._Object5_i = function () {
		var t = {};
		this._Object5 = t;
		return t;
	};
	_proto._To4_i = function () {
		var t = new egret.tween.To();
		t.duration = 1000;
		t.props = this._Object6_i();
		return t;
	};
	_proto._Object6_i = function () {
		var t = {};
		this._Object6 = t;
		return t;
	};
	_proto._To5_i = function () {
		var t = new egret.tween.To();
		t.duration = 1000;
		t.props = this._Object7_i();
		return t;
	};
	_proto._Object7_i = function () {
		var t = {};
		this._Object7 = t;
		return t;
	};
	_proto._To6_i = function () {
		var t = new egret.tween.To();
		t.duration = 1000;
		t.props = this._Object8_i();
		return t;
	};
	_proto._Object8_i = function () {
		var t = {};
		this._Object8 = t;
		return t;
	};
	_proto._Image1_i = function () {
		var t = new eui.Image();
		this._Image1 = t;
		t.bottom = 0;
		t.left = 0;
		t.right = 0;
		t.source = "tongyong_icon_dikuang_png";
		t.top = 0;
		return t;
	};
	_proto.icon_i = function () {
		var t = new eui.Image();
		this.icon = t;
		t.horizontalCenter = 0;
		t.source = "gushixian_dingwei_icon_png";
		t.y = 11;
		return t;
	};
	_proto.tips_i = function () {
		var t = new Component.Storyline_Tips();
		this.tips = t;
		t.horizontalCenter = 0;
		t.skinName = "Storyline_TipsSkin";
		t.visible = false;
		t.y = -53;
		return t;
	};
	return ButtonStoryLocationSkin;
})(eui.Skin);generateEUI.paths['resource/eui_skins/ButtonVideo.exml'] = window.ButtonVideo = (function (_super) {
	__extends(ButtonVideo, _super);
	function ButtonVideo() {
		_super.call(this);
		this.skinParts = [];
		
		this.height = 300;
		this.width = 400;
	}
	var _proto = ButtonVideo.prototype;

	return ButtonVideo;
})(eui.Skin);generateEUI.paths['resource/eui_skins/Chapter_egg.exml'] = window.Chapter_eggSkin = (function (_super) {
	__extends(Chapter_eggSkin, _super);
	function Chapter_eggSkin() {
		_super.call(this);
		this.skinParts = ["imgThumb","textTitle","imgMask","imgPlay","imgEgg"];
		
		this.height = 164;
		this.minHeight = 50;
		this.minWidth = 100;
		this.width = 254;
		this.elementsContent = [this._Image1_i(),this.imgThumb_i(),this.textTitle_i(),this.imgMask_i(),this._Image2_i(),this.imgPlay_i(),this.imgEgg_i()];
		this.states = [
			new eui.State ("up",
				[
				])
			,
			new eui.State ("down",
				[
					new eui.SetProperty("_Image2","source","zhangjie_xiaotuzhangjie02_png")
				])
			,
			new eui.State ("disabled",
				[
				])
			,
			new eui.State ("move",
				[
					new eui.SetProperty("_Image2","source","zhangjie_xiaotuzhangjie01_png")
				])
		];
	}
	var _proto = Chapter_eggSkin.prototype;

	_proto._Image1_i = function () {
		var t = new eui.Image();
		t.height = 164;
		t.source = "zhangjie_jieju_huizhangditu_png";
		t.touchEnabled = false;
		t.width = 254;
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto.imgThumb_i = function () {
		var t = new eui.Image();
		this.imgThumb = t;
		t.height = 56;
		t.source = "";
		t.touchEnabled = false;
		t.width = 56;
		t.x = 98;
		t.y = 41;
		return t;
	};
	_proto.textTitle_i = function () {
		var t = new eui.Label();
		this.textTitle = t;
		t.bottom = 33;
		t.fontFamily = "Microsoft YaHei";
		t.horizontalCenter = 0;
		t.size = 24;
		t.stroke = 1;
		t.strokeColor = 0x000000;
		t.text = "";
		t.textColor = 0xfeeab4;
		t.touchEnabled = false;
		return t;
	};
	_proto.imgMask_i = function () {
		var t = new eui.Image();
		this.imgMask = t;
		t.bottom = 0;
		t.left = 0;
		t.right = 0;
		t.source = "zhangjie_jieju_weijiesuo_png";
		t.top = 0;
		t.touchEnabled = false;
		t.visible = false;
		return t;
	};
	_proto._Image2_i = function () {
		var t = new eui.Image();
		this._Image2 = t;
		t.bottom = 0;
		t.left = 0;
		t.right = 0;
		t.top = 0;
		t.touchEnabled = false;
		return t;
	};
	_proto.imgPlay_i = function () {
		var t = new eui.Image();
		this.imgPlay = t;
		t.source = "zhangjie_jieju_bofang_btn00png_png";
		t.touchEnabled = false;
		t.visible = false;
		t.x = 98;
		t.y = 41;
		return t;
	};
	_proto.imgEgg_i = function () {
		var t = new eui.Image();
		this.imgEgg = t;
		t.right = 4;
		t.source = "zhangjie_jieju_jiaobiaojuzhong_png";
		t.top = 0;
		t.touchEnabled = false;
		return t;
	};
	return Chapter_eggSkin;
})(eui.Skin);generateEUI.paths['resource/eui_skins/Chapter_item_small.exml'] = window.Chapter_item_smallSkin = (function (_super) {
	__extends(Chapter_item_smallSkin, _super);
	function Chapter_item_smallSkin() {
		_super.call(this);
		this.skinParts = ["currentTween","imgThumb","imgMask","textNumber","gNumber","textTitle","imgQueue","textTime","gTime","image0","image1","gCurrent","imgLock","imgPercent","gPercent","imgNew","imgPre","iconReward"];
		
		this.height = 164;
		this.minHeight = 50;
		this.minWidth = 100;
		this.width = 254;
		this.currentTween_i();
		this.elementsContent = [this.imgThumb_i(),this.imgMask_i(),this._Image1_i(),this._Image2_i(),this.gNumber_i(),this.textTitle_i(),this.gTime_i(),this.gCurrent_i(),this.imgLock_i(),this.gPercent_i(),this.imgNew_i(),this.imgPre_i(),this.iconReward_i()];
		this.states = [
			new eui.State ("up",
				[
				])
			,
			new eui.State ("down",
				[
					new eui.SetProperty("_Image2","source","zhangjie_xiaotuzhangjie02_png")
				])
			,
			new eui.State ("disabled",
				[
				])
			,
			new eui.State ("move",
				[
					new eui.SetProperty("_Image2","source","zhangjie_xiaotuzhangjie01_png")
				])
		];
		
		eui.Binding.$bindProperties(this, ["image1"],[0],this._TweenItem1,"target");
		eui.Binding.$bindProperties(this, [1],[],this._Object2,"alpha");
		eui.Binding.$bindProperties(this, [11],[],this._Object2,"y");
		eui.Binding.$bindProperties(this, [15.3],[],this._Object3,"y");
		eui.Binding.$bindProperties(this, [11],[],this._Object4,"y");
		eui.Binding.$bindProperties(this, [0],[],this._Object5,"alpha");
		eui.Binding.$bindProperties(this, [15.3],[],this._Object5,"y");
		eui.Binding.$bindProperties(this, [1],[],this._Object6,"alpha");
		eui.Binding.$bindProperties(this, [11],[],this._Object6,"y");
		eui.Binding.$bindProperties(this, [15.3],[],this._Object7,"y");
		eui.Binding.$bindProperties(this, [11],[],this._Object8,"y");
		eui.Binding.$bindProperties(this, ["image0"],[0],this._TweenItem2,"target");
		eui.Binding.$bindProperties(this, [0],[],this._Object10,"alpha");
		eui.Binding.$bindProperties(this, [0.8],[],this._Object10,"scaleX");
		eui.Binding.$bindProperties(this, [0.8],[],this._Object10,"scaleY");
		eui.Binding.$bindProperties(this, [1],[],this._Object11,"alpha");
		eui.Binding.$bindProperties(this, [0],[],this._Object12,"alpha");
	}
	var _proto = Chapter_item_smallSkin.prototype;

	_proto.currentTween_i = function () {
		var t = new egret.tween.TweenGroup();
		this.currentTween = t;
		t.items = [this._TweenItem1_i(),this._TweenItem2_i()];
		return t;
	};
	_proto._TweenItem1_i = function () {
		var t = new egret.tween.TweenItem();
		this._TweenItem1 = t;
		t.props = this._Object1_i();
		t.paths = [this._Set1_i(),this._To1_i(),this._To2_i(),this._To3_i(),this._To4_i(),this._To5_i(),this._To6_i()];
		return t;
	};
	_proto._Object1_i = function () {
		var t = {};
		t.loop = "true";
		return t;
	};
	_proto._Set1_i = function () {
		var t = new egret.tween.Set();
		t.props = this._Object2_i();
		return t;
	};
	_proto._Object2_i = function () {
		var t = {};
		this._Object2 = t;
		return t;
	};
	_proto._To1_i = function () {
		var t = new egret.tween.To();
		t.duration = 1000;
		t.props = this._Object3_i();
		return t;
	};
	_proto._Object3_i = function () {
		var t = {};
		this._Object3 = t;
		return t;
	};
	_proto._To2_i = function () {
		var t = new egret.tween.To();
		t.duration = 1000;
		t.props = this._Object4_i();
		return t;
	};
	_proto._Object4_i = function () {
		var t = {};
		this._Object4 = t;
		return t;
	};
	_proto._To3_i = function () {
		var t = new egret.tween.To();
		t.duration = 1000;
		t.props = this._Object5_i();
		return t;
	};
	_proto._Object5_i = function () {
		var t = {};
		this._Object5 = t;
		return t;
	};
	_proto._To4_i = function () {
		var t = new egret.tween.To();
		t.duration = 1000;
		t.props = this._Object6_i();
		return t;
	};
	_proto._Object6_i = function () {
		var t = {};
		this._Object6 = t;
		return t;
	};
	_proto._To5_i = function () {
		var t = new egret.tween.To();
		t.duration = 1000;
		t.props = this._Object7_i();
		return t;
	};
	_proto._Object7_i = function () {
		var t = {};
		this._Object7 = t;
		return t;
	};
	_proto._To6_i = function () {
		var t = new egret.tween.To();
		t.duration = 1000;
		t.props = this._Object8_i();
		return t;
	};
	_proto._Object8_i = function () {
		var t = {};
		this._Object8 = t;
		return t;
	};
	_proto._TweenItem2_i = function () {
		var t = new egret.tween.TweenItem();
		this._TweenItem2 = t;
		t.props = this._Object9_i();
		t.paths = [this._Set2_i(),this._To7_i(),this._To8_i()];
		return t;
	};
	_proto._Object9_i = function () {
		var t = {};
		t.loop = "true";
		return t;
	};
	_proto._Set2_i = function () {
		var t = new egret.tween.Set();
		t.props = this._Object10_i();
		return t;
	};
	_proto._Object10_i = function () {
		var t = {};
		this._Object10 = t;
		return t;
	};
	_proto._To7_i = function () {
		var t = new egret.tween.To();
		t.duration = 3000;
		t.props = this._Object11_i();
		return t;
	};
	_proto._Object11_i = function () {
		var t = {};
		this._Object11 = t;
		return t;
	};
	_proto._To8_i = function () {
		var t = new egret.tween.To();
		t.duration = 3000;
		t.props = this._Object12_i();
		return t;
	};
	_proto._Object12_i = function () {
		var t = {};
		this._Object12 = t;
		return t;
	};
	_proto.imgThumb_i = function () {
		var t = new eui.Image();
		this.imgThumb = t;
		t.bottom = 0;
		t.left = 0;
		t.right = 0;
		t.source = "zhangjie_zhangjiexuhaodi_xiao_png";
		t.top = 0;
		return t;
	};
	_proto.imgMask_i = function () {
		var t = new eui.Image();
		this.imgMask = t;
		t.bottom = 0;
		t.left = 0;
		t.right = 0;
		t.source = "zhangjie_zhezhao_xiao02_png";
		t.top = 0;
		t.visible = false;
		return t;
	};
	_proto._Image1_i = function () {
		var t = new eui.Image();
		t.bottom = 0;
		t.left = 0;
		t.right = 0;
		t.source = "zhangjie_zhezhao_xiao01_png";
		t.top = 0;
		return t;
	};
	_proto._Image2_i = function () {
		var t = new eui.Image();
		this._Image2 = t;
		t.bottom = 0;
		t.left = 0;
		t.right = 0;
		t.top = 0;
		return t;
	};
	_proto.gNumber_i = function () {
		var t = new eui.Group();
		this.gNumber = t;
		t.horizontalCenter = 0;
		t.y = 25;
		t.elementsContent = [this._Image3_i(),this.textNumber_i()];
		return t;
	};
	_proto._Image3_i = function () {
		var t = new eui.Image();
		t.source = "zhangjie_xuhaodi_xiao_png";
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto.textNumber_i = function () {
		var t = new eui.Label();
		this.textNumber = t;
		t.fontFamily = "Microsoft YaHei";
		t.horizontalCenter = 0;
		t.size = 30;
		t.text = "";
		t.verticalCenter = 0;
		return t;
	};
	_proto.textTitle_i = function () {
		var t = new eui.Label();
		this.textTitle = t;
		t.bottom = 33;
		t.fontFamily = "Microsoft YaHei";
		t.horizontalCenter = 0;
		t.size = 24;
		t.stroke = 1;
		t.strokeColor = 0x000000;
		t.text = "";
		t.textColor = 0xffffff;
		return t;
	};
	_proto.gTime_i = function () {
		var t = new eui.Group();
		this.gTime = t;
		t.left = 48;
		t.right = 48;
		t.visible = false;
		t.y = 110;
		t.elementsContent = [this.imgQueue_i(),this.textTime_i()];
		return t;
	};
	_proto.imgQueue_i = function () {
		var t = new eui.Image();
		this.imgQueue = t;
		t.right = 0;
		t.source = "zhangjie_dengdaiduiliexiao_1_png";
		t.verticalCenter = 0;
		return t;
	};
	_proto.textTime_i = function () {
		var t = new eui.Label();
		this.textTime = t;
		t.fontFamily = "Microsoft YaHei";
		t.horizontalCenter = 0;
		t.size = 22;
		t.text = "";
		t.verticalCenter = 0;
		return t;
	};
	_proto.gCurrent_i = function () {
		var t = new eui.Group();
		this.gCurrent = t;
		t.bottom = 7;
		t.height = 54;
		t.left = -13;
		t.visible = false;
		t.width = 54;
		t.elementsContent = [this.image0_i(),this._Image4_i(),this.image1_i()];
		return t;
	};
	_proto.image0_i = function () {
		var t = new eui.Image();
		this.image0 = t;
		t.alpha = 0;
		t.horizontalCenter = 0;
		t.source = "yellow_png";
		t.verticalCenter = 0;
		return t;
	};
	_proto._Image4_i = function () {
		var t = new eui.Image();
		t.source = "tongyong_dingweidikuang_png";
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto.image1_i = function () {
		var t = new eui.Image();
		this.image1 = t;
		t.source = "tongyong_dingwei_icon32_png";
		t.x = 11;
		t.y = 11;
		return t;
	};
	_proto.imgLock_i = function () {
		var t = new eui.Image();
		this.imgLock = t;
		t.horizontalCenter = 0;
		t.source = "zhangjie_suo_icon80_png";
		t.visible = false;
		t.y = 24;
		return t;
	};
	_proto.gPercent_i = function () {
		var t = new eui.Group();
		this.gPercent = t;
		t.x = 0;
		t.y = 155;
		t.elementsContent = [this._Image5_i(),this.imgPercent_i()];
		return t;
	};
	_proto._Image5_i = function () {
		var t = new eui.Image();
		t.source = "zhangjie_zhangjiejindudi_png";
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto.imgPercent_i = function () {
		var t = new eui.Image();
		this.imgPercent = t;
		t.scale9Grid = new egret.Rectangle(16,0,234,2);
		t.source = "zhangjie_zhangjiejindutiao_png";
		t.width = 0;
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto.imgNew_i = function () {
		var t = new eui.Image();
		this.imgNew = t;
		t.alpha = 0;
		t.right = 0;
		t.source = "zhangjie_jiaobiao_xin_png";
		t.top = 0;
		t.visible = false;
		return t;
	};
	_proto.imgPre_i = function () {
		var t = new eui.Image();
		this.imgPre = t;
		t.right = 0;
		t.source = "zhangjie_jiaobiao_yu_png";
		t.top = 0;
		t.visible = false;
		return t;
	};
	_proto.iconReward_i = function () {
		var t = new eui.Image();
		this.iconReward = t;
		t.right = -9;
		t.source = "tongyong_xiaoxitishi_png";
		t.top = -9;
		t.visible = false;
		return t;
	};
	return Chapter_item_smallSkin;
})(eui.Skin);generateEUI.paths['resource/eui_skins/Chapter_item.exml'] = window.Chapter_itemSkin = (function (_super) {
	__extends(Chapter_itemSkin, _super);
	function Chapter_itemSkin() {
		_super.call(this);
		this.skinParts = ["currentTween","imgThumb","imgMask","textNumber","gNumber","textTitle","imgQueue","textTime","gTime","image0","image1","gCurrent","imgLock","imgPercent","gPercent","imgPre","imgNew","iconReward"];
		
		this.height = 523;
		this.minHeight = 50;
		this.minWidth = 100;
		this.width = 254;
		this.currentTween_i();
		this.elementsContent = [this.imgThumb_i(),this.imgMask_i(),this._Image1_i(),this._Image2_i(),this.gNumber_i(),this.textTitle_i(),this.gTime_i(),this.gCurrent_i(),this.imgLock_i(),this.gPercent_i(),this.imgPre_i(),this.imgNew_i(),this.iconReward_i()];
		this.states = [
			new eui.State ("up",
				[
				])
			,
			new eui.State ("down",
				[
					new eui.SetProperty("_Image2","source","zhangjie_datuzhangjie02_png")
				])
			,
			new eui.State ("disabled",
				[
				])
			,
			new eui.State ("move",
				[
					new eui.SetProperty("_Image2","source","zhangjie_datuzhangjie01_png")
				])
		];
		
		eui.Binding.$bindProperties(this, ["image1"],[0],this._TweenItem1,"target");
		eui.Binding.$bindProperties(this, [1],[],this._Object2,"alpha");
		eui.Binding.$bindProperties(this, [11],[],this._Object2,"y");
		eui.Binding.$bindProperties(this, [15.3],[],this._Object3,"y");
		eui.Binding.$bindProperties(this, [11],[],this._Object4,"y");
		eui.Binding.$bindProperties(this, [0],[],this._Object5,"alpha");
		eui.Binding.$bindProperties(this, [15.3],[],this._Object5,"y");
		eui.Binding.$bindProperties(this, [1],[],this._Object6,"alpha");
		eui.Binding.$bindProperties(this, [11],[],this._Object6,"y");
		eui.Binding.$bindProperties(this, [15.3],[],this._Object7,"y");
		eui.Binding.$bindProperties(this, [11],[],this._Object8,"y");
		eui.Binding.$bindProperties(this, ["image0"],[0],this._TweenItem2,"target");
		eui.Binding.$bindProperties(this, [0],[],this._Object10,"alpha");
		eui.Binding.$bindProperties(this, [0.8],[],this._Object10,"scaleX");
		eui.Binding.$bindProperties(this, [0.8],[],this._Object10,"scaleY");
		eui.Binding.$bindProperties(this, [1],[],this._Object11,"alpha");
		eui.Binding.$bindProperties(this, [0],[],this._Object12,"alpha");
	}
	var _proto = Chapter_itemSkin.prototype;

	_proto.currentTween_i = function () {
		var t = new egret.tween.TweenGroup();
		this.currentTween = t;
		t.items = [this._TweenItem1_i(),this._TweenItem2_i()];
		return t;
	};
	_proto._TweenItem1_i = function () {
		var t = new egret.tween.TweenItem();
		this._TweenItem1 = t;
		t.props = this._Object1_i();
		t.paths = [this._Set1_i(),this._To1_i(),this._To2_i(),this._To3_i(),this._To4_i(),this._To5_i(),this._To6_i()];
		return t;
	};
	_proto._Object1_i = function () {
		var t = {};
		t.loop = "true";
		return t;
	};
	_proto._Set1_i = function () {
		var t = new egret.tween.Set();
		t.props = this._Object2_i();
		return t;
	};
	_proto._Object2_i = function () {
		var t = {};
		this._Object2 = t;
		return t;
	};
	_proto._To1_i = function () {
		var t = new egret.tween.To();
		t.duration = 1000;
		t.props = this._Object3_i();
		return t;
	};
	_proto._Object3_i = function () {
		var t = {};
		this._Object3 = t;
		return t;
	};
	_proto._To2_i = function () {
		var t = new egret.tween.To();
		t.duration = 1000;
		t.props = this._Object4_i();
		return t;
	};
	_proto._Object4_i = function () {
		var t = {};
		this._Object4 = t;
		return t;
	};
	_proto._To3_i = function () {
		var t = new egret.tween.To();
		t.duration = 1000;
		t.props = this._Object5_i();
		return t;
	};
	_proto._Object5_i = function () {
		var t = {};
		this._Object5 = t;
		return t;
	};
	_proto._To4_i = function () {
		var t = new egret.tween.To();
		t.duration = 1000;
		t.props = this._Object6_i();
		return t;
	};
	_proto._Object6_i = function () {
		var t = {};
		this._Object6 = t;
		return t;
	};
	_proto._To5_i = function () {
		var t = new egret.tween.To();
		t.duration = 1000;
		t.props = this._Object7_i();
		return t;
	};
	_proto._Object7_i = function () {
		var t = {};
		this._Object7 = t;
		return t;
	};
	_proto._To6_i = function () {
		var t = new egret.tween.To();
		t.duration = 1000;
		t.props = this._Object8_i();
		return t;
	};
	_proto._Object8_i = function () {
		var t = {};
		this._Object8 = t;
		return t;
	};
	_proto._TweenItem2_i = function () {
		var t = new egret.tween.TweenItem();
		this._TweenItem2 = t;
		t.props = this._Object9_i();
		t.paths = [this._Set2_i(),this._To7_i(),this._To8_i()];
		return t;
	};
	_proto._Object9_i = function () {
		var t = {};
		t.loop = "true";
		return t;
	};
	_proto._Set2_i = function () {
		var t = new egret.tween.Set();
		t.props = this._Object10_i();
		return t;
	};
	_proto._Object10_i = function () {
		var t = {};
		this._Object10 = t;
		return t;
	};
	_proto._To7_i = function () {
		var t = new egret.tween.To();
		t.duration = 3000;
		t.props = this._Object11_i();
		return t;
	};
	_proto._Object11_i = function () {
		var t = {};
		this._Object11 = t;
		return t;
	};
	_proto._To8_i = function () {
		var t = new egret.tween.To();
		t.duration = 3000;
		t.props = this._Object12_i();
		return t;
	};
	_proto._Object12_i = function () {
		var t = {};
		this._Object12 = t;
		return t;
	};
	_proto.imgThumb_i = function () {
		var t = new eui.Image();
		this.imgThumb = t;
		t.bottom = 0;
		t.left = 0;
		t.right = 0;
		t.source = "zhangjie_zhangjiexuhaodi_da_png";
		t.top = 0;
		return t;
	};
	_proto.imgMask_i = function () {
		var t = new eui.Image();
		this.imgMask = t;
		t.bottom = 0;
		t.left = 0;
		t.right = 0;
		t.source = "zhangjie_zhezhao_da02_png";
		t.top = 0;
		t.visible = false;
		return t;
	};
	_proto._Image1_i = function () {
		var t = new eui.Image();
		t.bottom = 0;
		t.left = 0;
		t.right = 0;
		t.source = "zhangjie_zhezhao_da01_png";
		t.top = 0;
		return t;
	};
	_proto._Image2_i = function () {
		var t = new eui.Image();
		this._Image2 = t;
		t.bottom = 0;
		t.left = 0;
		t.right = 0;
		t.top = 0;
		return t;
	};
	_proto.gNumber_i = function () {
		var t = new eui.Group();
		this.gNumber = t;
		t.x = 83;
		t.y = 358;
		t.elementsContent = [this._Image3_i(),this.textNumber_i()];
		return t;
	};
	_proto._Image3_i = function () {
		var t = new eui.Image();
		t.source = "zhangjie_xuhaodi_da_png";
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto.textNumber_i = function () {
		var t = new eui.Label();
		this.textNumber = t;
		t.fontFamily = "Microsoft YaHei";
		t.horizontalCenter = 0;
		t.size = 34;
		t.text = "";
		t.verticalCenter = 0;
		return t;
	};
	_proto.textTitle_i = function () {
		var t = new eui.Label();
		this.textTitle = t;
		t.bottom = 41;
		t.fontFamily = "Microsoft YaHei";
		t.horizontalCenter = 0;
		t.size = 24;
		t.stroke = 1;
		t.strokeColor = 0x000000;
		t.text = "";
		t.textColor = 0xffffff;
		return t;
	};
	_proto.gTime_i = function () {
		var t = new eui.Group();
		this.gTime = t;
		t.left = 48;
		t.right = 48;
		t.visible = false;
		t.y = 458;
		t.elementsContent = [this.imgQueue_i(),this.textTime_i()];
		return t;
	};
	_proto.imgQueue_i = function () {
		var t = new eui.Image();
		this.imgQueue = t;
		t.right = 0;
		t.source = "zhangjie_dengdaiduiliexiao_1_png";
		t.verticalCenter = 0;
		return t;
	};
	_proto.textTime_i = function () {
		var t = new eui.Label();
		this.textTime = t;
		t.fontFamily = "Microsoft YaHei";
		t.horizontalCenter = 0;
		t.size = 22;
		t.text = "";
		t.verticalCenter = 0;
		return t;
	};
	_proto.gCurrent_i = function () {
		var t = new eui.Group();
		this.gCurrent = t;
		t.bottom = 7;
		t.height = 54;
		t.left = -13;
		t.visible = false;
		t.width = 54;
		t.elementsContent = [this.image0_i(),this._Image4_i(),this.image1_i()];
		return t;
	};
	_proto.image0_i = function () {
		var t = new eui.Image();
		this.image0 = t;
		t.alpha = 0;
		t.horizontalCenter = 0;
		t.source = "yellow_png";
		t.verticalCenter = 0;
		return t;
	};
	_proto._Image4_i = function () {
		var t = new eui.Image();
		t.source = "tongyong_dingweidikuang_png";
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto.image1_i = function () {
		var t = new eui.Image();
		this.image1 = t;
		t.source = "tongyong_dingwei_icon32_png";
		t.x = 11;
		t.y = 11;
		return t;
	};
	_proto.imgLock_i = function () {
		var t = new eui.Image();
		this.imgLock = t;
		t.horizontalCenter = 0;
		t.source = "zhangjie_suo_icon86_png";
		t.visible = false;
		t.y = 359;
		return t;
	};
	_proto.gPercent_i = function () {
		var t = new eui.Group();
		this.gPercent = t;
		t.x = 0;
		t.y = 514;
		t.elementsContent = [this._Image5_i(),this.imgPercent_i()];
		return t;
	};
	_proto._Image5_i = function () {
		var t = new eui.Image();
		t.source = "zhangjie_zhangjiejindudi_png";
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto.imgPercent_i = function () {
		var t = new eui.Image();
		this.imgPercent = t;
		t.scale9Grid = new egret.Rectangle(16,0,234,2);
		t.source = "zhangjie_zhangjiejindutiao_png";
		t.width = 0;
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto.imgPre_i = function () {
		var t = new eui.Image();
		this.imgPre = t;
		t.right = 0;
		t.source = "zhangjie_jiaobiao_yu_png";
		t.top = 0;
		t.visible = false;
		return t;
	};
	_proto.imgNew_i = function () {
		var t = new eui.Image();
		this.imgNew = t;
		t.alpha = 0;
		t.right = 0;
		t.source = "zhangjie_jiaobiao_xin_png";
		t.top = 0;
		t.visible = false;
		return t;
	};
	_proto.iconReward_i = function () {
		var t = new eui.Image();
		this.iconReward = t;
		t.right = -9;
		t.source = "tongyong_xiaoxitishi_png";
		t.top = -9;
		t.visible = false;
		return t;
	};
	return Chapter_itemSkin;
})(eui.Skin);generateEUI.paths['resource/eui_skins/Chapter_pop.exml'] = window.Chapter_popSkin = (function (_super) {
	__extends(Chapter_popSkin, _super);
	var Chapter_popSkin$Skin5 = 	(function (_super) {
		__extends(Chapter_popSkin$Skin5, _super);
		function Chapter_popSkin$Skin5() {
			_super.call(this);
			this.skinParts = ["labelDisplay"];
			
			this.elementsContent = [this._Image1_i(),this.labelDisplay_i()];
			this.states = [
				new eui.State ("up",
					[
					])
				,
				new eui.State ("down",
					[
						new eui.SetProperty("_Image1","source","tongyong_queding_btn01_png")
					])
				,
				new eui.State ("disabled",
					[
					])
			];
		}
		var _proto = Chapter_popSkin$Skin5.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			this._Image1 = t;
			t.percentHeight = 100;
			t.source = "tongyong_queding_btn00_png";
			t.percentWidth = 100;
			return t;
		};
		_proto.labelDisplay_i = function () {
			var t = new eui.Label();
			this.labelDisplay = t;
			t.fontFamily = "Microsoft Yahei";
			t.horizontalCenter = 0;
			t.size = 28;
			t.textColor = 0x000000;
			t.verticalCenter = 0;
			return t;
		};
		return Chapter_popSkin$Skin5;
	})(eui.Skin);

	var Chapter_popSkin$Skin6 = 	(function (_super) {
		__extends(Chapter_popSkin$Skin6, _super);
		function Chapter_popSkin$Skin6() {
			_super.call(this);
			this.skinParts = ["labelDisplay"];
			
			this.elementsContent = [this._Image1_i(),this.labelDisplay_i()];
			this.states = [
				new eui.State ("up",
					[
					])
				,
				new eui.State ("down",
					[
						new eui.SetProperty("_Image1","source","tongyong_queding_btn01_png")
					])
				,
				new eui.State ("disabled",
					[
					])
			];
		}
		var _proto = Chapter_popSkin$Skin6.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			this._Image1 = t;
			t.percentHeight = 100;
			t.source = "tongyong_queding_btn00_png";
			t.percentWidth = 100;
			return t;
		};
		_proto.labelDisplay_i = function () {
			var t = new eui.Label();
			this.labelDisplay = t;
			t.fontFamily = "Microsoft Yahei";
			t.horizontalCenter = 0;
			t.size = 28;
			t.textColor = 0x000000;
			t.verticalCenter = 0;
			return t;
		};
		return Chapter_popSkin$Skin6;
	})(eui.Skin);

	var Chapter_popSkin$Skin7 = 	(function (_super) {
		__extends(Chapter_popSkin$Skin7, _super);
		function Chapter_popSkin$Skin7() {
			_super.call(this);
			this.skinParts = ["labelDisplay"];
			
			this.elementsContent = [this._Image1_i(),this.labelDisplay_i()];
			this.states = [
				new eui.State ("up",
					[
					])
				,
				new eui.State ("down",
					[
						new eui.SetProperty("_Image1","source","tongyong_queding_btn01_png")
					])
				,
				new eui.State ("disabled",
					[
					])
			];
		}
		var _proto = Chapter_popSkin$Skin7.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			this._Image1 = t;
			t.percentHeight = 100;
			t.source = "tongyong_queding_btn00_png";
			t.percentWidth = 100;
			return t;
		};
		_proto.labelDisplay_i = function () {
			var t = new eui.Label();
			this.labelDisplay = t;
			t.fontFamily = "Microsoft Yahei";
			t.horizontalCenter = 0;
			t.size = 28;
			t.textColor = 0x000000;
			t.verticalCenter = 0;
			return t;
		};
		return Chapter_popSkin$Skin7;
	})(eui.Skin);

	var Chapter_popSkin$Skin8 = 	(function (_super) {
		__extends(Chapter_popSkin$Skin8, _super);
		function Chapter_popSkin$Skin8() {
			_super.call(this);
			this.skinParts = ["labelDisplay"];
			
			this.elementsContent = [this._Image1_i(),this.labelDisplay_i()];
			this.states = [
				new eui.State ("up",
					[
					])
				,
				new eui.State ("down",
					[
						new eui.SetProperty("_Image1","source","tongyog_guanbi_icon02_png")
					])
				,
				new eui.State ("disabled",
					[
					])
				,
				new eui.State ("move",
					[
						new eui.SetProperty("_Image1","source","tongyog_guanbi_icon01_png")
					])
			];
		}
		var _proto = Chapter_popSkin$Skin8.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			this._Image1 = t;
			t.percentHeight = 100;
			t.source = "tongyog_guanbi_icon00_png";
			t.percentWidth = 100;
			return t;
		};
		_proto.labelDisplay_i = function () {
			var t = new eui.Label();
			this.labelDisplay = t;
			t.horizontalCenter = 0;
			t.verticalCenter = 0;
			return t;
		};
		return Chapter_popSkin$Skin8;
	})(eui.Skin);

	var Chapter_popSkin$Skin9 = 	(function (_super) {
		__extends(Chapter_popSkin$Skin9, _super);
		function Chapter_popSkin$Skin9() {
			_super.call(this);
			this.skinParts = ["labelDisplay"];
			
			this.elementsContent = [this._Image1_i(),this.labelDisplay_i()];
			this.states = [
				new eui.State ("up",
					[
					])
				,
				new eui.State ("down",
					[
						new eui.SetProperty("_Image1","source","zhangjie_bofang_btn_02_png")
					])
				,
				new eui.State ("disabled",
					[
					])
				,
				new eui.State ("move",
					[
						new eui.SetProperty("_Image1","source","zhangjie_bofang_btn_01_png")
					])
			];
		}
		var _proto = Chapter_popSkin$Skin9.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			this._Image1 = t;
			t.percentHeight = 100;
			t.source = "zhangjie_bofang_btn_00_png";
			t.percentWidth = 100;
			return t;
		};
		_proto.labelDisplay_i = function () {
			var t = new eui.Label();
			this.labelDisplay = t;
			t.horizontalCenter = 0;
			t.verticalCenter = 0;
			return t;
		};
		return Chapter_popSkin$Skin9;
	})(eui.Skin);

	var Chapter_popSkin$Skin10 = 	(function (_super) {
		__extends(Chapter_popSkin$Skin10, _super);
		function Chapter_popSkin$Skin10() {
			_super.call(this);
			this.skinParts = ["labelDisplay"];
			
			this.elementsContent = [this._Image1_i(),this.labelDisplay_i()];
			this.states = [
				new eui.State ("up",
					[
					])
				,
				new eui.State ("down",
					[
						new eui.SetProperty("_Image1","source","zhangjie_tingzhi_btn_02_png")
					])
				,
				new eui.State ("disabled",
					[
					])
				,
				new eui.State ("move",
					[
						new eui.SetProperty("_Image1","source","zhangjie_tingzhi_btn_01_png")
					])
			];
		}
		var _proto = Chapter_popSkin$Skin10.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			this._Image1 = t;
			t.percentHeight = 100;
			t.source = "zhangjie_tingzhi_btn_00_png";
			t.percentWidth = 100;
			return t;
		};
		_proto.labelDisplay_i = function () {
			var t = new eui.Label();
			this.labelDisplay = t;
			t.horizontalCenter = 0;
			t.verticalCenter = 0;
			return t;
		};
		return Chapter_popSkin$Skin10;
	})(eui.Skin);

	function Chapter_popSkin() {
		_super.call(this);
		this.skinParts = ["unlockTween","layMask","imgCover","textTitle","imgLock","gNoviceunlock","gNovicequeue","gPopup","image0","image","textTime","btnComing","btnDash","btnPlay","image1","btnGroup","preGroup","dlcGroup","comingGroup","gTips","btnClose","btnPreviewPlay","btnPreviewPause","gVideo"];
		
		this.unlockTween_i();
		this.elementsContent = [this.layMask_i(),this.gPopup_i(),this.gVideo_i()];
		
		eui.Binding.$bindProperties(this, ["image"],[0],this._TweenItem1,"target");
		eui.Binding.$bindProperties(this, [0],[],this._Object2,"alpha");
		eui.Binding.$bindProperties(this, [0.7],[],this._Object3,"alpha");
		eui.Binding.$bindProperties(this, [0],[],this._Object4,"alpha");
		eui.Binding.$bindProperties(this, [1.4],[],this._Object4,"scaleX");
		eui.Binding.$bindProperties(this, [1.9],[],this._Object4,"scaleY");
		eui.Binding.$bindProperties(this, ["image0"],[0],this._TweenItem2,"target");
		eui.Binding.$bindProperties(this, [0],[],this._Object6,"alpha");
		eui.Binding.$bindProperties(this, [0.7],[],this._Object7,"alpha");
		eui.Binding.$bindProperties(this, [0],[],this._Object8,"alpha");
		eui.Binding.$bindProperties(this, [1.4],[],this._Object8,"scaleX");
		eui.Binding.$bindProperties(this, [1.9],[],this._Object8,"scaleY");
		eui.Binding.$bindProperties(this, ["image1"],[0],this._TweenItem3,"target");
		eui.Binding.$bindProperties(this, [0],[],this._Object10,"alpha");
		eui.Binding.$bindProperties(this, [1],[],this._Object11,"alpha");
		eui.Binding.$bindProperties(this, [0],[],this._Object12,"alpha");
		eui.Binding.$bindProperties(this, [0],[],this._Object13,"alpha");
		eui.Binding.$bindProperties(this, [1],[],this._Object14,"alpha");
		eui.Binding.$bindProperties(this, [0],[],this._Object15,"alpha");
	}
	var _proto = Chapter_popSkin.prototype;

	_proto.unlockTween_i = function () {
		var t = new egret.tween.TweenGroup();
		this.unlockTween = t;
		t.items = [this._TweenItem1_i(),this._TweenItem2_i(),this._TweenItem3_i()];
		return t;
	};
	_proto._TweenItem1_i = function () {
		var t = new egret.tween.TweenItem();
		this._TweenItem1 = t;
		t.props = this._Object1_i();
		t.paths = [this._Set1_i(),this._To1_i(),this._To2_i()];
		return t;
	};
	_proto._Object1_i = function () {
		var t = {};
		t.loop = "true";
		return t;
	};
	_proto._Set1_i = function () {
		var t = new egret.tween.Set();
		t.props = this._Object2_i();
		return t;
	};
	_proto._Object2_i = function () {
		var t = {};
		this._Object2 = t;
		return t;
	};
	_proto._To1_i = function () {
		var t = new egret.tween.To();
		t.duration = 500;
		t.props = this._Object3_i();
		return t;
	};
	_proto._Object3_i = function () {
		var t = {};
		this._Object3 = t;
		return t;
	};
	_proto._To2_i = function () {
		var t = new egret.tween.To();
		t.duration = 3500;
		t.props = this._Object4_i();
		return t;
	};
	_proto._Object4_i = function () {
		var t = {};
		this._Object4 = t;
		return t;
	};
	_proto._TweenItem2_i = function () {
		var t = new egret.tween.TweenItem();
		this._TweenItem2 = t;
		t.props = this._Object5_i();
		t.paths = [this._Wait1_i(),this._Set2_i(),this._To3_i(),this._To4_i()];
		return t;
	};
	_proto._Object5_i = function () {
		var t = {};
		t.loop = "true";
		return t;
	};
	_proto._Wait1_i = function () {
		var t = new egret.tween.Wait();
		t.duration = 2000;
		return t;
	};
	_proto._Set2_i = function () {
		var t = new egret.tween.Set();
		t.props = this._Object6_i();
		return t;
	};
	_proto._Object6_i = function () {
		var t = {};
		this._Object6 = t;
		return t;
	};
	_proto._To3_i = function () {
		var t = new egret.tween.To();
		t.duration = 500;
		t.props = this._Object7_i();
		return t;
	};
	_proto._Object7_i = function () {
		var t = {};
		this._Object7 = t;
		return t;
	};
	_proto._To4_i = function () {
		var t = new egret.tween.To();
		t.duration = 3200;
		t.props = this._Object8_i();
		return t;
	};
	_proto._Object8_i = function () {
		var t = {};
		this._Object8 = t;
		return t;
	};
	_proto._TweenItem3_i = function () {
		var t = new egret.tween.TweenItem();
		this._TweenItem3 = t;
		t.props = this._Object9_i();
		t.paths = [this._Set3_i(),this._To5_i(),this._To6_i(),this._To7_i(),this._To8_i(),this._To9_i()];
		return t;
	};
	_proto._Object9_i = function () {
		var t = {};
		t.loop = "true";
		return t;
	};
	_proto._Set3_i = function () {
		var t = new egret.tween.Set();
		t.props = this._Object10_i();
		return t;
	};
	_proto._Object10_i = function () {
		var t = {};
		this._Object10 = t;
		return t;
	};
	_proto._To5_i = function () {
		var t = new egret.tween.To();
		t.duration = 500;
		t.props = this._Object11_i();
		return t;
	};
	_proto._Object11_i = function () {
		var t = {};
		this._Object11 = t;
		return t;
	};
	_proto._To6_i = function () {
		var t = new egret.tween.To();
		t.duration = 800;
		t.props = this._Object12_i();
		return t;
	};
	_proto._Object12_i = function () {
		var t = {};
		this._Object12 = t;
		return t;
	};
	_proto._To7_i = function () {
		var t = new egret.tween.To();
		t.duration = 700;
		t.props = this._Object13_i();
		return t;
	};
	_proto._Object13_i = function () {
		var t = {};
		this._Object13 = t;
		return t;
	};
	_proto._To8_i = function () {
		var t = new egret.tween.To();
		t.duration = 500;
		t.props = this._Object14_i();
		return t;
	};
	_proto._Object14_i = function () {
		var t = {};
		this._Object14 = t;
		return t;
	};
	_proto._To9_i = function () {
		var t = new egret.tween.To();
		t.duration = 800;
		t.props = this._Object15_i();
		return t;
	};
	_proto._Object15_i = function () {
		var t = {};
		this._Object15 = t;
		return t;
	};
	_proto.layMask_i = function () {
		var t = new eui.Rect();
		this.layMask = t;
		t.bottom = 0;
		t.fillAlpha = 0.4;
		t.left = 0;
		t.right = 0;
		t.top = 0;
		return t;
	};
	_proto.gPopup_i = function () {
		var t = new eui.Group();
		this.gPopup = t;
		t.height = 642;
		t.horizontalCenter = 0;
		t.scrollEnabled = true;
		t.verticalCenter = 0;
		t.width = 1128;
		t.elementsContent = [this._Image1_i(),this.imgCover_i(),this._Image2_i(),this._Image3_i(),this._Group1_i(),this._Rect1_i(),this.imgLock_i(),this.gNoviceunlock_i(),this.gNovicequeue_i()];
		return t;
	};
	_proto._Image1_i = function () {
		var t = new eui.Image();
		t.source = "zhangjie_datangchuang_png";
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto.imgCover_i = function () {
		var t = new eui.Image();
		this.imgCover = t;
		t.bottom = 11;
		t.left = 11;
		t.right = 11;
		t.top = 11;
		return t;
	};
	_proto._Image2_i = function () {
		var t = new eui.Image();
		t.source = "zhangjie_zhezhaoshang_png";
		t.width = 1106;
		t.x = 11;
		t.y = 11;
		return t;
	};
	_proto._Image3_i = function () {
		var t = new eui.Image();
		t.bottom = 11;
		t.source = "bofang_zhezhao_png";
		t.width = 1106;
		t.x = 11;
		return t;
	};
	_proto._Group1_i = function () {
		var t = new eui.Group();
		t.horizontalCenter = 0;
		t.y = 39;
		t.elementsContent = [this._Image4_i(),this._Image5_i(),this.textTitle_i()];
		return t;
	};
	_proto._Image4_i = function () {
		var t = new eui.Image();
		t.left = 0;
		t.source = "tongyong_tanchuangzhuangshi_png";
		t.verticalCenter = 0;
		return t;
	};
	_proto._Image5_i = function () {
		var t = new eui.Image();
		t.right = 0;
		t.source = "tongyong_tanchuangzhuangshi_png";
		t.verticalCenter = 0;
		return t;
	};
	_proto.textTitle_i = function () {
		var t = new eui.Label();
		this.textTitle = t;
		t.fontFamily = "fangzheng";
		t.left = 56;
		t.right = 56;
		t.size = 28;
		t.text = "";
		t.verticalCenter = 0;
		return t;
	};
	_proto._Rect1_i = function () {
		var t = new eui.Rect();
		t.fillAlpha = 0.2;
		t.fillColor = 0xf0e8c4;
		t.height = 1;
		t.width = 224;
		t.x = 452;
		t.y = 80;
		return t;
	};
	_proto.imgLock_i = function () {
		var t = new eui.Image();
		this.imgLock = t;
		t.source = "zhangjie_suo_icon128_png";
		t.x = 500;
		t.y = 257;
		return t;
	};
	_proto.gNoviceunlock_i = function () {
		var t = new eui.Group();
		this.gNoviceunlock = t;
		t.visible = false;
		t.x = 67;
		t.y = 411;
		t.elementsContent = [this._Exclamation1_i(),this._Image6_i()];
		return t;
	};
	_proto._Exclamation1_i = function () {
		var t = new Component.Exclamation();
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto._Image6_i = function () {
		var t = new eui.Image();
		t.source = "zhiying_miaosu_17_png";
		t.x = 55;
		t.y = 3;
		return t;
	};
	_proto.gNovicequeue_i = function () {
		var t = new eui.Group();
		this.gNovicequeue = t;
		t.visible = false;
		t.x = 65;
		t.y = 411;
		t.elementsContent = [this._Exclamation2_i(),this._Image7_i()];
		return t;
	};
	_proto._Exclamation2_i = function () {
		var t = new Component.Exclamation();
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto._Image7_i = function () {
		var t = new eui.Image();
		t.source = "zhiying_miaosu_15_png";
		t.x = 55;
		t.y = 3;
		return t;
	};
	_proto.gVideo_i = function () {
		var t = new eui.Group();
		this.gVideo = t;
		t.height = 620;
		t.horizontalCenter = 0;
		t.verticalCenter = 0;
		t.width = 1106;
		t.elementsContent = [this.gTips_i(),this.btnClose_i(),this.btnPreviewPlay_i(),this.btnPreviewPause_i()];
		return t;
	};
	_proto.gTips_i = function () {
		var t = new eui.Group();
		this.gTips = t;
		t.x = 840;
		t.y = 487;
		t.elementsContent = [this.btnGroup_i(),this.preGroup_i(),this.dlcGroup_i(),this.comingGroup_i()];
		return t;
	};
	_proto.btnGroup_i = function () {
		var t = new eui.Group();
		this.btnGroup = t;
		t.height = 114;
		t.visible = false;
		t.width = 246;
		t.x = 0;
		t.y = 0;
		t.elementsContent = [this.image0_i(),this.image_i(),this._Image8_i(),this._Group2_i(),this.btnComing_i(),this.btnDash_i(),this.btnPlay_i(),this.image1_i()];
		return t;
	};
	_proto.image0_i = function () {
		var t = new eui.Image();
		this.image0 = t;
		t.alpha = 0;
		t.horizontalCenter = 0;
		t.source = "zhangjie_shijiangzhuantaikuang_effect1_png";
		t.verticalCenter = 0;
		return t;
	};
	_proto.image_i = function () {
		var t = new eui.Image();
		this.image = t;
		t.alpha = 0;
		t.horizontalCenter = 0;
		t.source = "zhangjie_shijiangzhuantaikuang_effect1_png";
		t.verticalCenter = 0;
		return t;
	};
	_proto._Image8_i = function () {
		var t = new eui.Image();
		t.source = "zhangjie_shijiangzhuantaikuang_png";
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto._Group2_i = function () {
		var t = new eui.Group();
		t.height = 49;
		t.horizontalCenter = 0;
		t.y = 1;
		t.elementsContent = [this._Image9_i(),this.textTime_i(),this._Image10_i()];
		return t;
	};
	_proto._Image9_i = function () {
		var t = new eui.Image();
		t.left = 0;
		t.source = "zhangjie_zhuangshi_png";
		t.verticalCenter = 0;
		return t;
	};
	_proto.textTime_i = function () {
		var t = new eui.Label();
		this.textTime = t;
		t.fontFamily = "Microsoft YaHei";
		t.left = 25;
		t.right = 25;
		t.size = 18;
		t.text = "";
		t.verticalCenter = 0;
		return t;
	};
	_proto._Image10_i = function () {
		var t = new eui.Image();
		t.right = 0;
		t.source = "zhangjie_zhuangshi_png";
		t.verticalCenter = 0;
		return t;
	};
	_proto.btnComing_i = function () {
		var t = new eui.Button();
		this.btnComing = t;
		t.label = "敬请期待";
		t.visible = false;
		t.x = 829;
		t.y = 537;
		t.skinName = Chapter_popSkin$Skin5;
		return t;
	};
	_proto.btnDash_i = function () {
		var t = new eui.Button();
		this.btnDash = t;
		t.bottom = 0;
		t.horizontalCenter = 0;
		t.label = "加速";
		t.visible = false;
		t.skinName = Chapter_popSkin$Skin6;
		return t;
	};
	_proto.btnPlay_i = function () {
		var t = new eui.Button();
		this.btnPlay = t;
		t.bottom = 0;
		t.horizontalCenter = 0;
		t.label = "播放本章";
		t.visible = false;
		t.skinName = Chapter_popSkin$Skin7;
		return t;
	};
	_proto.image1_i = function () {
		var t = new eui.Image();
		this.image1 = t;
		t.alpha = 0;
		t.bottom = 0;
		t.height = 64;
		t.horizontalCenter = 0;
		t.source = "waifaguang1_png";
		t.touchEnabled = false;
		t.width = 246;
		return t;
	};
	_proto.preGroup_i = function () {
		var t = new eui.Group();
		this.preGroup = t;
		t.height = 64;
		t.visible = false;
		t.width = 246;
		t.x = 0;
		t.y = 50;
		t.elementsContent = [this._Image11_i(),this._Label1_i()];
		return t;
	};
	_proto._Image11_i = function () {
		var t = new eui.Image();
		t.source = "zhangjie_shijiangzhuantaikuang_xiao_png";
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto._Label1_i = function () {
		var t = new eui.Label();
		t.fontFamily = "Microsoft YaHei";
		t.size = 24;
		t.text = "需要通关前一章";
		t.textColor = 0xb0ab98;
		t.verticalCenter = 0;
		t.x = 65;
		return t;
	};
	_proto.dlcGroup_i = function () {
		var t = new eui.Group();
		this.dlcGroup = t;
		t.height = 64;
		t.visible = false;
		t.width = 246;
		t.x = 0;
		t.y = 50;
		t.elementsContent = [this._Image12_i(),this._Label2_i()];
		return t;
	};
	_proto._Image12_i = function () {
		var t = new eui.Image();
		t.source = "zhangjie_shijiangzhuantaikuang_xiao_png";
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto._Label2_i = function () {
		var t = new eui.Label();
		t.fontFamily = "Microsoft YaHei";
		t.size = 24;
		t.text = "前往商店页购买";
		t.textColor = 0xb0ab98;
		t.verticalCenter = 0;
		t.x = 65;
		return t;
	};
	_proto.comingGroup_i = function () {
		var t = new eui.Group();
		this.comingGroup = t;
		t.height = 64;
		t.visible = false;
		t.width = 246;
		t.x = 0;
		t.y = 50;
		t.elementsContent = [this._Image13_i(),this._Label3_i()];
		return t;
	};
	_proto._Image13_i = function () {
		var t = new eui.Image();
		t.source = "zhangjie_shijiangzhuantaikuang_xiao_png";
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto._Label3_i = function () {
		var t = new eui.Label();
		t.fontFamily = "Microsoft YaHei";
		t.size = 24;
		t.text = "敬请期待";
		t.textColor = 0xb0ab98;
		t.verticalCenter = 0;
		t.x = 90;
		return t;
	};
	_proto.btnClose_i = function () {
		var t = new eui.Button();
		this.btnClose = t;
		t.label = "";
		t.right = 0;
		t.top = 0;
		t.skinName = Chapter_popSkin$Skin8;
		return t;
	};
	_proto.btnPreviewPlay_i = function () {
		var t = new eui.Button();
		this.btnPreviewPlay = t;
		t.bottom = 30;
		t.height = 50;
		t.label = "";
		t.width = 183;
		t.x = 30;
		t.skinName = Chapter_popSkin$Skin9;
		return t;
	};
	_proto.btnPreviewPause_i = function () {
		var t = new eui.Button();
		this.btnPreviewPause = t;
		t.bottom = 30;
		t.height = 50;
		t.label = "";
		t.visible = false;
		t.width = 183;
		t.x = 30;
		t.skinName = Chapter_popSkin$Skin10;
		return t;
	};
	return Chapter_popSkin;
})(eui.Skin);generateEUI.paths['resource/eui_skins/Chapter.exml'] = window.ChapterSkin = (function (_super) {
	__extends(ChapterSkin, _super);
	var ChapterSkin$Skin11 = 	(function (_super) {
		__extends(ChapterSkin$Skin11, _super);
		function ChapterSkin$Skin11() {
			_super.call(this);
			this.skinParts = ["labelDisplay"];
			
			this.elementsContent = [this._Image1_i(),this.labelDisplay_i()];
			this.states = [
				new eui.State ("up",
					[
					])
				,
				new eui.State ("down",
					[
						new eui.SetProperty("_Image1","source","zhangjie_guanbi_btn02_png")
					])
				,
				new eui.State ("disabled",
					[
					])
				,
				new eui.State ("move",
					[
						new eui.SetProperty("_Image1","source","zhangjie_guanbi_btn01_png")
					])
			];
		}
		var _proto = ChapterSkin$Skin11.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			this._Image1 = t;
			t.percentHeight = 100;
			t.source = "zhangjie_guanbi_btn00_png";
			t.percentWidth = 100;
			return t;
		};
		_proto.labelDisplay_i = function () {
			var t = new eui.Label();
			this.labelDisplay = t;
			t.horizontalCenter = 0;
			t.verticalCenter = 0;
			return t;
		};
		return ChapterSkin$Skin11;
	})(eui.Skin);

	function ChapterSkin() {
		_super.call(this);
		this.skinParts = ["lightTween","image","image0","gLine","gList","gScroller","scrollChapter","gChapter","gNovice","gContent","btnReturn"];
		
		this.height = 1080;
		this.width = 1920;
		this.lightTween_i();
		this.elementsContent = [this._Rect1_i(),this._Image1_i(),this.image_i(),this.image0_i(),this._Group1_i(),this._Rect2_i(),this.gContent_i(),this.btnReturn_i()];
		
		eui.Binding.$bindProperties(this, ["image"],[0],this._TweenItem1,"target");
		eui.Binding.$bindProperties(this, [0],[],this._Object1,"alpha");
		eui.Binding.$bindProperties(this, [0.18],[],this._Object2,"alpha");
		eui.Binding.$bindProperties(this, [-833.33],[],this._Object2,"x");
		eui.Binding.$bindProperties(this, [0],[],this._Object3,"alpha");
		eui.Binding.$bindProperties(this, [1500],[],this._Object3,"x");
		eui.Binding.$bindProperties(this, [3000],[],this._Object4,"x");
		eui.Binding.$bindProperties(this, ["image0"],[0],this._TweenItem2,"target");
		eui.Binding.$bindProperties(this, [0],[],this._Object5,"alpha");
		eui.Binding.$bindProperties(this, [1],[],this._Object6,"alpha");
	}
	var _proto = ChapterSkin.prototype;

	_proto.lightTween_i = function () {
		var t = new egret.tween.TweenGroup();
		this.lightTween = t;
		t.items = [this._TweenItem1_i(),this._TweenItem2_i()];
		return t;
	};
	_proto._TweenItem1_i = function () {
		var t = new egret.tween.TweenItem();
		this._TweenItem1 = t;
		t.paths = [this._Set1_i(),this._To1_i(),this._To2_i(),this._To3_i()];
		return t;
	};
	_proto._Set1_i = function () {
		var t = new egret.tween.Set();
		t.props = this._Object1_i();
		return t;
	};
	_proto._Object1_i = function () {
		var t = {};
		this._Object1 = t;
		return t;
	};
	_proto._To1_i = function () {
		var t = new egret.tween.To();
		t.duration = 350;
		t.props = this._Object2_i();
		return t;
	};
	_proto._Object2_i = function () {
		var t = {};
		this._Object2 = t;
		return t;
	};
	_proto._To2_i = function () {
		var t = new egret.tween.To();
		t.duration = 700;
		t.props = this._Object3_i();
		return t;
	};
	_proto._Object3_i = function () {
		var t = {};
		this._Object3 = t;
		return t;
	};
	_proto._To3_i = function () {
		var t = new egret.tween.To();
		t.duration = 450;
		t.props = this._Object4_i();
		return t;
	};
	_proto._Object4_i = function () {
		var t = {};
		this._Object4 = t;
		return t;
	};
	_proto._TweenItem2_i = function () {
		var t = new egret.tween.TweenItem();
		this._TweenItem2 = t;
		t.paths = [this._Set2_i(),this._To4_i()];
		return t;
	};
	_proto._Set2_i = function () {
		var t = new egret.tween.Set();
		t.props = this._Object5_i();
		return t;
	};
	_proto._Object5_i = function () {
		var t = {};
		this._Object5 = t;
		return t;
	};
	_proto._To4_i = function () {
		var t = new egret.tween.To();
		t.duration = 250;
		t.props = this._Object6_i();
		return t;
	};
	_proto._Object6_i = function () {
		var t = {};
		this._Object6 = t;
		return t;
	};
	_proto._Rect1_i = function () {
		var t = new eui.Rect();
		t.bottom = 0;
		t.left = 0;
		t.right = 0;
		t.top = 0;
		return t;
	};
	_proto._Image1_i = function () {
		var t = new eui.Image();
		t.bottom = 0;
		t.left = 0;
		t.right = 0;
		t.source = "shezhi_bg1920_1080_jpg";
		t.top = 0;
		return t;
	};
	_proto.image_i = function () {
		var t = new eui.Image();
		this.image = t;
		t.alpha = 0;
		t.height = 550;
		t.skewX = 180;
		t.source = "jianbian3_png";
		t.verticalCenter = 0;
		t.width = 1920;
		t.x = -2000;
		return t;
	};
	_proto.image0_i = function () {
		var t = new eui.Image();
		this.image0 = t;
		t.horizontalCenter = 0;
		t.source = "zhangjie_yulanzhangjiedi_png";
		t.verticalCenter = 0;
		t.width = 1920;
		return t;
	};
	_proto._Group1_i = function () {
		var t = new eui.Group();
		t.horizontalCenter = 0;
		t.y = 34;
		t.elementsContent = [this._Image2_i(),this._Image3_i(),this._Label1_i()];
		return t;
	};
	_proto._Image2_i = function () {
		var t = new eui.Image();
		t.source = "tongyong_tanchuangzhuangshi_png";
		t.verticalCenter = 0;
		t.x = 0;
		return t;
	};
	_proto._Image3_i = function () {
		var t = new eui.Image();
		t.source = "tongyong_tanchuangzhuangshi_png";
		t.verticalCenter = 0;
		t.x = 230;
		return t;
	};
	_proto._Label1_i = function () {
		var t = new eui.Label();
		t.fontFamily = "fangzheng";
		t.horizontalCenter = 0;
		t.size = 28;
		t.text = "全部章节";
		t.verticalCenter = 0;
		return t;
	};
	_proto._Rect2_i = function () {
		var t = new eui.Rect();
		t.fillAlpha = 0.2;
		t.fillColor = 0xf0e8c4;
		t.height = 1;
		t.horizontalCenter = 0;
		t.width = 224;
		t.y = 75;
		return t;
	};
	_proto.gContent_i = function () {
		var t = new eui.Group();
		this.gContent = t;
		t.bottom = 0;
		t.horizontalCenter = 0;
		t.top = 0;
		t.width = 1920;
		t.elementsContent = [this.gChapter_i(),this.gNovice_i()];
		return t;
	};
	_proto.gChapter_i = function () {
		var t = new eui.Group();
		this.gChapter = t;
		t.height = 550;
		t.horizontalCenter = 0;
		t.scrollEnabled = false;
		t.verticalCenter = 0;
		t.width = 1920;
		t.elementsContent = [this.scrollChapter_i()];
		return t;
	};
	_proto.scrollChapter_i = function () {
		var t = new eui.Scroller();
		this.scrollChapter = t;
		t.bottom = 0;
		t.bounces = false;
		t.left = 0;
		t.right = 0;
		t.top = 0;
		t.viewport = this._Group2_i();
		return t;
	};
	_proto._Group2_i = function () {
		var t = new eui.Group();
		t.elementsContent = [this.gScroller_i()];
		return t;
	};
	_proto.gScroller_i = function () {
		var t = new eui.Group();
		this.gScroller = t;
		t.height = 550;
		t.width = 1920;
		t.x = 0;
		t.y = 0;
		t.elementsContent = [this.gLine_i(),this.gList_i()];
		return t;
	};
	_proto.gLine_i = function () {
		var t = new eui.Group();
		this.gLine = t;
		t.bottom = 0;
		t.left = 0;
		t.right = 0;
		t.top = 0;
		return t;
	};
	_proto.gList_i = function () {
		var t = new eui.Group();
		this.gList = t;
		t.bottom = 0;
		t.left = 0;
		t.right = 0;
		t.top = 0;
		return t;
	};
	_proto.gNovice_i = function () {
		var t = new eui.Group();
		this.gNovice = t;
		t.horizontalCenter = 0;
		t.visible = false;
		t.y = 825;
		t.elementsContent = [this._Exclamation1_i(),this._Image4_i()];
		return t;
	};
	_proto._Exclamation1_i = function () {
		var t = new Component.Exclamation();
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto._Image4_i = function () {
		var t = new eui.Image();
		t.source = "zhiying_miaosu_14_png";
		t.x = 55;
		t.y = 3;
		return t;
	};
	_proto.btnReturn_i = function () {
		var t = new eui.Button();
		this.btnReturn = t;
		t.label = "";
		t.right = 43;
		t.scaleX = 1;
		t.scaleY = 1;
		t.y = 26;
		t.skinName = ChapterSkin$Skin11;
		return t;
	};
	return ChapterSkin;
})(eui.Skin);generateEUI.paths['resource/eui_skins/ChapterJumpButton.exml'] = window.ChapterJumpButtonSkin = (function (_super) {
	__extends(ChapterJumpButtonSkin, _super);
	function ChapterJumpButtonSkin() {
		_super.call(this);
		this.skinParts = ["labelDisplay"];
		
		this.elementsContent = [this._Image1_i(),this.labelDisplay_i()];
		this.states = [
			new eui.State ("up",
				[
				])
			,
			new eui.State ("down",
				[
					new eui.SetProperty("_Image1","source","xuanzhhong_btn_png")
				])
			,
			new eui.State ("disabled",
				[
				])
		];
	}
	var _proto = ChapterJumpButtonSkin.prototype;

	_proto._Image1_i = function () {
		var t = new eui.Image();
		this._Image1 = t;
		t.percentHeight = 100;
		t.scale9Grid = new egret.Rectangle(3,3,24,24);
		t.percentWidth = 100;
		return t;
	};
	_proto.labelDisplay_i = function () {
		var t = new eui.Label();
		this.labelDisplay = t;
		t.fontFamily = "Microsoft YaHei";
		t.height = 50;
		t.horizontalCenter = 0;
		t.size = 18;
		t.textAlign = "center";
		t.textColor = 0xb8b8b8;
		t.verticalAlign = "middle";
		t.verticalCenter = 0;
		t.width = 180;
		return t;
	};
	return ChapterJumpButtonSkin;
})(eui.Skin);generateEUI.paths['resource/eui_skins/ChapterJump.exml'] = window.ChapterJumpSkin = (function (_super) {
	__extends(ChapterJumpSkin, _super);
	function ChapterJumpSkin() {
		_super.call(this);
		this.skinParts = ["imgIcon","gJump","btnMenu1","btnMenu6","btnMenu7","btnMenu8","btnMenu9","gMenu"];
		
		this.width = 242;
		this.elementsContent = [this.gJump_i(),this.gMenu_i()];
	}
	var _proto = ChapterJumpSkin.prototype;

	_proto.gJump_i = function () {
		var t = new eui.Group();
		this.gJump = t;
		t.x = 0;
		t.y = 0;
		t.elementsContent = [this._Image1_i(),this.imgIcon_i(),this._Group1_i()];
		return t;
	};
	_proto._Image1_i = function () {
		var t = new eui.Image();
		t.height = 48;
		t.scale9Grid = new egret.Rectangle(3,3,24,24);
		t.source = "xiala_png";
		t.width = 54;
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto.imgIcon_i = function () {
		var t = new eui.Image();
		this.imgIcon = t;
		t.skewX = 0;
		t.source = "xiala_icon_png";
		t.verticalCenter = 0;
		t.x = 16;
		return t;
	};
	_proto._Group1_i = function () {
		var t = new eui.Group();
		t.x = 55;
		t.y = 0;
		t.elementsContent = [this._Image2_i(),this._Label1_i()];
		return t;
	};
	_proto._Image2_i = function () {
		var t = new eui.Image();
		t.height = 48;
		t.scale9Grid = new egret.Rectangle(3,3,24,24);
		t.source = "xiala_png";
		t.width = 185;
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto._Label1_i = function () {
		var t = new eui.Label();
		t.fontFamily = "Microsoft YaHei";
		t.horizontalCenter = 0;
		t.size = 24;
		t.text = "GM列表";
		t.textColor = 0xb8b8b8;
		t.verticalCenter = 0;
		return t;
	};
	_proto.gMenu_i = function () {
		var t = new eui.Group();
		this.gMenu = t;
		t.anchorOffsetY = 0;
		t.height = 565;
		t.visible = false;
		t.width = 188;
		t.x = 55;
		t.y = 48;
		t.elementsContent = [this._Image3_i(),this.btnMenu1_i(),this.btnMenu6_i(),this.btnMenu7_i(),this.btnMenu8_i(),this.btnMenu9_i()];
		return t;
	};
	_proto._Image3_i = function () {
		var t = new eui.Image();
		t.bottom = 0;
		t.left = 0;
		t.right = 4;
		t.scale9Grid = new egret.Rectangle(3,3,24,24);
		t.source = "xiala_png";
		t.top = 0;
		return t;
	};
	_proto.btnMenu1_i = function () {
		var t = new eui.Button();
		this.btnMenu1 = t;
		t.height = 80;
		t.horizontalCenter = 0;
		t.label = "开启章节";
		t.skinName = "ChapterJumpButtonSkin";
		t.width = 152;
		t.y = 30;
		return t;
	};
	_proto.btnMenu6_i = function () {
		var t = new eui.Button();
		this.btnMenu6 = t;
		t.height = 80;
		t.horizontalCenter = 0;
		t.label = "清档重开";
		t.skinName = "ChapterJumpButtonSkin";
		t.width = 152;
		t.y = 135;
		return t;
	};
	_proto.btnMenu7_i = function () {
		var t = new eui.Button();
		this.btnMenu7 = t;
		t.height = 80;
		t.horizontalCenter = -2;
		t.label = "增加金币";
		t.skinName = "ChapterJumpButtonSkin";
		t.width = 152;
		t.y = 245;
		return t;
	};
	_proto.btnMenu8_i = function () {
		var t = new eui.Button();
		this.btnMenu8 = t;
		t.height = 80;
		t.horizontalCenter = -2;
		t.label = "修改时间";
		t.skinName = "ChapterJumpButtonSkin";
		t.width = 152;
		t.y = 350;
		return t;
	};
	_proto.btnMenu9_i = function () {
		var t = new eui.Button();
		this.btnMenu9 = t;
		t.height = 80;
		t.horizontalCenter = -2;
		t.label = "买鲜花鸡蛋";
		t.skinName = "ChapterJumpButtonSkin";
		t.width = 152;
		t.y = 455;
		return t;
	};
	return ChapterJumpSkin;
})(eui.Skin);generateEUI.paths['resource/eui_skins/ConfirmButton.exml'] = window.ConfirmButtonSkin = (function (_super) {
	__extends(ConfirmButtonSkin, _super);
	var ConfirmButtonSkin$Skin12 = 	(function (_super) {
		__extends(ConfirmButtonSkin$Skin12, _super);
		function ConfirmButtonSkin$Skin12() {
			_super.call(this);
			this.skinParts = ["labelDisplay"];
			
			this.elementsContent = [this._Image1_i(),this.labelDisplay_i()];
			this.states = [
				new eui.State ("up",
					[
					])
				,
				new eui.State ("down",
					[
						new eui.SetProperty("_Image1","source","bofang_queding_btn02_png")
					])
				,
				new eui.State ("disabled",
					[
					])
				,
				new eui.State ("move",
					[
						new eui.SetProperty("_Image1","source","bofang_queding_btn01_png")
					])
			];
		}
		var _proto = ConfirmButtonSkin$Skin12.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			this._Image1 = t;
			t.percentHeight = 100;
			t.source = "bofang_queding_btn00_png";
			t.percentWidth = 100;
			return t;
		};
		_proto.labelDisplay_i = function () {
			var t = new eui.Label();
			this.labelDisplay = t;
			t.fontFamily = "fangzheng";
			t.size = 28;
			t.verticalCenter = 0;
			t.x = 95;
			return t;
		};
		return ConfirmButtonSkin$Skin12;
	})(eui.Skin);

	function ConfirmButtonSkin() {
		_super.call(this);
		this.skinParts = ["bgRect","btnComplete"];
		
		this.height = 1080;
		this.width = 1920;
		this.elementsContent = [this.bgRect_i(),this.btnComplete_i()];
	}
	var _proto = ConfirmButtonSkin.prototype;

	_proto.bgRect_i = function () {
		var t = new eui.Rect();
		this.bgRect = t;
		t.bottom = 0;
		t.fillAlpha = 0;
		t.left = 0;
		t.right = 0;
		t.top = 0;
		return t;
	};
	_proto.btnComplete_i = function () {
		var t = new eui.Button();
		this.btnComplete = t;
		t.label = "继续潜伏";
		t.x = 1489;
		t.y = 972;
		t.skinName = ConfirmButtonSkin$Skin12;
		return t;
	};
	return ConfirmButtonSkin;
})(eui.Skin);generateEUI.paths['resource/eui_skins/ControlSliderSkin.exml'] = window.ControlSliderSkin = (function (_super) {
	__extends(ControlSliderSkin, _super);
	function ControlSliderSkin() {
		_super.call(this);
		this.skinParts = ["track","trackHighlight","thumb"];
		
		this.height = 64;
		this.minHeight = 8;
		this.minWidth = 20;
		this.elementsContent = [this.track_i(),this.trackHighlight_i(),this.thumb_i()];
		this.states = [
			new eui.State ("up",
				[
				])
			,
			new eui.State ("down",
				[
					new eui.SetProperty("_Image1","source","shezhi_yinliangtiaokong_btn02_png")
				])
			,
			new eui.State ("disabled",
				[
				])
			,
			new eui.State ("move",
				[
					new eui.SetProperty("_Image1","source","shezhi_yinliangtiaokong_btn01_png")
				])
		];
	}
	var _proto = ControlSliderSkin.prototype;

	_proto.track_i = function () {
		var t = new eui.Image();
		this.track = t;
		t.height = 8;
		t.left = 0;
		t.right = 0;
		t.scale9Grid = new egret.Rectangle(1,1,98,6);
		t.source = "shezhi_jishidikang_png";
		t.verticalCenter = 0;
		return t;
	};
	_proto.trackHighlight_i = function () {
		var t = new eui.Rect();
		this.trackHighlight = t;
		t.fillColor = 0xffffff;
		t.height = 4;
		t.verticalCenter = 0;
		t.width = 0;
		t.x = 0;
		return t;
	};
	_proto.thumb_i = function () {
		var t = new eui.Group();
		this.thumb = t;
		t.verticalCenter = 0;
		t.width = 0;
		t.x = 0;
		t.elementsContent = [this._Image1_i()];
		return t;
	};
	_proto._Image1_i = function () {
		var t = new eui.Image();
		this._Image1 = t;
		t.height = 64;
		t.horizontalCenter = 0;
		t.source = "shezhi_yinliangtiaokong_btn00_png";
		t.verticalCenter = 0;
		t.width = 64;
		return t;
	};
	return ControlSliderSkin;
})(eui.Skin);generateEUI.paths['resource/eui_skins/defnChangeButton.exml'] = window.DefnChangeButtonSkin = (function (_super) {
	__extends(DefnChangeButtonSkin, _super);
	function DefnChangeButtonSkin() {
		_super.call(this);
		this.skinParts = ["labelDisplay"];
		
		this.height = 18;
		this.minHeight = 50;
		this.minWidth = 100;
		this.width = 100;
		this.elementsContent = [this.labelDisplay_i()];
		this.states = [
			new eui.State ("up",
				[
				])
			,
			new eui.State ("down",
				[
					new eui.SetProperty("labelDisplay","textColor",0xff632c)
				])
			,
			new eui.State ("disabled",
				[
				])
		];
	}
	var _proto = DefnChangeButtonSkin.prototype;

	_proto.labelDisplay_i = function () {
		var t = new eui.Label();
		this.labelDisplay = t;
		t.fontFamily = "Microsoft YaHei";
		t.horizontalCenter = 0;
		t.size = 14;
		t.text = "";
		t.textAlign = "center";
		t.textColor = 0xcccccc;
		t.verticalAlign = "middle";
		t.verticalCenter = 0;
		return t;
	};
	return DefnChangeButtonSkin;
})(eui.Skin);generateEUI.paths['resource/eui_skins/defnVideoRateSkin.exml'] = window.defnVideoRateSkin = (function (_super) {
	__extends(defnVideoRateSkin, _super);
	function defnVideoRateSkin() {
		_super.call(this);
		this.skinParts = ["labelDisplay","icoSelected"];
		
		this.height = 60;
		this.minHeight = 50;
		this.minWidth = 100;
		this.width = 100;
		this.elementsContent = [this.labelDisplay_i()];
		this.icoSelected_i();
		
		this.states = [
			new eui.State ("up",
				[
				])
			,
			new eui.State ("down",
				[
					new eui.AddItems("icoSelected","",1,""),
					new eui.SetProperty("labelDisplay","textColor",0xffc371)
				])
			,
			new eui.State ("disabled",
				[
				])
		];
	}
	var _proto = defnVideoRateSkin.prototype;

	_proto.labelDisplay_i = function () {
		var t = new eui.Label();
		this.labelDisplay = t;
		t.fontFamily = "Microsoft YaHei";
		t.horizontalCenter = 0;
		t.size = 30;
		t.textAlign = "center";
		t.textColor = 0xFFFFFF;
		t.top = 0;
		t.verticalAlign = "top";
		return t;
	};
	_proto.icoSelected_i = function () {
		var t = new eui.Image();
		this.icoSelected = t;
		t.bottom = 0;
		t.height = 12;
		t.horizontalCenter = 0;
		t.source = "Tongyong_button_yixuan_00_png";
		t.width = 12;
		return t;
	};
	return defnVideoRateSkin;
})(eui.Skin);generateEUI.paths['resource/eui_skins/EditDonate.exml'] = window.EditDonate = (function (_super) {
	__extends(EditDonate, _super);
	var EditDonate$Skin13 = 	(function (_super) {
		__extends(EditDonate$Skin13, _super);
		function EditDonate$Skin13() {
			_super.call(this);
			this.skinParts = ["labelDisplay"];
			
			this.elementsContent = [this._Image1_i(),this.labelDisplay_i()];
			this.states = [
				new eui.State ("up",
					[
					])
				,
				new eui.State ("down",
					[
						new eui.SetProperty("_Image1","source","tongyong_queding_btn02_png")
					])
				,
				new eui.State ("disabled",
					[
					])
				,
				new eui.State ("move",
					[
						new eui.SetProperty("_Image1","source","tongyong_queding_btn01_png")
					])
			];
		}
		var _proto = EditDonate$Skin13.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			this._Image1 = t;
			t.percentHeight = 100;
			t.source = "tongyong_queding_btn00_png";
			t.percentWidth = 100;
			return t;
		};
		_proto.labelDisplay_i = function () {
			var t = new eui.Label();
			this.labelDisplay = t;
			t.fontFamily = "Microsoft Yahei";
			t.horizontalCenter = 0;
			t.size = 22;
			t.textColor = 0x000000;
			t.verticalCenter = 0;
			return t;
		};
		return EditDonate$Skin13;
	})(eui.Skin);

	var EditDonate$Skin14 = 	(function (_super) {
		__extends(EditDonate$Skin14, _super);
		function EditDonate$Skin14() {
			_super.call(this);
			this.skinParts = ["labelDisplay"];
			
			this.elementsContent = [this._Image1_i(),this.labelDisplay_i()];
			this.states = [
				new eui.State ("up",
					[
					])
				,
				new eui.State ("down",
					[
						new eui.SetProperty("_Image1","source","tongyong_queding_btn02_png")
					])
				,
				new eui.State ("disabled",
					[
					])
				,
				new eui.State ("move",
					[
						new eui.SetProperty("_Image1","source","tongyong_queding_btn01_png")
					])
			];
		}
		var _proto = EditDonate$Skin14.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			this._Image1 = t;
			t.percentHeight = 100;
			t.source = "tongyong_queding_btn00_png";
			t.percentWidth = 100;
			return t;
		};
		_proto.labelDisplay_i = function () {
			var t = new eui.Label();
			this.labelDisplay = t;
			t.fontFamily = "Microsoft Yahei";
			t.horizontalCenter = 0;
			t.size = 22;
			t.textColor = 0x000000;
			t.verticalCenter = 0;
			return t;
		};
		return EditDonate$Skin14;
	})(eui.Skin);

	var EditDonate$Skin15 = 	(function (_super) {
		__extends(EditDonate$Skin15, _super);
		function EditDonate$Skin15() {
			_super.call(this);
			this.skinParts = ["labelDisplay"];
			
			this.elementsContent = [this._Image1_i(),this.labelDisplay_i()];
			this.states = [
				new eui.State ("up",
					[
					])
				,
				new eui.State ("down",
					[
						new eui.SetProperty("_Image1","source","tongyong_queding_btn02_png")
					])
				,
				new eui.State ("disabled",
					[
					])
				,
				new eui.State ("move",
					[
						new eui.SetProperty("_Image1","source","tongyong_queding_btn01_png")
					])
			];
		}
		var _proto = EditDonate$Skin15.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			this._Image1 = t;
			t.percentHeight = 100;
			t.source = "tongyong_queding_btn00_png";
			t.percentWidth = 100;
			return t;
		};
		_proto.labelDisplay_i = function () {
			var t = new eui.Label();
			this.labelDisplay = t;
			t.fontFamily = "Microsoft Yahei";
			t.horizontalCenter = 0;
			t.size = 22;
			t.textColor = 0x000000;
			t.verticalCenter = 0;
			return t;
		};
		return EditDonate$Skin15;
	})(eui.Skin);

	var EditDonate$Skin16 = 	(function (_super) {
		__extends(EditDonate$Skin16, _super);
		function EditDonate$Skin16() {
			_super.call(this);
			this.skinParts = ["labelDisplay"];
			
			this.elementsContent = [this._Image1_i(),this.labelDisplay_i()];
			this.states = [
				new eui.State ("up",
					[
					])
				,
				new eui.State ("down",
					[
						new eui.SetProperty("_Image1","source","tongyong_queding_btn02_png")
					])
				,
				new eui.State ("disabled",
					[
					])
				,
				new eui.State ("move",
					[
						new eui.SetProperty("_Image1","source","tongyong_queding_btn01_png")
					])
			];
		}
		var _proto = EditDonate$Skin16.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			this._Image1 = t;
			t.percentHeight = 100;
			t.source = "tongyong_queding_btn00_png";
			t.percentWidth = 100;
			return t;
		};
		_proto.labelDisplay_i = function () {
			var t = new eui.Label();
			this.labelDisplay = t;
			t.fontFamily = "Microsoft Yahei";
			t.horizontalCenter = 0;
			t.size = 22;
			t.textColor = 0x000000;
			t.verticalCenter = 0;
			return t;
		};
		return EditDonate$Skin16;
	})(eui.Skin);

	var EditDonate$Skin17 = 	(function (_super) {
		__extends(EditDonate$Skin17, _super);
		function EditDonate$Skin17() {
			_super.call(this);
			this.skinParts = ["labelDisplay"];
			
			this.elementsContent = [this._Image1_i(),this.labelDisplay_i()];
			this.states = [
				new eui.State ("up",
					[
					])
				,
				new eui.State ("down",
					[
						new eui.SetProperty("_Image1","source","tongyog_guanbi_icon01_png")
					])
				,
				new eui.State ("disabled",
					[
					])
			];
		}
		var _proto = EditDonate$Skin17.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			this._Image1 = t;
			t.percentHeight = 100;
			t.source = "tongyog_guanbi_icon00_png";
			t.percentWidth = 100;
			return t;
		};
		_proto.labelDisplay_i = function () {
			var t = new eui.Label();
			this.labelDisplay = t;
			t.horizontalCenter = 0;
			t.verticalCenter = 0;
			return t;
		};
		return EditDonate$Skin17;
	})(eui.Skin);

	function EditDonate() {
		_super.call(this);
		this.skinParts = ["btnFlower1","btnEgg1","btnFlower2","btnEgg2","btnClose"];
		
		this.height = 272;
		this.width = 714;
		this.elementsContent = [this._Group2_i()];
	}
	var _proto = EditDonate.prototype;

	_proto._Group2_i = function () {
		var t = new eui.Group();
		t.horizontalCenter = 0;
		t.verticalCenter = 0;
		t.elementsContent = [this._Image1_i(),this._Group1_i(),this.btnClose_i()];
		return t;
	};
	_proto._Image1_i = function () {
		var t = new eui.Image();
		t.source = "juesenicheng_tangchuang_png";
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto._Group1_i = function () {
		var t = new eui.Group();
		t.horizontalCenter = 0;
		t.verticalCenter = 0;
		t.width = 470;
		t.layout = this._TileLayout1_i();
		t.elementsContent = [this.btnFlower1_i(),this.btnEgg1_i(),this.btnFlower2_i(),this.btnEgg2_i()];
		return t;
	};
	_proto._TileLayout1_i = function () {
		var t = new eui.TileLayout();
		t.horizontalGap = 19;
		return t;
	};
	_proto.btnFlower1_i = function () {
		var t = new eui.Button();
		this.btnFlower1 = t;
		t.label = "买鲜花6朵";
		t.x = 0;
		t.y = 0;
		t.skinName = EditDonate$Skin13;
		return t;
	};
	_proto.btnEgg1_i = function () {
		var t = new eui.Button();
		this.btnEgg1 = t;
		t.label = "买鸡蛋6个";
		t.x = 0;
		t.y = 0;
		t.skinName = EditDonate$Skin14;
		return t;
	};
	_proto.btnFlower2_i = function () {
		var t = new eui.Button();
		this.btnFlower2 = t;
		t.label = "买鲜花198朵";
		t.x = 0;
		t.y = 0;
		t.skinName = EditDonate$Skin15;
		return t;
	};
	_proto.btnEgg2_i = function () {
		var t = new eui.Button();
		this.btnEgg2 = t;
		t.label = "买鸡蛋198个";
		t.x = 0;
		t.y = 0;
		t.skinName = EditDonate$Skin16;
		return t;
	};
	_proto.btnClose_i = function () {
		var t = new eui.Button();
		this.btnClose = t;
		t.label = "";
		t.right = 10;
		t.top = 10;
		t.skinName = EditDonate$Skin17;
		return t;
	};
	return EditDonate;
})(eui.Skin);generateEUI.paths['resource/eui_skins/EditTime.exml'] = window.EditTime = (function (_super) {
	__extends(EditTime, _super);
	var EditTime$Skin18 = 	(function (_super) {
		__extends(EditTime$Skin18, _super);
		function EditTime$Skin18() {
			_super.call(this);
			this.skinParts = ["labelDisplay"];
			
			this.elementsContent = [this._Image1_i(),this.labelDisplay_i()];
			this.states = [
				new eui.State ("up",
					[
					])
				,
				new eui.State ("down",
					[
						new eui.SetProperty("_Image1","source","tongyong_queding_btn02_png")
					])
				,
				new eui.State ("disabled",
					[
					])
				,
				new eui.State ("move",
					[
						new eui.SetProperty("_Image1","source","tongyong_queding_btn01_png")
					])
			];
		}
		var _proto = EditTime$Skin18.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			this._Image1 = t;
			t.percentHeight = 100;
			t.source = "tongyong_queding_btn00_png";
			t.percentWidth = 100;
			return t;
		};
		_proto.labelDisplay_i = function () {
			var t = new eui.Label();
			this.labelDisplay = t;
			t.fontFamily = "Microsoft Yahei";
			t.horizontalCenter = 0;
			t.size = 22;
			t.textColor = 0x000000;
			t.verticalCenter = 0;
			return t;
		};
		return EditTime$Skin18;
	})(eui.Skin);

	var EditTime$Skin19 = 	(function (_super) {
		__extends(EditTime$Skin19, _super);
		function EditTime$Skin19() {
			_super.call(this);
			this.skinParts = ["labelDisplay"];
			
			this.elementsContent = [this._Image1_i(),this.labelDisplay_i()];
			this.states = [
				new eui.State ("up",
					[
					])
				,
				new eui.State ("down",
					[
						new eui.SetProperty("_Image1","source","tongyog_guanbi_icon01_png")
					])
				,
				new eui.State ("disabled",
					[
					])
			];
		}
		var _proto = EditTime$Skin19.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			this._Image1 = t;
			t.percentHeight = 100;
			t.source = "tongyog_guanbi_icon00_png";
			t.percentWidth = 100;
			return t;
		};
		_proto.labelDisplay_i = function () {
			var t = new eui.Label();
			this.labelDisplay = t;
			t.horizontalCenter = 0;
			t.verticalCenter = 0;
			return t;
		};
		return EditTime$Skin19;
	})(eui.Skin);

	function EditTime() {
		_super.call(this);
		this.skinParts = ["Year","Month","Day","Hour","Minute","btnSubmit","btnClose"];
		
		this.height = 272;
		this.width = 714;
		this.elementsContent = [this._Group2_i()];
	}
	var _proto = EditTime.prototype;

	_proto._Group2_i = function () {
		var t = new eui.Group();
		t.horizontalCenter = 0;
		t.verticalCenter = 0;
		t.elementsContent = [this._Image1_i(),this._Group1_i(),this.btnSubmit_i(),this.btnClose_i()];
		return t;
	};
	_proto._Image1_i = function () {
		var t = new eui.Image();
		t.source = "juesenicheng_tangchuang_png";
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto._Group1_i = function () {
		var t = new eui.Group();
		t.horizontalCenter = 0;
		t.y = 100;
		t.elementsContent = [this.Year_i(),this._Label1_i(),this.Month_i(),this._Label2_i(),this.Day_i(),this._Label3_i(),this.Hour_i(),this._Label4_i(),this.Minute_i(),this._Label5_i()];
		return t;
	};
	_proto.Year_i = function () {
		var t = new eui.EditableText();
		this.Year = t;
		t.background = true;
		t.border = true;
		t.height = 20;
		t.size = 20;
		t.text = "";
		t.textColor = 0x000000;
		t.verticalCenter = "0";
		t.width = 50;
		t.x = 0;
		return t;
	};
	_proto._Label1_i = function () {
		var t = new eui.Label();
		t.size = 20;
		t.text = "年";
		t.verticalCenter = 0;
		t.x = 55;
		return t;
	};
	_proto.Month_i = function () {
		var t = new eui.EditableText();
		this.Month = t;
		t.background = true;
		t.border = true;
		t.height = 20;
		t.size = 20;
		t.text = "";
		t.textColor = 0x000000;
		t.verticalCenter = "0";
		t.width = 30;
		t.x = 80;
		return t;
	};
	_proto._Label2_i = function () {
		var t = new eui.Label();
		t.size = 20;
		t.text = "月";
		t.verticalCenter = 0;
		t.x = 115;
		return t;
	};
	_proto.Day_i = function () {
		var t = new eui.EditableText();
		this.Day = t;
		t.background = true;
		t.border = true;
		t.height = 20;
		t.size = 20;
		t.text = "";
		t.textColor = 0x000000;
		t.verticalCenter = "0";
		t.width = 30;
		t.x = 140;
		return t;
	};
	_proto._Label3_i = function () {
		var t = new eui.Label();
		t.size = 20;
		t.text = "日";
		t.verticalCenter = 0;
		t.x = 175;
		return t;
	};
	_proto.Hour_i = function () {
		var t = new eui.EditableText();
		this.Hour = t;
		t.background = true;
		t.border = true;
		t.height = 20;
		t.size = 20;
		t.text = "";
		t.textColor = 0x000000;
		t.verticalCenter = "0";
		t.width = 30;
		t.x = 200;
		return t;
	};
	_proto._Label4_i = function () {
		var t = new eui.Label();
		t.size = 20;
		t.text = "时";
		t.verticalCenter = 0;
		t.x = 235;
		return t;
	};
	_proto.Minute_i = function () {
		var t = new eui.EditableText();
		this.Minute = t;
		t.background = true;
		t.border = true;
		t.height = 20;
		t.size = 20;
		t.text = "";
		t.textColor = 0x000000;
		t.verticalCenter = "0";
		t.width = 30;
		t.x = 260;
		return t;
	};
	_proto._Label5_i = function () {
		var t = new eui.Label();
		t.size = 20;
		t.text = "分";
		t.verticalCenter = 0;
		t.x = 295;
		return t;
	};
	_proto.btnSubmit_i = function () {
		var t = new eui.Button();
		this.btnSubmit = t;
		t.label = "确定";
		t.x = 247;
		t.y = 173;
		t.skinName = EditTime$Skin18;
		return t;
	};
	_proto.btnClose_i = function () {
		var t = new eui.Button();
		this.btnClose = t;
		t.label = "";
		t.right = 10;
		t.top = 10;
		t.skinName = EditTime$Skin19;
		return t;
	};
	return EditTime;
})(eui.Skin);generateEUI.paths['resource/eui_skins/EscSkin.exml'] = window.EscSkin = (function (_super) {
	__extends(EscSkin, _super);
	function EscSkin() {
		_super.call(this);
		this.skinParts = ["btnResume","btnHome","btnStory","btnSetting","btnExit"];
		
		this.height = 1080;
		this.width = 1920;
		this.elementsContent = [this._Rect1_i(),this.btnResume_i(),this.btnHome_i(),this.btnStory_i(),this.btnSetting_i(),this.btnExit_i()];
	}
	var _proto = EscSkin.prototype;

	_proto._Rect1_i = function () {
		var t = new eui.Rect();
		t.bottom = 0;
		t.fillAlpha = 0.75;
		t.fillColor = 0x000000;
		t.left = 0;
		t.right = 0;
		t.top = 0;
		return t;
	};
	_proto.btnResume_i = function () {
		var t = new eui.Label();
		this.btnResume = t;
		t.fontFamily = "Microsoft YaHei";
		t.size = 22;
		t.text = "返回";
		t.x = 936;
		t.y = 413;
		return t;
	};
	_proto.btnHome_i = function () {
		var t = new eui.Label();
		this.btnHome = t;
		t.fontFamily = "Microsoft YaHei";
		t.size = 22;
		t.text = "主菜单";
		t.x = 926;
		t.y = 491;
		return t;
	};
	_proto.btnStory_i = function () {
		var t = new eui.Label();
		this.btnStory = t;
		t.fontFamily = "Microsoft YaHei";
		t.size = 22;
		t.text = "故事线";
		t.x = 926;
		t.y = 568;
		return t;
	};
	_proto.btnSetting_i = function () {
		var t = new eui.Label();
		this.btnSetting = t;
		t.fontFamily = "Microsoft YaHei";
		t.size = 22;
		t.text = "设置";
		t.x = 936;
		t.y = 646;
		return t;
	};
	_proto.btnExit_i = function () {
		var t = new eui.Label();
		this.btnExit = t;
		t.fontFamily = "Microsoft YaHei";
		t.size = 22;
		t.text = "退出";
		t.x = 936;
		t.y = 724;
		return t;
	};
	return EscSkin;
})(eui.Skin);generateEUI.paths['resource/eui_skins/Exclamation.exml'] = window.ExclamationSkin = (function (_super) {
	__extends(ExclamationSkin, _super);
	function ExclamationSkin() {
		_super.call(this);
		this.skinParts = ["redTween","image"];
		
		this.height = 58;
		this.width = 58;
		this.redTween_i();
		this.elementsContent = [this.image_i(),this._Image1_i()];
		
		eui.Binding.$bindProperties(this, ["image"],[0],this._TweenItem1,"target");
		eui.Binding.$bindProperties(this, [0.4],[],this._Object2,"alpha");
		eui.Binding.$bindProperties(this, [0.9],[],this._Object3,"alpha");
		eui.Binding.$bindProperties(this, [0.4],[],this._Object4,"alpha");
	}
	var _proto = ExclamationSkin.prototype;

	_proto.redTween_i = function () {
		var t = new egret.tween.TweenGroup();
		this.redTween = t;
		t.items = [this._TweenItem1_i()];
		return t;
	};
	_proto._TweenItem1_i = function () {
		var t = new egret.tween.TweenItem();
		this._TweenItem1 = t;
		t.props = this._Object1_i();
		t.paths = [this._Set1_i(),this._To1_i(),this._To2_i()];
		return t;
	};
	_proto._Object1_i = function () {
		var t = {};
		t.loop = "true";
		return t;
	};
	_proto._Set1_i = function () {
		var t = new egret.tween.Set();
		t.props = this._Object2_i();
		return t;
	};
	_proto._Object2_i = function () {
		var t = {};
		this._Object2 = t;
		return t;
	};
	_proto._To1_i = function () {
		var t = new egret.tween.To();
		t.duration = 2700;
		t.props = this._Object3_i();
		return t;
	};
	_proto._Object3_i = function () {
		var t = {};
		this._Object3 = t;
		return t;
	};
	_proto._To2_i = function () {
		var t = new egret.tween.To();
		t.duration = 2600;
		t.props = this._Object4_i();
		return t;
	};
	_proto._Object4_i = function () {
		var t = {};
		this._Object4 = t;
		return t;
	};
	_proto.image_i = function () {
		var t = new eui.Image();
		this.image = t;
		t.alpha = 0.4;
		t.horizontalCenter = 0;
		t.source = "red_png";
		t.verticalCenter = 0;
		return t;
	};
	_proto._Image1_i = function () {
		var t = new eui.Image();
		t.horizontalCenter = 0;
		t.source = "zhiying_tanhao_icon00_png";
		t.verticalCenter = 0;
		return t;
	};
	return ExclamationSkin;
})(eui.Skin);generateEUI.paths['resource/eui_skins/goodEnd.exml'] = window.GoodEndSkin = (function (_super) {
	__extends(GoodEndSkin, _super);
	var GoodEndSkin$Skin20 = 	(function (_super) {
		__extends(GoodEndSkin$Skin20, _super);
		function GoodEndSkin$Skin20() {
			_super.call(this);
			this.skinParts = ["labelDisplay"];
			
			this.elementsContent = [this._Image1_i(),this.labelDisplay_i()];
			this.states = [
				new eui.State ("up",
					[
					])
				,
				new eui.State ("down",
					[
						new eui.SetProperty("_Image1","source","jiesuan_fanhuigushixian2_btn02_png")
					])
				,
				new eui.State ("disabled",
					[
					])
				,
				new eui.State ("move",
					[
						new eui.SetProperty("_Image1","source","jiesuan_fanhuigushixian2_btn01_png")
					])
			];
		}
		var _proto = GoodEndSkin$Skin20.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			this._Image1 = t;
			t.percentHeight = 100;
			t.source = "jiesuan_fanhuigushixian2_btn00_png";
			t.percentWidth = 100;
			return t;
		};
		_proto.labelDisplay_i = function () {
			var t = new eui.Label();
			this.labelDisplay = t;
			t.horizontalCenter = 0;
			t.verticalCenter = 0;
			return t;
		};
		return GoodEndSkin$Skin20;
	})(eui.Skin);

	var GoodEndSkin$Skin21 = 	(function (_super) {
		__extends(GoodEndSkin$Skin21, _super);
		function GoodEndSkin$Skin21() {
			_super.call(this);
			this.skinParts = ["labelDisplay"];
			
			this.elementsContent = [this._Image1_i(),this.labelDisplay_i()];
			this.states = [
				new eui.State ("up",
					[
					])
				,
				new eui.State ("down",
					[
						new eui.SetProperty("_Image1","source","jiesuan_xiayizhang_btn02_png")
					])
				,
				new eui.State ("disabled",
					[
					])
				,
				new eui.State ("move",
					[
						new eui.SetProperty("_Image1","source","jiesuan_xiayizhang_btn01_png")
					])
			];
		}
		var _proto = GoodEndSkin$Skin21.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			this._Image1 = t;
			t.percentHeight = 100;
			t.source = "jiesuan_xiayizhang_btn00_png";
			t.percentWidth = 100;
			return t;
		};
		_proto.labelDisplay_i = function () {
			var t = new eui.Label();
			this.labelDisplay = t;
			t.horizontalCenter = 0;
			t.verticalCenter = 0;
			return t;
		};
		return GoodEndSkin$Skin21;
	})(eui.Skin);

	var GoodEndSkin$Skin22 = 	(function (_super) {
		__extends(GoodEndSkin$Skin22, _super);
		function GoodEndSkin$Skin22() {
			_super.call(this);
			this.skinParts = ["labelDisplay"];
			
			this.elementsContent = [this._Rect1_i(),this._Image1_i(),this.labelDisplay_i()];
			this.states = [
				new eui.State ("up",
					[
					])
				,
				new eui.State ("down",
					[
						new eui.SetProperty("_Image1","source","tongyong_fanhui_icon02_png")
					])
				,
				new eui.State ("disabled",
					[
					])
				,
				new eui.State ("move",
					[
						new eui.SetProperty("_Image1","source","tongyong_fanhui_icon01_png")
					])
			];
		}
		var _proto = GoodEndSkin$Skin22.prototype;

		_proto._Rect1_i = function () {
			var t = new eui.Rect();
			t.bottom = 0;
			t.fillAlpha = 0;
			t.left = 0;
			t.right = 0;
			t.top = 0;
			return t;
		};
		_proto._Image1_i = function () {
			var t = new eui.Image();
			this._Image1 = t;
			t.left = 29;
			t.source = "tongyong_fanhui_icon00_png";
			t.top = 3;
			return t;
		};
		_proto.labelDisplay_i = function () {
			var t = new eui.Label();
			this.labelDisplay = t;
			t.fontFamily = "fangzheng";
			t.size = 30;
			t.textColor = 0xffffff;
			t.verticalCenter = 0;
			t.x = 88;
			return t;
		};
		return GoodEndSkin$Skin22;
	})(eui.Skin);

	function GoodEndSkin() {
		_super.call(this);
		this.skinParts = ["clearTween","firstTween","nextTween","chapterTitle","image","label","gInfo","image0","imgGold","image4","textAward","gAward","btnStory","image3","image2","btnNext","image1","gNext","group","gContent","btnReturn"];
		
		this.height = 1080;
		this.width = 1920;
		this.clearTween_i();
		this.firstTween_i();
		this.nextTween_i();
		this.elementsContent = [this._Rect1_i(),this._Image1_i(),this.gContent_i(),this.btnReturn_i()];
		
		eui.Binding.$bindProperties(this, ["chapterTitle"],[0],this._TweenItem1,"target");
		eui.Binding.$bindProperties(this, [0],[],this._Object1,"alpha");
		eui.Binding.$bindProperties(this, [1],[],this._Object2,"alpha");
		eui.Binding.$bindProperties(this, ["label"],[0],this._TweenItem2,"target");
		eui.Binding.$bindProperties(this, [0],[],this._Object3,"alpha");
		eui.Binding.$bindProperties(this, [0],[],this._Object4,"alpha");
		eui.Binding.$bindProperties(this, [1],[],this._Object5,"alpha");
		eui.Binding.$bindProperties(this, [0],[],this._Object6,"alpha");
		eui.Binding.$bindProperties(this, [1],[],this._Object7,"alpha");
		eui.Binding.$bindProperties(this, [0.5],[],this._Object8,"alpha");
		eui.Binding.$bindProperties(this, [1],[],this._Object9,"alpha");
		eui.Binding.$bindProperties(this, ["group"],[0],this._TweenItem3,"target");
		eui.Binding.$bindProperties(this, [0],[],this._Object10,"alpha");
		eui.Binding.$bindProperties(this, [0],[],this._Object11,"alpha");
		eui.Binding.$bindProperties(this, [600],[],this._Object11,"y");
		eui.Binding.$bindProperties(this, [1],[],this._Object12,"alpha");
		eui.Binding.$bindProperties(this, [568],[],this._Object12,"y");
		eui.Binding.$bindProperties(this, ["image"],[0],this._TweenItem4,"target");
		eui.Binding.$bindProperties(this, [0],[],this._Object13,"width");
		eui.Binding.$bindProperties(this, [1724],[],this._Object14,"width");
		eui.Binding.$bindProperties(this, ["chapterTitle"],[0],this._TweenItem5,"target");
		eui.Binding.$bindProperties(this, [0],[],this._Object15,"alpha");
		eui.Binding.$bindProperties(this, [1],[],this._Object16,"alpha");
		eui.Binding.$bindProperties(this, ["label"],[0],this._TweenItem6,"target");
		eui.Binding.$bindProperties(this, [0],[],this._Object17,"alpha");
		eui.Binding.$bindProperties(this, [1],[],this._Object18,"alpha");
		eui.Binding.$bindProperties(this, [0],[],this._Object19,"alpha");
		eui.Binding.$bindProperties(this, [1],[],this._Object20,"alpha");
		eui.Binding.$bindProperties(this, [0.5],[],this._Object21,"alpha");
		eui.Binding.$bindProperties(this, [1],[],this._Object22,"alpha");
		eui.Binding.$bindProperties(this, ["group"],[0],this._TweenItem7,"target");
		eui.Binding.$bindProperties(this, [0],[],this._Object23,"alpha");
		eui.Binding.$bindProperties(this, [0],[],this._Object24,"alpha");
		eui.Binding.$bindProperties(this, [696],[],this._Object24,"y");
		eui.Binding.$bindProperties(this, [1],[],this._Object25,"alpha");
		eui.Binding.$bindProperties(this, [656],[],this._Object25,"y");
		eui.Binding.$bindProperties(this, ["image"],[0],this._TweenItem8,"target");
		eui.Binding.$bindProperties(this, [0],[],this._Object26,"width");
		eui.Binding.$bindProperties(this, [1136],[],this._Object27,"width");
		eui.Binding.$bindProperties(this, ["image0"],[0],this._TweenItem9,"target");
		eui.Binding.$bindProperties(this, [0],[],this._Object28,"alpha");
		eui.Binding.$bindProperties(this, [0],[],this._Object29,"alpha");
		eui.Binding.$bindProperties(this, [1.3],[],this._Object29,"scaleX");
		eui.Binding.$bindProperties(this, [1.3],[],this._Object29,"scaleY");
		eui.Binding.$bindProperties(this, [1],[],this._Object30,"alpha");
		eui.Binding.$bindProperties(this, [0],[],this._Object31,"alpha");
		eui.Binding.$bindProperties(this, [2],[],this._Object31,"scaleX");
		eui.Binding.$bindProperties(this, [2],[],this._Object31,"scaleY");
		eui.Binding.$bindProperties(this, ["gInfo"],[0],this._TweenItem10,"target");
		eui.Binding.$bindProperties(this, [392],[],this._Object32,"y");
		eui.Binding.$bindProperties(this, [392],[],this._Object33,"y");
		eui.Binding.$bindProperties(this, [270],[],this._Object34,"y");
		eui.Binding.$bindProperties(this, ["image4"],[0],this._TweenItem11,"target");
		eui.Binding.$bindProperties(this, [0],[],this._Object35,"alpha");
		eui.Binding.$bindProperties(this, [0],[],this._Object36,"alpha");
		eui.Binding.$bindProperties(this, [0.8],[],this._Object36,"scaleX");
		eui.Binding.$bindProperties(this, [0.8],[],this._Object36,"scaleY");
		eui.Binding.$bindProperties(this, [0.64],[],this._Object37,"alpha");
		eui.Binding.$bindProperties(this, [1.1],[],this._Object37,"scaleX");
		eui.Binding.$bindProperties(this, [1.1],[],this._Object37,"scaleY");
		eui.Binding.$bindProperties(this, [1],[],this._Object38,"alpha");
		eui.Binding.$bindProperties(this, [1],[],this._Object38,"scaleX");
		eui.Binding.$bindProperties(this, [1],[],this._Object38,"scaleY");
		eui.Binding.$bindProperties(this, [0],[],this._Object39,"alpha");
		eui.Binding.$bindProperties(this, ["imgGold"],[0],this._TweenItem12,"target");
		eui.Binding.$bindProperties(this, [0],[],this._Object40,"alpha");
		eui.Binding.$bindProperties(this, [1],[],this._Object41,"alpha");
		eui.Binding.$bindProperties(this, ["image2"],[0],this._TweenItem13,"target");
		eui.Binding.$bindProperties(this, [0],[],this._Object43,"alpha");
		eui.Binding.$bindProperties(this, [0.7],[],this._Object44,"alpha");
		eui.Binding.$bindProperties(this, [1],[],this._Object45,"alpha");
		eui.Binding.$bindProperties(this, [1.15],[],this._Object45,"scaleX");
		eui.Binding.$bindProperties(this, [1.55],[],this._Object45,"scaleY");
		eui.Binding.$bindProperties(this, [0],[],this._Object46,"alpha");
		eui.Binding.$bindProperties(this, [1.28],[],this._Object46,"scaleX");
		eui.Binding.$bindProperties(this, [2],[],this._Object46,"scaleY");
		eui.Binding.$bindProperties(this, ["image3"],[0],this._TweenItem14,"target");
		eui.Binding.$bindProperties(this, [0],[],this._Object48,"alpha");
		eui.Binding.$bindProperties(this, [0.7],[],this._Object49,"alpha");
		eui.Binding.$bindProperties(this, [1],[],this._Object50,"alpha");
		eui.Binding.$bindProperties(this, [1.15],[],this._Object50,"scaleX");
		eui.Binding.$bindProperties(this, [1.55],[],this._Object50,"scaleY");
		eui.Binding.$bindProperties(this, [0],[],this._Object51,"alpha");
		eui.Binding.$bindProperties(this, [1.28],[],this._Object51,"scaleX");
		eui.Binding.$bindProperties(this, [2],[],this._Object51,"scaleY");
		eui.Binding.$bindProperties(this, ["image1"],[0],this._TweenItem15,"target");
		eui.Binding.$bindProperties(this, [0],[],this._Object53,"alpha");
		eui.Binding.$bindProperties(this, [1],[],this._Object54,"alpha");
		eui.Binding.$bindProperties(this, [0],[],this._Object55,"alpha");
		eui.Binding.$bindProperties(this, [0],[],this._Object56,"alpha");
		eui.Binding.$bindProperties(this, [1],[],this._Object57,"alpha");
		eui.Binding.$bindProperties(this, [0],[],this._Object58,"alpha");
	}
	var _proto = GoodEndSkin.prototype;

	_proto.clearTween_i = function () {
		var t = new egret.tween.TweenGroup();
		this.clearTween = t;
		t.items = [this._TweenItem1_i(),this._TweenItem2_i(),this._TweenItem3_i(),this._TweenItem4_i()];
		return t;
	};
	_proto._TweenItem1_i = function () {
		var t = new egret.tween.TweenItem();
		this._TweenItem1 = t;
		t.paths = [this._Set1_i(),this._To1_i()];
		return t;
	};
	_proto._Set1_i = function () {
		var t = new egret.tween.Set();
		t.props = this._Object1_i();
		return t;
	};
	_proto._Object1_i = function () {
		var t = {};
		this._Object1 = t;
		return t;
	};
	_proto._To1_i = function () {
		var t = new egret.tween.To();
		t.duration = 500;
		t.props = this._Object2_i();
		return t;
	};
	_proto._Object2_i = function () {
		var t = {};
		this._Object2 = t;
		return t;
	};
	_proto._TweenItem2_i = function () {
		var t = new egret.tween.TweenItem();
		this._TweenItem2 = t;
		t.paths = [this._Set2_i(),this._Wait1_i(),this._Set3_i(),this._To2_i(),this._To3_i(),this._To4_i(),this._To5_i(),this._To6_i()];
		return t;
	};
	_proto._Set2_i = function () {
		var t = new egret.tween.Set();
		t.props = this._Object3_i();
		return t;
	};
	_proto._Object3_i = function () {
		var t = {};
		this._Object3 = t;
		return t;
	};
	_proto._Wait1_i = function () {
		var t = new egret.tween.Wait();
		t.duration = 250;
		return t;
	};
	_proto._Set3_i = function () {
		var t = new egret.tween.Set();
		t.props = this._Object4_i();
		return t;
	};
	_proto._Object4_i = function () {
		var t = {};
		this._Object4 = t;
		return t;
	};
	_proto._To2_i = function () {
		var t = new egret.tween.To();
		t.duration = 250;
		t.props = this._Object5_i();
		return t;
	};
	_proto._Object5_i = function () {
		var t = {};
		this._Object5 = t;
		return t;
	};
	_proto._To3_i = function () {
		var t = new egret.tween.To();
		t.duration = 200;
		t.props = this._Object6_i();
		return t;
	};
	_proto._Object6_i = function () {
		var t = {};
		this._Object6 = t;
		return t;
	};
	_proto._To4_i = function () {
		var t = new egret.tween.To();
		t.duration = 100;
		t.props = this._Object7_i();
		return t;
	};
	_proto._Object7_i = function () {
		var t = {};
		this._Object7 = t;
		return t;
	};
	_proto._To5_i = function () {
		var t = new egret.tween.To();
		t.duration = 100;
		t.props = this._Object8_i();
		return t;
	};
	_proto._Object8_i = function () {
		var t = {};
		this._Object8 = t;
		return t;
	};
	_proto._To6_i = function () {
		var t = new egret.tween.To();
		t.duration = 100;
		t.props = this._Object9_i();
		return t;
	};
	_proto._Object9_i = function () {
		var t = {};
		this._Object9 = t;
		return t;
	};
	_proto._TweenItem3_i = function () {
		var t = new egret.tween.TweenItem();
		this._TweenItem3 = t;
		t.paths = [this._Set4_i(),this._Wait2_i(),this._Set5_i(),this._To7_i()];
		return t;
	};
	_proto._Set4_i = function () {
		var t = new egret.tween.Set();
		t.props = this._Object10_i();
		return t;
	};
	_proto._Object10_i = function () {
		var t = {};
		this._Object10 = t;
		return t;
	};
	_proto._Wait2_i = function () {
		var t = new egret.tween.Wait();
		t.duration = 1650;
		return t;
	};
	_proto._Set5_i = function () {
		var t = new egret.tween.Set();
		t.props = this._Object11_i();
		return t;
	};
	_proto._Object11_i = function () {
		var t = {};
		this._Object11 = t;
		return t;
	};
	_proto._To7_i = function () {
		var t = new egret.tween.To();
		t.duration = 800;
		t.props = this._Object12_i();
		return t;
	};
	_proto._Object12_i = function () {
		var t = {};
		this._Object12 = t;
		return t;
	};
	_proto._TweenItem4_i = function () {
		var t = new egret.tween.TweenItem();
		this._TweenItem4 = t;
		t.paths = [this._Set6_i(),this._To8_i()];
		return t;
	};
	_proto._Set6_i = function () {
		var t = new egret.tween.Set();
		t.props = this._Object13_i();
		return t;
	};
	_proto._Object13_i = function () {
		var t = {};
		this._Object13 = t;
		return t;
	};
	_proto._To8_i = function () {
		var t = new egret.tween.To();
		t.duration = 1000;
		t.props = this._Object14_i();
		return t;
	};
	_proto._Object14_i = function () {
		var t = {};
		this._Object14 = t;
		return t;
	};
	_proto.firstTween_i = function () {
		var t = new egret.tween.TweenGroup();
		this.firstTween = t;
		t.items = [this._TweenItem5_i(),this._TweenItem6_i(),this._TweenItem7_i(),this._TweenItem8_i(),this._TweenItem9_i(),this._TweenItem10_i(),this._TweenItem11_i(),this._TweenItem12_i()];
		return t;
	};
	_proto._TweenItem5_i = function () {
		var t = new egret.tween.TweenItem();
		this._TweenItem5 = t;
		t.paths = [this._Set7_i(),this._To9_i()];
		return t;
	};
	_proto._Set7_i = function () {
		var t = new egret.tween.Set();
		t.props = this._Object15_i();
		return t;
	};
	_proto._Object15_i = function () {
		var t = {};
		this._Object15 = t;
		return t;
	};
	_proto._To9_i = function () {
		var t = new egret.tween.To();
		t.duration = 500;
		t.props = this._Object16_i();
		return t;
	};
	_proto._Object16_i = function () {
		var t = {};
		this._Object16 = t;
		return t;
	};
	_proto._TweenItem6_i = function () {
		var t = new egret.tween.TweenItem();
		this._TweenItem6 = t;
		t.paths = [this._Set8_i(),this._Wait3_i(),this._Set9_i(),this._To10_i(),this._To11_i(),this._To12_i(),this._To13_i()];
		return t;
	};
	_proto._Set8_i = function () {
		var t = new egret.tween.Set();
		t.props = this._Object17_i();
		return t;
	};
	_proto._Object17_i = function () {
		var t = {};
		this._Object17 = t;
		return t;
	};
	_proto._Wait3_i = function () {
		var t = new egret.tween.Wait();
		t.duration = 250;
		return t;
	};
	_proto._Set9_i = function () {
		var t = new egret.tween.Set();
		t.props = this._Object18_i();
		return t;
	};
	_proto._Object18_i = function () {
		var t = {};
		this._Object18 = t;
		return t;
	};
	_proto._To10_i = function () {
		var t = new egret.tween.To();
		t.duration = 150;
		t.props = this._Object19_i();
		return t;
	};
	_proto._Object19_i = function () {
		var t = {};
		this._Object19 = t;
		return t;
	};
	_proto._To11_i = function () {
		var t = new egret.tween.To();
		t.duration = 100;
		t.props = this._Object20_i();
		return t;
	};
	_proto._Object20_i = function () {
		var t = {};
		this._Object20 = t;
		return t;
	};
	_proto._To12_i = function () {
		var t = new egret.tween.To();
		t.duration = 100;
		t.props = this._Object21_i();
		return t;
	};
	_proto._Object21_i = function () {
		var t = {};
		this._Object21 = t;
		return t;
	};
	_proto._To13_i = function () {
		var t = new egret.tween.To();
		t.duration = 100;
		t.props = this._Object22_i();
		return t;
	};
	_proto._Object22_i = function () {
		var t = {};
		this._Object22 = t;
		return t;
	};
	_proto._TweenItem7_i = function () {
		var t = new egret.tween.TweenItem();
		this._TweenItem7 = t;
		t.paths = [this._Set10_i(),this._Wait4_i(),this._Set11_i(),this._To14_i()];
		return t;
	};
	_proto._Set10_i = function () {
		var t = new egret.tween.Set();
		t.props = this._Object23_i();
		return t;
	};
	_proto._Object23_i = function () {
		var t = {};
		this._Object23 = t;
		return t;
	};
	_proto._Wait4_i = function () {
		var t = new egret.tween.Wait();
		t.duration = 2500;
		return t;
	};
	_proto._Set11_i = function () {
		var t = new egret.tween.Set();
		t.props = this._Object24_i();
		return t;
	};
	_proto._Object24_i = function () {
		var t = {};
		this._Object24 = t;
		return t;
	};
	_proto._To14_i = function () {
		var t = new egret.tween.To();
		t.duration = 750;
		t.props = this._Object25_i();
		return t;
	};
	_proto._Object25_i = function () {
		var t = {};
		this._Object25 = t;
		return t;
	};
	_proto._TweenItem8_i = function () {
		var t = new egret.tween.TweenItem();
		this._TweenItem8 = t;
		t.paths = [this._Set12_i(),this._To15_i()];
		return t;
	};
	_proto._Set12_i = function () {
		var t = new egret.tween.Set();
		t.props = this._Object26_i();
		return t;
	};
	_proto._Object26_i = function () {
		var t = {};
		this._Object26 = t;
		return t;
	};
	_proto._To15_i = function () {
		var t = new egret.tween.To();
		t.duration = 700;
		t.props = this._Object27_i();
		return t;
	};
	_proto._Object27_i = function () {
		var t = {};
		this._Object27 = t;
		return t;
	};
	_proto._TweenItem9_i = function () {
		var t = new egret.tween.TweenItem();
		this._TweenItem9 = t;
		t.paths = [this._Set13_i(),this._Wait5_i(),this._Set14_i(),this._To16_i(),this._To17_i()];
		return t;
	};
	_proto._Set13_i = function () {
		var t = new egret.tween.Set();
		t.props = this._Object28_i();
		return t;
	};
	_proto._Object28_i = function () {
		var t = {};
		this._Object28 = t;
		return t;
	};
	_proto._Wait5_i = function () {
		var t = new egret.tween.Wait();
		t.duration = 1200;
		return t;
	};
	_proto._Set14_i = function () {
		var t = new egret.tween.Set();
		t.props = this._Object29_i();
		return t;
	};
	_proto._Object29_i = function () {
		var t = {};
		this._Object29 = t;
		return t;
	};
	_proto._To16_i = function () {
		var t = new egret.tween.To();
		t.duration = 800;
		t.props = this._Object30_i();
		return t;
	};
	_proto._Object30_i = function () {
		var t = {};
		this._Object30 = t;
		return t;
	};
	_proto._To17_i = function () {
		var t = new egret.tween.To();
		t.duration = 300;
		t.props = this._Object31_i();
		return t;
	};
	_proto._Object31_i = function () {
		var t = {};
		this._Object31 = t;
		return t;
	};
	_proto._TweenItem10_i = function () {
		var t = new egret.tween.TweenItem();
		this._TweenItem10 = t;
		t.paths = [this._Set15_i(),this._Wait6_i(),this._Set16_i(),this._To18_i()];
		return t;
	};
	_proto._Set15_i = function () {
		var t = new egret.tween.Set();
		t.props = this._Object32_i();
		return t;
	};
	_proto._Object32_i = function () {
		var t = {};
		this._Object32 = t;
		return t;
	};
	_proto._Wait6_i = function () {
		var t = new egret.tween.Wait();
		t.duration = 1000;
		return t;
	};
	_proto._Set16_i = function () {
		var t = new egret.tween.Set();
		t.props = this._Object33_i();
		return t;
	};
	_proto._Object33_i = function () {
		var t = {};
		this._Object33 = t;
		return t;
	};
	_proto._To18_i = function () {
		var t = new egret.tween.To();
		t.duration = 450;
		t.props = this._Object34_i();
		return t;
	};
	_proto._Object34_i = function () {
		var t = {};
		this._Object34 = t;
		return t;
	};
	_proto._TweenItem11_i = function () {
		var t = new egret.tween.TweenItem();
		this._TweenItem11 = t;
		t.paths = [this._Set17_i(),this._Wait7_i(),this._Set18_i(),this._To19_i(),this._To20_i(),this._To21_i()];
		return t;
	};
	_proto._Set17_i = function () {
		var t = new egret.tween.Set();
		t.props = this._Object35_i();
		return t;
	};
	_proto._Object35_i = function () {
		var t = {};
		this._Object35 = t;
		return t;
	};
	_proto._Wait7_i = function () {
		var t = new egret.tween.Wait();
		t.duration = 1350;
		return t;
	};
	_proto._Set18_i = function () {
		var t = new egret.tween.Set();
		t.props = this._Object36_i();
		return t;
	};
	_proto._Object36_i = function () {
		var t = {};
		this._Object36 = t;
		return t;
	};
	_proto._To19_i = function () {
		var t = new egret.tween.To();
		t.duration = 450;
		t.props = this._Object37_i();
		return t;
	};
	_proto._Object37_i = function () {
		var t = {};
		this._Object37 = t;
		return t;
	};
	_proto._To20_i = function () {
		var t = new egret.tween.To();
		t.duration = 250;
		t.props = this._Object38_i();
		return t;
	};
	_proto._Object38_i = function () {
		var t = {};
		this._Object38 = t;
		return t;
	};
	_proto._To21_i = function () {
		var t = new egret.tween.To();
		t.duration = 700;
		t.props = this._Object39_i();
		return t;
	};
	_proto._Object39_i = function () {
		var t = {};
		this._Object39 = t;
		return t;
	};
	_proto._TweenItem12_i = function () {
		var t = new egret.tween.TweenItem();
		this._TweenItem12 = t;
		t.paths = [this._Set19_i(),this._Wait8_i(),this._Set20_i()];
		return t;
	};
	_proto._Set19_i = function () {
		var t = new egret.tween.Set();
		t.props = this._Object40_i();
		return t;
	};
	_proto._Object40_i = function () {
		var t = {};
		this._Object40 = t;
		return t;
	};
	_proto._Wait8_i = function () {
		var t = new egret.tween.Wait();
		t.duration = 2050;
		return t;
	};
	_proto._Set20_i = function () {
		var t = new egret.tween.Set();
		t.props = this._Object41_i();
		return t;
	};
	_proto._Object41_i = function () {
		var t = {};
		this._Object41 = t;
		return t;
	};
	_proto.nextTween_i = function () {
		var t = new egret.tween.TweenGroup();
		this.nextTween = t;
		t.items = [this._TweenItem13_i(),this._TweenItem14_i(),this._TweenItem15_i()];
		return t;
	};
	_proto._TweenItem13_i = function () {
		var t = new egret.tween.TweenItem();
		this._TweenItem13 = t;
		t.props = this._Object42_i();
		t.paths = [this._Set21_i(),this._To22_i(),this._To23_i(),this._To24_i()];
		return t;
	};
	_proto._Object42_i = function () {
		var t = {};
		t.loop = "true";
		return t;
	};
	_proto._Set21_i = function () {
		var t = new egret.tween.Set();
		t.props = this._Object43_i();
		return t;
	};
	_proto._Object43_i = function () {
		var t = {};
		this._Object43 = t;
		return t;
	};
	_proto._To22_i = function () {
		var t = new egret.tween.To();
		t.duration = 500;
		t.props = this._Object44_i();
		return t;
	};
	_proto._Object44_i = function () {
		var t = {};
		this._Object44 = t;
		return t;
	};
	_proto._To23_i = function () {
		var t = new egret.tween.To();
		t.duration = 1050;
		t.props = this._Object45_i();
		return t;
	};
	_proto._Object45_i = function () {
		var t = {};
		this._Object45 = t;
		return t;
	};
	_proto._To24_i = function () {
		var t = new egret.tween.To();
		t.duration = 2450;
		t.props = this._Object46_i();
		return t;
	};
	_proto._Object46_i = function () {
		var t = {};
		this._Object46 = t;
		return t;
	};
	_proto._TweenItem14_i = function () {
		var t = new egret.tween.TweenItem();
		this._TweenItem14 = t;
		t.props = this._Object47_i();
		t.paths = [this._Wait9_i(),this._Set22_i(),this._To25_i(),this._To26_i(),this._To27_i()];
		return t;
	};
	_proto._Object47_i = function () {
		var t = {};
		t.loop = "true";
		return t;
	};
	_proto._Wait9_i = function () {
		var t = new egret.tween.Wait();
		t.duration = 2000;
		return t;
	};
	_proto._Set22_i = function () {
		var t = new egret.tween.Set();
		t.props = this._Object48_i();
		return t;
	};
	_proto._Object48_i = function () {
		var t = {};
		this._Object48 = t;
		return t;
	};
	_proto._To25_i = function () {
		var t = new egret.tween.To();
		t.duration = 500;
		t.props = this._Object49_i();
		return t;
	};
	_proto._Object49_i = function () {
		var t = {};
		this._Object49 = t;
		return t;
	};
	_proto._To26_i = function () {
		var t = new egret.tween.To();
		t.duration = 1050;
		t.props = this._Object50_i();
		return t;
	};
	_proto._Object50_i = function () {
		var t = {};
		this._Object50 = t;
		return t;
	};
	_proto._To27_i = function () {
		var t = new egret.tween.To();
		t.duration = 2150;
		t.props = this._Object51_i();
		return t;
	};
	_proto._Object51_i = function () {
		var t = {};
		this._Object51 = t;
		return t;
	};
	_proto._TweenItem15_i = function () {
		var t = new egret.tween.TweenItem();
		this._TweenItem15 = t;
		t.props = this._Object52_i();
		t.paths = [this._Set23_i(),this._To28_i(),this._To29_i(),this._To30_i(),this._To31_i(),this._To32_i()];
		return t;
	};
	_proto._Object52_i = function () {
		var t = {};
		t.loop = "true";
		return t;
	};
	_proto._Set23_i = function () {
		var t = new egret.tween.Set();
		t.props = this._Object53_i();
		return t;
	};
	_proto._Object53_i = function () {
		var t = {};
		this._Object53 = t;
		return t;
	};
	_proto._To28_i = function () {
		var t = new egret.tween.To();
		t.duration = 500;
		t.props = this._Object54_i();
		return t;
	};
	_proto._Object54_i = function () {
		var t = {};
		this._Object54 = t;
		return t;
	};
	_proto._To29_i = function () {
		var t = new egret.tween.To();
		t.duration = 800;
		t.props = this._Object55_i();
		return t;
	};
	_proto._Object55_i = function () {
		var t = {};
		this._Object55 = t;
		return t;
	};
	_proto._To30_i = function () {
		var t = new egret.tween.To();
		t.duration = 700;
		t.props = this._Object56_i();
		return t;
	};
	_proto._Object56_i = function () {
		var t = {};
		this._Object56 = t;
		return t;
	};
	_proto._To31_i = function () {
		var t = new egret.tween.To();
		t.duration = 500;
		t.props = this._Object57_i();
		return t;
	};
	_proto._Object57_i = function () {
		var t = {};
		this._Object57 = t;
		return t;
	};
	_proto._To32_i = function () {
		var t = new egret.tween.To();
		t.duration = 800;
		t.props = this._Object58_i();
		return t;
	};
	_proto._Object58_i = function () {
		var t = {};
		this._Object58 = t;
		return t;
	};
	_proto._Rect1_i = function () {
		var t = new eui.Rect();
		t.bottom = 0;
		t.left = 0;
		t.right = 0;
		t.top = 0;
		return t;
	};
	_proto._Image1_i = function () {
		var t = new eui.Image();
		t.bottom = 0;
		t.left = 0;
		t.right = 0;
		t.source = "be_bg_jpg";
		t.top = 0;
		return t;
	};
	_proto.gContent_i = function () {
		var t = new eui.Group();
		this.gContent = t;
		t.height = 1080;
		t.horizontalCenter = 0;
		t.verticalCenter = 0;
		t.width = 1920;
		t.elementsContent = [this.gInfo_i(),this.gAward_i(),this.group_i()];
		return t;
	};
	_proto.gInfo_i = function () {
		var t = new eui.Group();
		this.gInfo = t;
		t.horizontalCenter = 0;
		t.width = 1724;
		t.y = 392;
		t.elementsContent = [this.chapterTitle_i(),this.image_i(),this.label_i()];
		return t;
	};
	_proto.chapterTitle_i = function () {
		var t = new eui.Label();
		this.chapterTitle = t;
		t.fontFamily = "Microsoft YaHei";
		t.horizontalCenter = 0;
		t.scaleX = 1;
		t.scaleY = 1;
		t.size = 40;
		t.text = "";
		t.textAlign = "center";
		t.y = 0;
		return t;
	};
	_proto.image_i = function () {
		var t = new eui.Image();
		this.image = t;
		t.height = 2;
		t.horizontalCenter = 0;
		t.scale9Grid = new egret.Rectangle(12,0,76,2);
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "jiesuan_fenge_png";
		t.width = 1724;
		t.y = 67;
		return t;
	};
	_proto.label_i = function () {
		var t = new eui.Label();
		this.label = t;
		t.fontFamily = "Microsoft YaHei";
		t.horizontalCenter = 0;
		t.size = 18;
		t.text = "通关达成";
		t.textColor = 0xd3cdbd;
		t.y = 85;
		return t;
	};
	_proto.gAward_i = function () {
		var t = new eui.Group();
		this.gAward = t;
		t.height = 128;
		t.horizontalCenter = 0;
		t.visible = false;
		t.width = 128;
		t.y = 495;
		t.elementsContent = [this.image0_i(),this.imgGold_i(),this.image4_i(),this.textAward_i()];
		return t;
	};
	_proto.image0_i = function () {
		var t = new eui.Image();
		this.image0 = t;
		t.alpha = 0;
		t.horizontalCenter = 0;
		t.source = "guangquan01_png";
		t.verticalCenter = 0;
		return t;
	};
	_proto.imgGold_i = function () {
		var t = new eui.Image();
		this.imgGold = t;
		t.alpha = 0;
		t.source = "jiesuan_jiangli_png";
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto.image4_i = function () {
		var t = new eui.Image();
		this.image4 = t;
		t.alpha = 0;
		t.horizontalCenter = 0;
		t.source = "jinbi_light_png";
		t.verticalCenter = 0;
		return t;
	};
	_proto.textAward_i = function () {
		var t = new eui.Label();
		this.textAward = t;
		t.bottom = 8;
		t.right = 8;
		t.size = 36;
		t.stroke = 3;
		t.strokeColor = 0x000000;
		t.text = "";
		t.textColor = 0xffffff;
		return t;
	};
	_proto.group_i = function () {
		var t = new eui.Group();
		this.group = t;
		t.horizontalCenter = 0;
		t.y = 696;
		t.elementsContent = [this.btnStory_i(),this.gNext_i()];
		return t;
	};
	_proto.btnStory_i = function () {
		var t = new eui.Button();
		this.btnStory = t;
		t.label = "";
		t.scaleX = 1;
		t.scaleY = 1;
		t.x = 0;
		t.y = 0;
		t.skinName = GoodEndSkin$Skin20;
		return t;
	};
	_proto.gNext_i = function () {
		var t = new eui.Group();
		this.gNext = t;
		t.height = 65;
		t.width = 303;
		t.x = 381;
		t.y = 0;
		t.elementsContent = [this.image3_i(),this.image2_i(),this.btnNext_i(),this.image1_i()];
		return t;
	};
	_proto.image3_i = function () {
		var t = new eui.Image();
		this.image3 = t;
		t.alpha = 0;
		t.height = 65;
		t.horizontalCenter = 0;
		t.source = "tongyong_queding_effect1_png";
		t.verticalCenter = 0;
		t.width = 303;
		return t;
	};
	_proto.image2_i = function () {
		var t = new eui.Image();
		this.image2 = t;
		t.alpha = 0;
		t.height = 65;
		t.horizontalCenter = 0;
		t.source = "tongyong_queding_effect1_png";
		t.verticalCenter = 0;
		t.width = 303;
		return t;
	};
	_proto.btnNext_i = function () {
		var t = new eui.Button();
		this.btnNext = t;
		t.label = "";
		t.scaleX = 1;
		t.scaleY = 1;
		t.x = 0;
		t.y = 0;
		t.skinName = GoodEndSkin$Skin21;
		return t;
	};
	_proto.image1_i = function () {
		var t = new eui.Image();
		this.image1 = t;
		t.alpha = 0;
		t.height = 65;
		t.horizontalCenter = 0;
		t.source = "waifaguang1_png";
		t.touchEnabled = false;
		t.verticalCenter = 0;
		t.width = 303;
		return t;
	};
	_proto.btnReturn_i = function () {
		var t = new eui.Button();
		this.btnReturn = t;
		t.height = 62;
		t.label = "返回";
		t.width = 150;
		t.x = 0;
		t.y = 0;
		t.skinName = GoodEndSkin$Skin22;
		return t;
	};
	return GoodEndSkin;
})(eui.Skin);generateEUI.paths['resource/eui_skins/HiddenStory.exml'] = window.HiddenStorySkin = (function (_super) {
	__extends(HiddenStorySkin, _super);
	var HiddenStorySkin$Skin23 = 	(function (_super) {
		__extends(HiddenStorySkin$Skin23, _super);
		function HiddenStorySkin$Skin23() {
			_super.call(this);
			this.skinParts = ["labelDisplay"];
			
			this.elementsContent = [this._Image1_i(),this.labelDisplay_i()];
			this.states = [
				new eui.State ("up",
					[
					])
				,
				new eui.State ("down",
					[
						new eui.SetProperty("_Image1","source","dangan_yidongzuo_btn01_png")
					])
				,
				new eui.State ("disabled",
					[
					])
			];
		}
		var _proto = HiddenStorySkin$Skin23.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			this._Image1 = t;
			t.percentHeight = 100;
			t.source = "dangan_yidongzuo_btn00_png";
			t.percentWidth = 100;
			return t;
		};
		_proto.labelDisplay_i = function () {
			var t = new eui.Label();
			this.labelDisplay = t;
			t.horizontalCenter = 0;
			t.verticalCenter = 0;
			return t;
		};
		return HiddenStorySkin$Skin23;
	})(eui.Skin);

	var HiddenStorySkin$Skin24 = 	(function (_super) {
		__extends(HiddenStorySkin$Skin24, _super);
		function HiddenStorySkin$Skin24() {
			_super.call(this);
			this.skinParts = ["labelDisplay"];
			
			this.elementsContent = [this._Image1_i(),this.labelDisplay_i()];
			this.states = [
				new eui.State ("up",
					[
					])
				,
				new eui.State ("down",
					[
						new eui.SetProperty("_Image1","source","dangan_yidongzuo_btn01_png")
					])
				,
				new eui.State ("disabled",
					[
					])
			];
		}
		var _proto = HiddenStorySkin$Skin24.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			this._Image1 = t;
			t.percentHeight = 100;
			t.source = "dangan_yidongzuo_btn00_png";
			t.percentWidth = 100;
			return t;
		};
		_proto.labelDisplay_i = function () {
			var t = new eui.Label();
			this.labelDisplay = t;
			t.horizontalCenter = 0;
			t.verticalCenter = 0;
			return t;
		};
		return HiddenStorySkin$Skin24;
	})(eui.Skin);

	var HiddenStorySkin$Skin25 = 	(function (_super) {
		__extends(HiddenStorySkin$Skin25, _super);
		function HiddenStorySkin$Skin25() {
			_super.call(this);
			this.skinParts = ["labelDisplay"];
			
			this.elementsContent = [this._Image1_i(),this.labelDisplay_i()];
			this.states = [
				new eui.State ("up",
					[
					])
				,
				new eui.State ("down",
					[
						new eui.SetProperty("_Image1","source","zhangjie_guanbi_btn02_png")
					])
				,
				new eui.State ("disabled",
					[
					])
				,
				new eui.State ("move",
					[
						new eui.SetProperty("_Image1","source","zhangjie_guanbi_btn01_png")
					])
			];
		}
		var _proto = HiddenStorySkin$Skin25.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			this._Image1 = t;
			t.percentHeight = 100;
			t.source = "zhangjie_guanbi_btn00_png";
			t.percentWidth = 100;
			return t;
		};
		_proto.labelDisplay_i = function () {
			var t = new eui.Label();
			this.labelDisplay = t;
			t.horizontalCenter = 0;
			t.verticalCenter = 0;
			return t;
		};
		return HiddenStorySkin$Skin25;
	})(eui.Skin);

	function HiddenStorySkin() {
		_super.call(this);
		this.skinParts = ["gList","btnLeft","btnRight","textRate","gContent","btnReturn"];
		
		this.height = 1080;
		this.width = 1920;
		this.elementsContent = [this._Rect1_i(),this._Image1_i(),this.gContent_i(),this.btnReturn_i()];
	}
	var _proto = HiddenStorySkin.prototype;

	_proto._Rect1_i = function () {
		var t = new eui.Rect();
		t.bottom = 0;
		t.left = 0;
		t.right = 0;
		t.top = 0;
		return t;
	};
	_proto._Image1_i = function () {
		var t = new eui.Image();
		t.bottom = 0;
		t.left = 0;
		t.right = 0;
		t.source = "shezhi_bg1920_1080_jpg";
		t.top = 0;
		return t;
	};
	_proto.gContent_i = function () {
		var t = new eui.Group();
		this.gContent = t;
		t.height = 1080;
		t.horizontalCenter = 0;
		t.verticalCenter = 0;
		t.width = 1920;
		t.elementsContent = [this.gList_i(),this.btnLeft_i(),this.btnRight_i(),this._Group1_i()];
		return t;
	};
	_proto.gList_i = function () {
		var t = new eui.Group();
		this.gList = t;
		t.height = 772;
		t.horizontalCenter = 0;
		t.scrollEnabled = false;
		t.verticalCenter = 0;
		t.width = 1920;
		return t;
	};
	_proto.btnLeft_i = function () {
		var t = new eui.Button();
		this.btnLeft = t;
		t.label = "";
		t.x = 37;
		t.y = 532;
		t.skinName = HiddenStorySkin$Skin23;
		return t;
	};
	_proto.btnRight_i = function () {
		var t = new eui.Button();
		this.btnRight = t;
		t.label = "";
		t.right = 37;
		t.skewY = 180;
		t.y = 532;
		t.skinName = HiddenStorySkin$Skin24;
		return t;
	};
	_proto._Group1_i = function () {
		var t = new eui.Group();
		t.bottom = 64;
		t.right = 44;
		t.elementsContent = [this._Image2_i(),this._Image3_i(),this.textRate_i()];
		return t;
	};
	_proto._Image2_i = function () {
		var t = new eui.Image();
		t.left = 0;
		t.source = "zhangjie_zhuangshi_png";
		t.verticalCenter = 0;
		return t;
	};
	_proto._Image3_i = function () {
		var t = new eui.Image();
		t.right = 0;
		t.source = "zhangjie_zhuangshi_png";
		t.verticalCenter = 0;
		return t;
	};
	_proto.textRate_i = function () {
		var t = new eui.Label();
		this.textRate = t;
		t.fontFamily = "Microsoft YaHei";
		t.left = 25;
		t.right = 25;
		t.size = 18;
		t.text = "";
		t.textColor = 0x999999;
		t.verticalCenter = 0;
		return t;
	};
	_proto.btnReturn_i = function () {
		var t = new eui.Button();
		this.btnReturn = t;
		t.label = "";
		t.right = 43;
		t.y = 26;
		t.skinName = HiddenStorySkin$Skin25;
		return t;
	};
	return HiddenStorySkin;
})(eui.Skin);generateEUI.paths['resource/eui_skins/HiddenStoryItem.exml'] = window.HiddenStoryItemSkin = (function (_super) {
	__extends(HiddenStoryItemSkin, _super);
	var HiddenStoryItemSkin$Skin26 = 	(function (_super) {
		__extends(HiddenStoryItemSkin$Skin26, _super);
		function HiddenStoryItemSkin$Skin26() {
			_super.call(this);
			this.skinParts = ["labelDisplay"];
			
			this.elementsContent = [this._Image1_i(),this.labelDisplay_i()];
			this.states = [
				new eui.State ("up",
					[
					])
				,
				new eui.State ("down",
					[
						new eui.SetProperty("_Image1","source","bofang_kaishi_icon01_png")
					])
				,
				new eui.State ("disabled",
					[
					])
			];
		}
		var _proto = HiddenStoryItemSkin$Skin26.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			this._Image1 = t;
			t.percentHeight = 100;
			t.source = "bofang_kaishi_icon00_png";
			t.percentWidth = 100;
			return t;
		};
		_proto.labelDisplay_i = function () {
			var t = new eui.Label();
			this.labelDisplay = t;
			t.horizontalCenter = 0;
			t.verticalCenter = 0;
			return t;
		};
		return HiddenStoryItemSkin$Skin26;
	})(eui.Skin);

	var HiddenStoryItemSkin$Skin27 = 	(function (_super) {
		__extends(HiddenStoryItemSkin$Skin27, _super);
		function HiddenStoryItemSkin$Skin27() {
			_super.call(this);
			this.skinParts = ["labelDisplay"];
			
			this.elementsContent = [this._Image1_i(),this.labelDisplay_i()];
			this.states = [
				new eui.State ("up",
					[
					])
				,
				new eui.State ("down",
					[
						new eui.SetProperty("_Image1","source","bofang_zanting_icon01_png")
					])
				,
				new eui.State ("disabled",
					[
					])
			];
		}
		var _proto = HiddenStoryItemSkin$Skin27.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			this._Image1 = t;
			t.percentHeight = 100;
			t.source = "bofang_zanting_icon00_png";
			t.percentWidth = 100;
			return t;
		};
		_proto.labelDisplay_i = function () {
			var t = new eui.Label();
			this.labelDisplay = t;
			t.horizontalCenter = 0;
			t.verticalCenter = 0;
			return t;
		};
		return HiddenStoryItemSkin$Skin27;
	})(eui.Skin);

	var HiddenStoryItemSkin$Skin28 = 	(function (_super) {
		__extends(HiddenStoryItemSkin$Skin28, _super);
		function HiddenStoryItemSkin$Skin28() {
			_super.call(this);
			this.skinParts = ["labelDisplay"];
			
			this.elementsContent = [this._Rect1_i(),this._Image1_i(),this.labelDisplay_i()];
			this.states = [
				new eui.State ("up",
					[
					])
				,
				new eui.State ("down",
					[
					])
				,
				new eui.State ("disabled",
					[
					])
				,
				new eui.State ("move",
					[
						new eui.SetProperty("_Image1","source","bofang_fanhui01_png")
					])
			];
		}
		var _proto = HiddenStoryItemSkin$Skin28.prototype;

		_proto._Rect1_i = function () {
			var t = new eui.Rect();
			t.bottom = 0;
			t.fillAlpha = 0;
			t.left = 0;
			t.right = 0;
			t.top = 0;
			return t;
		};
		_proto._Image1_i = function () {
			var t = new eui.Image();
			this._Image1 = t;
			t.left = 29;
			t.source = "bofang_fanhui00_png";
			t.verticalCenter = 0;
			return t;
		};
		_proto.labelDisplay_i = function () {
			var t = new eui.Label();
			this.labelDisplay = t;
			t.fontFamily = "fangzheng";
			t.size = 30;
			t.textColor = 0xffffff;
			t.verticalCenter = 0;
			t.x = 88;
			return t;
		};
		return HiddenStoryItemSkin$Skin28;
	})(eui.Skin);

	function HiddenStoryItemSkin() {
		_super.call(this);
		this.skinParts = ["gVideo","btnPlay","btnPause","gPlay","btnReturn"];
		
		this.height = 1080;
		this.width = 1920;
		this.elementsContent = [this._Rect1_i(),this.gVideo_i(),this.gPlay_i(),this.btnReturn_i()];
		this.states = [
			new eui.State ("up",
				[
				])
			,
			new eui.State ("down",
				[
				])
			,
			new eui.State ("disabled",
				[
				])
		];
	}
	var _proto = HiddenStoryItemSkin.prototype;

	_proto._Rect1_i = function () {
		var t = new eui.Rect();
		t.bottom = 0;
		t.left = 0;
		t.right = 0;
		t.top = 0;
		return t;
	};
	_proto.gVideo_i = function () {
		var t = new eui.Group();
		this.gVideo = t;
		t.height = 1080;
		t.horizontalCenter = 0;
		t.verticalCenter = 0;
		t.width = 1920;
		return t;
	};
	_proto.gPlay_i = function () {
		var t = new eui.Group();
		this.gPlay = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 1080;
		t.horizontalCenter = 0;
		t.scrollEnabled = true;
		t.verticalCenter = 0;
		t.width = 1920;
		t.elementsContent = [this.btnPlay_i(),this.btnPause_i()];
		return t;
	};
	_proto.btnPlay_i = function () {
		var t = new eui.Button();
		this.btnPlay = t;
		t.bottom = 29;
		t.label = "";
		t.left = 29;
		t.visible = false;
		t.skinName = HiddenStoryItemSkin$Skin26;
		return t;
	};
	_proto.btnPause_i = function () {
		var t = new eui.Button();
		this.btnPause = t;
		t.bottom = 32;
		t.label = "";
		t.left = 32;
		t.visible = false;
		t.skinName = HiddenStoryItemSkin$Skin27;
		return t;
	};
	_proto.btnReturn_i = function () {
		var t = new eui.Button();
		this.btnReturn = t;
		t.height = 62;
		t.label = "";
		t.width = 150;
		t.x = 0;
		t.y = 0;
		t.skinName = HiddenStoryItemSkin$Skin28;
		return t;
	};
	return HiddenStoryItemSkin;
})(eui.Skin);generateEUI.paths['resource/eui_skins/login.exml'] = window.LoginSkin = (function (_super) {
	__extends(LoginSkin, _super);
	function LoginSkin() {
		_super.call(this);
		this.skinParts = ["bgLogin","gServer","textVersion","textStart","btnStartGame","gContent"];
		
		this.height = 1080;
		this.width = 1920;
		this.elementsContent = [this._Rect1_i(),this.bgLogin_i(),this.gContent_i()];
	}
	var _proto = LoginSkin.prototype;

	_proto._Rect1_i = function () {
		var t = new eui.Rect();
		t.bottom = 0;
		t.left = 0;
		t.right = 0;
		t.top = 0;
		return t;
	};
	_proto.bgLogin_i = function () {
		var t = new eui.Image();
		this.bgLogin = t;
		t.fillMode = "clip";
		t.horizontalCenter = 0;
		t.source = "denglu_bg_1920_1080_jpg";
		t.verticalCenter = 0;
		return t;
	};
	_proto.gContent_i = function () {
		var t = new eui.Group();
		this.gContent = t;
		t.height = 1080;
		t.horizontalCenter = 0;
		t.verticalCenter = 0;
		t.width = 1920;
		t.elementsContent = [this.gServer_i(),this._Image1_i(),this._Image2_i(),this._Label1_i(),this.textVersion_i(),this.btnStartGame_i()];
		return t;
	};
	_proto.gServer_i = function () {
		var t = new eui.Group();
		this.gServer = t;
		t.right = 50;
		t.top = 50;
		return t;
	};
	_proto._Image1_i = function () {
		var t = new eui.Image();
		t.source = "denglu_ceshiban_png";
		t.x = 1315;
		t.y = 407;
		return t;
	};
	_proto._Image2_i = function () {
		var t = new eui.Image();
		t.source = "denglu_changpianhudongyouxi_png";
		t.x = 829;
		t.y = 619;
		return t;
	};
	_proto._Label1_i = function () {
		var t = new eui.Label();
		t.fontFamily = "Microsoft YaHei";
		t.size = 14;
		t.text = "本故事纯属虚构，包含少量血腥画面，建议17周岁以上用户观看体验。";
		t.textColor = 0x999999;
		t.x = 22;
		t.y = 22;
		return t;
	};
	_proto.textVersion_i = function () {
		var t = new eui.Label();
		this.textVersion = t;
		t.fontFamily = "Microsoft YaHei";
		t.size = 14;
		t.text = "";
		t.textColor = 0x999999;
		t.x = 22;
		t.y = 42;
		return t;
	};
	_proto.btnStartGame_i = function () {
		var t = new eui.Group();
		this.btnStartGame = t;
		t.horizontalCenter = 0;
		t.y = 930;
		t.elementsContent = [this._Image3_i(),this._Image4_i(),this.textStart_i()];
		return t;
	};
	_proto._Image3_i = function () {
		var t = new eui.Image();
		t.source = "tongyong_tanchuangzhuangshi_png";
		t.verticalCenter = 0;
		t.x = 0;
		return t;
	};
	_proto._Image4_i = function () {
		var t = new eui.Image();
		t.source = "tongyong_tanchuangzhuangshi_png";
		t.verticalCenter = 0;
		t.x = 215;
		return t;
	};
	_proto.textStart_i = function () {
		var t = new eui.Label();
		this.textStart = t;
		t.fontFamily = "fangzheng";
		t.horizontalCenter = 0;
		t.size = 30;
		t.text = "点击开始";
		t.verticalCenter = 0;
		return t;
	};
	return LoginSkin;
})(eui.Skin);generateEUI.paths['resource/eui_skins/MiniBar.exml'] = window.MiniBarSkin = (function (_super) {
	__extends(MiniBarSkin, _super);
	var MiniBarSkin$Skin29 = 	(function (_super) {
		__extends(MiniBarSkin$Skin29, _super);
		function MiniBarSkin$Skin29() {
			_super.call(this);
			this.skinParts = ["labelDisplay"];
			
			this.elementsContent = [this._Image1_i(),this.labelDisplay_i()];
			this.states = [
				new eui.State ("up",
					[
					])
				,
				new eui.State ("down",
					[
						new eui.SetProperty("_Image1","source","paihangbang_yidongzuo_btn01_png")
					])
				,
				new eui.State ("disabled",
					[
					])
			];
		}
		var _proto = MiniBarSkin$Skin29.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			this._Image1 = t;
			t.percentHeight = 100;
			t.source = "paihangbang_yidongzuo_btn00_png";
			t.percentWidth = 100;
			return t;
		};
		_proto.labelDisplay_i = function () {
			var t = new eui.Label();
			this.labelDisplay = t;
			t.horizontalCenter = 0;
			t.verticalCenter = 0;
			return t;
		};
		return MiniBarSkin$Skin29;
	})(eui.Skin);

	function MiniBarSkin() {
		_super.call(this);
		this.skinParts = ["hiddeButton","title","avatar0","item0","avatar1","item1","avatar2","item2","rankList"];
		
		this.height = 351;
		this.width = 109;
		this.elementsContent = [this._Image1_i(),this.hiddeButton_i(),this.title_i(),this.rankList_i()];
	}
	var _proto = MiniBarSkin.prototype;

	_proto._Image1_i = function () {
		var t = new eui.Image();
		t.height = 351;
		t.source = "paihangbang_rukouditu_png";
		t.width = 109;
		return t;
	};
	_proto.hiddeButton_i = function () {
		var t = new eui.Button();
		this.hiddeButton = t;
		t.enabled = true;
		t.label = "";
		t.x = 62;
		t.y = 10;
		t.skinName = MiniBarSkin$Skin29;
		return t;
	};
	_proto.title_i = function () {
		var t = new eui.Label();
		this.title = t;
		t.size = 18;
		t.text = "排行";
		t.textColor = 0x868686;
		t.width = 36;
		t.x = 18.5;
		t.y = 23;
		return t;
	};
	_proto.rankList_i = function () {
		var t = new eui.Group();
		this.rankList = t;
		t.height = 309;
		t.width = 109;
		t.x = 0;
		t.y = 50;
		t.elementsContent = [this.item0_i(),this.item1_i(),this.item2_i()];
		return t;
	};
	_proto.item0_i = function () {
		var t = new eui.Group();
		this.item0 = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 65;
		t.scaleX = 1;
		t.scaleY = 1;
		t.width = 65;
		t.x = 25;
		t.y = 20;
		t.elementsContent = [this.avatar0_i(),this._Image2_i()];
		return t;
	};
	_proto.avatar0_i = function () {
		var t = new eui.Image();
		this.avatar0 = t;
		t.height = 65;
		t.source = "paihangbang_touxiang_png";
		t.width = 65;
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto._Image2_i = function () {
		var t = new eui.Image();
		t.height = 53;
		t.source = "paihangbang_diyi_png";
		t.width = 52;
		t.x = 7;
		t.y = 35;
		return t;
	};
	_proto.item1_i = function () {
		var t = new eui.Group();
		this.item1 = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 65;
		t.scaleX = 1;
		t.scaleY = 1;
		t.width = 65;
		t.x = 25;
		t.y = 105;
		t.elementsContent = [this.avatar1_i(),this._Image3_i()];
		return t;
	};
	_proto.avatar1_i = function () {
		var t = new eui.Image();
		this.avatar1 = t;
		t.height = 65;
		t.source = "paihangbang_touxiang_png";
		t.width = 65;
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto._Image3_i = function () {
		var t = new eui.Image();
		t.height = 53;
		t.source = "paihangbang_dier_png";
		t.width = 52;
		t.x = 7;
		t.y = 35;
		return t;
	};
	_proto.item2_i = function () {
		var t = new eui.Group();
		this.item2 = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 65;
		t.scaleX = 1;
		t.scaleY = 1;
		t.width = 65;
		t.x = 25;
		t.y = 190;
		t.elementsContent = [this.avatar2_i(),this._Image4_i()];
		return t;
	};
	_proto.avatar2_i = function () {
		var t = new eui.Image();
		this.avatar2 = t;
		t.height = 65;
		t.source = "paihangbang_touxiang_png";
		t.width = 65;
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto._Image4_i = function () {
		var t = new eui.Image();
		t.height = 53;
		t.source = "paihangbang_disan_png";
		t.width = 52;
		t.x = 7;
		t.y = 35;
		return t;
	};
	return MiniBarSkin;
})(eui.Skin);generateEUI.paths['resource/eui_skins/Nick.exml'] = window.NickSkin = (function (_super) {
	__extends(NickSkin, _super);
	var NickSkin$Skin30 = 	(function (_super) {
		__extends(NickSkin$Skin30, _super);
		function NickSkin$Skin30() {
			_super.call(this);
			this.skinParts = ["labelDisplay"];
			
			this.elementsContent = [this._Image1_i(),this.labelDisplay_i()];
			this.states = [
				new eui.State ("up",
					[
					])
				,
				new eui.State ("down",
					[
						new eui.SetProperty("_Image1","source","tongyong_queding_btn02_png")
					])
				,
				new eui.State ("disabled",
					[
					])
				,
				new eui.State ("move",
					[
						new eui.SetProperty("_Image1","source","tongyong_queding_btn01_png")
					])
			];
		}
		var _proto = NickSkin$Skin30.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			this._Image1 = t;
			t.percentHeight = 100;
			t.source = "tongyong_queding_btn00_png";
			t.percentWidth = 100;
			return t;
		};
		_proto.labelDisplay_i = function () {
			var t = new eui.Label();
			this.labelDisplay = t;
			t.fontFamily = "Microsoft Yahei";
			t.horizontalCenter = 0;
			t.size = 22;
			t.textColor = 0x000000;
			t.verticalCenter = 0;
			return t;
		};
		return NickSkin$Skin30;
	})(eui.Skin);

	function NickSkin() {
		_super.call(this);
		this.skinParts = ["textInput","textNick","btnSubmit","gPopup"];
		
		this.elementsContent = [this._Rect1_i(),this.gPopup_i()];
	}
	var _proto = NickSkin.prototype;

	_proto._Rect1_i = function () {
		var t = new eui.Rect();
		t.bottom = 0;
		t.left = 0;
		t.right = 0;
		t.top = 0;
		return t;
	};
	_proto.gPopup_i = function () {
		var t = new eui.Group();
		this.gPopup = t;
		t.height = 272;
		t.horizontalCenter = 0;
		t.verticalCenter = 0;
		t.width = 714;
		t.elementsContent = [this._Image1_i(),this._Label1_i(),this._Group1_i(),this.btnSubmit_i()];
		return t;
	};
	_proto._Image1_i = function () {
		var t = new eui.Image();
		t.source = "juesenicheng_tangchuang_png";
		return t;
	};
	_proto._Label1_i = function () {
		var t = new eui.Label();
		t.fontFamily = "Microsoft YaHei";
		t.horizontalCenter = 0;
		t.size = 22;
		t.text = "隐形守护者，请告诉我你的名字？";
		t.y = 40;
		return t;
	};
	_proto._Group1_i = function () {
		var t = new eui.Group();
		t.height = 53;
		t.horizontalCenter = 0;
		t.width = 553;
		t.y = 90;
		t.elementsContent = [this._Image2_i(),this.textInput_i(),this.textNick_i()];
		return t;
	};
	_proto._Image2_i = function () {
		var t = new eui.Image();
		t.bottom = 0;
		t.left = 0;
		t.right = 0;
		t.scale9Grid = new egret.Rectangle(6,6,41,41);
		t.source = "juesenicheng_shuru_png";
		t.top = 0;
		return t;
	};
	_proto.textInput_i = function () {
		var t = new eui.EditableText();
		this.textInput = t;
		t.fontFamily = "Microsoft YaHei";
		t.height = 53;
		t.size = 20;
		t.text = "";
		t.textAlign = "center";
		t.textColor = 0x9f9373;
		t.verticalAlign = "middle";
		t.width = 553;
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto.textNick_i = function () {
		var t = new eui.Label();
		this.textNick = t;
		t.alpha = 0.3;
		t.fontFamily = "Microsoft YaHei";
		t.horizontalCenter = 0;
		t.size = 20;
		t.text = "名字一经确定，不可更改，请慎重";
		t.textColor = 0x8a8a8a;
		t.touchEnabled = false;
		t.verticalCenter = 0;
		return t;
	};
	_proto.btnSubmit_i = function () {
		var t = new eui.Button();
		this.btnSubmit = t;
		t.horizontalCenter = 0;
		t.label = "确定";
		t.y = 173;
		t.skinName = NickSkin$Skin30;
		return t;
	};
	return NickSkin;
})(eui.Skin);generateEUI.paths['resource/eui_skins/percentBar.exml'] = window.percentBarSkin = (function (_super) {
	__extends(percentBarSkin, _super);
	function percentBarSkin() {
		_super.call(this);
		this.skinParts = ["labelDisplay","thumb"];
		
		this.minHeight = 18;
		this.minWidth = 30;
		this.elementsContent = [this.labelDisplay_i(),this._Image1_i(),this._Group1_i()];
	}
	var _proto = percentBarSkin.prototype;

	_proto.labelDisplay_i = function () {
		var t = new eui.Label();
		this.labelDisplay = t;
		t.fontFamily = "Microsoft YaHei";
		t.horizontalCenter = 0;
		t.size = 20;
		t.textAlign = "center";
		t.textColor = 0xb8b8b8;
		t.verticalAlign = "middle";
		t.verticalCenter = 0;
		t.visible = false;
		return t;
	};
	_proto._Image1_i = function () {
		var t = new eui.Image();
		t.height = 18;
		t.scale9Grid = new egret.Rectangle(18,0,77,18);
		t.source = "tongyong__tangsuodu_png";
		t.verticalCenter = 0;
		t.percentWidth = 100;
		return t;
	};
	_proto._Group1_i = function () {
		var t = new eui.Group();
		t.bottom = 0;
		t.left = 18;
		t.right = 4;
		t.top = 0;
		t.elementsContent = [this.thumb_i()];
		return t;
	};
	_proto.thumb_i = function () {
		var t = new eui.Rect();
		this.thumb = t;
		t.fillColor = 0xe1c89a;
		t.height = 3;
		t.strokeColor = 0xe1c89a;
		t.width = 0;
		t.x = 0;
		t.y = 7;
		return t;
	};
	return percentBarSkin;
})(eui.Skin);generateEUI.paths['resource/eui_skins/PlayerSliderSkin.exml'] = window.PlayerSliderSkin = (function (_super) {
	__extends(PlayerSliderSkin, _super);
	function PlayerSliderSkin() {
		_super.call(this);
		this.skinParts = ["track","trackBuffer","trackHighlight","thumb"];
		
		this.minHeight = 8;
		this.minWidth = 20;
		this.elementsContent = [this.track_i(),this.trackBuffer_i(),this.trackHighlight_i(),this.thumb_i()];
		this.states = [
			new eui.State ("up",
				[
				])
			,
			new eui.State ("down",
				[
					new eui.SetProperty("_Image2","alpha",1)
				])
			,
			new eui.State ("disabled",
				[
				])
		];
	}
	var _proto = PlayerSliderSkin.prototype;

	_proto.track_i = function () {
		var t = new eui.Group();
		this.track = t;
		t.bottom = 0;
		t.left = 0;
		t.right = 0;
		t.top = 0;
		t.elementsContent = [this._Rect1_i(),this._Image1_i()];
		return t;
	};
	_proto._Rect1_i = function () {
		var t = new eui.Rect();
		t.bottom = 0;
		t.fillAlpha = 0;
		t.left = 0;
		t.right = 0;
		t.top = 0;
		return t;
	};
	_proto._Image1_i = function () {
		var t = new eui.Image();
		t.height = 4;
		t.left = 0;
		t.right = 0;
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "bofang_jindu_png";
		t.touchEnabled = false;
		t.verticalCenter = 0;
		t.x = 0;
		t.y = 42;
		return t;
	};
	_proto.trackBuffer_i = function () {
		var t = new eui.Image();
		this.trackBuffer = t;
		t.height = 4;
		t.scale9Grid = new egret.Rectangle(12,0,76,4);
		t.source = "bofang_huanchun_png";
		t.touchEnabled = false;
		t.verticalCenter = 0;
		t.width = 0;
		return t;
	};
	_proto.trackHighlight_i = function () {
		var t = new eui.Image();
		this.trackHighlight = t;
		t.height = 4;
		t.scale9Grid = new egret.Rectangle(1,0,118,4);
		t.source = "bofang_jindutiao_png";
		t.touchEnabled = false;
		t.verticalCenter = 0;
		t.width = 0;
		t.x = 0;
		return t;
	};
	_proto.thumb_i = function () {
		var t = new eui.Group();
		this.thumb = t;
		t.height = 32;
		t.verticalCenter = 0;
		t.width = 0;
		t.elementsContent = [this._Image2_i()];
		return t;
	};
	_proto._Image2_i = function () {
		var t = new eui.Image();
		this._Image2 = t;
		t.alpha = 0;
		t.height = 24;
		t.horizontalCenter = 0;
		t.source = "bofang_dangqian_png";
		t.verticalCenter = 0;
		t.width = 24;
		return t;
	};
	return PlayerSliderSkin;
})(eui.Skin);generateEUI.paths['resource/eui_skins/PopupBuy.exml'] = window.PopupBuySkin = (function (_super) {
	__extends(PopupBuySkin, _super);
	var PopupBuySkin$Skin31 = 	(function (_super) {
		__extends(PopupBuySkin$Skin31, _super);
		function PopupBuySkin$Skin31() {
			_super.call(this);
			this.skinParts = ["labelDisplay"];
			
			this.elementsContent = [this._Image1_i(),this.labelDisplay_i()];
			this.states = [
				new eui.State ("up",
					[
					])
				,
				new eui.State ("down",
					[
						new eui.SetProperty("_Image1","source","tongyog_guanbi_icon01_png")
					])
				,
				new eui.State ("disabled",
					[
					])
			];
		}
		var _proto = PopupBuySkin$Skin31.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			this._Image1 = t;
			t.percentHeight = 100;
			t.source = "tongyog_guanbi_icon00_png";
			t.percentWidth = 100;
			return t;
		};
		_proto.labelDisplay_i = function () {
			var t = new eui.Label();
			this.labelDisplay = t;
			t.horizontalCenter = 0;
			t.verticalCenter = 0;
			return t;
		};
		return PopupBuySkin$Skin31;
	})(eui.Skin);

	function PopupBuySkin() {
		_super.call(this);
		this.skinParts = ["btnClose","listShop","gPopup"];
		
		this.elementsContent = [this._Rect1_i(),this.gPopup_i()];
	}
	var _proto = PopupBuySkin.prototype;

	_proto._Rect1_i = function () {
		var t = new eui.Rect();
		t.bottom = 0;
		t.fillAlpha = 0.4;
		t.left = 0;
		t.right = 0;
		t.top = 0;
		return t;
	};
	_proto.gPopup_i = function () {
		var t = new eui.Group();
		this.gPopup = t;
		t.horizontalCenter = 0;
		t.verticalCenter = 0;
		t.elementsContent = [this._Image1_i(),this.btnClose_i(),this.listShop_i()];
		return t;
	};
	_proto._Image1_i = function () {
		var t = new eui.Image();
		t.fillMode = "scale";
		t.source = "paihangbang_zengsongtanchuang_daditu_png";
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto.btnClose_i = function () {
		var t = new eui.Button();
		this.btnClose = t;
		t.label = "";
		t.right = 10;
		t.top = 10;
		t.skinName = PopupBuySkin$Skin31;
		return t;
	};
	_proto.listShop_i = function () {
		var t = new eui.List();
		this.listShop = t;
		t.height = 373;
		t.horizontalCenter = 0;
		t.verticalCenter = 0;
		t.layout = this._HorizontalLayout1_i();
		return t;
	};
	_proto._HorizontalLayout1_i = function () {
		var t = new eui.HorizontalLayout();
		t.gap = 26;
		return t;
	};
	return PopupBuySkin;
})(eui.Skin);generateEUI.paths['resource/eui_skins/PopupBuyItem.exml'] = window.PopupBuyItemSkin = (function (_super) {
	__extends(PopupBuyItemSkin, _super);
	function PopupBuyItemSkin() {
		_super.call(this);
		this.skinParts = ["textCount","imgItem","textPrice","textGift"];
		
		this.height = 373;
		this.width = 234;
		this.elementsContent = [this._Image1_i(),this._Group1_i(),this.imgItem_i(),this.textPrice_i(),this.textGift_i()];
		this.states = [
			new eui.State ("up",
				[
				])
			,
			new eui.State ("down",
				[
					new eui.SetProperty("_Image1","source","goumai_tongyongtanchuang_xiaoditu02_png")
				])
			,
			new eui.State ("disabled",
				[
				])
			,
			new eui.State ("move",
				[
					new eui.SetProperty("_Image1","source","goumai_tongyongtanchuang_xiaoditu01_png")
				])
		];
	}
	var _proto = PopupBuyItemSkin.prototype;

	_proto._Image1_i = function () {
		var t = new eui.Image();
		this._Image1 = t;
		t.height = 373;
		t.source = "goumai_tongyongtanchuang_xiaoditu_png";
		t.width = 234;
		return t;
	};
	_proto._Group1_i = function () {
		var t = new eui.Group();
		t.x = 17;
		t.y = 17;
		t.elementsContent = [this._Image2_i(),this.textCount_i()];
		return t;
	};
	_proto._Image2_i = function () {
		var t = new eui.Image();
		t.height = 43;
		t.source = "goumai_tongyongtanchuang_jiage_png";
		t.width = 196;
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto.textCount_i = function () {
		var t = new eui.Label();
		this.textCount = t;
		t.fontFamily = "fangzheng";
		t.horizontalCenter = 0;
		t.size = 24;
		t.text = "";
		t.textColor = 0x100f0e;
		t.verticalCenter = 0;
		return t;
	};
	_proto.imgItem_i = function () {
		var t = new eui.Image();
		this.imgItem = t;
		t.height = 194;
		t.horizontalCenter = 0;
		t.width = 194;
		t.y = 76;
		return t;
	};
	_proto.textPrice_i = function () {
		var t = new eui.Label();
		this.textPrice = t;
		t.fontFamily = "Microsoft YaHei";
		t.horizontalCenter = 0;
		t.size = 20;
		t.text = "";
		t.y = 319;
		return t;
	};
	_proto.textGift_i = function () {
		var t = new eui.Label();
		this.textGift = t;
		t.fontFamily = "Microsoft YaHei";
		t.horizontalCenter = 0;
		t.size = 20;
		t.text = "";
		t.textColor = 0xeae2c7;
		t.visible = false;
		t.y = 275;
		return t;
	};
	return PopupBuyItemSkin;
})(eui.Skin);generateEUI.paths['resource/eui_skins/popupDialog.exml'] = window.PopupDialogSkin = (function (_super) {
	__extends(PopupDialogSkin, _super);
	var PopupDialogSkin$Skin32 = 	(function (_super) {
		__extends(PopupDialogSkin$Skin32, _super);
		function PopupDialogSkin$Skin32() {
			_super.call(this);
			this.skinParts = ["labelDisplay"];
			
			this.elementsContent = [this._Image1_i(),this.labelDisplay_i()];
			this.states = [
				new eui.State ("up",
					[
					])
				,
				new eui.State ("down",
					[
						new eui.SetProperty("_Image1","source","tongyog_guanbi_icon01_png")
					])
				,
				new eui.State ("disabled",
					[
					])
			];
		}
		var _proto = PopupDialogSkin$Skin32.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			this._Image1 = t;
			t.percentHeight = 100;
			t.source = "tongyog_guanbi_icon00_png";
			t.percentWidth = 100;
			return t;
		};
		_proto.labelDisplay_i = function () {
			var t = new eui.Label();
			this.labelDisplay = t;
			t.horizontalCenter = 0;
			t.verticalCenter = 0;
			return t;
		};
		return PopupDialogSkin$Skin32;
	})(eui.Skin);

	var PopupDialogSkin$Skin33 = 	(function (_super) {
		__extends(PopupDialogSkin$Skin33, _super);
		function PopupDialogSkin$Skin33() {
			_super.call(this);
			this.skinParts = ["labelDisplay"];
			
			this.elementsContent = [this._Image1_i(),this.labelDisplay_i()];
			this.states = [
				new eui.State ("up",
					[
					])
				,
				new eui.State ("down",
					[
						new eui.SetProperty("_Image1","source","tongyong_quxiao_btn01_png")
					])
				,
				new eui.State ("disabled",
					[
					])
			];
		}
		var _proto = PopupDialogSkin$Skin33.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			this._Image1 = t;
			t.percentHeight = 100;
			t.source = "tongyong_quxiao_btn00_png";
			t.percentWidth = 100;
			return t;
		};
		_proto.labelDisplay_i = function () {
			var t = new eui.Label();
			this.labelDisplay = t;
			t.fontFamily = "Microsoft Yahei";
			t.horizontalCenter = 0;
			t.size = 28;
			t.textColor = 0x000000;
			t.verticalCenter = 0;
			return t;
		};
		return PopupDialogSkin$Skin33;
	})(eui.Skin);

	var PopupDialogSkin$Skin34 = 	(function (_super) {
		__extends(PopupDialogSkin$Skin34, _super);
		function PopupDialogSkin$Skin34() {
			_super.call(this);
			this.skinParts = ["labelDisplay"];
			
			this.elementsContent = [this._Image1_i(),this.labelDisplay_i()];
			this.states = [
				new eui.State ("up",
					[
					])
				,
				new eui.State ("down",
					[
						new eui.SetProperty("_Image1","source","tongyong_queding_btn01_png")
					])
				,
				new eui.State ("disabled",
					[
					])
			];
		}
		var _proto = PopupDialogSkin$Skin34.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			this._Image1 = t;
			t.percentHeight = 100;
			t.source = "tongyong_queding_btn00_png";
			t.percentWidth = 100;
			return t;
		};
		_proto.labelDisplay_i = function () {
			var t = new eui.Label();
			this.labelDisplay = t;
			t.fontFamily = "Microsoft Yahei";
			t.horizontalCenter = 0;
			t.size = 28;
			t.textColor = 0x000000;
			t.verticalCenter = 0;
			return t;
		};
		return PopupDialogSkin$Skin34;
	})(eui.Skin);

	function PopupDialogSkin() {
		_super.call(this);
		this.skinParts = ["btnClose","textTitle","textInfo","btnCancel","btnSubmit","gPopup"];
		
		this.elementsContent = [this._Rect1_i(),this.gPopup_i()];
	}
	var _proto = PopupDialogSkin.prototype;

	_proto._Rect1_i = function () {
		var t = new eui.Rect();
		t.bottom = 0;
		t.fillAlpha = 0.4;
		t.left = 0;
		t.right = 0;
		t.top = 0;
		return t;
	};
	_proto.gPopup_i = function () {
		var t = new eui.Group();
		this.gPopup = t;
		t.horizontalCenter = 0;
		t.verticalCenter = 0;
		t.elementsContent = [this._Image1_i(),this.btnClose_i(),this._Group1_i(),this._Rect2_i(),this.textInfo_i(),this._Group2_i()];
		return t;
	};
	_proto._Image1_i = function () {
		var t = new eui.Image();
		t.fillMode = "scale";
		t.source = "tongyong_xiaotanchuang_png";
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto.btnClose_i = function () {
		var t = new eui.Button();
		this.btnClose = t;
		t.label = "";
		t.right = 10;
		t.top = 10;
		t.skinName = PopupDialogSkin$Skin32;
		return t;
	};
	_proto._Group1_i = function () {
		var t = new eui.Group();
		t.horizontalCenter = 0;
		t.y = 30;
		t.elementsContent = [this._Image2_i(),this._Image3_i(),this.textTitle_i()];
		return t;
	};
	_proto._Image2_i = function () {
		var t = new eui.Image();
		t.left = 0;
		t.source = "tongyong_tanchuangzhuangshi_png";
		t.verticalCenter = 0;
		return t;
	};
	_proto._Image3_i = function () {
		var t = new eui.Image();
		t.right = 0;
		t.source = "tongyong_tanchuangzhuangshi_png";
		t.verticalCenter = 0;
		return t;
	};
	_proto.textTitle_i = function () {
		var t = new eui.Label();
		this.textTitle = t;
		t.fontFamily = "fangzheng";
		t.left = 54;
		t.right = 54;
		t.size = 26;
		t.text = "";
		t.verticalCenter = 0;
		return t;
	};
	_proto._Rect2_i = function () {
		var t = new eui.Rect();
		t.fillAlpha = 0.2;
		t.fillColor = 0xf0e8c4;
		t.height = 1;
		t.horizontalCenter = 0;
		t.width = 224;
		t.y = 71;
		return t;
	};
	_proto.textInfo_i = function () {
		var t = new eui.Label();
		this.textInfo = t;
		t.fontFamily = "Microsoft YaHei";
		t.horizontalCenter = 0;
		t.maxWidth = 650;
		t.multiline = true;
		t.size = 24;
		t.text = "";
		t.y = 95;
		return t;
	};
	_proto._Group2_i = function () {
		var t = new eui.Group();
		t.horizontalCenter = 0;
		t.y = 269;
		t.elementsContent = [this.btnCancel_i(),this.btnSubmit_i()];
		return t;
	};
	_proto.btnCancel_i = function () {
		var t = new eui.Button();
		this.btnCancel = t;
		t.height = 58;
		t.label = "取消";
		t.width = 221;
		t.x = 0;
		t.y = 0;
		t.skinName = PopupDialogSkin$Skin33;
		return t;
	};
	_proto.btnSubmit_i = function () {
		var t = new eui.Button();
		this.btnSubmit = t;
		t.height = 58;
		t.label = "确定";
		t.width = 221;
		t.x = 300;
		t.y = 0;
		t.skinName = PopupDialogSkin$Skin34;
		return t;
	};
	return PopupDialogSkin;
})(eui.Skin);generateEUI.paths['resource/eui_skins/PopupGetItem.exml'] = window.PopupGetItemSkin = (function (_super) {
	__extends(PopupGetItemSkin, _super);
	var PopupGetItemSkin$Skin35 = 	(function (_super) {
		__extends(PopupGetItemSkin$Skin35, _super);
		function PopupGetItemSkin$Skin35() {
			_super.call(this);
			this.skinParts = ["labelDisplay"];
			
			this.elementsContent = [this._Image1_i(),this.labelDisplay_i()];
			this.states = [
				new eui.State ("up",
					[
					])
				,
				new eui.State ("down",
					[
						new eui.SetProperty("_Image1","source","tongyong_queding_btn02_png")
					])
				,
				new eui.State ("disabled",
					[
					])
				,
				new eui.State ("move",
					[
						new eui.SetProperty("_Image1","source","tongyong_queding_btn01_png")
					])
			];
		}
		var _proto = PopupGetItemSkin$Skin35.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			this._Image1 = t;
			t.percentHeight = 100;
			t.source = "tongyong_queding_btn00_png";
			t.percentWidth = 100;
			return t;
		};
		_proto.labelDisplay_i = function () {
			var t = new eui.Label();
			this.labelDisplay = t;
			t.fontFamily = "Microsoft Yahei";
			t.horizontalCenter = 0;
			t.size = 22;
			t.textColor = 0x000000;
			t.verticalCenter = 0;
			return t;
		};
		return PopupGetItemSkin$Skin35;
	})(eui.Skin);

	function PopupGetItemSkin() {
		_super.call(this);
		this.skinParts = ["textTitle","textItem","btnSubmit","gPopup"];
		
		this.elementsContent = [this._Rect1_i(),this.gPopup_i()];
	}
	var _proto = PopupGetItemSkin.prototype;

	_proto._Rect1_i = function () {
		var t = new eui.Rect();
		t.bottom = 0;
		t.fillAlpha = 0.4;
		t.left = 0;
		t.right = 0;
		t.top = 0;
		return t;
	};
	_proto.gPopup_i = function () {
		var t = new eui.Group();
		this.gPopup = t;
		t.height = 272;
		t.horizontalCenter = 0;
		t.verticalCenter = 0;
		t.width = 714;
		t.elementsContent = [this._Image1_i(),this.textTitle_i(),this.textItem_i(),this.btnSubmit_i()];
		return t;
	};
	_proto._Image1_i = function () {
		var t = new eui.Image();
		t.source = "juesenicheng_tangchuang_png";
		return t;
	};
	_proto.textTitle_i = function () {
		var t = new eui.Label();
		this.textTitle = t;
		t.fontFamily = "Microsoft YaHei";
		t.horizontalCenter = 0;
		t.size = 22;
		t.text = "你上次登陆游戏时物品领取失败，请重新领取";
		t.y = 50;
		return t;
	};
	_proto.textItem_i = function () {
		var t = new eui.Label();
		this.textItem = t;
		t.fontFamily = "Microsoft YaHei";
		t.horizontalCenter = 0;
		t.size = 20;
		t.text = "";
		t.y = 110;
		return t;
	};
	_proto.btnSubmit_i = function () {
		var t = new eui.Button();
		this.btnSubmit = t;
		t.horizontalCenter = 0;
		t.label = "确定";
		t.y = 173;
		t.skinName = PopupGetItemSkin$Skin35;
		return t;
	};
	return PopupGetItemSkin;
})(eui.Skin);generateEUI.paths['resource/eui_skins/PopupGift.exml'] = window.PopupGiftSkin = (function (_super) {
	__extends(PopupGiftSkin, _super);
	var PopupGiftSkin$Skin36 = 	(function (_super) {
		__extends(PopupGiftSkin$Skin36, _super);
		function PopupGiftSkin$Skin36() {
			_super.call(this);
			this.skinParts = ["labelDisplay"];
			
			this.elementsContent = [this._Image1_i(),this.labelDisplay_i()];
			this.states = [
				new eui.State ("up",
					[
					])
				,
				new eui.State ("down",
					[
						new eui.SetProperty("_Image1","source","tongyog_guanbi_icon01_png")
					])
				,
				new eui.State ("disabled",
					[
					])
			];
		}
		var _proto = PopupGiftSkin$Skin36.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			this._Image1 = t;
			t.percentHeight = 100;
			t.source = "tongyog_guanbi_icon00_png";
			t.percentWidth = 100;
			return t;
		};
		_proto.labelDisplay_i = function () {
			var t = new eui.Label();
			this.labelDisplay = t;
			t.horizontalCenter = 0;
			t.verticalCenter = 0;
			return t;
		};
		return PopupGiftSkin$Skin36;
	})(eui.Skin);

	var PopupGiftSkin$Skin37 = 	(function (_super) {
		__extends(PopupGiftSkin$Skin37, _super);
		function PopupGiftSkin$Skin37() {
			_super.call(this);
			this.skinParts = ["labelDisplay"];
			
			this.elementsContent = [this._Image1_i(),this._Image2_i(),this._Label1_i(),this.labelDisplay_i()];
			this.states = [
				new eui.State ("up",
					[
					])
				,
				new eui.State ("down",
					[
						new eui.SetProperty("_Image1","source","paihangbang_button_tanchuang02_png")
					])
				,
				new eui.State ("disabled",
					[
					])
				,
				new eui.State ("move",
					[
						new eui.SetProperty("_Image1","source","paihangbang_button_tanchuang01_png")
					])
			];
		}
		var _proto = PopupGiftSkin$Skin37.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			this._Image1 = t;
			t.percentHeight = 100;
			t.source = "paihangbang_button_tanchuang00_png";
			t.percentWidth = 100;
			return t;
		};
		_proto._Image2_i = function () {
			var t = new eui.Image();
			t.height = 49;
			t.source = "paihangbang_dahua_icon_png";
			t.verticalCenter = 0;
			t.width = 49;
			t.x = 94;
			return t;
		};
		_proto._Label1_i = function () {
			var t = new eui.Label();
			t.fontFamily = "Microsoft Yahei";
			t.size = 22;
			t.text = "送鲜花";
			t.textColor = 0x000000;
			t.verticalCenter = 0;
			t.x = 35;
			return t;
		};
		_proto.labelDisplay_i = function () {
			var t = new eui.Label();
			this.labelDisplay = t;
			t.fontFamily = "Microsoft Yahei";
			t.size = 22;
			t.textColor = 0x000000;
			t.verticalCenter = 0;
			t.x = 140;
			return t;
		};
		return PopupGiftSkin$Skin37;
	})(eui.Skin);

	var PopupGiftSkin$Skin38 = 	(function (_super) {
		__extends(PopupGiftSkin$Skin38, _super);
		function PopupGiftSkin$Skin38() {
			_super.call(this);
			this.skinParts = ["labelDisplay"];
			
			this.elementsContent = [this._Image1_i(),this._Image2_i(),this._Label1_i(),this.labelDisplay_i()];
			this.states = [
				new eui.State ("up",
					[
					])
				,
				new eui.State ("down",
					[
						new eui.SetProperty("_Image1","source","paihangbang_button_tanchuang02_png")
					])
				,
				new eui.State ("disabled",
					[
					])
				,
				new eui.State ("move",
					[
						new eui.SetProperty("_Image1","source","paihangbang_button_tanchuang01_png")
					])
			];
		}
		var _proto = PopupGiftSkin$Skin38.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			this._Image1 = t;
			t.percentHeight = 100;
			t.source = "paihangbang_button_tanchuang00_png";
			t.percentWidth = 100;
			return t;
		};
		_proto._Image2_i = function () {
			var t = new eui.Image();
			t.height = 49;
			t.source = "paihangbang_dahua_icon_png";
			t.verticalCenter = 0;
			t.width = 49;
			t.x = 94;
			return t;
		};
		_proto._Label1_i = function () {
			var t = new eui.Label();
			t.fontFamily = "Microsoft Yahei";
			t.size = 22;
			t.text = "送鲜花";
			t.textColor = 0x000000;
			t.verticalCenter = 0;
			t.x = 35;
			return t;
		};
		_proto.labelDisplay_i = function () {
			var t = new eui.Label();
			this.labelDisplay = t;
			t.fontFamily = "Microsoft Yahei";
			t.size = 22;
			t.textColor = 0x000000;
			t.verticalCenter = 0;
			t.x = 140;
			return t;
		};
		return PopupGiftSkin$Skin38;
	})(eui.Skin);

	var PopupGiftSkin$Skin39 = 	(function (_super) {
		__extends(PopupGiftSkin$Skin39, _super);
		function PopupGiftSkin$Skin39() {
			_super.call(this);
			this.skinParts = ["labelDisplay"];
			
			this.elementsContent = [this._Image1_i(),this._Image2_i(),this._Label1_i(),this.labelDisplay_i()];
			this.states = [
				new eui.State ("up",
					[
					])
				,
				new eui.State ("down",
					[
						new eui.SetProperty("_Image1","source","paihangbang_button_tanchuang02_png")
					])
				,
				new eui.State ("disabled",
					[
					])
				,
				new eui.State ("move",
					[
						new eui.SetProperty("_Image1","source","paihangbang_button_tanchuang01_png")
					])
			];
		}
		var _proto = PopupGiftSkin$Skin39.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			this._Image1 = t;
			t.percentHeight = 100;
			t.source = "paihangbang_button_tanchuang00_png";
			t.percentWidth = 100;
			return t;
		};
		_proto._Image2_i = function () {
			var t = new eui.Image();
			t.height = 49;
			t.source = "paihangbang_dahua_icon_png";
			t.verticalCenter = 0;
			t.width = 49;
			t.x = 94;
			return t;
		};
		_proto._Label1_i = function () {
			var t = new eui.Label();
			t.fontFamily = "Microsoft Yahei";
			t.size = 22;
			t.text = "送鲜花";
			t.textColor = 0x000000;
			t.verticalCenter = 0;
			t.x = 35;
			return t;
		};
		_proto.labelDisplay_i = function () {
			var t = new eui.Label();
			this.labelDisplay = t;
			t.fontFamily = "Microsoft Yahei";
			t.size = 22;
			t.textColor = 0x000000;
			t.verticalCenter = 0;
			t.x = 140;
			return t;
		};
		return PopupGiftSkin$Skin39;
	})(eui.Skin);

	var PopupGiftSkin$Skin40 = 	(function (_super) {
		__extends(PopupGiftSkin$Skin40, _super);
		function PopupGiftSkin$Skin40() {
			_super.call(this);
			this.skinParts = ["labelDisplay"];
			
			this.elementsContent = [this._Image1_i(),this._Image2_i(),this._Label1_i(),this.labelDisplay_i()];
			this.states = [
				new eui.State ("up",
					[
					])
				,
				new eui.State ("down",
					[
						new eui.SetProperty("_Image1","source","paihangbang_button_tanchuang02_png")
					])
				,
				new eui.State ("disabled",
					[
					])
				,
				new eui.State ("move",
					[
						new eui.SetProperty("_Image1","source","paihangbang_button_tanchuang01_png")
					])
			];
		}
		var _proto = PopupGiftSkin$Skin40.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			this._Image1 = t;
			t.percentHeight = 100;
			t.source = "paihangbang_button_tanchuang00_png";
			t.percentWidth = 100;
			return t;
		};
		_proto._Image2_i = function () {
			var t = new eui.Image();
			t.height = 49;
			t.source = "paihangbang_dajidan_icon_png";
			t.verticalCenter = 0;
			t.width = 49;
			t.x = 94;
			return t;
		};
		_proto._Label1_i = function () {
			var t = new eui.Label();
			t.fontFamily = "Microsoft Yahei";
			t.size = 22;
			t.text = "砸鸡蛋";
			t.textColor = 0x000000;
			t.verticalCenter = 0;
			t.x = 35;
			return t;
		};
		_proto.labelDisplay_i = function () {
			var t = new eui.Label();
			this.labelDisplay = t;
			t.fontFamily = "Microsoft Yahei";
			t.size = 22;
			t.textColor = 0x000000;
			t.verticalCenter = 0;
			t.x = 140;
			return t;
		};
		return PopupGiftSkin$Skin40;
	})(eui.Skin);

	var PopupGiftSkin$Skin41 = 	(function (_super) {
		__extends(PopupGiftSkin$Skin41, _super);
		function PopupGiftSkin$Skin41() {
			_super.call(this);
			this.skinParts = ["labelDisplay"];
			
			this.elementsContent = [this._Image1_i(),this._Image2_i(),this._Label1_i(),this.labelDisplay_i()];
			this.states = [
				new eui.State ("up",
					[
					])
				,
				new eui.State ("down",
					[
						new eui.SetProperty("_Image1","source","paihangbang_button_tanchuang02_png")
					])
				,
				new eui.State ("disabled",
					[
					])
				,
				new eui.State ("move",
					[
						new eui.SetProperty("_Image1","source","paihangbang_button_tanchuang01_png")
					])
			];
		}
		var _proto = PopupGiftSkin$Skin41.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			this._Image1 = t;
			t.percentHeight = 100;
			t.source = "paihangbang_button_tanchuang00_png";
			t.percentWidth = 100;
			return t;
		};
		_proto._Image2_i = function () {
			var t = new eui.Image();
			t.height = 49;
			t.source = "paihangbang_dajidan_icon_png";
			t.verticalCenter = 0;
			t.width = 49;
			t.x = 94;
			return t;
		};
		_proto._Label1_i = function () {
			var t = new eui.Label();
			t.fontFamily = "Microsoft Yahei";
			t.size = 22;
			t.text = "砸鸡蛋";
			t.textColor = 0x000000;
			t.verticalCenter = 0;
			t.x = 35;
			return t;
		};
		_proto.labelDisplay_i = function () {
			var t = new eui.Label();
			this.labelDisplay = t;
			t.fontFamily = "Microsoft Yahei";
			t.size = 22;
			t.textColor = 0x000000;
			t.verticalCenter = 0;
			t.x = 140;
			return t;
		};
		return PopupGiftSkin$Skin41;
	})(eui.Skin);

	var PopupGiftSkin$Skin42 = 	(function (_super) {
		__extends(PopupGiftSkin$Skin42, _super);
		function PopupGiftSkin$Skin42() {
			_super.call(this);
			this.skinParts = ["labelDisplay"];
			
			this.elementsContent = [this._Image1_i(),this._Image2_i(),this._Label1_i(),this.labelDisplay_i()];
			this.states = [
				new eui.State ("up",
					[
					])
				,
				new eui.State ("down",
					[
						new eui.SetProperty("_Image1","source","paihangbang_button_tanchuang02_png")
					])
				,
				new eui.State ("disabled",
					[
					])
				,
				new eui.State ("move",
					[
						new eui.SetProperty("_Image1","source","paihangbang_button_tanchuang01_png")
					])
			];
		}
		var _proto = PopupGiftSkin$Skin42.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			this._Image1 = t;
			t.percentHeight = 100;
			t.source = "paihangbang_button_tanchuang00_png";
			t.percentWidth = 100;
			return t;
		};
		_proto._Image2_i = function () {
			var t = new eui.Image();
			t.height = 49;
			t.source = "paihangbang_dajidan_icon_png";
			t.verticalCenter = 0;
			t.width = 49;
			t.x = 94;
			return t;
		};
		_proto._Label1_i = function () {
			var t = new eui.Label();
			t.fontFamily = "Microsoft Yahei";
			t.size = 22;
			t.text = "砸鸡蛋";
			t.textColor = 0x000000;
			t.verticalCenter = 0;
			t.x = 35;
			return t;
		};
		_proto.labelDisplay_i = function () {
			var t = new eui.Label();
			this.labelDisplay = t;
			t.fontFamily = "Microsoft Yahei";
			t.size = 22;
			t.textColor = 0x000000;
			t.verticalCenter = 0;
			t.x = 140;
			return t;
		};
		return PopupGiftSkin$Skin42;
	})(eui.Skin);

	function PopupGiftSkin() {
		_super.call(this);
		this.skinParts = ["btnClose","textName","gFlower","gEgg","gPopup"];
		
		this.elementsContent = [this._Rect1_i(),this.gPopup_i()];
		this.gFlower_i();
		
		this.gEgg_i();
		
		this.states = [
			new eui.State ("flower",
				[
					new eui.AddItems("gFlower","gPopup",1,""),
					new eui.SetProperty("_Label1","text","给"),
					new eui.SetProperty("_Label2","text","送鲜花")
				])
			,
			new eui.State ("egg",
				[
					new eui.AddItems("gEgg","gPopup",1,""),
					new eui.SetProperty("_Label1","text","向"),
					new eui.SetProperty("_Label2","text","砸鸡蛋")
				])
		];
	}
	var _proto = PopupGiftSkin.prototype;

	_proto._Rect1_i = function () {
		var t = new eui.Rect();
		t.bottom = 0;
		t.fillAlpha = 0.4;
		t.left = 0;
		t.right = 0;
		t.top = 0;
		return t;
	};
	_proto.gPopup_i = function () {
		var t = new eui.Group();
		this.gPopup = t;
		t.horizontalCenter = 0;
		t.verticalCenter = 0;
		t.elementsContent = [this._Image1_i(),this.btnClose_i(),this._Group1_i()];
		return t;
	};
	_proto._Image1_i = function () {
		var t = new eui.Image();
		t.fillMode = "scale";
		t.source = "paihangbang_tanchuangditu_png";
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto.btnClose_i = function () {
		var t = new eui.Button();
		this.btnClose = t;
		t.label = "";
		t.right = 10;
		t.top = 10;
		t.skinName = PopupGiftSkin$Skin36;
		return t;
	};
	_proto._Group1_i = function () {
		var t = new eui.Group();
		t.horizontalCenter = 0;
		t.y = 135;
		t.layout = this._HorizontalLayout1_i();
		t.elementsContent = [this._Label1_i(),this.textName_i(),this._Label2_i()];
		return t;
	};
	_proto._HorizontalLayout1_i = function () {
		var t = new eui.HorizontalLayout();
		t.gap = 0;
		t.verticalAlign = "middle";
		return t;
	};
	_proto._Label1_i = function () {
		var t = new eui.Label();
		this._Label1 = t;
		t.fontFamily = "Microsoft YaHei";
		t.size = 20;
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto.textName_i = function () {
		var t = new eui.Label();
		this.textName = t;
		t.fontFamily = "Microsoft YaHei";
		t.size = 20;
		t.text = "";
		t.textColor = 0x9f9373;
		t.x = 103;
		t.y = 5;
		return t;
	};
	_proto._Label2_i = function () {
		var t = new eui.Label();
		this._Label2 = t;
		t.fontFamily = "Microsoft YaHei";
		t.size = 20;
		t.x = 165;
		t.y = 11;
		return t;
	};
	_proto.gFlower_i = function () {
		var t = new eui.Group();
		this.gFlower = t;
		t.horizontalCenter = 0;
		t.y = 272;
		t.layout = this._HorizontalLayout2_i();
		t.elementsContent = [this._Button1_i(),this._Button2_i(),this._Button3_i()];
		return t;
	};
	_proto._HorizontalLayout2_i = function () {
		var t = new eui.HorizontalLayout();
		t.gap = 25;
		return t;
	};
	_proto._Button1_i = function () {
		var t = new eui.Button();
		t.height = 58;
		t.label = "";
		t.width = 201;
		t.x = 0;
		t.y = 0;
		t.skinName = PopupGiftSkin$Skin37;
		return t;
	};
	_proto._Button2_i = function () {
		var t = new eui.Button();
		t.height = 58;
		t.label = "";
		t.width = 201;
		t.x = 0;
		t.y = 0;
		t.skinName = PopupGiftSkin$Skin38;
		return t;
	};
	_proto._Button3_i = function () {
		var t = new eui.Button();
		t.height = 58;
		t.label = "";
		t.width = 201;
		t.x = 0;
		t.y = 0;
		t.skinName = PopupGiftSkin$Skin39;
		return t;
	};
	_proto.gEgg_i = function () {
		var t = new eui.Group();
		this.gEgg = t;
		t.horizontalCenter = 0;
		t.y = 272;
		t.layout = this._HorizontalLayout3_i();
		t.elementsContent = [this._Button4_i(),this._Button5_i(),this._Button6_i()];
		return t;
	};
	_proto._HorizontalLayout3_i = function () {
		var t = new eui.HorizontalLayout();
		t.gap = 25;
		return t;
	};
	_proto._Button4_i = function () {
		var t = new eui.Button();
		t.height = 58;
		t.label = "";
		t.width = 201;
		t.x = 0;
		t.y = 0;
		t.skinName = PopupGiftSkin$Skin40;
		return t;
	};
	_proto._Button5_i = function () {
		var t = new eui.Button();
		t.height = 58;
		t.label = "";
		t.width = 201;
		t.x = 0;
		t.y = 0;
		t.skinName = PopupGiftSkin$Skin41;
		return t;
	};
	_proto._Button6_i = function () {
		var t = new eui.Button();
		t.height = 58;
		t.label = "";
		t.width = 201;
		t.x = 0;
		t.y = 0;
		t.skinName = PopupGiftSkin$Skin42;
		return t;
	};
	return PopupGiftSkin;
})(eui.Skin);generateEUI.paths['resource/eui_skins/PopupHelp.exml'] = window.PopupHelpSkin = (function (_super) {
	__extends(PopupHelpSkin, _super);
	var PopupHelpSkin$Skin43 = 	(function (_super) {
		__extends(PopupHelpSkin$Skin43, _super);
		function PopupHelpSkin$Skin43() {
			_super.call(this);
			this.skinParts = ["labelDisplay"];
			
			this.elementsContent = [this._Image1_i(),this.labelDisplay_i()];
			this.states = [
				new eui.State ("up",
					[
					])
				,
				new eui.State ("down",
					[
						new eui.SetProperty("_Image1","source","tongyog_guanbi_icon02_png")
					])
				,
				new eui.State ("disabled",
					[
					])
				,
				new eui.State ("move",
					[
						new eui.SetProperty("_Image1","source","tongyog_guanbi_icon01_png")
					])
			];
		}
		var _proto = PopupHelpSkin$Skin43.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			this._Image1 = t;
			t.percentHeight = 100;
			t.source = "tongyog_guanbi_icon00_png";
			t.percentWidth = 100;
			return t;
		};
		_proto.labelDisplay_i = function () {
			var t = new eui.Label();
			this.labelDisplay = t;
			t.horizontalCenter = 0;
			t.verticalCenter = 0;
			return t;
		};
		return PopupHelpSkin$Skin43;
	})(eui.Skin);

	function PopupHelpSkin() {
		_super.call(this);
		this.skinParts = ["noviceTween","layMask","btnClose","gPopup"];
		
		this.noviceTween_i();
		this.elementsContent = [this.layMask_i(),this.gPopup_i()];
		
		eui.Binding.$bindProperties(this, ["gPopup"],[0],this._TweenItem1,"target");
		eui.Binding.$bindProperties(this, [0],[],this._Object1,"scaleX");
		eui.Binding.$bindProperties(this, [0],[],this._Object1,"scaleY");
		eui.Binding.$bindProperties(this, [1],[],this._Object2,"scaleX");
		eui.Binding.$bindProperties(this, [1],[],this._Object2,"scaleY");
	}
	var _proto = PopupHelpSkin.prototype;

	_proto.noviceTween_i = function () {
		var t = new egret.tween.TweenGroup();
		this.noviceTween = t;
		t.items = [this._TweenItem1_i()];
		return t;
	};
	_proto._TweenItem1_i = function () {
		var t = new egret.tween.TweenItem();
		this._TweenItem1 = t;
		t.paths = [this._Set1_i(),this._To1_i()];
		return t;
	};
	_proto._Set1_i = function () {
		var t = new egret.tween.Set();
		t.props = this._Object1_i();
		return t;
	};
	_proto._Object1_i = function () {
		var t = {};
		this._Object1 = t;
		return t;
	};
	_proto._To1_i = function () {
		var t = new egret.tween.To();
		t.duration = 500;
		t.props = this._Object2_i();
		return t;
	};
	_proto._Object2_i = function () {
		var t = {};
		this._Object2 = t;
		return t;
	};
	_proto.layMask_i = function () {
		var t = new eui.Rect();
		this.layMask = t;
		t.bottom = 0;
		t.fillAlpha = 0.8;
		t.left = 0;
		t.right = 0;
		t.top = 0;
		return t;
	};
	_proto.gPopup_i = function () {
		var t = new eui.Group();
		this.gPopup = t;
		t.height = 852;
		t.horizontalCenter = 0;
		t.verticalCenter = 0;
		t.width = 1920;
		t.elementsContent = [this._Image1_i(),this.btnClose_i()];
		return t;
	};
	_proto._Image1_i = function () {
		var t = new eui.Image();
		t.bottom = 0;
		t.left = 0;
		t.right = 0;
		t.scale9Grid = new egret.Rectangle(12,11,969,546);
		t.source = "gushixian_hudiexiaoying_png";
		t.top = 0;
		return t;
	};
	_proto.btnClose_i = function () {
		var t = new eui.Button();
		this.btnClose = t;
		t.label = "";
		t.right = 0;
		t.top = 140;
		t.skinName = PopupHelpSkin$Skin43;
		return t;
	};
	return PopupHelpSkin;
})(eui.Skin);generateEUI.paths['resource/eui_skins/popupNotice.exml'] = window.PopupNoticeSkin = (function (_super) {
	__extends(PopupNoticeSkin, _super);
	var PopupNoticeSkin$Skin44 = 	(function (_super) {
		__extends(PopupNoticeSkin$Skin44, _super);
		function PopupNoticeSkin$Skin44() {
			_super.call(this);
			this.skinParts = ["labelDisplay"];
			
			this.elementsContent = [this._Image1_i(),this.labelDisplay_i()];
			this.states = [
				new eui.State ("up",
					[
					])
				,
				new eui.State ("down",
					[
						new eui.SetProperty("_Image1","source","tongyog_guanbi_icon01_png")
					])
				,
				new eui.State ("disabled",
					[
					])
			];
		}
		var _proto = PopupNoticeSkin$Skin44.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			this._Image1 = t;
			t.percentHeight = 100;
			t.source = "tongyog_guanbi_icon00_png";
			t.percentWidth = 100;
			return t;
		};
		_proto.labelDisplay_i = function () {
			var t = new eui.Label();
			this.labelDisplay = t;
			t.horizontalCenter = 0;
			t.verticalCenter = 0;
			return t;
		};
		return PopupNoticeSkin$Skin44;
	})(eui.Skin);

	function PopupNoticeSkin() {
		_super.call(this);
		this.skinParts = ["layMask","btnClose","textTitle","textContent","scrollerContent","gContent","gPopup"];
		
		this.elementsContent = [this.layMask_i(),this.gPopup_i()];
	}
	var _proto = PopupNoticeSkin.prototype;

	_proto.layMask_i = function () {
		var t = new eui.Rect();
		this.layMask = t;
		t.bottom = 0;
		t.fillAlpha = 0.4;
		t.left = 0;
		t.right = 0;
		t.top = 0;
		return t;
	};
	_proto.gPopup_i = function () {
		var t = new eui.Group();
		this.gPopup = t;
		t.height = 584;
		t.horizontalCenter = 0;
		t.verticalCenter = 0;
		t.width = 1130;
		t.elementsContent = [this._Image1_i(),this.btnClose_i(),this._Group1_i(),this.gContent_i()];
		return t;
	};
	_proto._Image1_i = function () {
		var t = new eui.Image();
		t.fillMode = "scale";
		t.source = "gonggao_datanchuang_png";
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto.btnClose_i = function () {
		var t = new eui.Button();
		this.btnClose = t;
		t.label = "";
		t.right = 10;
		t.top = 10;
		t.skinName = PopupNoticeSkin$Skin44;
		return t;
	};
	_proto._Group1_i = function () {
		var t = new eui.Group();
		t.horizontalCenter = 0;
		t.y = 30;
		t.elementsContent = [this._Image2_i(),this._Image3_i(),this.textTitle_i()];
		return t;
	};
	_proto._Image2_i = function () {
		var t = new eui.Image();
		t.left = 0;
		t.source = "tongyong_tanchuangzhuangshi_png";
		t.verticalCenter = 0;
		return t;
	};
	_proto._Image3_i = function () {
		var t = new eui.Image();
		t.right = 0;
		t.source = "tongyong_tanchuangzhuangshi_png";
		t.verticalCenter = 0;
		return t;
	};
	_proto.textTitle_i = function () {
		var t = new eui.Label();
		this.textTitle = t;
		t.fontFamily = "fangzheng";
		t.left = 54;
		t.right = 54;
		t.size = 26;
		t.text = "";
		t.verticalCenter = 0;
		return t;
	};
	_proto.gContent_i = function () {
		var t = new eui.Group();
		this.gContent = t;
		t.bottom = 24;
		t.left = 114;
		t.right = 114;
		t.top = 90;
		t.elementsContent = [this.scrollerContent_i()];
		return t;
	};
	_proto.scrollerContent_i = function () {
		var t = new eui.Scroller();
		this.scrollerContent = t;
		t.bottom = 0;
		t.left = 0;
		t.right = 0;
		t.top = 0;
		t.viewport = this._Group2_i();
		return t;
	};
	_proto._Group2_i = function () {
		var t = new eui.Group();
		t.elementsContent = [this.textContent_i()];
		return t;
	};
	_proto.textContent_i = function () {
		var t = new eui.Label();
		this.textContent = t;
		t.fontFamily = "Microsoft YaHei";
		t.left = 0;
		t.lineSpacing = 10;
		t.right = 0;
		t.scaleX = 1;
		t.scaleY = 1;
		t.size = 24;
		t.text = "";
		t.textAlign = "left";
		return t;
	};
	return PopupNoticeSkin;
})(eui.Skin);generateEUI.paths['resource/eui_skins/PopupPicture.exml'] = window.PopupPictureSkin = (function (_super) {
	__extends(PopupPictureSkin, _super);
	var PopupPictureSkin$Skin45 = 	(function (_super) {
		__extends(PopupPictureSkin$Skin45, _super);
		function PopupPictureSkin$Skin45() {
			_super.call(this);
			this.skinParts = ["labelDisplay"];
			
			this.elementsContent = [this._Image1_i(),this.labelDisplay_i()];
			this.states = [
				new eui.State ("up",
					[
					])
				,
				new eui.State ("down",
					[
						new eui.SetProperty("_Image1","source","tongyog_guanbi_icon02_png")
					])
				,
				new eui.State ("disabled",
					[
					])
				,
				new eui.State ("move",
					[
						new eui.SetProperty("_Image1","source","tongyog_guanbi_icon01_png")
					])
			];
		}
		var _proto = PopupPictureSkin$Skin45.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			this._Image1 = t;
			t.percentHeight = 100;
			t.source = "tongyog_guanbi_icon00_png";
			t.percentWidth = 100;
			return t;
		};
		_proto.labelDisplay_i = function () {
			var t = new eui.Label();
			this.labelDisplay = t;
			t.horizontalCenter = 0;
			t.verticalCenter = 0;
			return t;
		};
		return PopupPictureSkin$Skin45;
	})(eui.Skin);

	var PopupPictureSkin$Skin46 = 	(function (_super) {
		__extends(PopupPictureSkin$Skin46, _super);
		function PopupPictureSkin$Skin46() {
			_super.call(this);
			this.skinParts = ["labelDisplay"];
			
			this.elementsContent = [this._Image1_i(),this.labelDisplay_i()];
			this.states = [
				new eui.State ("up",
					[
					])
				,
				new eui.State ("down",
					[
						new eui.SetProperty("_Image1","source","paihanbang_baocundaobendi_btn_02_png"),
						new eui.SetProperty("labelDisplay","textColor",0x000000)
					])
				,
				new eui.State ("disabled",
					[
					])
				,
				new eui.State ("move",
					[
						new eui.SetProperty("_Image1","source","paihanbang_baocundaobendi_btn_01_png"),
						new eui.SetProperty("labelDisplay","alpha",0.5)
					])
			];
		}
		var _proto = PopupPictureSkin$Skin46.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			this._Image1 = t;
			t.percentHeight = 100;
			t.source = "paihanbang_baocundaobendi_btn_00_png";
			t.percentWidth = 100;
			return t;
		};
		_proto.labelDisplay_i = function () {
			var t = new eui.Label();
			this.labelDisplay = t;
			t.alpha = 1;
			t.fontFamily = "fangzheng";
			t.size = 22;
			t.textColor = 0xffffff;
			t.verticalCenter = 0;
			t.x = 57;
			return t;
		};
		return PopupPictureSkin$Skin46;
	})(eui.Skin);

	function PopupPictureSkin() {
		_super.call(this);
		this.skinParts = ["layMask","imgShare","btnClose","btnSave","gPopup"];
		
		this.elementsContent = [this.layMask_i(),this.gPopup_i()];
	}
	var _proto = PopupPictureSkin.prototype;

	_proto.layMask_i = function () {
		var t = new eui.Rect();
		this.layMask = t;
		t.bottom = 0;
		t.fillAlpha = 0.4;
		t.left = 0;
		t.right = 0;
		t.top = 0;
		return t;
	};
	_proto.gPopup_i = function () {
		var t = new eui.Group();
		this.gPopup = t;
		t.height = 772;
		t.horizontalCenter = 0;
		t.verticalCenter = 0;
		t.width = 1358;
		t.elementsContent = [this._Image1_i(),this.imgShare_i(),this.btnClose_i(),this.btnSave_i()];
		return t;
	};
	_proto._Image1_i = function () {
		var t = new eui.Image();
		t.bottom = 0;
		t.left = 0;
		t.right = 0;
		t.scale9Grid = new egret.Rectangle(12,11,969,546);
		t.source = "dangan_chengjiu_fenxingatu01_png";
		t.top = 0;
		return t;
	};
	_proto.imgShare_i = function () {
		var t = new eui.Image();
		this.imgShare = t;
		t.bottom = 11;
		t.left = 11;
		t.right = 11;
		t.source = "";
		t.top = 11;
		return t;
	};
	_proto.btnClose_i = function () {
		var t = new eui.Button();
		this.btnClose = t;
		t.label = "";
		t.right = 10;
		t.top = 10;
		t.skinName = PopupPictureSkin$Skin45;
		return t;
	};
	_proto.btnSave_i = function () {
		var t = new eui.Button();
		this.btnSave = t;
		t.bottom = 45;
		t.label = "保存到本地";
		t.right = 45;
		t.skinName = PopupPictureSkin$Skin46;
		return t;
	};
	return PopupPictureSkin;
})(eui.Skin);generateEUI.paths['resource/eui_skins/popupRevive.exml'] = window.PopupReviveSkin = (function (_super) {
	__extends(PopupReviveSkin, _super);
	var PopupReviveSkin$Skin47 = 	(function (_super) {
		__extends(PopupReviveSkin$Skin47, _super);
		function PopupReviveSkin$Skin47() {
			_super.call(this);
			this.skinParts = ["labelDisplay"];
			
			this.elementsContent = [this._Image1_i(),this.labelDisplay_i()];
			this.states = [
				new eui.State ("up",
					[
					])
				,
				new eui.State ("down",
					[
						new eui.SetProperty("_Image1","source","tongyog_guanbi_icon01_png")
					])
				,
				new eui.State ("disabled",
					[
					])
			];
		}
		var _proto = PopupReviveSkin$Skin47.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			this._Image1 = t;
			t.percentHeight = 100;
			t.source = "tongyog_guanbi_icon00_png";
			t.percentWidth = 100;
			return t;
		};
		_proto.labelDisplay_i = function () {
			var t = new eui.Label();
			this.labelDisplay = t;
			t.horizontalCenter = 0;
			t.verticalCenter = 0;
			return t;
		};
		return PopupReviveSkin$Skin47;
	})(eui.Skin);

	var PopupReviveSkin$Skin48 = 	(function (_super) {
		__extends(PopupReviveSkin$Skin48, _super);
		function PopupReviveSkin$Skin48() {
			_super.call(this);
			this.skinParts = ["labelDisplay"];
			
			this.elementsContent = [this._Image1_i(),this.labelDisplay_i()];
			this.states = [
				new eui.State ("up",
					[
					])
				,
				new eui.State ("down",
					[
						new eui.SetProperty("_Image1","source","tongyong_quxiao_btn02_png")
					])
				,
				new eui.State ("disabled",
					[
					])
				,
				new eui.State ("move",
					[
						new eui.SetProperty("_Image1","source","tongyong_quxiao_btn01_png")
					])
			];
		}
		var _proto = PopupReviveSkin$Skin48.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			this._Image1 = t;
			t.percentHeight = 100;
			t.source = "tongyong_quxiao_btn00_png";
			t.percentWidth = 100;
			return t;
		};
		_proto.labelDisplay_i = function () {
			var t = new eui.Label();
			this.labelDisplay = t;
			t.fontFamily = "Microsoft Yahei";
			t.horizontalCenter = 0;
			t.size = 28;
			t.textColor = 0x000000;
			t.verticalCenter = 0;
			return t;
		};
		return PopupReviveSkin$Skin48;
	})(eui.Skin);

	var PopupReviveSkin$Skin49 = 	(function (_super) {
		__extends(PopupReviveSkin$Skin49, _super);
		function PopupReviveSkin$Skin49() {
			_super.call(this);
			this.skinParts = ["labelDisplay"];
			
			this.elementsContent = [this._Image1_i(),this._Image2_i(),this.labelDisplay_i()];
			this.states = [
				new eui.State ("up",
					[
					])
				,
				new eui.State ("down",
					[
						new eui.SetProperty("_Image1","source","tongyong_queding_btn02_png")
					])
				,
				new eui.State ("disabled",
					[
						new eui.SetProperty("_Image1","source","tongyong_jinbibuzu_00_png"),
						new eui.SetProperty("_Image2","source","tongyong_jinbibuzu_icon_png")
					])
				,
				new eui.State ("move",
					[
						new eui.SetProperty("_Image1","source","tongyong_queding_btn01_png")
					])
			];
		}
		var _proto = PopupReviveSkin$Skin49.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			this._Image1 = t;
			t.percentHeight = 100;
			t.source = "tongyong_queding_btn00_png";
			t.percentWidth = 100;
			return t;
		};
		_proto._Image2_i = function () {
			var t = new eui.Image();
			this._Image2 = t;
			t.source = "tongyong_jin_icon_png";
			t.touchEnabled = false;
			t.x = 98;
			t.y = 2;
			return t;
		};
		_proto.labelDisplay_i = function () {
			var t = new eui.Label();
			this.labelDisplay = t;
			t.fontFamily = "Microsoft Yahei";
			t.size = 28;
			t.textColor = 0x000000;
			t.verticalCenter = 0;
			t.x = 47;
			return t;
		};
		return PopupReviveSkin$Skin49;
	})(eui.Skin);

	var PopupReviveSkin$Skin50 = 	(function (_super) {
		__extends(PopupReviveSkin$Skin50, _super);
		function PopupReviveSkin$Skin50() {
			_super.call(this);
			this.skinParts = ["labelDisplay"];
			
			this.elementsContent = [this._Image1_i(),this.labelDisplay_i()];
			this.states = [
				new eui.State ("up",
					[
					])
				,
				new eui.State ("down",
					[
						new eui.SetProperty("_Image1","source","tongyong_queding_btn02_png")
					])
				,
				new eui.State ("disabled",
					[
						new eui.SetProperty("_Image1","source","tongyong_jinbibuzu_00_png")
					])
				,
				new eui.State ("move",
					[
						new eui.SetProperty("_Image1","source","tongyong_queding_btn01_png")
					])
			];
		}
		var _proto = PopupReviveSkin$Skin50.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			this._Image1 = t;
			t.percentHeight = 100;
			t.source = "tongyong_queding_btn00_png";
			t.percentWidth = 100;
			return t;
		};
		_proto.labelDisplay_i = function () {
			var t = new eui.Label();
			this.labelDisplay = t;
			t.fontFamily = "Microsoft Yahei";
			t.horizontalCenter = 0;
			t.size = 28;
			t.textColor = 0x000000;
			t.verticalCenter = 0;
			return t;
		};
		return PopupReviveSkin$Skin50;
	})(eui.Skin);

	function PopupReviveSkin() {
		_super.call(this);
		this.skinParts = ["freeTween","layMask","btnClose","textTitle","textPrice","gPrice","btnCancel","btnRevive","textBtnPrice","image3","image2","btnFree","image1","gFree","gPopup"];
		
		this.freeTween_i();
		this.elementsContent = [this.layMask_i(),this.gPopup_i()];
		
		eui.Binding.$bindProperties(this, ["image2"],[0],this._TweenItem1,"target");
		eui.Binding.$bindProperties(this, [0],[],this._Object2,"alpha");
		eui.Binding.$bindProperties(this, [0.7],[],this._Object3,"alpha");
		eui.Binding.$bindProperties(this, [1],[],this._Object4,"alpha");
		eui.Binding.$bindProperties(this, [1.15],[],this._Object4,"scaleX");
		eui.Binding.$bindProperties(this, [1.55],[],this._Object4,"scaleY");
		eui.Binding.$bindProperties(this, [0],[],this._Object5,"alpha");
		eui.Binding.$bindProperties(this, [1.28],[],this._Object5,"scaleX");
		eui.Binding.$bindProperties(this, [2],[],this._Object5,"scaleY");
		eui.Binding.$bindProperties(this, ["image3"],[0],this._TweenItem2,"target");
		eui.Binding.$bindProperties(this, [0],[],this._Object7,"alpha");
		eui.Binding.$bindProperties(this, [0.7],[],this._Object8,"alpha");
		eui.Binding.$bindProperties(this, [1],[],this._Object9,"alpha");
		eui.Binding.$bindProperties(this, [1.15],[],this._Object9,"scaleX");
		eui.Binding.$bindProperties(this, [1.55],[],this._Object9,"scaleY");
		eui.Binding.$bindProperties(this, [0],[],this._Object10,"alpha");
		eui.Binding.$bindProperties(this, [1.28],[],this._Object10,"scaleX");
		eui.Binding.$bindProperties(this, [2],[],this._Object10,"scaleY");
		eui.Binding.$bindProperties(this, ["image1"],[0],this._TweenItem3,"target");
		eui.Binding.$bindProperties(this, [0],[],this._Object12,"alpha");
		eui.Binding.$bindProperties(this, [1],[],this._Object13,"alpha");
		eui.Binding.$bindProperties(this, [0],[],this._Object14,"alpha");
		eui.Binding.$bindProperties(this, [0],[],this._Object15,"alpha");
		eui.Binding.$bindProperties(this, [1],[],this._Object16,"alpha");
		eui.Binding.$bindProperties(this, [0],[],this._Object17,"alpha");
	}
	var _proto = PopupReviveSkin.prototype;

	_proto.freeTween_i = function () {
		var t = new egret.tween.TweenGroup();
		this.freeTween = t;
		t.items = [this._TweenItem1_i(),this._TweenItem2_i(),this._TweenItem3_i()];
		return t;
	};
	_proto._TweenItem1_i = function () {
		var t = new egret.tween.TweenItem();
		this._TweenItem1 = t;
		t.props = this._Object1_i();
		t.paths = [this._Set1_i(),this._To1_i(),this._To2_i(),this._To3_i()];
		return t;
	};
	_proto._Object1_i = function () {
		var t = {};
		t.loop = "true";
		return t;
	};
	_proto._Set1_i = function () {
		var t = new egret.tween.Set();
		t.props = this._Object2_i();
		return t;
	};
	_proto._Object2_i = function () {
		var t = {};
		this._Object2 = t;
		return t;
	};
	_proto._To1_i = function () {
		var t = new egret.tween.To();
		t.duration = 500;
		t.props = this._Object3_i();
		return t;
	};
	_proto._Object3_i = function () {
		var t = {};
		this._Object3 = t;
		return t;
	};
	_proto._To2_i = function () {
		var t = new egret.tween.To();
		t.duration = 1050;
		t.props = this._Object4_i();
		return t;
	};
	_proto._Object4_i = function () {
		var t = {};
		this._Object4 = t;
		return t;
	};
	_proto._To3_i = function () {
		var t = new egret.tween.To();
		t.duration = 2450;
		t.props = this._Object5_i();
		return t;
	};
	_proto._Object5_i = function () {
		var t = {};
		this._Object5 = t;
		return t;
	};
	_proto._TweenItem2_i = function () {
		var t = new egret.tween.TweenItem();
		this._TweenItem2 = t;
		t.props = this._Object6_i();
		t.paths = [this._Wait1_i(),this._Set2_i(),this._To4_i(),this._To5_i(),this._To6_i()];
		return t;
	};
	_proto._Object6_i = function () {
		var t = {};
		t.loop = "true";
		return t;
	};
	_proto._Wait1_i = function () {
		var t = new egret.tween.Wait();
		t.duration = 2000;
		return t;
	};
	_proto._Set2_i = function () {
		var t = new egret.tween.Set();
		t.props = this._Object7_i();
		return t;
	};
	_proto._Object7_i = function () {
		var t = {};
		this._Object7 = t;
		return t;
	};
	_proto._To4_i = function () {
		var t = new egret.tween.To();
		t.duration = 500;
		t.props = this._Object8_i();
		return t;
	};
	_proto._Object8_i = function () {
		var t = {};
		this._Object8 = t;
		return t;
	};
	_proto._To5_i = function () {
		var t = new egret.tween.To();
		t.duration = 1050;
		t.props = this._Object9_i();
		return t;
	};
	_proto._Object9_i = function () {
		var t = {};
		this._Object9 = t;
		return t;
	};
	_proto._To6_i = function () {
		var t = new egret.tween.To();
		t.duration = 2150;
		t.props = this._Object10_i();
		return t;
	};
	_proto._Object10_i = function () {
		var t = {};
		this._Object10 = t;
		return t;
	};
	_proto._TweenItem3_i = function () {
		var t = new egret.tween.TweenItem();
		this._TweenItem3 = t;
		t.props = this._Object11_i();
		t.paths = [this._Set3_i(),this._To7_i(),this._To8_i(),this._To9_i(),this._To10_i(),this._To11_i()];
		return t;
	};
	_proto._Object11_i = function () {
		var t = {};
		t.loop = "true";
		return t;
	};
	_proto._Set3_i = function () {
		var t = new egret.tween.Set();
		t.props = this._Object12_i();
		return t;
	};
	_proto._Object12_i = function () {
		var t = {};
		this._Object12 = t;
		return t;
	};
	_proto._To7_i = function () {
		var t = new egret.tween.To();
		t.duration = 500;
		t.props = this._Object13_i();
		return t;
	};
	_proto._Object13_i = function () {
		var t = {};
		this._Object13 = t;
		return t;
	};
	_proto._To8_i = function () {
		var t = new egret.tween.To();
		t.duration = 800;
		t.props = this._Object14_i();
		return t;
	};
	_proto._Object14_i = function () {
		var t = {};
		this._Object14 = t;
		return t;
	};
	_proto._To9_i = function () {
		var t = new egret.tween.To();
		t.duration = 700;
		t.props = this._Object15_i();
		return t;
	};
	_proto._Object15_i = function () {
		var t = {};
		this._Object15 = t;
		return t;
	};
	_proto._To10_i = function () {
		var t = new egret.tween.To();
		t.duration = 500;
		t.props = this._Object16_i();
		return t;
	};
	_proto._Object16_i = function () {
		var t = {};
		this._Object16 = t;
		return t;
	};
	_proto._To11_i = function () {
		var t = new egret.tween.To();
		t.duration = 800;
		t.props = this._Object17_i();
		return t;
	};
	_proto._Object17_i = function () {
		var t = {};
		this._Object17 = t;
		return t;
	};
	_proto.layMask_i = function () {
		var t = new eui.Rect();
		this.layMask = t;
		t.bottom = 0;
		t.fillAlpha = 0.4;
		t.left = 0;
		t.right = 0;
		t.top = 0;
		return t;
	};
	_proto.gPopup_i = function () {
		var t = new eui.Group();
		this.gPopup = t;
		t.horizontalCenter = 0;
		t.verticalCenter = 0;
		t.elementsContent = [this._Image1_i(),this.btnClose_i(),this._Group1_i(),this._Rect1_i(),this.gPrice_i(),this._Group3_i()];
		return t;
	};
	_proto._Image1_i = function () {
		var t = new eui.Image();
		t.fillMode = "scale";
		t.source = "tongyong_xiaotanchuang_png";
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto.btnClose_i = function () {
		var t = new eui.Button();
		this.btnClose = t;
		t.label = "";
		t.right = 10;
		t.top = 10;
		t.skinName = PopupReviveSkin$Skin47;
		return t;
	};
	_proto._Group1_i = function () {
		var t = new eui.Group();
		t.horizontalCenter = 0;
		t.y = 39;
		t.elementsContent = [this._Image2_i(),this._Image3_i(),this.textTitle_i()];
		return t;
	};
	_proto._Image2_i = function () {
		var t = new eui.Image();
		t.left = 0;
		t.source = "tongyong_tanchuangzhuangshi_png";
		t.verticalCenter = 0;
		return t;
	};
	_proto._Image3_i = function () {
		var t = new eui.Image();
		t.right = 0;
		t.source = "tongyong_tanchuangzhuangshi_png";
		t.verticalCenter = 0;
		return t;
	};
	_proto.textTitle_i = function () {
		var t = new eui.Label();
		this.textTitle = t;
		t.fontFamily = "fangzheng";
		t.left = 54;
		t.right = 54;
		t.size = 26;
		t.text = "你...需要帮助吗";
		t.verticalCenter = 0;
		return t;
	};
	_proto._Rect1_i = function () {
		var t = new eui.Rect();
		t.fillAlpha = 0.2;
		t.fillColor = 0xf0e8c4;
		t.height = 1;
		t.horizontalCenter = 0;
		t.width = 224;
		t.y = 80;
		return t;
	};
	_proto.gPrice_i = function () {
		var t = new eui.Group();
		this.gPrice = t;
		t.x = 78;
		t.y = 120;
		t.elementsContent = [this._Image4_i(),this._Label1_i(),this.textPrice_i()];
		return t;
	};
	_proto._Image4_i = function () {
		var t = new eui.Image();
		t.source = "tongyong_jin_icon_png";
		t.x = 380;
		t.y = 0;
		return t;
	};
	_proto._Label1_i = function () {
		var t = new eui.Label();
		t.fontFamily = "Microsoft YaHei";
		t.lineSpacing = 7;
		t.size = 24;
		t.text = "你在当前剧情已潜伏失败，是否花费\n系统帮你度过难关";
		t.x = 0;
		t.y = 16;
		return t;
	};
	_proto.textPrice_i = function () {
		var t = new eui.Label();
		this.textPrice = t;
		t.fontFamily = "Microsoft YaHei";
		t.size = 24;
		t.text = "";
		t.x = 435;
		t.y = 16;
		return t;
	};
	_proto._Group3_i = function () {
		var t = new eui.Group();
		t.horizontalCenter = 0;
		t.y = 270;
		t.elementsContent = [this.btnCancel_i(),this._Group2_i(),this.gFree_i()];
		return t;
	};
	_proto.btnCancel_i = function () {
		var t = new eui.Button();
		this.btnCancel = t;
		t.height = 64;
		t.label = "取消";
		t.left = 0;
		t.width = 246;
		t.y = 0;
		t.skinName = PopupReviveSkin$Skin48;
		return t;
	};
	_proto._Group2_i = function () {
		var t = new eui.Group();
		t.height = 64;
		t.width = 246;
		t.x = 286;
		t.y = 0;
		t.elementsContent = [this.btnRevive_i(),this.textBtnPrice_i()];
		return t;
	};
	_proto.btnRevive_i = function () {
		var t = new eui.Button();
		this.btnRevive = t;
		t.height = 64;
		t.label = "帮助";
		t.width = 246;
		t.x = 0;
		t.y = 0;
		t.skinName = PopupReviveSkin$Skin49;
		return t;
	};
	_proto.textBtnPrice_i = function () {
		var t = new eui.Label();
		this.textBtnPrice = t;
		t.fontFamily = "Microsoft Yahei";
		t.size = 28;
		t.text = "";
		t.textColor = 0x000000;
		t.touchEnabled = false;
		t.verticalCenter = 0;
		t.x = 155;
		return t;
	};
	_proto.gFree_i = function () {
		var t = new eui.Group();
		this.gFree = t;
		t.height = 64;
		t.visible = false;
		t.width = 246;
		t.x = 286;
		t.y = 0;
		t.elementsContent = [this.image3_i(),this.image2_i(),this.btnFree_i(),this.image1_i()];
		return t;
	};
	_proto.image3_i = function () {
		var t = new eui.Image();
		this.image3 = t;
		t.alpha = 0;
		t.height = 64;
		t.horizontalCenter = 0;
		t.source = "tongyong_queding_effect1_png";
		t.verticalCenter = 0;
		t.width = 246;
		return t;
	};
	_proto.image2_i = function () {
		var t = new eui.Image();
		this.image2 = t;
		t.alpha = 0;
		t.height = 64;
		t.horizontalCenter = 0;
		t.source = "tongyong_queding_effect1_png";
		t.verticalCenter = 0;
		t.width = 246;
		return t;
	};
	_proto.btnFree_i = function () {
		var t = new eui.Button();
		this.btnFree = t;
		t.height = 64;
		t.label = "帮助【新手赠送】";
		t.width = 246;
		t.x = 0;
		t.y = 0;
		t.skinName = PopupReviveSkin$Skin50;
		return t;
	};
	_proto.image1_i = function () {
		var t = new eui.Image();
		this.image1 = t;
		t.alpha = 0;
		t.height = 64;
		t.horizontalCenter = 0;
		t.source = "waifaguang1_png";
		t.touchEnabled = false;
		t.verticalCenter = -1;
		t.width = 246;
		return t;
	};
	return PopupReviveSkin;
})(eui.Skin);generateEUI.paths['resource/eui_skins/PopupShare.exml'] = window.PopupShareSkin = (function (_super) {
	__extends(PopupShareSkin, _super);
	var PopupShareSkin$Skin51 = 	(function (_super) {
		__extends(PopupShareSkin$Skin51, _super);
		function PopupShareSkin$Skin51() {
			_super.call(this);
			this.skinParts = ["labelDisplay"];
			
			this.elementsContent = [this._Image1_i(),this.labelDisplay_i()];
			this.states = [
				new eui.State ("up",
					[
					])
				,
				new eui.State ("down",
					[
						new eui.SetProperty("_Image1","source","tongyog_guanbi_icon01_png")
					])
				,
				new eui.State ("disabled",
					[
					])
			];
		}
		var _proto = PopupShareSkin$Skin51.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			this._Image1 = t;
			t.percentHeight = 100;
			t.source = "tongyog_guanbi_icon00_png";
			t.percentWidth = 100;
			return t;
		};
		_proto.labelDisplay_i = function () {
			var t = new eui.Label();
			this.labelDisplay = t;
			t.horizontalCenter = 0;
			t.verticalCenter = 0;
			return t;
		};
		return PopupShareSkin$Skin51;
	})(eui.Skin);

	function PopupShareSkin() {
		_super.call(this);
		this.skinParts = ["layMask","imgShare","btnClose","gPopup"];
		
		this.elementsContent = [this.layMask_i(),this.gPopup_i()];
	}
	var _proto = PopupShareSkin.prototype;

	_proto.layMask_i = function () {
		var t = new eui.Rect();
		this.layMask = t;
		t.bottom = 0;
		t.fillAlpha = 0.4;
		t.left = 0;
		t.right = 0;
		t.top = 0;
		return t;
	};
	_proto.gPopup_i = function () {
		var t = new eui.Group();
		this.gPopup = t;
		t.height = 772;
		t.horizontalCenter = 0;
		t.verticalCenter = 0;
		t.width = 1358;
		t.elementsContent = [this._Image1_i(),this.imgShare_i(),this.btnClose_i()];
		return t;
	};
	_proto._Image1_i = function () {
		var t = new eui.Image();
		t.bottom = 0;
		t.left = 0;
		t.right = 0;
		t.scale9Grid = new egret.Rectangle(12,11,969,546);
		t.source = "dangan_chengjiu_fenxingatu01_png";
		t.top = 0;
		return t;
	};
	_proto.imgShare_i = function () {
		var t = new eui.Image();
		this.imgShare = t;
		t.bottom = 11;
		t.left = 11;
		t.right = 13;
		t.source = "";
		t.top = 11;
		return t;
	};
	_proto.btnClose_i = function () {
		var t = new eui.Button();
		this.btnClose = t;
		t.label = "";
		t.right = 10;
		t.top = 10;
		t.skinName = PopupShareSkin$Skin51;
		return t;
	};
	return PopupShareSkin;
})(eui.Skin);generateEUI.paths['resource/eui_skins/popupUnlock.exml'] = window.PopupUnlockSkin = (function (_super) {
	__extends(PopupUnlockSkin, _super);
	var PopupUnlockSkin$Skin52 = 	(function (_super) {
		__extends(PopupUnlockSkin$Skin52, _super);
		function PopupUnlockSkin$Skin52() {
			_super.call(this);
			this.skinParts = ["labelDisplay"];
			
			this.elementsContent = [this._Image1_i(),this.labelDisplay_i()];
			this.states = [
				new eui.State ("up",
					[
					])
				,
				new eui.State ("down",
					[
						new eui.SetProperty("_Image1","source","tongyog_guanbi_icon01_png")
					])
				,
				new eui.State ("disabled",
					[
					])
			];
		}
		var _proto = PopupUnlockSkin$Skin52.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			this._Image1 = t;
			t.percentHeight = 100;
			t.source = "tongyog_guanbi_icon00_png";
			t.percentWidth = 100;
			return t;
		};
		_proto.labelDisplay_i = function () {
			var t = new eui.Label();
			this.labelDisplay = t;
			t.horizontalCenter = 0;
			t.verticalCenter = 0;
			return t;
		};
		return PopupUnlockSkin$Skin52;
	})(eui.Skin);

	var PopupUnlockSkin$Skin53 = 	(function (_super) {
		__extends(PopupUnlockSkin$Skin53, _super);
		function PopupUnlockSkin$Skin53() {
			_super.call(this);
			this.skinParts = ["labelDisplay"];
			
			this.elementsContent = [this._Image1_i(),this.labelDisplay_i()];
			this.states = [
				new eui.State ("up",
					[
					])
				,
				new eui.State ("down",
					[
						new eui.SetProperty("_Image1","source","tongyong_quxiao_btn01_png")
					])
				,
				new eui.State ("disabled",
					[
					])
			];
		}
		var _proto = PopupUnlockSkin$Skin53.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			this._Image1 = t;
			t.percentHeight = 100;
			t.source = "tongyong_quxiao_btn00_png";
			t.percentWidth = 100;
			return t;
		};
		_proto.labelDisplay_i = function () {
			var t = new eui.Label();
			this.labelDisplay = t;
			t.fontFamily = "Microsoft Yahei";
			t.horizontalCenter = 0;
			t.size = 28;
			t.textColor = 0x000000;
			t.verticalCenter = 0;
			return t;
		};
		return PopupUnlockSkin$Skin53;
	})(eui.Skin);

	var PopupUnlockSkin$Skin54 = 	(function (_super) {
		__extends(PopupUnlockSkin$Skin54, _super);
		function PopupUnlockSkin$Skin54() {
			_super.call(this);
			this.skinParts = ["labelDisplay"];
			
			this.elementsContent = [this._Image1_i(),this._Image2_i(),this.labelDisplay_i()];
			this.states = [
				new eui.State ("up",
					[
					])
				,
				new eui.State ("down",
					[
						new eui.SetProperty("_Image1","source","tongyong_queding_btn01_png")
					])
				,
				new eui.State ("disabled",
					[
						new eui.SetProperty("_Image1","source","tongyong_queding_btn01_png"),
						new eui.SetProperty("_Image2","source","tongyong_jinbibuzu_icon_png")
					])
			];
		}
		var _proto = PopupUnlockSkin$Skin54.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			this._Image1 = t;
			t.percentHeight = 100;
			t.source = "tongyong_queding_btn00_png";
			t.percentWidth = 100;
			return t;
		};
		_proto._Image2_i = function () {
			var t = new eui.Image();
			this._Image2 = t;
			t.source = "tongyong_jin_icon_png";
			t.touchEnabled = false;
			t.x = 40;
			t.y = 1;
			return t;
		};
		_proto.labelDisplay_i = function () {
			var t = new eui.Label();
			this.labelDisplay = t;
			t.fontFamily = "Microsoft Yahei";
			t.size = 28;
			t.textColor = 0x000000;
			t.verticalCenter = 0;
			t.x = 95;
			return t;
		};
		return PopupUnlockSkin$Skin54;
	})(eui.Skin);

	var PopupUnlockSkin$Skin55 = 	(function (_super) {
		__extends(PopupUnlockSkin$Skin55, _super);
		function PopupUnlockSkin$Skin55() {
			_super.call(this);
			this.skinParts = ["labelDisplay"];
			
			this.elementsContent = [this._Image1_i(),this.labelDisplay_i()];
			this.states = [
				new eui.State ("up",
					[
					])
				,
				new eui.State ("down",
					[
						new eui.SetProperty("_Image1","source","tongyong_queding_btn01_png")
					])
				,
				new eui.State ("disabled",
					[
						new eui.SetProperty("_Image1","source","tongyong_queding_btn01_png")
					])
			];
		}
		var _proto = PopupUnlockSkin$Skin55.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			this._Image1 = t;
			t.percentHeight = 100;
			t.source = "tongyong_queding_btn00_png";
			t.percentWidth = 100;
			return t;
		};
		_proto.labelDisplay_i = function () {
			var t = new eui.Label();
			this.labelDisplay = t;
			t.fontFamily = "Microsoft Yahei";
			t.horizontalCenter = 0;
			t.size = 28;
			t.textColor = 0x000000;
			t.verticalCenter = 0;
			return t;
		};
		return PopupUnlockSkin$Skin55;
	})(eui.Skin);

	function PopupUnlockSkin() {
		_super.call(this);
		this.skinParts = ["freeTween","layMask","btnClose","textTitle","textUnlock","gUnlock","textPrice","textTime","gDash","btnCancel","btnDash","image3","image2","image1","btnFree","gPopup"];
		
		this.freeTween_i();
		this.elementsContent = [this.layMask_i(),this.gPopup_i()];
		
		eui.Binding.$bindProperties(this, ["image2"],[0],this._TweenItem1,"target");
		eui.Binding.$bindProperties(this, [0],[],this._Object2,"alpha");
		eui.Binding.$bindProperties(this, [0.7],[],this._Object3,"alpha");
		eui.Binding.$bindProperties(this, [1],[],this._Object4,"alpha");
		eui.Binding.$bindProperties(this, [1.15],[],this._Object4,"scaleX");
		eui.Binding.$bindProperties(this, [1.55],[],this._Object4,"scaleY");
		eui.Binding.$bindProperties(this, [0],[],this._Object5,"alpha");
		eui.Binding.$bindProperties(this, [1.28],[],this._Object5,"scaleX");
		eui.Binding.$bindProperties(this, [2],[],this._Object5,"scaleY");
		eui.Binding.$bindProperties(this, ["image3"],[0],this._TweenItem2,"target");
		eui.Binding.$bindProperties(this, [0],[],this._Object7,"alpha");
		eui.Binding.$bindProperties(this, [0.7],[],this._Object8,"alpha");
		eui.Binding.$bindProperties(this, [1],[],this._Object9,"alpha");
		eui.Binding.$bindProperties(this, [1.15],[],this._Object9,"scaleX");
		eui.Binding.$bindProperties(this, [1.55],[],this._Object9,"scaleY");
		eui.Binding.$bindProperties(this, [0],[],this._Object10,"alpha");
		eui.Binding.$bindProperties(this, [1.28],[],this._Object10,"scaleX");
		eui.Binding.$bindProperties(this, [2],[],this._Object10,"scaleY");
		eui.Binding.$bindProperties(this, ["image1"],[0],this._TweenItem3,"target");
		eui.Binding.$bindProperties(this, [0],[],this._Object12,"alpha");
		eui.Binding.$bindProperties(this, [1],[],this._Object13,"alpha");
		eui.Binding.$bindProperties(this, [0],[],this._Object14,"alpha");
		eui.Binding.$bindProperties(this, [0],[],this._Object15,"alpha");
		eui.Binding.$bindProperties(this, [1],[],this._Object16,"alpha");
		eui.Binding.$bindProperties(this, [0],[],this._Object17,"alpha");
	}
	var _proto = PopupUnlockSkin.prototype;

	_proto.freeTween_i = function () {
		var t = new egret.tween.TweenGroup();
		this.freeTween = t;
		t.items = [this._TweenItem1_i(),this._TweenItem2_i(),this._TweenItem3_i()];
		return t;
	};
	_proto._TweenItem1_i = function () {
		var t = new egret.tween.TweenItem();
		this._TweenItem1 = t;
		t.props = this._Object1_i();
		t.paths = [this._Set1_i(),this._To1_i(),this._To2_i(),this._To3_i()];
		return t;
	};
	_proto._Object1_i = function () {
		var t = {};
		t.loop = "true";
		return t;
	};
	_proto._Set1_i = function () {
		var t = new egret.tween.Set();
		t.props = this._Object2_i();
		return t;
	};
	_proto._Object2_i = function () {
		var t = {};
		this._Object2 = t;
		return t;
	};
	_proto._To1_i = function () {
		var t = new egret.tween.To();
		t.duration = 500;
		t.props = this._Object3_i();
		return t;
	};
	_proto._Object3_i = function () {
		var t = {};
		this._Object3 = t;
		return t;
	};
	_proto._To2_i = function () {
		var t = new egret.tween.To();
		t.duration = 1050;
		t.props = this._Object4_i();
		return t;
	};
	_proto._Object4_i = function () {
		var t = {};
		this._Object4 = t;
		return t;
	};
	_proto._To3_i = function () {
		var t = new egret.tween.To();
		t.duration = 2450;
		t.props = this._Object5_i();
		return t;
	};
	_proto._Object5_i = function () {
		var t = {};
		this._Object5 = t;
		return t;
	};
	_proto._TweenItem2_i = function () {
		var t = new egret.tween.TweenItem();
		this._TweenItem2 = t;
		t.props = this._Object6_i();
		t.paths = [this._Wait1_i(),this._Set2_i(),this._To4_i(),this._To5_i(),this._To6_i()];
		return t;
	};
	_proto._Object6_i = function () {
		var t = {};
		t.loop = "true";
		return t;
	};
	_proto._Wait1_i = function () {
		var t = new egret.tween.Wait();
		t.duration = 2000;
		return t;
	};
	_proto._Set2_i = function () {
		var t = new egret.tween.Set();
		t.props = this._Object7_i();
		return t;
	};
	_proto._Object7_i = function () {
		var t = {};
		this._Object7 = t;
		return t;
	};
	_proto._To4_i = function () {
		var t = new egret.tween.To();
		t.duration = 500;
		t.props = this._Object8_i();
		return t;
	};
	_proto._Object8_i = function () {
		var t = {};
		this._Object8 = t;
		return t;
	};
	_proto._To5_i = function () {
		var t = new egret.tween.To();
		t.duration = 1050;
		t.props = this._Object9_i();
		return t;
	};
	_proto._Object9_i = function () {
		var t = {};
		this._Object9 = t;
		return t;
	};
	_proto._To6_i = function () {
		var t = new egret.tween.To();
		t.duration = 2150;
		t.props = this._Object10_i();
		return t;
	};
	_proto._Object10_i = function () {
		var t = {};
		this._Object10 = t;
		return t;
	};
	_proto._TweenItem3_i = function () {
		var t = new egret.tween.TweenItem();
		this._TweenItem3 = t;
		t.props = this._Object11_i();
		t.paths = [this._Set3_i(),this._To7_i(),this._To8_i(),this._To9_i(),this._To10_i(),this._To11_i()];
		return t;
	};
	_proto._Object11_i = function () {
		var t = {};
		t.loop = "true";
		return t;
	};
	_proto._Set3_i = function () {
		var t = new egret.tween.Set();
		t.props = this._Object12_i();
		return t;
	};
	_proto._Object12_i = function () {
		var t = {};
		this._Object12 = t;
		return t;
	};
	_proto._To7_i = function () {
		var t = new egret.tween.To();
		t.duration = 500;
		t.props = this._Object13_i();
		return t;
	};
	_proto._Object13_i = function () {
		var t = {};
		this._Object13 = t;
		return t;
	};
	_proto._To8_i = function () {
		var t = new egret.tween.To();
		t.duration = 800;
		t.props = this._Object14_i();
		return t;
	};
	_proto._Object14_i = function () {
		var t = {};
		this._Object14 = t;
		return t;
	};
	_proto._To9_i = function () {
		var t = new egret.tween.To();
		t.duration = 700;
		t.props = this._Object15_i();
		return t;
	};
	_proto._Object15_i = function () {
		var t = {};
		this._Object15 = t;
		return t;
	};
	_proto._To10_i = function () {
		var t = new egret.tween.To();
		t.duration = 500;
		t.props = this._Object16_i();
		return t;
	};
	_proto._Object16_i = function () {
		var t = {};
		this._Object16 = t;
		return t;
	};
	_proto._To11_i = function () {
		var t = new egret.tween.To();
		t.duration = 800;
		t.props = this._Object17_i();
		return t;
	};
	_proto._Object17_i = function () {
		var t = {};
		this._Object17 = t;
		return t;
	};
	_proto.layMask_i = function () {
		var t = new eui.Rect();
		this.layMask = t;
		t.bottom = 0;
		t.fillAlpha = 0.4;
		t.left = 0;
		t.right = 0;
		t.top = 0;
		return t;
	};
	_proto.gPopup_i = function () {
		var t = new eui.Group();
		this.gPopup = t;
		t.horizontalCenter = 0;
		t.verticalCenter = 0;
		t.elementsContent = [this._Image1_i(),this.btnClose_i(),this._Group1_i(),this._Rect1_i(),this.gUnlock_i(),this.gDash_i(),this._Group4_i()];
		return t;
	};
	_proto._Image1_i = function () {
		var t = new eui.Image();
		t.fillMode = "scale";
		t.source = "tongyong_xiaotanchuang_png";
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto.btnClose_i = function () {
		var t = new eui.Button();
		this.btnClose = t;
		t.label = "";
		t.right = 10;
		t.top = 10;
		t.skinName = PopupUnlockSkin$Skin52;
		return t;
	};
	_proto._Group1_i = function () {
		var t = new eui.Group();
		t.horizontalCenter = 0;
		t.y = 39;
		t.elementsContent = [this._Image2_i(),this._Image3_i(),this.textTitle_i()];
		return t;
	};
	_proto._Image2_i = function () {
		var t = new eui.Image();
		t.left = 0;
		t.source = "tongyong_tanchuangzhuangshi_png";
		t.verticalCenter = 0;
		return t;
	};
	_proto._Image3_i = function () {
		var t = new eui.Image();
		t.right = 0;
		t.source = "tongyong_tanchuangzhuangshi_png";
		t.verticalCenter = 0;
		return t;
	};
	_proto.textTitle_i = function () {
		var t = new eui.Label();
		this.textTitle = t;
		t.fontFamily = "fangzheng";
		t.left = 54;
		t.right = 54;
		t.size = 26;
		t.text = "";
		t.verticalCenter = 0;
		return t;
	};
	_proto._Rect1_i = function () {
		var t = new eui.Rect();
		t.fillAlpha = 0.2;
		t.fillColor = 0xf0e8c4;
		t.height = 1;
		t.horizontalCenter = 0;
		t.width = 224;
		t.y = 80;
		return t;
	};
	_proto.gUnlock_i = function () {
		var t = new eui.Group();
		this.gUnlock = t;
		t.horizontalCenter = 0;
		t.visible = false;
		t.y = 140;
		t.elementsContent = [this._Image4_i(),this._Label1_i(),this.textUnlock_i()];
		return t;
	};
	_proto._Image4_i = function () {
		var t = new eui.Image();
		t.source = "tongyong_jin_icon_png";
		t.x = 56;
		return t;
	};
	_proto._Label1_i = function () {
		var t = new eui.Label();
		t.fontFamily = "Microsoft YaHei";
		t.size = 20;
		t.text = "可使用";
		t.x = 0;
		t.y = 20;
		return t;
	};
	_proto.textUnlock_i = function () {
		var t = new eui.Label();
		this.textUnlock = t;
		t.fontFamily = "Microsoft YaHei";
		t.size = 20;
		t.text = "";
		t.x = 110;
		t.y = 20;
		return t;
	};
	_proto.gDash_i = function () {
		var t = new eui.Group();
		this.gDash = t;
		t.left = 0;
		t.right = 0;
		t.visible = false;
		t.y = 120;
		t.elementsContent = [this._Group2_i(),this._Group3_i()];
		return t;
	};
	_proto._Group2_i = function () {
		var t = new eui.Group();
		t.horizontalCenter = 0;
		t.y = 0;
		t.elementsContent = [this._Image5_i(),this._Label2_i(),this.textPrice_i()];
		return t;
	};
	_proto._Image5_i = function () {
		var t = new eui.Image();
		t.source = "tongyong_jin_icon_png";
		t.x = 76;
		return t;
	};
	_proto._Label2_i = function () {
		var t = new eui.Label();
		t.fontFamily = "Microsoft YaHei";
		t.size = 20;
		t.text = "本章尚需";
		t.x = 0;
		t.y = 20;
		return t;
	};
	_proto.textPrice_i = function () {
		var t = new eui.Label();
		this.textPrice = t;
		t.fontFamily = "Microsoft YaHei";
		t.size = 20;
		t.text = "";
		t.x = 130;
		t.y = 20;
		return t;
	};
	_proto._Group3_i = function () {
		var t = new eui.Group();
		t.horizontalCenter = 0;
		t.y = 80;
		t.elementsContent = [this._Image6_i(),this._Label3_i(),this.textTime_i()];
		return t;
	};
	_proto._Image6_i = function () {
		var t = new eui.Image();
		t.source = "tongyong_jin_icon_png";
		t.x = 56;
		return t;
	};
	_proto._Label3_i = function () {
		var t = new eui.Label();
		t.fontFamily = "Microsoft YaHei";
		t.size = 20;
		t.text = "你拥有";
		t.textColor = 0xb8b8b8;
		t.x = 0;
		t.y = 20;
		return t;
	};
	_proto.textTime_i = function () {
		var t = new eui.Label();
		this.textTime = t;
		t.fontFamily = "Microsoft YaHei";
		t.size = 20;
		t.text = "";
		t.textColor = 0xb8b8b8;
		t.x = 110;
		t.y = 20;
		return t;
	};
	_proto._Group4_i = function () {
		var t = new eui.Group();
		t.horizontalCenter = 0;
		t.y = 270;
		t.elementsContent = [this.btnCancel_i(),this.btnDash_i(),this.btnFree_i()];
		return t;
	};
	_proto.btnCancel_i = function () {
		var t = new eui.Button();
		this.btnCancel = t;
		t.height = 58;
		t.label = "取消";
		t.left = 0;
		t.width = 221;
		t.y = 0;
		t.skinName = PopupUnlockSkin$Skin53;
		return t;
	};
	_proto.btnDash_i = function () {
		var t = new eui.Button();
		this.btnDash = t;
		t.height = 58;
		t.label = "加速";
		t.width = 221;
		t.x = 286;
		t.y = 0;
		t.skinName = PopupUnlockSkin$Skin54;
		return t;
	};
	_proto.btnFree_i = function () {
		var t = new eui.Group();
		this.btnFree = t;
		t.height = 58;
		t.width = 221;
		t.x = 286;
		t.y = 0;
		t.elementsContent = [this.image3_i(),this.image2_i(),this._Button1_i(),this.image1_i()];
		return t;
	};
	_proto.image3_i = function () {
		var t = new eui.Image();
		this.image3 = t;
		t.alpha = 0;
		t.height = 64;
		t.horizontalCenter = 0;
		t.source = "tongyong_queding_effect1_png";
		t.verticalCenter = 0;
		t.width = 246;
		return t;
	};
	_proto.image2_i = function () {
		var t = new eui.Image();
		this.image2 = t;
		t.alpha = 0;
		t.height = 64;
		t.horizontalCenter = 0;
		t.source = "tongyong_queding_effect1_png";
		t.verticalCenter = 0;
		t.width = 246;
		return t;
	};
	_proto._Button1_i = function () {
		var t = new eui.Button();
		t.label = "本次免费";
		t.x = 0;
		t.y = 0;
		t.skinName = PopupUnlockSkin$Skin55;
		return t;
	};
	_proto.image1_i = function () {
		var t = new eui.Image();
		this.image1 = t;
		t.alpha = 0;
		t.height = 64;
		t.horizontalCenter = 0;
		t.source = "waifaguang1_png";
		t.touchEnabled = false;
		t.verticalCenter = 0;
		t.width = 246;
		return t;
	};
	return PopupUnlockSkin;
})(eui.Skin);generateEUI.paths['resource/eui_skins/ProgressBarSkin.exml'] = window.skins.ProgressBarSkin = (function (_super) {
	__extends(ProgressBarSkin, _super);
	function ProgressBarSkin() {
		_super.call(this);
		this.skinParts = ["thumb","labelDisplay"];
		
		this.minHeight = 18;
		this.minWidth = 30;
		this.elementsContent = [this._Image1_i(),this.thumb_i(),this.labelDisplay_i()];
	}
	var _proto = ProgressBarSkin.prototype;

	_proto._Image1_i = function () {
		var t = new eui.Image();
		t.percentHeight = 100;
		t.scale9Grid = new egret.Rectangle(1,1,4,4);
		t.source = "track_pb_png";
		t.verticalCenter = 0;
		t.percentWidth = 100;
		return t;
	};
	_proto.thumb_i = function () {
		var t = new eui.Image();
		this.thumb = t;
		t.percentHeight = 100;
		t.source = "thumb_pb_png";
		t.percentWidth = 100;
		return t;
	};
	_proto.labelDisplay_i = function () {
		var t = new eui.Label();
		this.labelDisplay = t;
		t.fontFamily = "Tahoma";
		t.horizontalCenter = 0;
		t.size = 15;
		t.textAlign = "center";
		t.textColor = 0x707070;
		t.verticalAlign = "middle";
		t.verticalCenter = 0;
		return t;
	};
	return ProgressBarSkin;
})(eui.Skin);generateEUI.paths['resource/eui_skins/Prompt.exml'] = window.PromptSkin = (function (_super) {
	__extends(PromptSkin, _super);
	function PromptSkin() {
		_super.call(this);
		this.skinParts = ["gPromptAni","textPromptTitle","textPrompt","gPromptText","gPrompt"];
		
		this.elementsContent = [this.gPrompt_i()];
	}
	var _proto = PromptSkin.prototype;

	_proto.gPrompt_i = function () {
		var t = new eui.Group();
		this.gPrompt = t;
		t.touchEnabled = false;
		t.elementsContent = [this.gPromptAni_i(),this.gPromptText_i()];
		return t;
	};
	_proto.gPromptAni_i = function () {
		var t = new eui.Group();
		this.gPromptAni = t;
		t.touchEnabled = false;
		t.x = 243;
		t.y = 45;
		return t;
	};
	_proto.gPromptText_i = function () {
		var t = new eui.Group();
		this.gPromptText = t;
		t.height = 80;
		t.scrollEnabled = true;
		t.touchEnabled = false;
		t.width = 0;
		t.x = 125;
		t.y = 0;
		t.elementsContent = [this.textPromptTitle_i(),this.textPrompt_i()];
		return t;
	};
	_proto.textPromptTitle_i = function () {
		var t = new eui.Label();
		this.textPromptTitle = t;
		t.fontFamily = "fangzheng";
		t.size = 34;
		t.text = "";
		t.touchEnabled = false;
		t.x = 0;
		t.y = 14;
		return t;
	};
	_proto.textPrompt_i = function () {
		var t = new eui.Label();
		this.textPrompt = t;
		t.fontFamily = "Microsoft YaHei";
		t.size = 18;
		t.text = "";
		t.touchEnabled = false;
		t.x = 1;
		t.y = 60;
		return t;
	};
	return PromptSkin;
})(eui.Skin);generateEUI.paths['resource/eui_skins/QTEhandSkin.exml'] = window.QTEhandSkin = (function (_super) {
	__extends(QTEhandSkin, _super);
	function QTEhandSkin() {
		_super.call(this);
		this.skinParts = ["handtipsTween","handclickTween","image3","image2","image1","image0","image","trigger"];
		
		this.handtipsTween_i();
		this.handclickTween_i();
		this.elementsContent = [this.trigger_i()];
		
		eui.Binding.$bindProperties(this, ["image"],[0],this._TweenItem1,"target");
		eui.Binding.$bindProperties(this, [1],[],this._Object2,"alpha");
		eui.Binding.$bindProperties(this, [0.5],[],this._Object3,"alpha");
		eui.Binding.$bindProperties(this, [1],[],this._Object4,"alpha");
		eui.Binding.$bindProperties(this, ["image0"],[0],this._TweenItem2,"target");
		eui.Binding.$bindProperties(this, [0],[],this._Object6,"alpha");
		eui.Binding.$bindProperties(this, [1],[],this._Object7,"alpha");
		eui.Binding.$bindProperties(this, [0],[],this._Object8,"alpha");
		eui.Binding.$bindProperties(this, ["image1"],[0],this._TweenItem3,"target");
		eui.Binding.$bindProperties(this, [1],[],this._Object10,"alpha");
		eui.Binding.$bindProperties(this, [0.38],[],this._Object11,"alpha");
		eui.Binding.$bindProperties(this, [1],[],this._Object12,"alpha");
		eui.Binding.$bindProperties(this, ["image2"],[0],this._TweenItem4,"target");
		eui.Binding.$bindProperties(this, [1],[],this._Object14,"alpha");
		eui.Binding.$bindProperties(this, [0],[],this._Object14,"scaleX");
		eui.Binding.$bindProperties(this, [0],[],this._Object14,"scaleY");
		eui.Binding.$bindProperties(this, [0.55],[],this._Object15,"alpha");
		eui.Binding.$bindProperties(this, [1],[],this._Object16,"scaleX");
		eui.Binding.$bindProperties(this, [1],[],this._Object16,"scaleY");
		eui.Binding.$bindProperties(this, [0],[],this._Object17,"alpha");
		eui.Binding.$bindProperties(this, ["image"],[0],this._TweenItem5,"target");
		eui.Binding.$bindProperties(this, [1],[],this._Object18,"alpha");
		eui.Binding.$bindProperties(this, [0.67],[],this._Object18,"scaleX");
		eui.Binding.$bindProperties(this, [0.67],[],this._Object18,"scaleY");
		eui.Binding.$bindProperties(this, [0],[],this._Object19,"alpha");
		eui.Binding.$bindProperties(this, [2],[],this._Object19,"scaleX");
		eui.Binding.$bindProperties(this, [2],[],this._Object19,"scaleY");
		eui.Binding.$bindProperties(this, ["image0"],[0],this._TweenItem6,"target");
		eui.Binding.$bindProperties(this, [1],[],this._Object20,"alpha");
		eui.Binding.$bindProperties(this, [0],[],this._Object21,"alpha");
		eui.Binding.$bindProperties(this, ["image1"],[0],this._TweenItem7,"target");
		eui.Binding.$bindProperties(this, [1],[],this._Object22,"alpha");
		eui.Binding.$bindProperties(this, [0],[],this._Object23,"alpha");
		eui.Binding.$bindProperties(this, ["image2"],[0],this._TweenItem8,"target");
		eui.Binding.$bindProperties(this, [0],[],this._Object24,"alpha");
		eui.Binding.$bindProperties(this, [1],[],this._Object25,"alpha");
		eui.Binding.$bindProperties(this, [0],[],this._Object26,"alpha");
		eui.Binding.$bindProperties(this, ["image3"],[0],this._TweenItem9,"target");
		eui.Binding.$bindProperties(this, [1],[],this._Object27,"alpha");
		eui.Binding.$bindProperties(this, [0],[],this._Object28,"alpha");
	}
	var _proto = QTEhandSkin.prototype;

	_proto.handtipsTween_i = function () {
		var t = new egret.tween.TweenGroup();
		this.handtipsTween = t;
		t.items = [this._TweenItem1_i(),this._TweenItem2_i(),this._TweenItem3_i(),this._TweenItem4_i()];
		return t;
	};
	_proto._TweenItem1_i = function () {
		var t = new egret.tween.TweenItem();
		this._TweenItem1 = t;
		t.props = this._Object1_i();
		t.paths = [this._Set1_i(),this._To1_i(),this._To2_i()];
		return t;
	};
	_proto._Object1_i = function () {
		var t = {};
		t.loop = "true";
		return t;
	};
	_proto._Set1_i = function () {
		var t = new egret.tween.Set();
		t.props = this._Object2_i();
		return t;
	};
	_proto._Object2_i = function () {
		var t = {};
		this._Object2 = t;
		return t;
	};
	_proto._To1_i = function () {
		var t = new egret.tween.To();
		t.duration = 1450;
		t.props = this._Object3_i();
		return t;
	};
	_proto._Object3_i = function () {
		var t = {};
		this._Object3 = t;
		return t;
	};
	_proto._To2_i = function () {
		var t = new egret.tween.To();
		t.duration = 2550;
		t.props = this._Object4_i();
		return t;
	};
	_proto._Object4_i = function () {
		var t = {};
		this._Object4 = t;
		return t;
	};
	_proto._TweenItem2_i = function () {
		var t = new egret.tween.TweenItem();
		this._TweenItem2 = t;
		t.props = this._Object5_i();
		t.paths = [this._Set2_i(),this._To3_i(),this._To4_i()];
		return t;
	};
	_proto._Object5_i = function () {
		var t = {};
		t.loop = "true";
		return t;
	};
	_proto._Set2_i = function () {
		var t = new egret.tween.Set();
		t.props = this._Object6_i();
		return t;
	};
	_proto._Object6_i = function () {
		var t = {};
		this._Object6 = t;
		return t;
	};
	_proto._To3_i = function () {
		var t = new egret.tween.To();
		t.duration = 1450;
		t.props = this._Object7_i();
		return t;
	};
	_proto._Object7_i = function () {
		var t = {};
		this._Object7 = t;
		return t;
	};
	_proto._To4_i = function () {
		var t = new egret.tween.To();
		t.duration = 2550;
		t.props = this._Object8_i();
		return t;
	};
	_proto._Object8_i = function () {
		var t = {};
		this._Object8 = t;
		return t;
	};
	_proto._TweenItem3_i = function () {
		var t = new egret.tween.TweenItem();
		this._TweenItem3 = t;
		t.props = this._Object9_i();
		t.paths = [this._Set3_i(),this._To5_i(),this._To6_i()];
		return t;
	};
	_proto._Object9_i = function () {
		var t = {};
		t.loop = "true";
		return t;
	};
	_proto._Set3_i = function () {
		var t = new egret.tween.Set();
		t.props = this._Object10_i();
		return t;
	};
	_proto._Object10_i = function () {
		var t = {};
		this._Object10 = t;
		return t;
	};
	_proto._To5_i = function () {
		var t = new egret.tween.To();
		t.duration = 1450;
		t.props = this._Object11_i();
		return t;
	};
	_proto._Object11_i = function () {
		var t = {};
		this._Object11 = t;
		return t;
	};
	_proto._To6_i = function () {
		var t = new egret.tween.To();
		t.duration = 2550;
		t.props = this._Object12_i();
		return t;
	};
	_proto._Object12_i = function () {
		var t = {};
		this._Object12 = t;
		return t;
	};
	_proto._TweenItem4_i = function () {
		var t = new egret.tween.TweenItem();
		this._TweenItem4 = t;
		t.props = this._Object13_i();
		t.paths = [this._Set4_i(),this._To7_i(),this._To8_i(),this._To9_i()];
		return t;
	};
	_proto._Object13_i = function () {
		var t = {};
		t.loop = "true";
		return t;
	};
	_proto._Set4_i = function () {
		var t = new egret.tween.Set();
		t.props = this._Object14_i();
		return t;
	};
	_proto._Object14_i = function () {
		var t = {};
		this._Object14 = t;
		return t;
	};
	_proto._To7_i = function () {
		var t = new egret.tween.To();
		t.duration = 1450;
		t.props = this._Object15_i();
		return t;
	};
	_proto._Object15_i = function () {
		var t = {};
		this._Object15 = t;
		return t;
	};
	_proto._To8_i = function () {
		var t = new egret.tween.To();
		t.duration = 550;
		t.props = this._Object16_i();
		return t;
	};
	_proto._Object16_i = function () {
		var t = {};
		this._Object16 = t;
		return t;
	};
	_proto._To9_i = function () {
		var t = new egret.tween.To();
		t.duration = 2000;
		t.props = this._Object17_i();
		return t;
	};
	_proto._Object17_i = function () {
		var t = {};
		this._Object17 = t;
		return t;
	};
	_proto.handclickTween_i = function () {
		var t = new egret.tween.TweenGroup();
		this.handclickTween = t;
		t.items = [this._TweenItem5_i(),this._TweenItem6_i(),this._TweenItem7_i(),this._TweenItem8_i(),this._TweenItem9_i()];
		return t;
	};
	_proto._TweenItem5_i = function () {
		var t = new egret.tween.TweenItem();
		this._TweenItem5 = t;
		t.paths = [this._Set5_i(),this._To10_i()];
		return t;
	};
	_proto._Set5_i = function () {
		var t = new egret.tween.Set();
		t.props = this._Object18_i();
		return t;
	};
	_proto._Object18_i = function () {
		var t = {};
		this._Object18 = t;
		return t;
	};
	_proto._To10_i = function () {
		var t = new egret.tween.To();
		t.duration = 1550;
		t.props = this._Object19_i();
		return t;
	};
	_proto._Object19_i = function () {
		var t = {};
		this._Object19 = t;
		return t;
	};
	_proto._TweenItem6_i = function () {
		var t = new egret.tween.TweenItem();
		this._TweenItem6 = t;
		t.paths = [this._Set6_i(),this._To11_i()];
		return t;
	};
	_proto._Set6_i = function () {
		var t = new egret.tween.Set();
		t.props = this._Object20_i();
		return t;
	};
	_proto._Object20_i = function () {
		var t = {};
		this._Object20 = t;
		return t;
	};
	_proto._To11_i = function () {
		var t = new egret.tween.To();
		t.duration = 1000;
		t.props = this._Object21_i();
		return t;
	};
	_proto._Object21_i = function () {
		var t = {};
		this._Object21 = t;
		return t;
	};
	_proto._TweenItem7_i = function () {
		var t = new egret.tween.TweenItem();
		this._TweenItem7 = t;
		t.paths = [this._Set7_i(),this._To12_i()];
		return t;
	};
	_proto._Set7_i = function () {
		var t = new egret.tween.Set();
		t.props = this._Object22_i();
		return t;
	};
	_proto._Object22_i = function () {
		var t = {};
		this._Object22 = t;
		return t;
	};
	_proto._To12_i = function () {
		var t = new egret.tween.To();
		t.duration = 1000;
		t.props = this._Object23_i();
		return t;
	};
	_proto._Object23_i = function () {
		var t = {};
		this._Object23 = t;
		return t;
	};
	_proto._TweenItem8_i = function () {
		var t = new egret.tween.TweenItem();
		this._TweenItem8 = t;
		t.paths = [this._Set8_i(),this._To13_i(),this._To14_i()];
		return t;
	};
	_proto._Set8_i = function () {
		var t = new egret.tween.Set();
		t.props = this._Object24_i();
		return t;
	};
	_proto._Object24_i = function () {
		var t = {};
		this._Object24 = t;
		return t;
	};
	_proto._To13_i = function () {
		var t = new egret.tween.To();
		t.duration = 300;
		t.props = this._Object25_i();
		return t;
	};
	_proto._Object25_i = function () {
		var t = {};
		this._Object25 = t;
		return t;
	};
	_proto._To14_i = function () {
		var t = new egret.tween.To();
		t.duration = 1250;
		t.props = this._Object26_i();
		return t;
	};
	_proto._Object26_i = function () {
		var t = {};
		this._Object26 = t;
		return t;
	};
	_proto._TweenItem9_i = function () {
		var t = new egret.tween.TweenItem();
		this._TweenItem9 = t;
		t.paths = [this._Set9_i(),this._To15_i()];
		return t;
	};
	_proto._Set9_i = function () {
		var t = new egret.tween.Set();
		t.props = this._Object27_i();
		return t;
	};
	_proto._Object27_i = function () {
		var t = {};
		this._Object27 = t;
		return t;
	};
	_proto._To15_i = function () {
		var t = new egret.tween.To();
		t.duration = 2300;
		t.props = this._Object28_i();
		return t;
	};
	_proto._Object28_i = function () {
		var t = {};
		this._Object28 = t;
		return t;
	};
	_proto.trigger_i = function () {
		var t = new eui.Group();
		this.trigger = t;
		t.height = 127;
		t.width = 127;
		t.x = 0;
		t.y = 0;
		t.elementsContent = [this.image3_i(),this.image2_i(),this.image1_i(),this.image0_i(),this.image_i()];
		return t;
	};
	_proto.image3_i = function () {
		var t = new eui.Image();
		this.image3 = t;
		t.horizontalCenter = 0;
		t.source = "QTE_xiaoquan_1_png";
		t.touchEnabled = false;
		t.verticalCenter = 0;
		return t;
	};
	_proto.image2_i = function () {
		var t = new eui.Image();
		this.image2 = t;
		t.alpha = 0;
		t.horizontalCenter = 0;
		t.source = "QTE_xiaoquan_4_png";
		t.touchEnabled = false;
		t.verticalCenter = 0;
		return t;
	};
	_proto.image1_i = function () {
		var t = new eui.Image();
		this.image1 = t;
		t.horizontalCenter = 0;
		t.source = "QTE_xiaoquan_2_png";
		t.touchEnabled = false;
		t.verticalCenter = 0;
		return t;
	};
	_proto.image0_i = function () {
		var t = new eui.Image();
		this.image0 = t;
		t.alpha = 0;
		t.horizontalCenter = 0;
		t.source = "QTE_xiaoquan_3_png";
		t.touchEnabled = false;
		t.verticalCenter = 0;
		return t;
	};
	_proto.image_i = function () {
		var t = new eui.Image();
		this.image = t;
		t.horizontalCenter = 0;
		t.source = "QTE_shou_icon_png";
		t.touchEnabled = false;
		t.verticalCenter = 0;
		return t;
	};
	return QTEhandSkin;
})(eui.Skin);generateEUI.paths['resource/eui_skins/QTEknockSkin.exml'] = window.QTEknockSkin = (function (_super) {
	__extends(QTEknockSkin, _super);
	function QTEknockSkin() {
		_super.call(this);
		this.skinParts = ["knockTween","image","image0","image1","image2","image3","image4","trigger"];
		
		this.knockTween_i();
		this.elementsContent = [this.trigger_i()];
		
		eui.Binding.$bindProperties(this, ["image"],[0],this._TweenItem1,"target");
		eui.Binding.$bindProperties(this, [0],[],this._Object2,"alpha");
		eui.Binding.$bindProperties(this, [30],[],this._Object2,"x");
		eui.Binding.$bindProperties(this, [1],[],this._Object3,"alpha");
		eui.Binding.$bindProperties(this, [37.85],[],this._Object3,"x");
		eui.Binding.$bindProperties(this, [1],[],this._Object4,"alpha");
		eui.Binding.$bindProperties(this, [41.28],[],this._Object4,"x");
		eui.Binding.$bindProperties(this, [0],[],this._Object5,"alpha");
		eui.Binding.$bindProperties(this, [45.7],[],this._Object5,"x");
		eui.Binding.$bindProperties(this, ["image0"],[0],this._TweenItem2,"target");
		eui.Binding.$bindProperties(this, [0],[],this._Object7,"alpha");
		eui.Binding.$bindProperties(this, [27],[],this._Object7,"x");
		eui.Binding.$bindProperties(this, [1],[],this._Object8,"alpha");
		eui.Binding.$bindProperties(this, [53.33],[],this._Object8,"x");
		eui.Binding.$bindProperties(this, [1],[],this._Object9,"alpha");
		eui.Binding.$bindProperties(this, [56.62],[],this._Object9,"x");
		eui.Binding.$bindProperties(this, [0],[],this._Object10,"alpha");
		eui.Binding.$bindProperties(this, [63.21],[],this._Object10,"x");
		eui.Binding.$bindProperties(this, [0],[],this._Object11,"alpha");
		eui.Binding.$bindProperties(this, [66.5],[],this._Object11,"x");
		eui.Binding.$bindProperties(this, ["image1"],[0],this._TweenItem3,"target");
		eui.Binding.$bindProperties(this, [0],[],this._Object13,"alpha");
		eui.Binding.$bindProperties(this, [23.2],[],this._Object13,"x");
		eui.Binding.$bindProperties(this, [1],[],this._Object14,"alpha");
		eui.Binding.$bindProperties(this, [53.85],[],this._Object14,"x");
		eui.Binding.$bindProperties(this, [1],[],this._Object15,"alpha");
		eui.Binding.$bindProperties(this, [66.47],[],this._Object15,"x");
		eui.Binding.$bindProperties(this, [0],[],this._Object16,"alpha");
		eui.Binding.$bindProperties(this, [74.59],[],this._Object16,"x");
		eui.Binding.$bindProperties(this, [0],[],this._Object17,"alpha");
		eui.Binding.$bindProperties(this, [82.7],[],this._Object17,"x");
		eui.Binding.$bindProperties(this, ["image2"],[0],this._TweenItem4,"target");
		eui.Binding.$bindProperties(this, [0],[],this._Object19,"alpha");
		eui.Binding.$bindProperties(this, [-30],[],this._Object19,"x");
		eui.Binding.$bindProperties(this, [1],[],this._Object20,"alpha");
		eui.Binding.$bindProperties(this, [-37.85],[],this._Object20,"x");
		eui.Binding.$bindProperties(this, [1],[],this._Object21,"alpha");
		eui.Binding.$bindProperties(this, [-41.28],[],this._Object21,"x");
		eui.Binding.$bindProperties(this, [0],[],this._Object22,"alpha");
		eui.Binding.$bindProperties(this, [-45.7],[],this._Object22,"x");
		eui.Binding.$bindProperties(this, ["image3"],[0],this._TweenItem5,"target");
		eui.Binding.$bindProperties(this, [0],[],this._Object24,"alpha");
		eui.Binding.$bindProperties(this, [-27],[],this._Object24,"x");
		eui.Binding.$bindProperties(this, [1],[],this._Object25,"alpha");
		eui.Binding.$bindProperties(this, [-53.33],[],this._Object25,"x");
		eui.Binding.$bindProperties(this, [1],[],this._Object26,"alpha");
		eui.Binding.$bindProperties(this, [-56.62],[],this._Object26,"x");
		eui.Binding.$bindProperties(this, [0],[],this._Object27,"alpha");
		eui.Binding.$bindProperties(this, [-63.21],[],this._Object27,"x");
		eui.Binding.$bindProperties(this, [0],[],this._Object28,"alpha");
		eui.Binding.$bindProperties(this, [-66.5],[],this._Object28,"x");
		eui.Binding.$bindProperties(this, ["image4"],[0],this._TweenItem6,"target");
		eui.Binding.$bindProperties(this, [0],[],this._Object30,"alpha");
		eui.Binding.$bindProperties(this, [-23.2],[],this._Object30,"x");
		eui.Binding.$bindProperties(this, [1],[],this._Object31,"alpha");
		eui.Binding.$bindProperties(this, [-53.85],[],this._Object31,"x");
		eui.Binding.$bindProperties(this, [1],[],this._Object32,"alpha");
		eui.Binding.$bindProperties(this, [-66.47],[],this._Object32,"x");
		eui.Binding.$bindProperties(this, [0],[],this._Object33,"alpha");
		eui.Binding.$bindProperties(this, [-74.59],[],this._Object33,"x");
		eui.Binding.$bindProperties(this, [0],[],this._Object34,"alpha");
		eui.Binding.$bindProperties(this, [-82.7],[],this._Object34,"x");
	}
	var _proto = QTEknockSkin.prototype;

	_proto.knockTween_i = function () {
		var t = new egret.tween.TweenGroup();
		this.knockTween = t;
		t.items = [this._TweenItem1_i(),this._TweenItem2_i(),this._TweenItem3_i(),this._TweenItem4_i(),this._TweenItem5_i(),this._TweenItem6_i()];
		return t;
	};
	_proto._TweenItem1_i = function () {
		var t = new egret.tween.TweenItem();
		this._TweenItem1 = t;
		t.props = this._Object1_i();
		t.paths = [this._Wait1_i(),this._Set1_i(),this._To1_i(),this._To2_i(),this._To3_i()];
		return t;
	};
	_proto._Object1_i = function () {
		var t = {};
		t.loop = "true";
		return t;
	};
	_proto._Wait1_i = function () {
		var t = new egret.tween.Wait();
		t.duration = 1700;
		return t;
	};
	_proto._Set1_i = function () {
		var t = new egret.tween.Set();
		t.props = this._Object2_i();
		return t;
	};
	_proto._Object2_i = function () {
		var t = {};
		this._Object2 = t;
		return t;
	};
	_proto._To1_i = function () {
		var t = new egret.tween.To();
		t.duration = 800;
		t.props = this._Object3_i();
		return t;
	};
	_proto._Object3_i = function () {
		var t = {};
		this._Object3 = t;
		return t;
	};
	_proto._To2_i = function () {
		var t = new egret.tween.To();
		t.duration = 350;
		t.props = this._Object4_i();
		return t;
	};
	_proto._Object4_i = function () {
		var t = {};
		this._Object4 = t;
		return t;
	};
	_proto._To3_i = function () {
		var t = new egret.tween.To();
		t.duration = 450;
		t.props = this._Object5_i();
		return t;
	};
	_proto._Object5_i = function () {
		var t = {};
		this._Object5 = t;
		return t;
	};
	_proto._TweenItem2_i = function () {
		var t = new egret.tween.TweenItem();
		this._TweenItem2 = t;
		t.props = this._Object6_i();
		t.paths = [this._Wait2_i(),this._Set2_i(),this._To4_i(),this._To5_i(),this._To6_i(),this._To7_i()];
		return t;
	};
	_proto._Object6_i = function () {
		var t = {};
		t.loop = "true";
		return t;
	};
	_proto._Wait2_i = function () {
		var t = new egret.tween.Wait();
		t.duration = 900;
		return t;
	};
	_proto._Set2_i = function () {
		var t = new egret.tween.Set();
		t.props = this._Object7_i();
		return t;
	};
	_proto._Object7_i = function () {
		var t = {};
		this._Object7 = t;
		return t;
	};
	_proto._To4_i = function () {
		var t = new egret.tween.To();
		t.duration = 1600;
		t.props = this._Object8_i();
		return t;
	};
	_proto._Object8_i = function () {
		var t = {};
		this._Object8 = t;
		return t;
	};
	_proto._To5_i = function () {
		var t = new egret.tween.To();
		t.duration = 200;
		t.props = this._Object9_i();
		return t;
	};
	_proto._Object9_i = function () {
		var t = {};
		this._Object9 = t;
		return t;
	};
	_proto._To6_i = function () {
		var t = new egret.tween.To();
		t.duration = 400;
		t.props = this._Object10_i();
		return t;
	};
	_proto._Object10_i = function () {
		var t = {};
		this._Object10 = t;
		return t;
	};
	_proto._To7_i = function () {
		var t = new egret.tween.To();
		t.duration = 200;
		t.props = this._Object11_i();
		return t;
	};
	_proto._Object11_i = function () {
		var t = {};
		this._Object11 = t;
		return t;
	};
	_proto._TweenItem3_i = function () {
		var t = new egret.tween.TweenItem();
		this._TweenItem3 = t;
		t.props = this._Object12_i();
		t.paths = [this._Set3_i(),this._To8_i(),this._To9_i(),this._To10_i(),this._To11_i()];
		return t;
	};
	_proto._Object12_i = function () {
		var t = {};
		t.loop = "true";
		return t;
	};
	_proto._Set3_i = function () {
		var t = new egret.tween.Set();
		t.props = this._Object13_i();
		return t;
	};
	_proto._Object13_i = function () {
		var t = {};
		this._Object13 = t;
		return t;
	};
	_proto._To8_i = function () {
		var t = new egret.tween.To();
		t.duration = 1700;
		t.props = this._Object14_i();
		return t;
	};
	_proto._Object14_i = function () {
		var t = {};
		this._Object14 = t;
		return t;
	};
	_proto._To9_i = function () {
		var t = new egret.tween.To();
		t.duration = 700;
		t.props = this._Object15_i();
		return t;
	};
	_proto._Object15_i = function () {
		var t = {};
		this._Object15 = t;
		return t;
	};
	_proto._To10_i = function () {
		var t = new egret.tween.To();
		t.duration = 450;
		t.props = this._Object16_i();
		return t;
	};
	_proto._Object16_i = function () {
		var t = {};
		this._Object16 = t;
		return t;
	};
	_proto._To11_i = function () {
		var t = new egret.tween.To();
		t.duration = 450;
		t.props = this._Object17_i();
		return t;
	};
	_proto._Object17_i = function () {
		var t = {};
		this._Object17 = t;
		return t;
	};
	_proto._TweenItem4_i = function () {
		var t = new egret.tween.TweenItem();
		this._TweenItem4 = t;
		t.props = this._Object18_i();
		t.paths = [this._Wait3_i(),this._Set4_i(),this._To12_i(),this._To13_i(),this._To14_i()];
		return t;
	};
	_proto._Object18_i = function () {
		var t = {};
		t.loop = "true";
		return t;
	};
	_proto._Wait3_i = function () {
		var t = new egret.tween.Wait();
		t.duration = 1700;
		return t;
	};
	_proto._Set4_i = function () {
		var t = new egret.tween.Set();
		t.props = this._Object19_i();
		return t;
	};
	_proto._Object19_i = function () {
		var t = {};
		this._Object19 = t;
		return t;
	};
	_proto._To12_i = function () {
		var t = new egret.tween.To();
		t.duration = 800;
		t.props = this._Object20_i();
		return t;
	};
	_proto._Object20_i = function () {
		var t = {};
		this._Object20 = t;
		return t;
	};
	_proto._To13_i = function () {
		var t = new egret.tween.To();
		t.duration = 350;
		t.props = this._Object21_i();
		return t;
	};
	_proto._Object21_i = function () {
		var t = {};
		this._Object21 = t;
		return t;
	};
	_proto._To14_i = function () {
		var t = new egret.tween.To();
		t.duration = 450;
		t.props = this._Object22_i();
		return t;
	};
	_proto._Object22_i = function () {
		var t = {};
		this._Object22 = t;
		return t;
	};
	_proto._TweenItem5_i = function () {
		var t = new egret.tween.TweenItem();
		this._TweenItem5 = t;
		t.props = this._Object23_i();
		t.paths = [this._Wait4_i(),this._Set5_i(),this._To15_i(),this._To16_i(),this._To17_i(),this._To18_i()];
		return t;
	};
	_proto._Object23_i = function () {
		var t = {};
		t.loop = "true";
		return t;
	};
	_proto._Wait4_i = function () {
		var t = new egret.tween.Wait();
		t.duration = 900;
		return t;
	};
	_proto._Set5_i = function () {
		var t = new egret.tween.Set();
		t.props = this._Object24_i();
		return t;
	};
	_proto._Object24_i = function () {
		var t = {};
		this._Object24 = t;
		return t;
	};
	_proto._To15_i = function () {
		var t = new egret.tween.To();
		t.duration = 1600;
		t.props = this._Object25_i();
		return t;
	};
	_proto._Object25_i = function () {
		var t = {};
		this._Object25 = t;
		return t;
	};
	_proto._To16_i = function () {
		var t = new egret.tween.To();
		t.duration = 200;
		t.props = this._Object26_i();
		return t;
	};
	_proto._Object26_i = function () {
		var t = {};
		this._Object26 = t;
		return t;
	};
	_proto._To17_i = function () {
		var t = new egret.tween.To();
		t.duration = 400;
		t.props = this._Object27_i();
		return t;
	};
	_proto._Object27_i = function () {
		var t = {};
		this._Object27 = t;
		return t;
	};
	_proto._To18_i = function () {
		var t = new egret.tween.To();
		t.duration = 200;
		t.props = this._Object28_i();
		return t;
	};
	_proto._Object28_i = function () {
		var t = {};
		this._Object28 = t;
		return t;
	};
	_proto._TweenItem6_i = function () {
		var t = new egret.tween.TweenItem();
		this._TweenItem6 = t;
		t.props = this._Object29_i();
		t.paths = [this._Set6_i(),this._To19_i(),this._To20_i(),this._To21_i(),this._To22_i()];
		return t;
	};
	_proto._Object29_i = function () {
		var t = {};
		t.loop = "true";
		return t;
	};
	_proto._Set6_i = function () {
		var t = new egret.tween.Set();
		t.props = this._Object30_i();
		return t;
	};
	_proto._Object30_i = function () {
		var t = {};
		this._Object30 = t;
		return t;
	};
	_proto._To19_i = function () {
		var t = new egret.tween.To();
		t.duration = 1700;
		t.props = this._Object31_i();
		return t;
	};
	_proto._Object31_i = function () {
		var t = {};
		this._Object31 = t;
		return t;
	};
	_proto._To20_i = function () {
		var t = new egret.tween.To();
		t.duration = 700;
		t.props = this._Object32_i();
		return t;
	};
	_proto._Object32_i = function () {
		var t = {};
		this._Object32 = t;
		return t;
	};
	_proto._To21_i = function () {
		var t = new egret.tween.To();
		t.duration = 450;
		t.props = this._Object33_i();
		return t;
	};
	_proto._Object33_i = function () {
		var t = {};
		this._Object33 = t;
		return t;
	};
	_proto._To22_i = function () {
		var t = new egret.tween.To();
		t.duration = 450;
		t.props = this._Object34_i();
		return t;
	};
	_proto._Object34_i = function () {
		var t = {};
		this._Object34 = t;
		return t;
	};
	_proto.trigger_i = function () {
		var t = new eui.Group();
		this.trigger = t;
		t.height = 110;
		t.width = 300;
		t.elementsContent = [this._Image1_i(),this._Group1_i(),this._Group2_i()];
		return t;
	};
	_proto._Image1_i = function () {
		var t = new eui.Image();
		t.horizontalCenter = 0;
		t.source = "QTE_qiaomen_1_png";
		t.touchEnabled = false;
		t.verticalCenter = 0;
		return t;
	};
	_proto._Group1_i = function () {
		var t = new eui.Group();
		t.touchEnabled = false;
		t.x = 150;
		t.y = 0;
		t.elementsContent = [this.image_i(),this.image0_i(),this.image1_i()];
		return t;
	};
	_proto.image_i = function () {
		var t = new eui.Image();
		this.image = t;
		t.alpha = 0;
		t.source = "QTE_qiaomen_2_png";
		t.touchEnabled = false;
		t.x = 30;
		t.y = 26;
		return t;
	};
	_proto.image0_i = function () {
		var t = new eui.Image();
		this.image0 = t;
		t.alpha = 0;
		t.source = "QTE_qiaomen_3_png";
		t.touchEnabled = false;
		t.x = 27;
		t.y = 15;
		return t;
	};
	_proto.image1_i = function () {
		var t = new eui.Image();
		this.image1 = t;
		t.alpha = 0;
		t.source = "QTE_qiaomen_4_png";
		t.touchEnabled = false;
		t.x = 23.2;
		t.y = 0;
		return t;
	};
	_proto._Group2_i = function () {
		var t = new eui.Group();
		t.touchEnabled = false;
		t.x = 150;
		t.y = 0;
		t.elementsContent = [this.image2_i(),this.image3_i(),this.image4_i()];
		return t;
	};
	_proto.image2_i = function () {
		var t = new eui.Image();
		this.image2 = t;
		t.alpha = 0;
		t.skewY = 180;
		t.source = "QTE_qiaomen_2_png";
		t.touchEnabled = false;
		t.x = -30;
		t.y = 26;
		return t;
	};
	_proto.image3_i = function () {
		var t = new eui.Image();
		this.image3 = t;
		t.alpha = 0;
		t.skewY = 180;
		t.source = "QTE_qiaomen_3_png";
		t.touchEnabled = false;
		t.x = -27;
		t.y = 15;
		return t;
	};
	_proto.image4_i = function () {
		var t = new eui.Image();
		this.image4 = t;
		t.alpha = 0;
		t.skewY = 180;
		t.source = "QTE_qiaomen_4_png";
		t.touchEnabled = false;
		t.x = -23.2;
		t.y = 0;
		return t;
	};
	return QTEknockSkin;
})(eui.Skin);generateEUI.paths['resource/eui_skins/QTEpressSkin.exml'] = window.QTEpressSkin = (function (_super) {
	__extends(QTEpressSkin, _super);
	function QTEpressSkin() {
		_super.call(this);
		this.skinParts = ["presstipsTween","pressclickTween","progress","image1","image0","image","trigger"];
		
		this.height = 720;
		this.width = 1280;
		this.presstipsTween_i();
		this.pressclickTween_i();
		this.elementsContent = [this._Group1_i(),this.trigger_i()];
		
		eui.Binding.$bindProperties(this, ["image"],[0],this._TweenItem1,"target");
		eui.Binding.$bindProperties(this, [1],[],this._Object2,"scaleX");
		eui.Binding.$bindProperties(this, [1],[],this._Object2,"scaleY");
		eui.Binding.$bindProperties(this, [1.2],[],this._Object3,"scaleX");
		eui.Binding.$bindProperties(this, [1.2],[],this._Object3,"scaleY");
		eui.Binding.$bindProperties(this, [1],[],this._Object4,"scaleX");
		eui.Binding.$bindProperties(this, [1],[],this._Object4,"scaleY");
		eui.Binding.$bindProperties(this, [1],[],this._Object5,"scaleX");
		eui.Binding.$bindProperties(this, [1],[],this._Object5,"scaleY");
		eui.Binding.$bindProperties(this, ["image0"],[0],this._TweenItem2,"target");
		eui.Binding.$bindProperties(this, [1.1],[],this._Object7,"scaleX");
		eui.Binding.$bindProperties(this, [1.1],[],this._Object7,"scaleY");
		eui.Binding.$bindProperties(this, [1],[],this._Object8,"scaleX");
		eui.Binding.$bindProperties(this, [1],[],this._Object8,"scaleY");
		eui.Binding.$bindProperties(this, [1.1],[],this._Object9,"scaleX");
		eui.Binding.$bindProperties(this, [1.1],[],this._Object9,"scaleY");
		eui.Binding.$bindProperties(this, ["image"],[0],this._TweenItem3,"target");
		eui.Binding.$bindProperties(this, [1.35],[],this._Object10,"scaleX");
		eui.Binding.$bindProperties(this, [1.35],[],this._Object10,"scaleY");
		eui.Binding.$bindProperties(this, [1],[],this._Object11,"scaleX");
		eui.Binding.$bindProperties(this, [1],[],this._Object11,"scaleY");
		eui.Binding.$bindProperties(this, ["image0"],[0],this._TweenItem4,"target");
		eui.Binding.$bindProperties(this, [1.1],[],this._Object12,"scaleX");
		eui.Binding.$bindProperties(this, [1.1],[],this._Object12,"scaleY");
		eui.Binding.$bindProperties(this, [1.55],[],this._Object13,"scaleX");
		eui.Binding.$bindProperties(this, [1.55],[],this._Object13,"scaleY");
		eui.Binding.$bindProperties(this, ["image1"],[0],this._TweenItem5,"target");
		eui.Binding.$bindProperties(this, [1],[],this._Object14,"scaleX");
		eui.Binding.$bindProperties(this, [1],[],this._Object14,"scaleY");
		eui.Binding.$bindProperties(this, [1.5],[],this._Object15,"scaleX");
		eui.Binding.$bindProperties(this, [1.5],[],this._Object15,"scaleY");
	}
	var _proto = QTEpressSkin.prototype;

	_proto.presstipsTween_i = function () {
		var t = new egret.tween.TweenGroup();
		this.presstipsTween = t;
		t.items = [this._TweenItem1_i(),this._TweenItem2_i()];
		return t;
	};
	_proto._TweenItem1_i = function () {
		var t = new egret.tween.TweenItem();
		this._TweenItem1 = t;
		t.props = this._Object1_i();
		t.paths = [this._Set1_i(),this._To1_i(),this._To2_i(),this._To3_i()];
		return t;
	};
	_proto._Object1_i = function () {
		var t = {};
		t.loop = "true";
		return t;
	};
	_proto._Set1_i = function () {
		var t = new egret.tween.Set();
		t.props = this._Object2_i();
		return t;
	};
	_proto._Object2_i = function () {
		var t = {};
		this._Object2 = t;
		return t;
	};
	_proto._To1_i = function () {
		var t = new egret.tween.To();
		t.duration = 800;
		t.props = this._Object3_i();
		return t;
	};
	_proto._Object3_i = function () {
		var t = {};
		this._Object3 = t;
		return t;
	};
	_proto._To2_i = function () {
		var t = new egret.tween.To();
		t.duration = 700;
		t.props = this._Object4_i();
		return t;
	};
	_proto._Object4_i = function () {
		var t = {};
		this._Object4 = t;
		return t;
	};
	_proto._To3_i = function () {
		var t = new egret.tween.To();
		t.duration = 400;
		t.props = this._Object5_i();
		return t;
	};
	_proto._Object5_i = function () {
		var t = {};
		this._Object5 = t;
		return t;
	};
	_proto._TweenItem2_i = function () {
		var t = new egret.tween.TweenItem();
		this._TweenItem2 = t;
		t.props = this._Object6_i();
		t.paths = [this._Wait1_i(),this._Set2_i(),this._To4_i(),this._To5_i()];
		return t;
	};
	_proto._Object6_i = function () {
		var t = {};
		t.loop = "true";
		return t;
	};
	_proto._Wait1_i = function () {
		var t = new egret.tween.Wait();
		t.duration = 200;
		return t;
	};
	_proto._Set2_i = function () {
		var t = new egret.tween.Set();
		t.props = this._Object7_i();
		return t;
	};
	_proto._Object7_i = function () {
		var t = {};
		this._Object7 = t;
		return t;
	};
	_proto._To4_i = function () {
		var t = new egret.tween.To();
		t.duration = 850;
		t.props = this._Object8_i();
		return t;
	};
	_proto._Object8_i = function () {
		var t = {};
		this._Object8 = t;
		return t;
	};
	_proto._To5_i = function () {
		var t = new egret.tween.To();
		t.duration = 850;
		t.props = this._Object9_i();
		return t;
	};
	_proto._Object9_i = function () {
		var t = {};
		this._Object9 = t;
		return t;
	};
	_proto.pressclickTween_i = function () {
		var t = new egret.tween.TweenGroup();
		this.pressclickTween = t;
		t.items = [this._TweenItem3_i(),this._TweenItem4_i(),this._TweenItem5_i()];
		return t;
	};
	_proto._TweenItem3_i = function () {
		var t = new egret.tween.TweenItem();
		this._TweenItem3 = t;
		t.paths = [this._Set3_i(),this._To6_i()];
		return t;
	};
	_proto._Set3_i = function () {
		var t = new egret.tween.Set();
		t.props = this._Object10_i();
		return t;
	};
	_proto._Object10_i = function () {
		var t = {};
		this._Object10 = t;
		return t;
	};
	_proto._To6_i = function () {
		var t = new egret.tween.To();
		t.duration = 500;
		t.props = this._Object11_i();
		return t;
	};
	_proto._Object11_i = function () {
		var t = {};
		this._Object11 = t;
		return t;
	};
	_proto._TweenItem4_i = function () {
		var t = new egret.tween.TweenItem();
		this._TweenItem4 = t;
		t.paths = [this._Set4_i(),this._To7_i()];
		return t;
	};
	_proto._Set4_i = function () {
		var t = new egret.tween.Set();
		t.props = this._Object12_i();
		return t;
	};
	_proto._Object12_i = function () {
		var t = {};
		this._Object12 = t;
		return t;
	};
	_proto._To7_i = function () {
		var t = new egret.tween.To();
		t.duration = 300;
		t.props = this._Object13_i();
		return t;
	};
	_proto._Object13_i = function () {
		var t = {};
		this._Object13 = t;
		return t;
	};
	_proto._TweenItem5_i = function () {
		var t = new egret.tween.TweenItem();
		this._TweenItem5 = t;
		t.paths = [this._Set5_i(),this._To8_i()];
		return t;
	};
	_proto._Set5_i = function () {
		var t = new egret.tween.Set();
		t.props = this._Object14_i();
		return t;
	};
	_proto._Object14_i = function () {
		var t = {};
		this._Object14 = t;
		return t;
	};
	_proto._To8_i = function () {
		var t = new egret.tween.To();
		t.duration = 500;
		t.props = this._Object15_i();
		return t;
	};
	_proto._Object15_i = function () {
		var t = {};
		this._Object15 = t;
		return t;
	};
	_proto._Group1_i = function () {
		var t = new eui.Group();
		t.height = 20;
		t.horizontalCenter = 0;
		t.top = 20;
		t.width = 370;
		t.elementsContent = [this._Image1_i(),this.progress_i()];
		return t;
	};
	_proto._Image1_i = function () {
		var t = new eui.Image();
		t.scale9Grid = new egret.Rectangle(19,1,63,16);
		t.source = "QTE_jishidikang_png";
		t.width = 370;
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto.progress_i = function () {
		var t = new eui.Image();
		this.progress = t;
		t.height = 10;
		t.source = "QTE_jishijindu_png";
		t.width = 0;
		t.x = 20;
		t.y = 5;
		return t;
	};
	_proto.trigger_i = function () {
		var t = new eui.Group();
		this.trigger = t;
		t.height = 84;
		t.width = 84;
		t.x = 466;
		t.y = 310;
		t.elementsContent = [this._Image2_i(),this.image1_i(),this.image0_i(),this.image_i()];
		return t;
	};
	_proto._Image2_i = function () {
		var t = new eui.Image();
		t.horizontalCenter = 0;
		t.source = "QTE_daquan_1_png";
		t.touchEnabled = false;
		t.verticalCenter = 0;
		return t;
	};
	_proto.image1_i = function () {
		var t = new eui.Image();
		this.image1 = t;
		t.horizontalCenter = 0;
		t.source = "QTE_daquan_2_png";
		t.touchEnabled = false;
		t.verticalCenter = 0;
		return t;
	};
	_proto.image0_i = function () {
		var t = new eui.Image();
		this.image0 = t;
		t.horizontalCenter = 0;
		t.source = "QTE_daquan_3_png";
		t.touchEnabled = false;
		t.verticalCenter = 0;
		return t;
	};
	_proto.image_i = function () {
		var t = new eui.Image();
		this.image = t;
		t.horizontalCenter = 0;
		t.source = "QTE_daquan_4_png";
		t.touchEnabled = false;
		t.verticalCenter = 0;
		return t;
	};
	return QTEpressSkin;
})(eui.Skin);generateEUI.paths['resource/eui_skins/QTEsliderSkin.exml'] = window.QTEsliderSkin = (function (_super) {
	__extends(QTEsliderSkin, _super);
	function QTEsliderSkin() {
		_super.call(this);
		this.skinParts = ["arrowTween","label","image","gArrow","gAni","arrow"];
		
		this.height = 720;
		this.width = 1280;
		this.arrowTween_i();
		this.elementsContent = [this.label_i(),this.arrow_i()];
		
		eui.Binding.$bindProperties(this, ["arrow"],[0],this._TweenItem1,"target");
		eui.Binding.$bindProperties(this, [1],[],this._Object3,"alpha");
		eui.Binding.$bindProperties(this, [-2.37],[],this._Object3,"rotation");
		eui.Binding.$bindProperties(this, [72.5],[],this._Object3,"x");
		eui.Binding.$bindProperties(this, [1],[],this._Object4,"alpha");
		eui.Binding.$bindProperties(this, [-5.26],[],this._Object4,"rotation");
		eui.Binding.$bindProperties(this, [100],[],this._Object4,"x");
		eui.Binding.$bindProperties(this, [0],[],this._Object5,"alpha");
		eui.Binding.$bindProperties(this, [-10],[],this._Object5,"rotation");
		eui.Binding.$bindProperties(this, [145],[],this._Object5,"x");
	}
	var _proto = QTEsliderSkin.prototype;

	_proto.arrowTween_i = function () {
		var t = new egret.tween.TweenGroup();
		this.arrowTween = t;
		t.items = [this._TweenItem1_i()];
		return t;
	};
	_proto._TweenItem1_i = function () {
		var t = new egret.tween.TweenItem();
		this._TweenItem1 = t;
		t.props = this._Object1_i();
		t.paths = [this._Set1_i(),this._To1_i(),this._To2_i(),this._To3_i()];
		return t;
	};
	_proto._Object1_i = function () {
		var t = {};
		t.loop = "true";
		return t;
	};
	_proto._Set1_i = function () {
		var t = new egret.tween.Set();
		t.props = this._Object2_i();
		return t;
	};
	_proto._Object2_i = function () {
		var t = {};
		return t;
	};
	_proto._To1_i = function () {
		var t = new egret.tween.To();
		t.duration = 250;
		t.props = this._Object3_i();
		return t;
	};
	_proto._Object3_i = function () {
		var t = {};
		this._Object3 = t;
		return t;
	};
	_proto._To2_i = function () {
		var t = new egret.tween.To();
		t.duration = 250;
		t.props = this._Object4_i();
		return t;
	};
	_proto._Object4_i = function () {
		var t = {};
		this._Object4 = t;
		return t;
	};
	_proto._To3_i = function () {
		var t = new egret.tween.To();
		t.duration = 500;
		t.props = this._Object5_i();
		return t;
	};
	_proto._Object5_i = function () {
		var t = {};
		this._Object5 = t;
		return t;
	};
	_proto.label_i = function () {
		var t = new eui.Label();
		this.label = t;
		t.fontFamily = "Microsoft YaHei";
		t.text = "滑动触发";
		t.x = 0;
		t.y = 150;
		return t;
	};
	_proto.arrow_i = function () {
		var t = new eui.Group();
		this.arrow = t;
		t.height = 116;
		t.width = 438;
		t.elementsContent = [this.image_i(),this.gArrow_i(),this.gAni_i()];
		return t;
	};
	_proto.image_i = function () {
		var t = new eui.Image();
		this.image = t;
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "QTE_jiantou_wan01_png";
		t.touchEnabled = false;
		t.visible = false;
		t.x = 50;
		t.y = 0;
		return t;
	};
	_proto.gArrow_i = function () {
		var t = new eui.Group();
		this.gArrow = t;
		t.horizontalCenter = 0;
		t.touchEnabled = false;
		t.verticalCenter = 0;
		return t;
	};
	_proto.gAni_i = function () {
		var t = new eui.Group();
		this.gAni = t;
		t.touchEnabled = false;
		t.x = 377;
		t.y = 28;
		return t;
	};
	return QTEsliderSkin;
})(eui.Skin);generateEUI.paths['resource/eui_skins/RadioButtonSkin.exml'] = window.skins.RadioButtonSkin = (function (_super) {
	__extends(RadioButtonSkin, _super);
	function RadioButtonSkin() {
		_super.call(this);
		this.skinParts = ["labelDisplay"];
		
		this.elementsContent = [this._Group1_i()];
		this.states = [
			new eui.State ("up",
				[
				])
			,
			new eui.State ("down",
				[
					new eui.SetProperty("_Image1","alpha",0.7)
				])
			,
			new eui.State ("disabled",
				[
					new eui.SetProperty("_Image1","alpha",0.5)
				])
			,
			new eui.State ("upAndSelected",
				[
					new eui.SetProperty("_Image1","source","radiobutton_select_up_png")
				])
			,
			new eui.State ("downAndSelected",
				[
					new eui.SetProperty("_Image1","source","radiobutton_select_down_png")
				])
			,
			new eui.State ("disabledAndSelected",
				[
					new eui.SetProperty("_Image1","source","radiobutton_select_disabled_png")
				])
		];
	}
	var _proto = RadioButtonSkin.prototype;

	_proto._Group1_i = function () {
		var t = new eui.Group();
		t.percentHeight = 100;
		t.percentWidth = 100;
		t.layout = this._HorizontalLayout1_i();
		t.elementsContent = [this._Image1_i(),this.labelDisplay_i()];
		return t;
	};
	_proto._HorizontalLayout1_i = function () {
		var t = new eui.HorizontalLayout();
		t.verticalAlign = "middle";
		return t;
	};
	_proto._Image1_i = function () {
		var t = new eui.Image();
		this._Image1 = t;
		t.alpha = 1;
		t.fillMode = "scale";
		t.source = "radiobutton_unselect_png";
		return t;
	};
	_proto.labelDisplay_i = function () {
		var t = new eui.Label();
		this.labelDisplay = t;
		t.fontFamily = "Tahoma";
		t.size = 20;
		t.textAlign = "center";
		t.textColor = 0x707070;
		t.verticalAlign = "middle";
		return t;
	};
	return RadioButtonSkin;
})(eui.Skin);generateEUI.paths['resource/eui_skins/Rank.exml'] = window.RankSkin = (function (_super) {
	__extends(RankSkin, _super);
	var RankSkin$Skin56 = 	(function (_super) {
		__extends(RankSkin$Skin56, _super);
		function RankSkin$Skin56() {
			_super.call(this);
			this.skinParts = ["labelDisplay"];
			
			this.elementsContent = [this._Image1_i(),this.labelDisplay_i()];
			this.states = [
				new eui.State ("up",
					[
					])
				,
				new eui.State ("down",
					[
						new eui.SetProperty("_Image1","source","dangan_yeqian_btn02_png")
					])
				,
				new eui.State ("disabled",
					[
					])
				,
				new eui.State ("false",
					[
						new eui.SetProperty("_Image1","alpha",0),
						new eui.SetProperty("labelDisplay","textColor",0x999999)
					])
				,
				new eui.State ("move",
					[
						new eui.SetProperty("_Image1","alpha",0),
						new eui.SetProperty("labelDisplay","textColor",0xffffff)
					])
			];
		}
		var _proto = RankSkin$Skin56.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			this._Image1 = t;
			t.alpha = 1;
			t.percentHeight = 100;
			t.source = "dangan_yeqian_btn00_png";
			t.percentWidth = 100;
			return t;
		};
		_proto.labelDisplay_i = function () {
			var t = new eui.Label();
			this.labelDisplay = t;
			t.fontFamily = "fangzheng";
			t.horizontalCenter = 0;
			t.size = 28;
			t.textColor = 0x141311;
			t.verticalCenter = 0;
			return t;
		};
		return RankSkin$Skin56;
	})(eui.Skin);

	var RankSkin$Skin57 = 	(function (_super) {
		__extends(RankSkin$Skin57, _super);
		function RankSkin$Skin57() {
			_super.call(this);
			this.skinParts = ["labelDisplay"];
			
			this.elementsContent = [this._Image1_i(),this.labelDisplay_i()];
			this.states = [
				new eui.State ("up",
					[
					])
				,
				new eui.State ("down",
					[
						new eui.SetProperty("_Image1","source","dangan_yeqian_btn02_png")
					])
				,
				new eui.State ("disabled",
					[
					])
				,
				new eui.State ("false",
					[
						new eui.SetProperty("_Image1","alpha",0),
						new eui.SetProperty("labelDisplay","textColor",0x999999)
					])
				,
				new eui.State ("move",
					[
						new eui.SetProperty("_Image1","alpha",0),
						new eui.SetProperty("labelDisplay","textColor",0xffffff)
					])
			];
		}
		var _proto = RankSkin$Skin57.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			this._Image1 = t;
			t.alpha = 1;
			t.percentHeight = 100;
			t.source = "dangan_yeqian_btn00_png";
			t.percentWidth = 100;
			return t;
		};
		_proto.labelDisplay_i = function () {
			var t = new eui.Label();
			this.labelDisplay = t;
			t.fontFamily = "fangzheng";
			t.horizontalCenter = 0;
			t.size = 28;
			t.textColor = 0x141311;
			t.verticalCenter = 0;
			return t;
		};
		return RankSkin$Skin57;
	})(eui.Skin);

	var RankSkin$Skin58 = 	(function (_super) {
		__extends(RankSkin$Skin58, _super);
		function RankSkin$Skin58() {
			_super.call(this);
			this.skinParts = ["labelDisplay"];
			
			this.elementsContent = [this._Image1_i(),this.labelDisplay_i()];
			this.states = [
				new eui.State ("up",
					[
					])
				,
				new eui.State ("down",
					[
						new eui.SetProperty("_Image1","source","dangan_yeqian_btn02_png")
					])
				,
				new eui.State ("disabled",
					[
					])
				,
				new eui.State ("false",
					[
						new eui.SetProperty("_Image1","alpha",0),
						new eui.SetProperty("labelDisplay","textColor",0x999999)
					])
				,
				new eui.State ("move",
					[
						new eui.SetProperty("_Image1","alpha",0),
						new eui.SetProperty("labelDisplay","textColor",0xffffff)
					])
			];
		}
		var _proto = RankSkin$Skin58.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			this._Image1 = t;
			t.alpha = 1;
			t.percentHeight = 100;
			t.source = "dangan_yeqian_btn00_png";
			t.percentWidth = 100;
			return t;
		};
		_proto.labelDisplay_i = function () {
			var t = new eui.Label();
			this.labelDisplay = t;
			t.fontFamily = "fangzheng";
			t.horizontalCenter = 0;
			t.size = 28;
			t.textColor = 0x141311;
			t.verticalCenter = 0;
			return t;
		};
		return RankSkin$Skin58;
	})(eui.Skin);

	var RankSkin$Skin59 = 	(function (_super) {
		__extends(RankSkin$Skin59, _super);
		function RankSkin$Skin59() {
			_super.call(this);
			this.skinParts = ["labelDisplay"];
			
			this.elementsContent = [this._Image1_i(),this._Image2_i(),this.labelDisplay_i()];
			this.states = [
				new eui.State ("up",
					[
					])
				,
				new eui.State ("down",
					[
					])
				,
				new eui.State ("disabled",
					[
					])
				,
				new eui.State ("false",
					[
						new eui.SetProperty("_Image1","alpha",0),
						new eui.SetProperty("_Image2","alpha",0),
						new eui.SetProperty("labelDisplay","textColor",0x787878)
					])
				,
				new eui.State ("move",
					[
						new eui.SetProperty("_Image1","alpha",0)
					])
			];
		}
		var _proto = RankSkin$Skin59.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			this._Image1 = t;
			t.alpha = 1;
			t.height = 38;
			t.source = "paihangbang_tansuodu_xuanzhongditu_png";
			t.width = 138;
			return t;
		};
		_proto._Image2_i = function () {
			var t = new eui.Image();
			this._Image2 = t;
			t.alpha = 1;
			t.bottom = 0;
			t.height = 2;
			t.source = "paihangbang_tansuodu_biaoqianxuanzhongxian_png";
			t.width = 138;
			return t;
		};
		_proto.labelDisplay_i = function () {
			var t = new eui.Label();
			this.labelDisplay = t;
			t.fontFamily = "Microsoft Yahei";
			t.horizontalCenter = 0;
			t.size = 20;
			t.textColor = 0xffffff;
			t.verticalCenter = 0;
			return t;
		};
		return RankSkin$Skin59;
	})(eui.Skin);

	var RankSkin$Skin60 = 	(function (_super) {
		__extends(RankSkin$Skin60, _super);
		function RankSkin$Skin60() {
			_super.call(this);
			this.skinParts = ["labelDisplay"];
			
			this.elementsContent = [this._Image1_i(),this._Image2_i(),this.labelDisplay_i()];
			this.states = [
				new eui.State ("up",
					[
					])
				,
				new eui.State ("down",
					[
					])
				,
				new eui.State ("disabled",
					[
					])
				,
				new eui.State ("false",
					[
						new eui.SetProperty("_Image1","alpha",0),
						new eui.SetProperty("_Image2","alpha",0),
						new eui.SetProperty("labelDisplay","textColor",0x787878)
					])
				,
				new eui.State ("move",
					[
						new eui.SetProperty("_Image1","alpha",0)
					])
			];
		}
		var _proto = RankSkin$Skin60.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			this._Image1 = t;
			t.alpha = 1;
			t.height = 38;
			t.source = "paihangbang_tansuodu_xuanzhongditu_png";
			t.width = 138;
			return t;
		};
		_proto._Image2_i = function () {
			var t = new eui.Image();
			this._Image2 = t;
			t.alpha = 1;
			t.bottom = 0;
			t.height = 2;
			t.source = "paihangbang_tansuodu_biaoqianxuanzhongxian_png";
			t.width = 138;
			return t;
		};
		_proto.labelDisplay_i = function () {
			var t = new eui.Label();
			this.labelDisplay = t;
			t.fontFamily = "Microsoft Yahei";
			t.horizontalCenter = 0;
			t.size = 20;
			t.textColor = 0xffffff;
			t.verticalCenter = 0;
			return t;
		};
		return RankSkin$Skin60;
	})(eui.Skin);

	var RankSkin$Skin61 = 	(function (_super) {
		__extends(RankSkin$Skin61, _super);
		function RankSkin$Skin61() {
			_super.call(this);
			this.skinParts = ["labelDisplay"];
			
			this.elementsContent = [this._Image1_i(),this._Image2_i(),this.labelDisplay_i()];
			this.states = [
				new eui.State ("up",
					[
					])
				,
				new eui.State ("down",
					[
					])
				,
				new eui.State ("disabled",
					[
					])
				,
				new eui.State ("false",
					[
						new eui.SetProperty("_Image1","alpha",0),
						new eui.SetProperty("_Image2","alpha",0),
						new eui.SetProperty("labelDisplay","textColor",0x787878)
					])
				,
				new eui.State ("move",
					[
						new eui.SetProperty("_Image1","alpha",0)
					])
			];
		}
		var _proto = RankSkin$Skin61.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			this._Image1 = t;
			t.alpha = 1;
			t.height = 38;
			t.source = "paihangbang_tansuodu_xuanzhongditu_png";
			t.width = 138;
			return t;
		};
		_proto._Image2_i = function () {
			var t = new eui.Image();
			this._Image2 = t;
			t.alpha = 1;
			t.bottom = 0;
			t.height = 2;
			t.source = "paihangbang_tansuodu_biaoqianxuanzhongxian_png";
			t.width = 138;
			return t;
		};
		_proto.labelDisplay_i = function () {
			var t = new eui.Label();
			this.labelDisplay = t;
			t.fontFamily = "Microsoft Yahei";
			t.horizontalCenter = 0;
			t.size = 20;
			t.textColor = 0xffffff;
			t.verticalCenter = 0;
			return t;
		};
		return RankSkin$Skin61;
	})(eui.Skin);

	var RankSkin$Skin62 = 	(function (_super) {
		__extends(RankSkin$Skin62, _super);
		function RankSkin$Skin62() {
			_super.call(this);
			this.skinParts = ["labelDisplay"];
			
			this.elementsContent = [this._Image1_i(),this.labelDisplay_i()];
			this.states = [
				new eui.State ("up",
					[
					])
				,
				new eui.State ("down",
					[
						new eui.SetProperty("_Image1","source","paihangbang_button_xianhuabang_songhua02_png")
					])
				,
				new eui.State ("disabled",
					[
					])
				,
				new eui.State ("move",
					[
						new eui.SetProperty("_Image1","source","paihangbang_button_xianhuabang_songhua01_png")
					])
			];
		}
		var _proto = RankSkin$Skin62.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			this._Image1 = t;
			t.percentHeight = 100;
			t.source = "paihangbang_button_xianhuabang_songhua00_png";
			t.percentWidth = 100;
			return t;
		};
		_proto.labelDisplay_i = function () {
			var t = new eui.Label();
			this.labelDisplay = t;
			t.fontFamily = "Microsoft Yahei";
			t.horizontalCenter = 0;
			t.size = 20;
			t.textColor = 0x000000;
			t.verticalCenter = 0;
			return t;
		};
		return RankSkin$Skin62;
	})(eui.Skin);

	var RankSkin$Skin63 = 	(function (_super) {
		__extends(RankSkin$Skin63, _super);
		function RankSkin$Skin63() {
			_super.call(this);
			this.skinParts = ["labelDisplay"];
			
			this.elementsContent = [this._Image1_i(),this._Image2_i(),this.labelDisplay_i()];
			this.states = [
				new eui.State ("up",
					[
					])
				,
				new eui.State ("down",
					[
					])
				,
				new eui.State ("disabled",
					[
					])
				,
				new eui.State ("false",
					[
						new eui.SetProperty("_Image1","alpha",0),
						new eui.SetProperty("_Image2","alpha",0),
						new eui.SetProperty("labelDisplay","textColor",0x787878)
					])
				,
				new eui.State ("move",
					[
						new eui.SetProperty("_Image1","alpha",0)
					])
			];
		}
		var _proto = RankSkin$Skin63.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			this._Image1 = t;
			t.alpha = 1;
			t.height = 38;
			t.source = "paihangbang_tansuodu_xuanzhongditu_png";
			t.width = 138;
			return t;
		};
		_proto._Image2_i = function () {
			var t = new eui.Image();
			this._Image2 = t;
			t.alpha = 1;
			t.bottom = 0;
			t.height = 2;
			t.source = "paihangbang_tansuodu_biaoqianxuanzhongxian_png";
			t.width = 138;
			return t;
		};
		_proto.labelDisplay_i = function () {
			var t = new eui.Label();
			this.labelDisplay = t;
			t.fontFamily = "Microsoft Yahei";
			t.horizontalCenter = 0;
			t.size = 20;
			t.textColor = 0xffffff;
			t.verticalCenter = 0;
			return t;
		};
		return RankSkin$Skin63;
	})(eui.Skin);

	var RankSkin$Skin64 = 	(function (_super) {
		__extends(RankSkin$Skin64, _super);
		function RankSkin$Skin64() {
			_super.call(this);
			this.skinParts = ["labelDisplay"];
			
			this.elementsContent = [this._Image1_i(),this._Image2_i(),this.labelDisplay_i()];
			this.states = [
				new eui.State ("up",
					[
					])
				,
				new eui.State ("down",
					[
					])
				,
				new eui.State ("disabled",
					[
					])
				,
				new eui.State ("false",
					[
						new eui.SetProperty("_Image1","alpha",0),
						new eui.SetProperty("_Image2","alpha",0),
						new eui.SetProperty("labelDisplay","textColor",0x787878)
					])
				,
				new eui.State ("move",
					[
						new eui.SetProperty("_Image1","alpha",0)
					])
			];
		}
		var _proto = RankSkin$Skin64.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			this._Image1 = t;
			t.alpha = 1;
			t.height = 38;
			t.source = "paihangbang_tansuodu_xuanzhongditu_png";
			t.width = 138;
			return t;
		};
		_proto._Image2_i = function () {
			var t = new eui.Image();
			this._Image2 = t;
			t.alpha = 1;
			t.bottom = 0;
			t.height = 2;
			t.source = "paihangbang_tansuodu_biaoqianxuanzhongxian_png";
			t.width = 138;
			return t;
		};
		_proto.labelDisplay_i = function () {
			var t = new eui.Label();
			this.labelDisplay = t;
			t.fontFamily = "Microsoft Yahei";
			t.horizontalCenter = 0;
			t.size = 20;
			t.textColor = 0xffffff;
			t.verticalCenter = 0;
			return t;
		};
		return RankSkin$Skin64;
	})(eui.Skin);

	var RankSkin$Skin65 = 	(function (_super) {
		__extends(RankSkin$Skin65, _super);
		function RankSkin$Skin65() {
			_super.call(this);
			this.skinParts = ["labelDisplay"];
			
			this.elementsContent = [this._Image1_i(),this._Image2_i(),this.labelDisplay_i()];
			this.states = [
				new eui.State ("up",
					[
					])
				,
				new eui.State ("down",
					[
					])
				,
				new eui.State ("disabled",
					[
					])
				,
				new eui.State ("false",
					[
						new eui.SetProperty("_Image1","alpha",0),
						new eui.SetProperty("_Image2","alpha",0),
						new eui.SetProperty("labelDisplay","textColor",0x787878)
					])
				,
				new eui.State ("move",
					[
						new eui.SetProperty("_Image1","alpha",0)
					])
			];
		}
		var _proto = RankSkin$Skin65.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			this._Image1 = t;
			t.alpha = 1;
			t.height = 38;
			t.source = "paihangbang_tansuodu_xuanzhongditu_png";
			t.width = 138;
			return t;
		};
		_proto._Image2_i = function () {
			var t = new eui.Image();
			this._Image2 = t;
			t.alpha = 1;
			t.bottom = 0;
			t.height = 2;
			t.source = "paihangbang_tansuodu_biaoqianxuanzhongxian_png";
			t.width = 138;
			return t;
		};
		_proto.labelDisplay_i = function () {
			var t = new eui.Label();
			this.labelDisplay = t;
			t.fontFamily = "Microsoft Yahei";
			t.horizontalCenter = 0;
			t.size = 20;
			t.textColor = 0xffffff;
			t.verticalCenter = 0;
			return t;
		};
		return RankSkin$Skin65;
	})(eui.Skin);

	var RankSkin$Skin66 = 	(function (_super) {
		__extends(RankSkin$Skin66, _super);
		function RankSkin$Skin66() {
			_super.call(this);
			this.skinParts = ["labelDisplay"];
			
			this.elementsContent = [this._Image1_i(),this.labelDisplay_i()];
			this.states = [
				new eui.State ("up",
					[
					])
				,
				new eui.State ("down",
					[
						new eui.SetProperty("_Image1","source","paihangbang_button_xianhuabang_songhua02_png")
					])
				,
				new eui.State ("disabled",
					[
					])
				,
				new eui.State ("move",
					[
						new eui.SetProperty("_Image1","source","paihangbang_button_xianhuabang_songhua01_png")
					])
			];
		}
		var _proto = RankSkin$Skin66.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			this._Image1 = t;
			t.percentHeight = 100;
			t.source = "paihangbang_button_xianhuabang_songhua00_png";
			t.percentWidth = 100;
			return t;
		};
		_proto.labelDisplay_i = function () {
			var t = new eui.Label();
			this.labelDisplay = t;
			t.fontFamily = "Microsoft Yahei";
			t.horizontalCenter = 0;
			t.size = 20;
			t.textColor = 0x000000;
			t.verticalCenter = 0;
			return t;
		};
		return RankSkin$Skin66;
	})(eui.Skin);

	var RankSkin$Skin67 = 	(function (_super) {
		__extends(RankSkin$Skin67, _super);
		function RankSkin$Skin67() {
			_super.call(this);
			this.skinParts = ["labelDisplay"];
			
			this.elementsContent = [this._Image1_i(),this._Image2_i(),this.labelDisplay_i()];
			this.states = [
				new eui.State ("up",
					[
					])
				,
				new eui.State ("down",
					[
					])
				,
				new eui.State ("disabled",
					[
					])
				,
				new eui.State ("false",
					[
						new eui.SetProperty("_Image1","alpha",0),
						new eui.SetProperty("_Image2","alpha",0),
						new eui.SetProperty("labelDisplay","textColor",0x787878)
					])
				,
				new eui.State ("move",
					[
						new eui.SetProperty("_Image1","alpha",0)
					])
			];
		}
		var _proto = RankSkin$Skin67.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			this._Image1 = t;
			t.alpha = 1;
			t.height = 38;
			t.source = "paihangbang_tansuodu_xuanzhongditu_png";
			t.width = 138;
			return t;
		};
		_proto._Image2_i = function () {
			var t = new eui.Image();
			this._Image2 = t;
			t.alpha = 1;
			t.bottom = 0;
			t.height = 2;
			t.source = "paihangbang_tansuodu_biaoqianxuanzhongxian_png";
			t.width = 138;
			return t;
		};
		_proto.labelDisplay_i = function () {
			var t = new eui.Label();
			this.labelDisplay = t;
			t.fontFamily = "Microsoft Yahei";
			t.horizontalCenter = 0;
			t.size = 20;
			t.textColor = 0xffffff;
			t.verticalCenter = 0;
			return t;
		};
		return RankSkin$Skin67;
	})(eui.Skin);

	var RankSkin$Skin68 = 	(function (_super) {
		__extends(RankSkin$Skin68, _super);
		function RankSkin$Skin68() {
			_super.call(this);
			this.skinParts = ["labelDisplay"];
			
			this.elementsContent = [this._Image1_i(),this._Image2_i(),this.labelDisplay_i()];
			this.states = [
				new eui.State ("up",
					[
					])
				,
				new eui.State ("down",
					[
					])
				,
				new eui.State ("disabled",
					[
					])
				,
				new eui.State ("false",
					[
						new eui.SetProperty("_Image1","alpha",0),
						new eui.SetProperty("_Image2","alpha",0),
						new eui.SetProperty("labelDisplay","textColor",0x787878)
					])
				,
				new eui.State ("move",
					[
						new eui.SetProperty("_Image1","alpha",0)
					])
			];
		}
		var _proto = RankSkin$Skin68.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			this._Image1 = t;
			t.alpha = 1;
			t.height = 38;
			t.source = "paihangbang_tansuodu_xuanzhongditu_png";
			t.width = 138;
			return t;
		};
		_proto._Image2_i = function () {
			var t = new eui.Image();
			this._Image2 = t;
			t.alpha = 1;
			t.bottom = 0;
			t.height = 2;
			t.source = "paihangbang_tansuodu_biaoqianxuanzhongxian_png";
			t.width = 138;
			return t;
		};
		_proto.labelDisplay_i = function () {
			var t = new eui.Label();
			this.labelDisplay = t;
			t.fontFamily = "Microsoft Yahei";
			t.horizontalCenter = 0;
			t.size = 20;
			t.textColor = 0xffffff;
			t.verticalCenter = 0;
			return t;
		};
		return RankSkin$Skin68;
	})(eui.Skin);

	var RankSkin$Skin69 = 	(function (_super) {
		__extends(RankSkin$Skin69, _super);
		function RankSkin$Skin69() {
			_super.call(this);
			this.skinParts = ["labelDisplay"];
			
			this.elementsContent = [this._Image1_i(),this._Image2_i(),this.labelDisplay_i()];
			this.states = [
				new eui.State ("up",
					[
					])
				,
				new eui.State ("down",
					[
					])
				,
				new eui.State ("disabled",
					[
					])
				,
				new eui.State ("false",
					[
						new eui.SetProperty("_Image1","alpha",0),
						new eui.SetProperty("_Image2","alpha",0),
						new eui.SetProperty("labelDisplay","textColor",0x787878)
					])
				,
				new eui.State ("move",
					[
						new eui.SetProperty("_Image1","alpha",0)
					])
			];
		}
		var _proto = RankSkin$Skin69.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			this._Image1 = t;
			t.alpha = 1;
			t.height = 38;
			t.source = "paihangbang_tansuodu_xuanzhongditu_png";
			t.width = 138;
			return t;
		};
		_proto._Image2_i = function () {
			var t = new eui.Image();
			this._Image2 = t;
			t.alpha = 1;
			t.bottom = 0;
			t.height = 2;
			t.source = "paihangbang_tansuodu_biaoqianxuanzhongxian_png";
			t.width = 138;
			return t;
		};
		_proto.labelDisplay_i = function () {
			var t = new eui.Label();
			this.labelDisplay = t;
			t.fontFamily = "Microsoft Yahei";
			t.horizontalCenter = 0;
			t.size = 20;
			t.textColor = 0xffffff;
			t.verticalCenter = 0;
			return t;
		};
		return RankSkin$Skin69;
	})(eui.Skin);

	var RankSkin$Skin70 = 	(function (_super) {
		__extends(RankSkin$Skin70, _super);
		function RankSkin$Skin70() {
			_super.call(this);
			this.skinParts = ["labelDisplay"];
			
			this.elementsContent = [this._Rect1_i(),this._Image1_i(),this.labelDisplay_i()];
			this.states = [
				new eui.State ("up",
					[
					])
				,
				new eui.State ("down",
					[
						new eui.SetProperty("_Image1","source","tongyong_fanhui_icon02_png")
					])
				,
				new eui.State ("disabled",
					[
					])
				,
				new eui.State ("move",
					[
						new eui.SetProperty("_Image1","source","tongyong_fanhui_icon01_png")
					])
			];
		}
		var _proto = RankSkin$Skin70.prototype;

		_proto._Rect1_i = function () {
			var t = new eui.Rect();
			t.bottom = 0;
			t.fillAlpha = 0;
			t.left = 0;
			t.right = 0;
			t.top = 0;
			return t;
		};
		_proto._Image1_i = function () {
			var t = new eui.Image();
			this._Image1 = t;
			t.left = 29;
			t.source = "tongyong_fanhui_icon00_png";
			t.top = 3;
			return t;
		};
		_proto.labelDisplay_i = function () {
			var t = new eui.Label();
			this.labelDisplay = t;
			t.fontFamily = "fangzheng";
			t.size = 30;
			t.textColor = 0xffffff;
			t.verticalCenter = 0;
			t.x = 88;
			return t;
		};
		return RankSkin$Skin70;
	})(eui.Skin);

	function RankSkin() {
		_super.call(this);
		this.skinParts = ["btnExplore","btnFlower","btnEgg","gNav","btnExploreAll","btnExploreWeek","btnExploreDay","gExploreUserDay","gExploreUserAll","textUsedFlower","textUseFlower","textUsedEgg","textUseEgg","gDonate","textDonate","listExplore","sExplore","gTipsExploreTotal","gTipsExploreWeek","gTipsExploreDay","gExplore","listFlower","sFlower","textFlowerStaffName","textFlowerStaff","btnFlowerStaff","btnFlowerDay","btnFlowerWeek","btnFlowerAll","textFlowerUser","textFlowerAct","textFlowerUserDay","textFlowerUserWeek","textFlowerUserAll","textTipsFlower","listFlowerUser","sFlowerUser","gFlower","listEgg","sEgg","textEggStaffName","textEggStaff","btnEggStaff","btnEggDay","btnEggWeek","btnEggAll","textEggUser","textEggAct","textEggUserDay","textEggUserWeek","textEggUserAll","textTipsEgg","listEggUser","sEggUser","gEgg","gContent","btnReturn"];
		
		this.height = 1080;
		this.width = 1920;
		this.elementsContent = [this._Rect1_i(),this._Image1_i(),this._Image2_i(),this._Image3_i(),this.gContent_i(),this.btnReturn_i()];
	}
	var _proto = RankSkin.prototype;

	_proto._Rect1_i = function () {
		var t = new eui.Rect();
		t.bottom = 0;
		t.left = 0;
		t.right = 0;
		t.top = 0;
		return t;
	};
	_proto._Image1_i = function () {
		var t = new eui.Image();
		t.bottom = 0;
		t.left = 0;
		t.right = 0;
		t.source = "shezhi_bg1920_1080_jpg";
		t.top = 0;
		return t;
	};
	_proto._Image2_i = function () {
		var t = new eui.Image();
		t.left = 0;
		t.source = "tongyong_daohang_fenge_zuo_png";
		t.y = 62;
		return t;
	};
	_proto._Image3_i = function () {
		var t = new eui.Image();
		t.right = 0;
		t.source = "tongyong_daohang_fenge_you_png";
		t.y = 62;
		return t;
	};
	_proto.gContent_i = function () {
		var t = new eui.Group();
		this.gContent = t;
		t.height = 1080;
		t.horizontalCenter = 0;
		t.verticalCenter = 0;
		t.width = 1920;
		t.elementsContent = [this.gNav_i(),this.gExplore_i(),this.gFlower_i(),this.gEgg_i()];
		return t;
	};
	_proto.gNav_i = function () {
		var t = new eui.Group();
		this.gNav = t;
		t.height = 731;
		t.x = 189;
		t.y = 214;
		t.elementsContent = [this._Image4_i(),this.btnExplore_i(),this.btnFlower_i(),this.btnEgg_i()];
		return t;
	};
	_proto._Image4_i = function () {
		var t = new eui.Image();
		t.height = 731;
		t.scale9Grid = new egret.Rectangle(0,102,62,615);
		t.source = "dangan_yeqian_png";
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto.btnExplore_i = function () {
		var t = new eui.Button();
		this.btnExplore = t;
		t.currentState = "false";
		t.label = "探\n索\n榜";
		t.x = 0;
		t.y = 0;
		t.skinName = RankSkin$Skin56;
		return t;
	};
	_proto.btnFlower_i = function () {
		var t = new eui.Button();
		this.btnFlower = t;
		t.currentState = "false";
		t.label = "鲜\n花\n榜";
		t.x = 0;
		t.y = 244;
		t.skinName = RankSkin$Skin57;
		return t;
	};
	_proto.btnEgg_i = function () {
		var t = new eui.Button();
		this.btnEgg = t;
		t.bottom = 0;
		t.currentState = "false";
		t.label = "鸡\n蛋\n榜";
		t.x = 0;
		t.skinName = RankSkin$Skin58;
		return t;
	};
	_proto.gExplore_i = function () {
		var t = new eui.Group();
		this.gExplore = t;
		t.height = 890;
		t.visible = false;
		t.width = 1445;
		t.x = 287;
		t.y = 125;
		t.elementsContent = [this._Image5_i(),this._Image6_i(),this._Group1_i(),this.gExploreUserDay_i(),this.gDonate_i(),this._Group5_i(),this.sExplore_i(),this.gTipsExploreTotal_i(),this.gTipsExploreWeek_i(),this.gTipsExploreDay_i()];
		return t;
	};
	_proto._Image5_i = function () {
		var t = new eui.Image();
		t.left = 0;
		t.right = 0;
		t.scale9Grid = new egret.Rectangle(12,5,76,30);
		t.source = "paihangbang_tansuodu_biaoqianditu_png";
		t.top = 0;
		return t;
	};
	_proto._Image6_i = function () {
		var t = new eui.Image();
		t.left = 0;
		t.right = 0;
		t.scale9Grid = new egret.Rectangle(12,4,76,26);
		t.source = "paihangbang_tansuodu_paimingtitle_png";
		t.y = 40;
		return t;
	};
	_proto._Group1_i = function () {
		var t = new eui.Group();
		t.x = 0;
		t.y = 0;
		t.layout = this._HorizontalLayout1_i();
		t.elementsContent = [this.btnExploreAll_i(),this.btnExploreWeek_i(),this.btnExploreDay_i()];
		return t;
	};
	_proto._HorizontalLayout1_i = function () {
		var t = new eui.HorizontalLayout();
		t.gap = 0;
		return t;
	};
	_proto.btnExploreAll_i = function () {
		var t = new eui.Button();
		this.btnExploreAll = t;
		t.height = 40;
		t.label = "总榜TOP100";
		t.width = 138;
		t.x = 0;
		t.y = 0;
		t.skinName = RankSkin$Skin59;
		return t;
	};
	_proto.btnExploreWeek_i = function () {
		var t = new eui.Button();
		this.btnExploreWeek = t;
		t.height = 40;
		t.label = "周榜TOP50";
		t.width = 138;
		t.x = 0;
		t.y = 0;
		t.skinName = RankSkin$Skin60;
		return t;
	};
	_proto.btnExploreDay_i = function () {
		var t = new eui.Button();
		this.btnExploreDay = t;
		t.height = 40;
		t.label = "日榜TOP20";
		t.width = 138;
		t.x = 138;
		t.y = 0;
		t.skinName = RankSkin$Skin61;
		return t;
	};
	_proto.gExploreUserDay_i = function () {
		var t = new eui.Group();
		this.gExploreUserDay = t;
		t.height = 40;
		t.right = 40;
		t.visible = false;
		t.x = 0;
		t.y = 0;
		t.layout = this._HorizontalLayout2_i();
		t.elementsContent = [this._Label1_i(),this._Label2_i(),this._Label3_i()];
		return t;
	};
	_proto._HorizontalLayout2_i = function () {
		var t = new eui.HorizontalLayout();
		t.gap = 32;
		t.verticalAlign = "middle";
		return t;
	};
	_proto._Label1_i = function () {
		var t = new eui.Label();
		t.fontFamily = "Microsoft YaHei";
		t.size = 20;
		t.text = "";
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto._Label2_i = function () {
		var t = new eui.Label();
		t.fontFamily = "Microsoft YaHei";
		t.size = 20;
		t.text = "";
		t.x = 98;
		t.y = 4;
		return t;
	};
	_proto._Label3_i = function () {
		var t = new eui.Label();
		t.fontFamily = "Microsoft YaHei";
		t.size = 18;
		t.text = "";
		t.textColor = 0xa8a8a8;
		t.x = 194;
		t.y = 0;
		return t;
	};
	_proto.gDonate_i = function () {
		var t = new eui.Group();
		this.gDonate = t;
		t.right = 15;
		t.visible = false;
		t.y = 6;
		t.layout = this._HorizontalLayout7_i();
		t.elementsContent = [this.gExploreUserAll_i(),this._Group4_i()];
		return t;
	};
	_proto._HorizontalLayout7_i = function () {
		var t = new eui.HorizontalLayout();
		t.gap = 20;
		t.verticalAlign = "middle";
		return t;
	};
	_proto.gExploreUserAll_i = function () {
		var t = new eui.Group();
		this.gExploreUserAll = t;
		t.layout = this._HorizontalLayout3_i();
		t.elementsContent = [this._Label4_i(),this._Label5_i(),this._Label6_i()];
		return t;
	};
	_proto._HorizontalLayout3_i = function () {
		var t = new eui.HorizontalLayout();
		t.gap = 10;
		t.verticalAlign = "middle";
		return t;
	};
	_proto._Label4_i = function () {
		var t = new eui.Label();
		t.fontFamily = "Microsoft YaHei";
		t.size = 18;
		t.text = "";
		return t;
	};
	_proto._Label5_i = function () {
		var t = new eui.Label();
		t.fontFamily = "Microsoft YaHei";
		t.size = 20;
		t.text = "";
		return t;
	};
	_proto._Label6_i = function () {
		var t = new eui.Label();
		t.fontFamily = "Microsoft YaHei";
		t.size = 18;
		t.text = "";
		t.textColor = 0xa8a8a8;
		return t;
	};
	_proto._Group4_i = function () {
		var t = new eui.Group();
		t.layout = this._HorizontalLayout6_i();
		t.elementsContent = [this.textUsedFlower_i(),this._Group2_i(),this.textUsedEgg_i(),this._Group3_i()];
		return t;
	};
	_proto._HorizontalLayout6_i = function () {
		var t = new eui.HorizontalLayout();
		t.gap = 10;
		t.verticalAlign = "middle";
		return t;
	};
	_proto.textUsedFlower_i = function () {
		var t = new eui.Label();
		this.textUsedFlower = t;
		t.fontFamily = "Microsoft YaHei";
		t.size = 18;
		t.text = "";
		t.textColor = 0xa8a8a8;
		return t;
	};
	_proto._Group2_i = function () {
		var t = new eui.Group();
		t.layout = this._HorizontalLayout4_i();
		t.elementsContent = [this._Image7_i(),this.textUseFlower_i()];
		return t;
	};
	_proto._HorizontalLayout4_i = function () {
		var t = new eui.HorizontalLayout();
		t.gap = 10;
		t.paddingRight = 10;
		t.verticalAlign = "middle";
		return t;
	};
	_proto._Image7_i = function () {
		var t = new eui.Image();
		t.source = "paihangbang_xiaoxianhua_icon_png";
		t.x = 0;
		return t;
	};
	_proto.textUseFlower_i = function () {
		var t = new eui.Label();
		this.textUseFlower = t;
		t.fontFamily = "Microsoft YaHei";
		t.size = 18;
		t.text = "";
		t.textColor = 0xa8a8a8;
		t.verticalCenter = 0;
		t.x = 39;
		return t;
	};
	_proto.textUsedEgg_i = function () {
		var t = new eui.Label();
		this.textUsedEgg = t;
		t.fontFamily = "Microsoft YaHei";
		t.size = 18;
		t.text = "";
		t.textColor = 0xa8a8a8;
		return t;
	};
	_proto._Group3_i = function () {
		var t = new eui.Group();
		t.layout = this._HorizontalLayout5_i();
		t.elementsContent = [this._Image8_i(),this.textUseEgg_i()];
		return t;
	};
	_proto._HorizontalLayout5_i = function () {
		var t = new eui.HorizontalLayout();
		t.gap = 10;
		t.verticalAlign = "middle";
		return t;
	};
	_proto._Image8_i = function () {
		var t = new eui.Image();
		t.source = "paihangbang_xiaojidan_icon_png";
		t.x = 0;
		return t;
	};
	_proto.textUseEgg_i = function () {
		var t = new eui.Label();
		this.textUseEgg = t;
		t.fontFamily = "Microsoft YaHei";
		t.size = 18;
		t.text = "";
		t.textColor = 0xa8a8a8;
		t.verticalCenter = 0;
		t.x = 39;
		return t;
	};
	_proto._Group5_i = function () {
		var t = new eui.Group();
		t.height = 36;
		t.left = 0;
		t.right = 0;
		t.y = 40;
		t.elementsContent = [this._Label7_i(),this._Label8_i(),this._Label9_i(),this.textDonate_i()];
		return t;
	};
	_proto._Label7_i = function () {
		var t = new eui.Label();
		t.fontFamily = "fangzheng";
		t.size = 20;
		t.text = "排名";
		t.textColor = 0x787878;
		t.verticalCenter = 0;
		t.x = 28;
		return t;
	};
	_proto._Label8_i = function () {
		var t = new eui.Label();
		t.fontFamily = "fangzheng";
		t.size = 20;
		t.text = "昵称";
		t.textColor = 0x787878;
		t.verticalCenter = 0;
		t.x = 211;
		return t;
	};
	_proto._Label9_i = function () {
		var t = new eui.Label();
		t.fontFamily = "fangzheng";
		t.size = 20;
		t.text = "探索度";
		t.textColor = 0x787878;
		t.verticalCenter = 0;
		t.visible = false;
		t.x = 545;
		return t;
	};
	_proto.textDonate_i = function () {
		var t = new eui.Label();
		this.textDonate = t;
		t.fontFamily = "fangzheng";
		t.size = 20;
		t.text = "贡献度";
		t.textColor = 0x787878;
		t.verticalCenter = 0;
		t.x = 940;
		return t;
	};
	_proto.sExplore_i = function () {
		var t = new eui.Scroller();
		this.sExplore = t;
		t.bounces = false;
		t.height = 820;
		t.width = 1445;
		t.x = 0;
		t.y = 74;
		t.viewport = this._Group6_i();
		return t;
	};
	_proto._Group6_i = function () {
		var t = new eui.Group();
		t.elementsContent = [this.listExplore_i()];
		return t;
	};
	_proto.listExplore_i = function () {
		var t = new eui.List();
		this.listExplore = t;
		t.left = 0;
		t.right = 0;
		t.scaleX = 1;
		t.scaleY = 1;
		t.y = 0;
		t.layout = this._VerticalLayout1_i();
		return t;
	};
	_proto._VerticalLayout1_i = function () {
		var t = new eui.VerticalLayout();
		t.gap = 0;
		return t;
	};
	_proto.gTipsExploreTotal_i = function () {
		var t = new eui.Group();
		this.gTipsExploreTotal = t;
		t.right = 3;
		t.visible = false;
		t.y = 910;
		t.layout = this._HorizontalLayout8_i();
		t.elementsContent = [this._Label10_i(),this._Label11_i(),this._Label12_i()];
		return t;
	};
	_proto._HorizontalLayout8_i = function () {
		var t = new eui.HorizontalLayout();
		t.gap = 20;
		return t;
	};
	_proto._Label10_i = function () {
		var t = new eui.Label();
		t.fontFamily = "Microsoft YaHei";
		t.size = 16;
		t.text = "1.玩家以贡献度进行排名";
		t.textColor = 0x878787;
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto._Label11_i = function () {
		var t = new eui.Label();
		t.fontFamily = "Microsoft YaHei";
		t.size = 16;
		t.text = "|";
		t.textColor = 0x878787;
		t.x = 343;
		t.y = 5;
		return t;
	};
	_proto._Label12_i = function () {
		var t = new eui.Label();
		t.fontFamily = "Microsoft YaHei";
		t.size = 16;
		t.text = "2.贡献度 = 探索度 +（历史送花+历史砸蛋）/10000";
		t.textColor = 0x878787;
		t.x = 287;
		t.y = 0;
		return t;
	};
	_proto.gTipsExploreWeek_i = function () {
		var t = new eui.Group();
		this.gTipsExploreWeek = t;
		t.right = 3;
		t.visible = false;
		t.y = 910;
		t.layout = this._HorizontalLayout9_i();
		t.elementsContent = [this._Label13_i(),this._Label14_i(),this._Label15_i()];
		return t;
	};
	_proto._HorizontalLayout9_i = function () {
		var t = new eui.HorizontalLayout();
		t.gap = 20;
		return t;
	};
	_proto._Label13_i = function () {
		var t = new eui.Label();
		t.fontFamily = "Microsoft YaHei";
		t.size = 16;
		t.text = "1.玩家以本周贡献度进行排名";
		t.textColor = 0x878787;
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto._Label14_i = function () {
		var t = new eui.Label();
		t.fontFamily = "Microsoft YaHei";
		t.size = 16;
		t.text = "|";
		t.textColor = 0x878787;
		t.x = 343;
		t.y = 5;
		return t;
	};
	_proto._Label15_i = function () {
		var t = new eui.Label();
		t.fontFamily = "Microsoft YaHei";
		t.size = 16;
		t.text = "2.本周贡献度 = 探索度 +（本周送花+本周砸蛋）/10000";
		t.textColor = 0x878787;
		t.x = 287;
		t.y = 0;
		return t;
	};
	_proto.gTipsExploreDay_i = function () {
		var t = new eui.Group();
		this.gTipsExploreDay = t;
		t.right = 3;
		t.visible = false;
		t.y = 910;
		t.layout = this._HorizontalLayout10_i();
		t.elementsContent = [this._Label16_i(),this._Label17_i(),this._Label18_i()];
		return t;
	};
	_proto._HorizontalLayout10_i = function () {
		var t = new eui.HorizontalLayout();
		t.gap = 20;
		return t;
	};
	_proto._Label16_i = function () {
		var t = new eui.Label();
		t.fontFamily = "Microsoft YaHei";
		t.size = 16;
		t.text = "1.榜单统计当天所有登陆用户的探索度排名";
		t.textColor = 0x878787;
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto._Label17_i = function () {
		var t = new eui.Label();
		t.fontFamily = "Microsoft YaHei";
		t.size = 16;
		t.text = "|";
		t.textColor = 0x878787;
		t.x = 343;
		t.y = 5;
		return t;
	};
	_proto._Label18_i = function () {
		var t = new eui.Label();
		t.fontFamily = "Microsoft YaHei";
		t.size = 16;
		t.text = "2.探索度相同时，当天较早达成的排名在前";
		t.textColor = 0x878787;
		t.x = 287;
		t.y = 0;
		return t;
	};
	_proto.gFlower_i = function () {
		var t = new eui.Group();
		this.gFlower = t;
		t.visible = false;
		t.x = 287;
		t.y = 125;
		t.elementsContent = [this._Image9_i(),this._Label19_i(),this.sFlower_i(),this._Group9_i(),this._Group15_i(),this.sFlowerUser_i(),this._Label23_i()];
		return t;
	};
	_proto._Image9_i = function () {
		var t = new eui.Image();
		t.height = 40;
		t.source = "paihangbang_xianhuabang_juesepaimingditu_png";
		t.width = 458;
		return t;
	};
	_proto._Label19_i = function () {
		var t = new eui.Label();
		t.fontFamily = "fangzheng";
		t.size = 20;
		t.text = "角色鲜花排名";
		t.x = 28;
		t.y = 9;
		return t;
	};
	_proto.sFlower_i = function () {
		var t = new eui.Scroller();
		this.sFlower = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.bounces = false;
		t.height = 740;
		t.width = 458;
		t.x = 0;
		t.y = 40;
		t.viewport = this._Group7_i();
		return t;
	};
	_proto._Group7_i = function () {
		var t = new eui.Group();
		t.elementsContent = [this.listFlower_i()];
		return t;
	};
	_proto.listFlower_i = function () {
		var t = new eui.List();
		this.listFlower = t;
		t.left = 0;
		t.right = 0;
		t.y = 0;
		t.layout = this._VerticalLayout2_i();
		return t;
	};
	_proto._VerticalLayout2_i = function () {
		var t = new eui.VerticalLayout();
		t.gap = 3;
		return t;
	};
	_proto._Group9_i = function () {
		var t = new eui.Group();
		t.x = 0;
		t.y = 780;
		t.elementsContent = [this._Image10_i(),this._Image11_i(),this.textFlowerStaffName_i(),this._Group8_i(),this.btnFlowerStaff_i()];
		return t;
	};
	_proto._Image10_i = function () {
		var t = new eui.Image();
		t.height = 112;
		t.scale9Grid = new egret.Rectangle(57,0,344,66);
		t.source = "paihangbang_xianhuabang_xiangmuzuditu_png";
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto._Image11_i = function () {
		var t = new eui.Image();
		t.height = 70;
		t.source = "https://www.npcstudio.cn/images/rank/touxiangjuzu.png";
		t.width = 70;
		t.x = 30;
		t.y = 22;
		return t;
	};
	_proto.textFlowerStaffName_i = function () {
		var t = new eui.Label();
		this.textFlowerStaffName = t;
		t.fontFamily = "Microsoft YaHei";
		t.size = 20;
		t.text = "《隐形守护者》项目组";
		t.x = 115;
		t.y = 29;
		return t;
	};
	_proto._Group8_i = function () {
		var t = new eui.Group();
		t.x = 115;
		t.y = 57;
		t.elementsContent = [this._Image12_i(),this.textFlowerStaff_i()];
		return t;
	};
	_proto._Image12_i = function () {
		var t = new eui.Image();
		t.height = 29;
		t.source = "paihangbang_xiaoxianhua_icon_png";
		t.width = 29;
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto.textFlowerStaff_i = function () {
		var t = new eui.Label();
		this.textFlowerStaff = t;
		t.fontFamily = "Microsoft YaHei";
		t.size = 20;
		t.text = "";
		t.verticalCenter = 0;
		t.x = 39;
		return t;
	};
	_proto.btnFlowerStaff_i = function () {
		var t = new eui.Button();
		this.btnFlowerStaff = t;
		t.label = "送鲜花";
		t.x = 321;
		t.y = 43;
		t.skinName = RankSkin$Skin62;
		return t;
	};
	_proto._Group15_i = function () {
		var t = new eui.Group();
		t.width = 970;
		t.x = 475;
		t.y = 0;
		t.elementsContent = [this._Image13_i(),this._Image14_i(),this._Group10_i(),this._Group13_i(),this._Group14_i(),this.textTipsFlower_i()];
		return t;
	};
	_proto._Image13_i = function () {
		var t = new eui.Image();
		t.left = 0;
		t.right = 0;
		t.scale9Grid = new egret.Rectangle(12,5,76,30);
		t.source = "paihangbang_tansuodu_biaoqianditu_png";
		return t;
	};
	_proto._Image14_i = function () {
		var t = new eui.Image();
		t.left = 0;
		t.right = 0;
		t.scale9Grid = new egret.Rectangle(12,4,76,26);
		t.source = "paihangbang_tansuodu_paimingtitle_png";
		t.y = 40;
		return t;
	};
	_proto._Group10_i = function () {
		var t = new eui.Group();
		t.x = 0;
		t.y = 0;
		t.layout = this._HorizontalLayout11_i();
		t.elementsContent = [this.btnFlowerDay_i(),this.btnFlowerWeek_i(),this.btnFlowerAll_i()];
		return t;
	};
	_proto._HorizontalLayout11_i = function () {
		var t = new eui.HorizontalLayout();
		t.gap = 0;
		return t;
	};
	_proto.btnFlowerDay_i = function () {
		var t = new eui.Button();
		this.btnFlowerDay = t;
		t.height = 40;
		t.label = "送花日榜";
		t.width = 138;
		t.x = 0;
		t.y = 0;
		t.skinName = RankSkin$Skin63;
		return t;
	};
	_proto.btnFlowerWeek_i = function () {
		var t = new eui.Button();
		this.btnFlowerWeek = t;
		t.height = 40;
		t.label = "送花周榜";
		t.width = 138;
		t.x = 0;
		t.y = 0;
		t.skinName = RankSkin$Skin64;
		return t;
	};
	_proto.btnFlowerAll_i = function () {
		var t = new eui.Button();
		this.btnFlowerAll = t;
		t.height = 40;
		t.label = "送花总榜";
		t.width = 138;
		t.x = 138;
		t.y = 0;
		t.skinName = RankSkin$Skin65;
		return t;
	};
	_proto._Group13_i = function () {
		var t = new eui.Group();
		t.height = 40;
		t.right = 15;
		t.scaleX = 1;
		t.scaleY = 1;
		t.layout = this._HorizontalLayout13_i();
		t.elementsContent = [this.textFlowerUser_i(),this._Group12_i()];
		return t;
	};
	_proto._HorizontalLayout13_i = function () {
		var t = new eui.HorizontalLayout();
		t.gap = 32;
		t.verticalAlign = "middle";
		return t;
	};
	_proto.textFlowerUser_i = function () {
		var t = new eui.Label();
		this.textFlowerUser = t;
		t.fontFamily = "Microsoft YaHei";
		t.size = 20;
		t.text = "";
		t.x = 364;
		t.y = 7;
		return t;
	};
	_proto._Group12_i = function () {
		var t = new eui.Group();
		t.x = 0;
		t.y = 0;
		t.layout = this._HorizontalLayout12_i();
		t.elementsContent = [this.textFlowerAct_i(),this._Image15_i(),this._Group11_i()];
		return t;
	};
	_proto._HorizontalLayout12_i = function () {
		var t = new eui.HorizontalLayout();
		t.gap = 10;
		t.verticalAlign = "middle";
		return t;
	};
	_proto.textFlowerAct_i = function () {
		var t = new eui.Label();
		this.textFlowerAct = t;
		t.fontFamily = "Microsoft YaHei";
		t.size = 18;
		t.text = "";
		t.textColor = 0xa8a8a8;
		t.x = 446;
		t.y = 3;
		return t;
	};
	_proto._Image15_i = function () {
		var t = new eui.Image();
		t.source = "paihangbang_xiaoxianhua_icon_png";
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto._Group11_i = function () {
		var t = new eui.Group();
		t.x = 49;
		t.y = 15;
		t.elementsContent = [this.textFlowerUserDay_i(),this.textFlowerUserWeek_i(),this.textFlowerUserAll_i()];
		return t;
	};
	_proto.textFlowerUserDay_i = function () {
		var t = new eui.Label();
		this.textFlowerUserDay = t;
		t.fontFamily = "Microsoft YaHei";
		t.size = 18;
		t.text = "";
		t.textColor = 0xa8a8a8;
		t.visible = false;
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto.textFlowerUserWeek_i = function () {
		var t = new eui.Label();
		this.textFlowerUserWeek = t;
		t.fontFamily = "Microsoft YaHei";
		t.size = 18;
		t.text = "";
		t.textColor = 0xa8a8a8;
		t.visible = false;
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto.textFlowerUserAll_i = function () {
		var t = new eui.Label();
		this.textFlowerUserAll = t;
		t.fontFamily = "Microsoft YaHei";
		t.size = 18;
		t.text = "";
		t.textColor = 0xa8a8a8;
		t.visible = false;
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto._Group14_i = function () {
		var t = new eui.Group();
		t.height = 36;
		t.left = 0;
		t.right = 0;
		t.y = 40;
		t.elementsContent = [this._Label20_i(),this._Label21_i(),this._Label22_i()];
		return t;
	};
	_proto._Label20_i = function () {
		var t = new eui.Label();
		t.fontFamily = "fangzheng";
		t.size = 20;
		t.text = "排名";
		t.textColor = 0x787878;
		t.verticalCenter = 0;
		t.x = 28;
		return t;
	};
	_proto._Label21_i = function () {
		var t = new eui.Label();
		t.fontFamily = "fangzheng";
		t.size = 20;
		t.text = "昵称";
		t.textColor = 0x787878;
		t.verticalCenter = 0;
		t.x = 211;
		return t;
	};
	_proto._Label22_i = function () {
		var t = new eui.Label();
		t.fontFamily = "fangzheng";
		t.size = 20;
		t.text = "鲜花";
		t.textColor = 0x787878;
		t.verticalCenter = 0;
		t.x = 492;
		return t;
	};
	_proto.textTipsFlower_i = function () {
		var t = new eui.Label();
		this.textTipsFlower = t;
		t.fontFamily = "Microsoft YaHei";
		t.right = 3;
		t.size = 16;
		t.text = "每日24:00结算时，日榜前3名可解锁全部章节";
		t.textColor = 0x878787;
		t.visible = false;
		t.y = 910;
		return t;
	};
	_proto.sFlowerUser_i = function () {
		var t = new eui.Scroller();
		this.sFlowerUser = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.bounces = false;
		t.height = 820;
		t.width = 970;
		t.x = 475;
		t.y = 73;
		t.viewport = this._Group16_i();
		return t;
	};
	_proto._Group16_i = function () {
		var t = new eui.Group();
		t.elementsContent = [this.listFlowerUser_i()];
		return t;
	};
	_proto.listFlowerUser_i = function () {
		var t = new eui.List();
		this.listFlowerUser = t;
		t.left = 0;
		t.right = 0;
		t.y = 0;
		return t;
	};
	_proto._Label23_i = function () {
		var t = new eui.Label();
		t.fontFamily = "Microsoft YaHei";
		t.size = 16;
		t.text = "给喜欢的角色打赏小鲜花~  |   打赏剧组给制作人员加个鸡腿";
		t.textColor = 0x6f6f6e;
		t.x = 0;
		t.y = 900;
		return t;
	};
	_proto.gEgg_i = function () {
		var t = new eui.Group();
		this.gEgg = t;
		t.visible = false;
		t.x = 287;
		t.y = 125;
		t.elementsContent = [this._Image16_i(),this._Label24_i(),this.sEgg_i(),this._Group19_i(),this._Group25_i(),this.sEggUser_i(),this._Label28_i()];
		return t;
	};
	_proto._Image16_i = function () {
		var t = new eui.Image();
		t.height = 40;
		t.source = "paihangbang_xianhuabang_juesepaimingditu_png";
		t.width = 458;
		return t;
	};
	_proto._Label24_i = function () {
		var t = new eui.Label();
		t.fontFamily = "fangzheng";
		t.size = 20;
		t.text = "角色鸡蛋排名";
		t.x = 28;
		t.y = 9;
		return t;
	};
	_proto.sEgg_i = function () {
		var t = new eui.Scroller();
		this.sEgg = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.bounces = false;
		t.height = 740;
		t.width = 458;
		t.x = 0;
		t.y = 40;
		t.viewport = this._Group17_i();
		return t;
	};
	_proto._Group17_i = function () {
		var t = new eui.Group();
		t.elementsContent = [this.listEgg_i()];
		return t;
	};
	_proto.listEgg_i = function () {
		var t = new eui.List();
		this.listEgg = t;
		t.left = 0;
		t.right = 0;
		t.y = 0;
		t.layout = this._VerticalLayout3_i();
		return t;
	};
	_proto._VerticalLayout3_i = function () {
		var t = new eui.VerticalLayout();
		t.gap = 3;
		return t;
	};
	_proto._Group19_i = function () {
		var t = new eui.Group();
		t.x = 0;
		t.y = 780;
		t.elementsContent = [this._Image17_i(),this._Image18_i(),this.textEggStaffName_i(),this._Group18_i(),this.btnEggStaff_i()];
		return t;
	};
	_proto._Image17_i = function () {
		var t = new eui.Image();
		t.height = 112;
		t.scale9Grid = new egret.Rectangle(57,0,344,66);
		t.source = "paihangbang_xianhuabang_xiangmuzuditu_png";
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto._Image18_i = function () {
		var t = new eui.Image();
		t.height = 70;
		t.source = "https://www.npcstudio.cn/images/rank/touxiangjuzu.png";
		t.width = 70;
		t.x = 30;
		t.y = 22;
		return t;
	};
	_proto.textEggStaffName_i = function () {
		var t = new eui.Label();
		this.textEggStaffName = t;
		t.fontFamily = "Microsoft YaHei";
		t.size = 20;
		t.text = "《隐形守护者》项目组";
		t.x = 115;
		t.y = 29;
		return t;
	};
	_proto._Group18_i = function () {
		var t = new eui.Group();
		t.x = 115;
		t.y = 57;
		t.elementsContent = [this._Image19_i(),this.textEggStaff_i()];
		return t;
	};
	_proto._Image19_i = function () {
		var t = new eui.Image();
		t.height = 29;
		t.source = "paihangbang_xiaojidan_icon_png";
		t.width = 29;
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto.textEggStaff_i = function () {
		var t = new eui.Label();
		this.textEggStaff = t;
		t.fontFamily = "Microsoft YaHei";
		t.size = 20;
		t.text = "";
		t.verticalCenter = 0;
		t.x = 39;
		return t;
	};
	_proto.btnEggStaff_i = function () {
		var t = new eui.Button();
		this.btnEggStaff = t;
		t.label = "砸鸡蛋";
		t.x = 321;
		t.y = 43;
		t.skinName = RankSkin$Skin66;
		return t;
	};
	_proto._Group25_i = function () {
		var t = new eui.Group();
		t.width = 970;
		t.x = 475;
		t.y = 0;
		t.elementsContent = [this._Image20_i(),this._Image21_i(),this._Group20_i(),this._Group23_i(),this._Group24_i(),this.textTipsEgg_i()];
		return t;
	};
	_proto._Image20_i = function () {
		var t = new eui.Image();
		t.left = 0;
		t.right = 0;
		t.scale9Grid = new egret.Rectangle(12,5,76,30);
		t.source = "paihangbang_tansuodu_biaoqianditu_png";
		return t;
	};
	_proto._Image21_i = function () {
		var t = new eui.Image();
		t.left = 0;
		t.right = 0;
		t.scale9Grid = new egret.Rectangle(12,4,76,26);
		t.source = "paihangbang_tansuodu_paimingtitle_png";
		t.y = 40;
		return t;
	};
	_proto._Group20_i = function () {
		var t = new eui.Group();
		t.x = 0;
		t.y = 0;
		t.layout = this._HorizontalLayout14_i();
		t.elementsContent = [this.btnEggDay_i(),this.btnEggWeek_i(),this.btnEggAll_i()];
		return t;
	};
	_proto._HorizontalLayout14_i = function () {
		var t = new eui.HorizontalLayout();
		t.gap = 0;
		return t;
	};
	_proto.btnEggDay_i = function () {
		var t = new eui.Button();
		this.btnEggDay = t;
		t.height = 40;
		t.label = "砸蛋日榜";
		t.width = 138;
		t.x = 0;
		t.y = 0;
		t.skinName = RankSkin$Skin67;
		return t;
	};
	_proto.btnEggWeek_i = function () {
		var t = new eui.Button();
		this.btnEggWeek = t;
		t.height = 40;
		t.label = "砸蛋周榜";
		t.width = 138;
		t.x = 138;
		t.y = 0;
		t.skinName = RankSkin$Skin68;
		return t;
	};
	_proto.btnEggAll_i = function () {
		var t = new eui.Button();
		this.btnEggAll = t;
		t.height = 40;
		t.label = "砸蛋总榜";
		t.width = 138;
		t.x = 138;
		t.y = 0;
		t.skinName = RankSkin$Skin69;
		return t;
	};
	_proto._Group23_i = function () {
		var t = new eui.Group();
		t.height = 40;
		t.right = 15;
		t.scaleX = 1;
		t.scaleY = 1;
		t.layout = this._HorizontalLayout16_i();
		t.elementsContent = [this.textEggUser_i(),this._Group22_i()];
		return t;
	};
	_proto._HorizontalLayout16_i = function () {
		var t = new eui.HorizontalLayout();
		t.gap = 32;
		t.verticalAlign = "middle";
		return t;
	};
	_proto.textEggUser_i = function () {
		var t = new eui.Label();
		this.textEggUser = t;
		t.fontFamily = "Microsoft YaHei";
		t.size = 20;
		t.text = "";
		t.x = 364;
		t.y = 7;
		return t;
	};
	_proto._Group22_i = function () {
		var t = new eui.Group();
		t.x = 0;
		t.y = 0;
		t.layout = this._HorizontalLayout15_i();
		t.elementsContent = [this.textEggAct_i(),this._Image22_i(),this._Group21_i()];
		return t;
	};
	_proto._HorizontalLayout15_i = function () {
		var t = new eui.HorizontalLayout();
		t.gap = 10;
		t.verticalAlign = "middle";
		return t;
	};
	_proto.textEggAct_i = function () {
		var t = new eui.Label();
		this.textEggAct = t;
		t.fontFamily = "Microsoft YaHei";
		t.size = 18;
		t.text = "";
		t.textColor = 0xa8a8a8;
		t.x = 446;
		t.y = 3;
		return t;
	};
	_proto._Image22_i = function () {
		var t = new eui.Image();
		t.source = "paihangbang_xiaojidan_icon_png";
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto._Group21_i = function () {
		var t = new eui.Group();
		t.x = 49;
		t.y = 15;
		t.elementsContent = [this.textEggUserDay_i(),this.textEggUserWeek_i(),this.textEggUserAll_i()];
		return t;
	};
	_proto.textEggUserDay_i = function () {
		var t = new eui.Label();
		this.textEggUserDay = t;
		t.fontFamily = "Microsoft YaHei";
		t.size = 18;
		t.text = "";
		t.textColor = 0xa8a8a8;
		t.visible = false;
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto.textEggUserWeek_i = function () {
		var t = new eui.Label();
		this.textEggUserWeek = t;
		t.fontFamily = "Microsoft YaHei";
		t.size = 18;
		t.text = "";
		t.textColor = 0xa8a8a8;
		t.visible = false;
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto.textEggUserAll_i = function () {
		var t = new eui.Label();
		this.textEggUserAll = t;
		t.fontFamily = "Microsoft YaHei";
		t.size = 18;
		t.text = "";
		t.textColor = 0xa8a8a8;
		t.visible = false;
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto._Group24_i = function () {
		var t = new eui.Group();
		t.height = 36;
		t.left = 0;
		t.right = 0;
		t.y = 40;
		t.elementsContent = [this._Label25_i(),this._Label26_i(),this._Label27_i()];
		return t;
	};
	_proto._Label25_i = function () {
		var t = new eui.Label();
		t.fontFamily = "fangzheng";
		t.size = 20;
		t.text = "排名";
		t.textColor = 0x787878;
		t.verticalCenter = 0;
		t.x = 28;
		return t;
	};
	_proto._Label26_i = function () {
		var t = new eui.Label();
		t.fontFamily = "fangzheng";
		t.size = 20;
		t.text = "昵称";
		t.textColor = 0x787878;
		t.verticalCenter = 0;
		t.x = 211;
		return t;
	};
	_proto._Label27_i = function () {
		var t = new eui.Label();
		t.fontFamily = "fangzheng";
		t.size = 20;
		t.text = "鸡蛋";
		t.textColor = 0x787878;
		t.verticalCenter = 0;
		t.x = 492;
		return t;
	};
	_proto.textTipsEgg_i = function () {
		var t = new eui.Label();
		this.textTipsEgg = t;
		t.fontFamily = "Microsoft YaHei";
		t.right = 3;
		t.size = 16;
		t.text = "每日24:00结算时，日榜前3名可解锁全部章节";
		t.textColor = 0x878787;
		t.visible = false;
		t.y = 910;
		return t;
	};
	_proto.sEggUser_i = function () {
		var t = new eui.Scroller();
		this.sEggUser = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.bounces = false;
		t.height = 820;
		t.width = 970;
		t.x = 475;
		t.y = 73;
		t.viewport = this._Group26_i();
		return t;
	};
	_proto._Group26_i = function () {
		var t = new eui.Group();
		t.elementsContent = [this.listEggUser_i()];
		return t;
	};
	_proto.listEggUser_i = function () {
		var t = new eui.List();
		this.listEggUser = t;
		t.left = 0;
		t.right = 0;
		t.y = 0;
		return t;
	};
	_proto._Label28_i = function () {
		var t = new eui.Label();
		t.fontFamily = "Microsoft YaHei";
		t.size = 16;
		t.text = "狂砸臭鸡蛋~让讨厌的角色接受心灵审判~";
		t.textColor = 0x6f6f6e;
		t.x = 0;
		t.y = 900;
		return t;
	};
	_proto.btnReturn_i = function () {
		var t = new eui.Button();
		this.btnReturn = t;
		t.height = 62;
		t.label = "排行榜";
		t.width = 150;
		t.x = 0;
		t.y = 0;
		t.skinName = RankSkin$Skin70;
		return t;
	};
	return RankSkin;
})(eui.Skin);generateEUI.paths['resource/eui_skins/RankCharaItem.exml'] = window.RankCharaItemSkin = (function (_super) {
	__extends(RankCharaItemSkin, _super);
	var RankCharaItemSkin$Skin71 = 	(function (_super) {
		__extends(RankCharaItemSkin$Skin71, _super);
		function RankCharaItemSkin$Skin71() {
			_super.call(this);
			this.skinParts = ["labelDisplay"];
			
			this.elementsContent = [this._Image1_i(),this.labelDisplay_i()];
			this.states = [
				new eui.State ("up",
					[
					])
				,
				new eui.State ("down",
					[
						new eui.SetProperty("_Image1","source","paihangbang_button_xianhuabang_songhua02_png")
					])
				,
				new eui.State ("disabled",
					[
					])
				,
				new eui.State ("move",
					[
						new eui.SetProperty("_Image1","source","paihangbang_button_xianhuabang_songhua01_png")
					])
			];
		}
		var _proto = RankCharaItemSkin$Skin71.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			this._Image1 = t;
			t.percentHeight = 100;
			t.source = "paihangbang_button_xianhuabang_songhua00_png";
			t.percentWidth = 100;
			return t;
		};
		_proto.labelDisplay_i = function () {
			var t = new eui.Label();
			this.labelDisplay = t;
			t.fontFamily = "Microsoft Yahei";
			t.horizontalCenter = 0;
			t.size = 20;
			t.textColor = 0x000000;
			t.verticalCenter = 0;
			return t;
		};
		return RankCharaItemSkin$Skin71;
	})(eui.Skin);

	var RankCharaItemSkin$Skin72 = 	(function (_super) {
		__extends(RankCharaItemSkin$Skin72, _super);
		function RankCharaItemSkin$Skin72() {
			_super.call(this);
			this.skinParts = ["labelDisplay"];
			
			this.elementsContent = [this._Image1_i(),this.labelDisplay_i()];
			this.states = [
				new eui.State ("up",
					[
					])
				,
				new eui.State ("down",
					[
						new eui.SetProperty("_Image1","source","paihangbang_button_xianhuabang_songhua02_png")
					])
				,
				new eui.State ("disabled",
					[
					])
				,
				new eui.State ("move",
					[
						new eui.SetProperty("_Image1","source","paihangbang_button_xianhuabang_songhua01_png")
					])
			];
		}
		var _proto = RankCharaItemSkin$Skin72.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			this._Image1 = t;
			t.percentHeight = 100;
			t.source = "paihangbang_button_xianhuabang_songhua00_png";
			t.percentWidth = 100;
			return t;
		};
		_proto.labelDisplay_i = function () {
			var t = new eui.Label();
			this.labelDisplay = t;
			t.fontFamily = "Microsoft Yahei";
			t.horizontalCenter = 0;
			t.size = 20;
			t.textColor = 0x000000;
			t.verticalCenter = 0;
			return t;
		};
		return RankCharaItemSkin$Skin72;
	})(eui.Skin);

	function RankCharaItemSkin() {
		_super.call(this);
		this.skinParts = ["imgAvatar","textName","textValue","btnFlower","btnEgg"];
		
		this.height = 92;
		this.width = 458;
		this.elementsContent = [this._Image1_i(),this.imgAvatar_i(),this.textName_i(),this._Group1_i()];
		this._Image2_i();
		
		this._Image3_i();
		
		this.btnFlower_i();
		
		this.btnEgg_i();
		
		this.states = [
			new eui.State ("flower",
				[
					new eui.AddItems("_Image2","_Group1",0,""),
					new eui.AddItems("btnFlower","",1,"")
				])
			,
			new eui.State ("egg",
				[
					new eui.AddItems("_Image3","_Group1",2,"textValue"),
					new eui.AddItems("btnEgg","",1,"")
				])
		];
		
		eui.Binding.$bindProperties(this, ["hostComponent.data.name"],[0],this.textName,"text");
		eui.Binding.$bindProperties(this, ["hostComponent.data.value"],[0],this.textValue,"text");
	}
	var _proto = RankCharaItemSkin.prototype;

	_proto._Image1_i = function () {
		var t = new eui.Image();
		t.source = "paihangbang_xianhuabang_juesetouxiangditu_png";
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto.imgAvatar_i = function () {
		var t = new eui.Image();
		this.imgAvatar = t;
		t.height = 70;
		t.source = "";
		t.width = 70;
		t.x = 30;
		t.y = 12;
		return t;
	};
	_proto.textName_i = function () {
		var t = new eui.Label();
		this.textName = t;
		t.fontFamily = "Microsoft YaHei";
		t.size = 20;
		t.x = 121;
		t.y = 19;
		return t;
	};
	_proto._Group1_i = function () {
		var t = new eui.Group();
		this._Group1 = t;
		t.x = 115;
		t.y = 47;
		t.elementsContent = [this.textValue_i()];
		return t;
	};
	_proto._Image2_i = function () {
		var t = new eui.Image();
		this._Image2 = t;
		t.height = 29;
		t.source = "paihangbang_xiaoxianhua_icon_png";
		t.width = 29;
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto._Image3_i = function () {
		var t = new eui.Image();
		this._Image3 = t;
		t.height = 29;
		t.source = "paihangbang_xiaojidan_icon_png";
		t.width = 29;
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto.textValue_i = function () {
		var t = new eui.Label();
		this.textValue = t;
		t.fontFamily = "Microsoft YaHei";
		t.size = 20;
		t.verticalCenter = 0;
		t.x = 39;
		return t;
	};
	_proto.btnFlower_i = function () {
		var t = new eui.Button();
		this.btnFlower = t;
		t.label = "送鲜花";
		t.x = 321;
		t.y = 33;
		t.skinName = RankCharaItemSkin$Skin71;
		return t;
	};
	_proto.btnEgg_i = function () {
		var t = new eui.Button();
		this.btnEgg = t;
		t.label = "砸鸡蛋";
		t.x = 321;
		t.y = 33;
		t.skinName = RankCharaItemSkin$Skin72;
		return t;
	};
	return RankCharaItemSkin;
})(eui.Skin);generateEUI.paths['resource/eui_skins/RankListItem.exml'] = window.RankListItemSkin = (function (_super) {
	__extends(RankListItemSkin, _super);
	function RankListItemSkin() {
		_super.call(this);
		this.skinParts = ["textRank","textName","textValue","textFlower","textEgg","gDonate","gValue","gRank"];
		
		this.height = 41;
		this.width = 1445;
		this.elementsContent = [this._Image1_i(),this.gRank_i()];
		
		eui.Binding.$bindProperties(this, ["hostComponent.data.rank"],[0],this.textRank,"text");
		eui.Binding.$bindProperties(this, ["hostComponent.data.name"],[0],this.textName,"text");
		eui.Binding.$bindProperties(this, ["hostComponent.data.value"],[0],this.textValue,"text");
		eui.Binding.$bindProperties(this, ["hostComponent.data.donate"],[0],this.gDonate,"visible");
		eui.Binding.$bindProperties(this, ["hostComponent.data.flower"],[0],this.textFlower,"text");
		eui.Binding.$bindProperties(this, ["hostComponent.data.egg"],[0],this.textEgg,"text");
	}
	var _proto = RankListItemSkin.prototype;

	_proto._Image1_i = function () {
		var t = new eui.Image();
		t.height = 41;
		t.left = 0;
		t.right = 0;
		t.scale9Grid = new egret.Rectangle(12,5,76,31);
		t.source = "paihangbang_tansuodu_wanjiapaimingditu_png";
		return t;
	};
	_proto.gRank_i = function () {
		var t = new eui.Group();
		this.gRank = t;
		t.height = 38;
		t.width = 1445;
		t.x = 0;
		t.y = 0;
		t.elementsContent = [this.textRank_i(),this.textName_i(),this._Group1_i()];
		return t;
	};
	_proto.textRank_i = function () {
		var t = new eui.Label();
		this.textRank = t;
		t.fontFamily = "Microsoft YaHei";
		t.scaleX = 1;
		t.scaleY = 1;
		t.size = 20;
		t.textAlign = "center";
		t.textColor = 0xa8a8a8;
		t.verticalCenter = 0;
		t.width = 36;
		t.x = 26;
		return t;
	};
	_proto.textName_i = function () {
		var t = new eui.Label();
		this.textName = t;
		t.fontFamily = "Microsoft YaHei";
		t.scaleX = 1;
		t.scaleY = 1;
		t.size = 20;
		t.textColor = 0xffffff;
		t.verticalCenter = 0;
		t.x = 210;
		return t;
	};
	_proto._Group1_i = function () {
		var t = new eui.Group();
		t.verticalCenter = 0;
		t.width = 60;
		t.x = 940;
		t.elementsContent = [this.gValue_i()];
		return t;
	};
	_proto.gValue_i = function () {
		var t = new eui.Group();
		this.gValue = t;
		t.horizontalCenter = 0;
		t.verticalCenter = 0;
		t.layout = this._HorizontalLayout2_i();
		t.elementsContent = [this.textValue_i(),this.gDonate_i()];
		return t;
	};
	_proto._HorizontalLayout2_i = function () {
		var t = new eui.HorizontalLayout();
		t.gap = 0;
		t.verticalAlign = "middle";
		return t;
	};
	_proto.textValue_i = function () {
		var t = new eui.Label();
		this.textValue = t;
		t.fontFamily = "Microsoft YaHei";
		t.scaleX = 1;
		t.scaleY = 1;
		t.size = 20;
		t.textColor = 0xffffff;
		t.width = 90;
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto.gDonate_i = function () {
		var t = new eui.Group();
		this.gDonate = t;
		t.scaleX = 1;
		t.scaleY = 1;
		t.x = 0;
		t.y = 6;
		t.layout = this._HorizontalLayout1_i();
		t.elementsContent = [this._Image2_i(),this.textFlower_i(),this._Image3_i(),this.textEgg_i()];
		return t;
	};
	_proto._HorizontalLayout1_i = function () {
		var t = new eui.HorizontalLayout();
		t.gap = 10;
		t.verticalAlign = "middle";
		return t;
	};
	_proto._Image2_i = function () {
		var t = new eui.Image();
		t.source = "paihangbang_xiaoxianhua_icon_png";
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto.textFlower_i = function () {
		var t = new eui.Label();
		this.textFlower = t;
		t.fontFamily = "Microsoft YaHei";
		t.height = 20;
		t.size = 20;
		t.verticalCenter = 0;
		t.width = 60;
		t.x = 34;
		return t;
	};
	_proto._Image3_i = function () {
		var t = new eui.Image();
		t.source = "paihangbang_xiaojidan_icon_png";
		t.x = 77;
		t.y = 0;
		return t;
	};
	_proto.textEgg_i = function () {
		var t = new eui.Label();
		this.textEgg = t;
		t.fontFamily = "Microsoft YaHei";
		t.height = 20;
		t.size = 20;
		t.verticalCenter = 0;
		t.width = 60;
		t.x = 111;
		return t;
	};
	return RankListItemSkin;
})(eui.Skin);generateEUI.paths['resource/eui_skins/RankUserItem.exml'] = window.RankUserItemSkin = (function (_super) {
	__extends(RankUserItemSkin, _super);
	function RankUserItemSkin() {
		_super.call(this);
		this.skinParts = ["imgRank","textRank","textName","textValue","gRank"];
		
		this.height = 41;
		this.width = 970;
		this.elementsContent = [this._Image1_i(),this.gRank_i()];
		this._Image2_i();
		
		this._Image3_i();
		
		this.states = [
			new eui.State ("flower",
				[
					new eui.AddItems("_Image2","gRank",2,"textValue")
				])
			,
			new eui.State ("egg",
				[
					new eui.AddItems("_Image3","gRank",2,"textValue")
				])
		];
		
		eui.Binding.$bindProperties(this, ["hostComponent.data.rank"],[0],this.textRank,"text");
		eui.Binding.$bindProperties(this, ["hostComponent.data.name"],[0],this.textName,"text");
		eui.Binding.$bindProperties(this, ["hostComponent.data.value"],[0],this.textValue,"text");
	}
	var _proto = RankUserItemSkin.prototype;

	_proto._Image1_i = function () {
		var t = new eui.Image();
		t.height = 41;
		t.left = 0;
		t.right = 0;
		t.scale9Grid = new egret.Rectangle(12,5,76,31);
		t.source = "paihangbang_tansuodu_wanjiapaimingditu_png";
		return t;
	};
	_proto.gRank_i = function () {
		var t = new eui.Group();
		this.gRank = t;
		t.height = 38;
		t.left = 0;
		t.right = 0;
		t.y = 0;
		t.elementsContent = [this.imgRank_i(),this.textRank_i(),this.textName_i(),this.textValue_i()];
		return t;
	};
	_proto.imgRank_i = function () {
		var t = new eui.Image();
		this.imgRank = t;
		t.height = 30;
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "";
		t.verticalCenter = 0;
		t.visible = false;
		t.width = 30;
		t.x = 31;
		return t;
	};
	_proto.textRank_i = function () {
		var t = new eui.Label();
		this.textRank = t;
		t.fontFamily = "Microsoft YaHei";
		t.scaleX = 1;
		t.scaleY = 1;
		t.size = 20;
		t.textAlign = "center";
		t.textColor = 0xa8a8a8;
		t.verticalCenter = 0;
		t.visible = false;
		t.width = 36;
		t.x = 28;
		return t;
	};
	_proto.textName_i = function () {
		var t = new eui.Label();
		this.textName = t;
		t.fontFamily = "Microsoft YaHei";
		t.scaleX = 1;
		t.scaleY = 1;
		t.size = 20;
		t.textColor = 0xffffff;
		t.verticalCenter = 0;
		t.x = 210;
		return t;
	};
	_proto._Image2_i = function () {
		var t = new eui.Image();
		this._Image2 = t;
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "paihangbang_xiaoxianhua_icon_png";
		t.verticalCenter = 0;
		t.x = 481;
		return t;
	};
	_proto._Image3_i = function () {
		var t = new eui.Image();
		this._Image3 = t;
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "paihangbang_xiaojidan_icon_png";
		t.verticalCenter = 0;
		t.x = 481;
		return t;
	};
	_proto.textValue_i = function () {
		var t = new eui.Label();
		this.textValue = t;
		t.fontFamily = "Microsoft YaHei";
		t.scaleX = 1;
		t.scaleY = 1;
		t.size = 20;
		t.textColor = 0xffffff;
		t.verticalCenter = 0;
		t.x = 520;
		return t;
	};
	return RankUserItemSkin;
})(eui.Skin);generateEUI.paths['resource/eui_skins/Record_AchieveListItem.exml'] = window.Record_AchieveListItem = (function (_super) {
	__extends(Record_AchieveListItem, _super);
	function Record_AchieveListItem() {
		_super.call(this);
		this.skinParts = ["imgAchieve","textName","gContent","gMask","gAwardinfoShow","gAwardShow","gAwardinfoHide","gAwardHide","iconNew","textDesc","textRate"];
		
		this.height = 328;
		this.width = 347;
		this.elementsContent = [this.imgAchieve_i(),this.gContent_i(),this.gMask_i(),this.gAwardShow_i(),this.gAwardHide_i(),this.iconNew_i(),this.textDesc_i(),this.textRate_i()];
		this.states = [
			new eui.State ("up",
				[
				])
			,
			new eui.State ("down",
				[
				])
			,
			new eui.State ("disabled",
				[
				])
			,
			new eui.State ("move",
				[
				])
		];
		
		eui.Binding.$bindProperties(this, ["hostComponent.data.name"],[0],this.textName,"text");
		eui.Binding.$bindProperties(this, ["hostComponent.data.desc"],[0],this.textDesc,"text");
	}
	var _proto = Record_AchieveListItem.prototype;

	_proto.imgAchieve_i = function () {
		var t = new eui.Image();
		this.imgAchieve = t;
		t.bottom = 0;
		t.left = 0;
		t.right = 0;
		t.source = "";
		t.top = 0;
		return t;
	};
	_proto.gContent_i = function () {
		var t = new eui.Group();
		this.gContent = t;
		t.x = 0;
		t.y = 0;
		t.elementsContent = [this.textName_i()];
		return t;
	};
	_proto.textName_i = function () {
		var t = new eui.Label();
		this.textName = t;
		t.fontFamily = "fangzheng";
		t.size = 20;
		t.touchEnabled = false;
		t.x = 21;
		t.y = 21;
		return t;
	};
	_proto.gMask_i = function () {
		var t = new eui.Group();
		this.gMask = t;
		t.x = 0;
		t.y = 0;
		t.elementsContent = [this._Image1_i(),this._Image2_i()];
		return t;
	};
	_proto._Image1_i = function () {
		var t = new eui.Image();
		t.height = 328;
		t.source = "dangan_chengjiu_zhezhaoweijiesuo_png";
		t.width = 347;
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto._Image2_i = function () {
		var t = new eui.Image();
		t.horizontalCenter = 0;
		t.source = "dangan_chengjiu_jiasuo_png";
		t.verticalCenter = 0;
		return t;
	};
	_proto.gAwardShow_i = function () {
		var t = new eui.Group();
		this.gAwardShow = t;
		t.left = 1;
		t.top = 244;
		t.visible = false;
		t.elementsContent = [this._Image3_i(),this.gAwardinfoShow_i()];
		return t;
	};
	_proto._Image3_i = function () {
		var t = new eui.Image();
		t.right = 0;
		t.source = "dangan_chengjiu_kelingqu_png";
		t.top = 0;
		return t;
	};
	_proto.gAwardinfoShow_i = function () {
		var t = new eui.Group();
		this.gAwardinfoShow = t;
		t.height = 53;
		t.x = 18;
		t.y = 0;
		t.layout = this._HorizontalLayout1_i();
		return t;
	};
	_proto._HorizontalLayout1_i = function () {
		var t = new eui.HorizontalLayout();
		t.gap = 5;
		t.verticalAlign = "middle";
		return t;
	};
	_proto.gAwardHide_i = function () {
		var t = new eui.Group();
		this.gAwardHide = t;
		t.right = 1;
		t.top = 1;
		t.visible = false;
		t.elementsContent = [this._Image4_i(),this.gAwardinfoHide_i()];
		return t;
	};
	_proto._Image4_i = function () {
		var t = new eui.Image();
		t.right = 0;
		t.source = "dangan_chengjiu_weilingqu_png";
		t.top = 0;
		return t;
	};
	_proto.gAwardinfoHide_i = function () {
		var t = new eui.Group();
		this.gAwardinfoHide = t;
		t.horizontalCenter = 10;
		t.top = 12;
		t.layout = this._HorizontalLayout2_i();
		return t;
	};
	_proto._HorizontalLayout2_i = function () {
		var t = new eui.HorizontalLayout();
		t.gap = 5;
		t.verticalAlign = "middle";
		return t;
	};
	_proto.iconNew_i = function () {
		var t = new eui.Image();
		this.iconNew = t;
		t.right = -10;
		t.source = "tongyong_xiaoxitishi_png";
		t.top = -10;
		t.touchEnabled = false;
		t.visible = false;
		return t;
	};
	_proto.textDesc_i = function () {
		var t = new eui.Label();
		this.textDesc = t;
		t.bottom = 10;
		t.fontFamily = "Microsoft YaHei";
		t.size = 20;
		t.touchEnabled = false;
		t.visible = false;
		t.x = 21;
		return t;
	};
	_proto.textRate_i = function () {
		var t = new eui.Label();
		this.textRate = t;
		t.bottom = 10;
		t.fontFamily = "Microsoft YaHei";
		t.right = 10;
		t.size = 20;
		t.text = "";
		t.textColor = 0x999999;
		t.touchEnabled = false;
		t.visible = false;
		return t;
	};
	return Record_AchieveListItem;
})(eui.Skin);generateEUI.paths['resource/eui_skins/Record_EventListItem.exml'] = window.Record_EventListItem = (function (_super) {
	__extends(Record_EventListItem, _super);
	function Record_EventListItem() {
		_super.call(this);
		this.skinParts = ["imgEvent","textTitle","gTitle","imgMask"];
		
		this.height = 159;
		this.width = 266;
		this.elementsContent = [this.imgEvent_i(),this.gTitle_i(),this.imgMask_i()];
		
		eui.Binding.$bindProperties(this, ["hostComponent.data.title"],[0],this.textTitle,"text");
	}
	var _proto = Record_EventListItem.prototype;

	_proto.imgEvent_i = function () {
		var t = new eui.Image();
		this.imgEvent = t;
		t.height = 159;
		t.source = "dangan_guanjianshijian_yulan01_png";
		t.width = 266;
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto.gTitle_i = function () {
		var t = new eui.Group();
		this.gTitle = t;
		t.left = 0;
		t.right = 0;
		t.y = 110;
		t.elementsContent = [this._Rect1_i(),this.textTitle_i()];
		return t;
	};
	_proto._Rect1_i = function () {
		var t = new eui.Rect();
		t.fillColor = 0x3f3f41;
		t.height = 1;
		t.horizontalCenter = 0;
		t.width = 194;
		t.y = 0;
		return t;
	};
	_proto.textTitle_i = function () {
		var t = new eui.Label();
		this.textTitle = t;
		t.fontFamily = "fangzheng";
		t.horizontalCenter = 0;
		t.size = 20;
		t.textColor = 0xffffff;
		t.y = 7;
		return t;
	};
	_proto.imgMask_i = function () {
		var t = new eui.Image();
		this.imgMask = t;
		t.alpha = 0.5;
		t.height = 159;
		t.source = "dangan_guanjianshijian_zhezhao_png";
		t.visible = false;
		t.width = 266;
		t.x = 0;
		t.y = 0;
		return t;
	};
	return Record_EventListItem;
})(eui.Skin);generateEUI.paths['resource/eui_skins/Record_HiddenStoryItem.exml'] = window.Record_HiddenStoryItemSkin = (function (_super) {
	__extends(Record_HiddenStoryItemSkin, _super);
	function Record_HiddenStoryItemSkin() {
		_super.call(this);
		this.skinParts = ["imgThumb","iconNew","desc","gTips"];
		
		this.height = 73;
		this.width = 78;
		this.elementsContent = [this._Image1_i(),this.imgThumb_i(),this._Image3_i(),this.iconNew_i(),this.gTips_i()];
		this._Image2_i();
		
		this._Image4_i();
		
		this.states = [
			new eui.State ("up",
				[
					new eui.AddItems("_Image2","",2,"_Image3")
				])
			,
			new eui.State ("down",
				[
					new eui.AddItems("_Image2","",2,"_Image3"),
					new eui.SetProperty("_Image2","source","dangan_renwu_yincangbofang02_png")
				])
			,
			new eui.State ("disabled",
				[
					new eui.AddItems("_Image4","",2,"iconNew"),
					new eui.SetProperty("_Image3","alpha",1)
				])
			,
			new eui.State ("move",
				[
					new eui.AddItems("_Image2","",2,"_Image3"),
					new eui.SetProperty("_Image3","alpha",0)
				])
		];
	}
	var _proto = Record_HiddenStoryItemSkin.prototype;

	_proto._Image1_i = function () {
		var t = new eui.Image();
		t.source = "dangan_renwuyincangkuang_png";
		return t;
	};
	_proto.imgThumb_i = function () {
		var t = new eui.Image();
		this.imgThumb = t;
		t.height = 73;
		t.width = 78;
		return t;
	};
	_proto._Image2_i = function () {
		var t = new eui.Image();
		this._Image2 = t;
		t.horizontalCenter = 0;
		t.source = "dangan_renwu_yincangbofang00_png";
		t.verticalCenter = 0;
		return t;
	};
	_proto._Image3_i = function () {
		var t = new eui.Image();
		this._Image3 = t;
		t.alpha = 0.2;
		t.source = "dangan_yincangjuqing_zhezhao_png";
		return t;
	};
	_proto._Image4_i = function () {
		var t = new eui.Image();
		this._Image4 = t;
		t.horizontalCenter = 0;
		t.source = "gushixian_suo_icon_32_png";
		t.verticalCenter = 0;
		return t;
	};
	_proto.iconNew_i = function () {
		var t = new eui.Image();
		this.iconNew = t;
		t.right = 0;
		t.source = "dangan_renwuyincangnew_png";
		t.top = 0;
		t.visible = false;
		return t;
	};
	_proto.gTips_i = function () {
		var t = new eui.Group();
		this.gTips = t;
		t.horizontalCenter = 0;
		t.visible = false;
		t.y = -53;
		t.elementsContent = [this._Image5_i(),this.desc_i()];
		return t;
	};
	_proto._Image5_i = function () {
		var t = new eui.Image();
		t.left = 0;
		t.right = 0;
		t.scale9Grid = new egret.Rectangle(5,5,135,33);
		t.source = "tongyong_xuanfutips_xiao_png";
		t.y = 0;
		return t;
	};
	_proto.desc_i = function () {
		var t = new eui.Label();
		this.desc = t;
		t.fontFamily = "Microsoft YaHei";
		t.left = 20;
		t.right = 20;
		t.size = 16;
		t.text = "";
		t.textColor = 0x999999;
		t.verticalCenter = 0;
		return t;
	};
	return Record_HiddenStoryItemSkin;
})(eui.Skin);generateEUI.paths['resource/eui_skins/Record_PersonListItem.exml'] = window.Record_PersonListItem = (function (_super) {
	__extends(Record_PersonListItem, _super);
	var Record_PersonListItem$Skin73 = 	(function (_super) {
		__extends(Record_PersonListItem$Skin73, _super);
		function Record_PersonListItem$Skin73() {
			_super.call(this);
			this.skinParts = ["labelDisplay"];
			
			this.elementsContent = [this._Image1_i(),this.labelDisplay_i()];
			this.states = [
				new eui.State ("up",
					[
					])
				,
				new eui.State ("down",
					[
						new eui.SetProperty("_Image1","source","dangan_renwudashang-zadan02_png")
					])
				,
				new eui.State ("disabled",
					[
					])
				,
				new eui.State ("move",
					[
						new eui.SetProperty("_Image1","source","dangan_renwudashang-zadan01_png")
					])
			];
		}
		var _proto = Record_PersonListItem$Skin73.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			this._Image1 = t;
			t.percentHeight = 100;
			t.source = "dangan_renwudashang-zadan00_png";
			t.percentWidth = 100;
			return t;
		};
		_proto.labelDisplay_i = function () {
			var t = new eui.Label();
			this.labelDisplay = t;
			t.fontFamily = "Microsoft Yahei";
			t.horizontalCenter = 0;
			t.size = 18;
			t.textColor = 0x000000;
			t.verticalCenter = 0;
			return t;
		};
		return Record_PersonListItem$Skin73;
	})(eui.Skin);

	var Record_PersonListItem$Skin74 = 	(function (_super) {
		__extends(Record_PersonListItem$Skin74, _super);
		function Record_PersonListItem$Skin74() {
			_super.call(this);
			this.skinParts = ["labelDisplay"];
			
			this.elementsContent = [this._Image1_i(),this.labelDisplay_i()];
			this.states = [
				new eui.State ("up",
					[
					])
				,
				new eui.State ("down",
					[
						new eui.SetProperty("_Image1","source","dangan_renwudashang-songhua02_png")
					])
				,
				new eui.State ("disabled",
					[
					])
				,
				new eui.State ("move",
					[
						new eui.SetProperty("_Image1","source","dangan_renwudashang-songhua01_png")
					])
			];
		}
		var _proto = Record_PersonListItem$Skin74.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			this._Image1 = t;
			t.percentHeight = 100;
			t.source = "dangan_renwudashang-songhua00_png";
			t.percentWidth = 100;
			return t;
		};
		_proto.labelDisplay_i = function () {
			var t = new eui.Label();
			this.labelDisplay = t;
			t.fontFamily = "Microsoft Yahei";
			t.horizontalCenter = 0;
			t.size = 18;
			t.textColor = 0x000000;
			t.verticalCenter = 0;
			return t;
		};
		return Record_PersonListItem$Skin74;
	})(eui.Skin);

	function Record_PersonListItem() {
		_super.call(this);
		this.skinParts = ["imgPerson","textName","imgStatus","textValue0","gValue0","textValue1","gValue1","textDesc0","gDesc0","textDesc1","gDesc1","textDesc2","gDesc2","textDesc3","gDesc3","textDesc4","gDesc4","textHidden","listStory","gContent","gPerson","btnEgg","btnFlower","gDonate"];
		
		this.height = 739;
		this.width = 395;
		this.elementsContent = [this.gPerson_i(),this.gDonate_i()];
		this.states = [
			new eui.State ("up",
				[
				])
			,
			new eui.State ("down",
				[
				])
			,
			new eui.State ("disabled",
				[
				])
			,
			new eui.State ("move",
				[
				])
		];
		
		eui.Binding.$bindProperties(this, ["hostComponent.data.name"],[0],this.textName,"text");
	}
	var _proto = Record_PersonListItem.prototype;

	_proto.gPerson_i = function () {
		var t = new eui.Group();
		this.gPerson = t;
		t.height = 739;
		t.width = 395;
		t.x = 0;
		t.y = 0;
		t.elementsContent = [this._Image1_i(),this.gContent_i()];
		return t;
	};
	_proto._Image1_i = function () {
		var t = new eui.Image();
		t.height = 739;
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "dangan_renwu_ditu_png";
		t.width = 395;
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto.gContent_i = function () {
		var t = new eui.Group();
		this.gContent = t;
		t.scaleX = 1;
		t.scaleY = 1;
		t.x = 0;
		t.y = 0;
		t.elementsContent = [this.imgPerson_i(),this._Group1_i(),this.imgStatus_i(),this.gValue0_i(),this.gValue1_i(),this.gDesc0_i(),this._Group2_i(),this.textHidden_i(),this.listStory_i()];
		return t;
	};
	_proto.imgPerson_i = function () {
		var t = new eui.Image();
		this.imgPerson = t;
		t.height = 226;
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "";
		t.width = 393;
		t.x = 1;
		t.y = 1;
		return t;
	};
	_proto._Group1_i = function () {
		var t = new eui.Group();
		t.height = 28;
		t.width = 395;
		t.x = 1;
		t.y = 199;
		t.elementsContent = [this._Image2_i(),this.textName_i()];
		return t;
	};
	_proto._Image2_i = function () {
		var t = new eui.Image();
		t.height = 28;
		t.source = "dangan_renwu_mingziditu_png";
		t.width = 395;
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto.textName_i = function () {
		var t = new eui.Label();
		this.textName = t;
		t.fontFamily = "fangzheng";
		t.height = 28;
		t.horizontalCenter = 0;
		t.size = 22;
		t.verticalAlign = "middle";
		t.verticalCenter = 0;
		return t;
	};
	_proto.imgStatus_i = function () {
		var t = new eui.Image();
		this.imgStatus = t;
		t.source = "";
		t.visible = false;
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto.gValue0_i = function () {
		var t = new eui.Group();
		this.gValue0 = t;
		t.visible = false;
		t.x = 0;
		t.y = 117;
		t.elementsContent = [this._Image3_i(),this.textValue0_i()];
		return t;
	};
	_proto._Image3_i = function () {
		var t = new eui.Image();
		t.source = "dangan_haoganbiaoqian_png";
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto.textValue0_i = function () {
		var t = new eui.Label();
		this.textValue0 = t;
		t.fontFamily = "Microsoft YaHei";
		t.size = 16;
		t.text = "";
		t.verticalCenter = 0;
		t.x = 21;
		return t;
	};
	_proto.gValue1_i = function () {
		var t = new eui.Group();
		this.gValue1 = t;
		t.visible = false;
		t.x = 92;
		t.y = 117;
		t.elementsContent = [this._Image4_i(),this.textValue1_i()];
		return t;
	};
	_proto._Image4_i = function () {
		var t = new eui.Image();
		t.source = "dangan_anhuaiyibiaoqian_png";
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto.textValue1_i = function () {
		var t = new eui.Label();
		this.textValue1 = t;
		t.fontFamily = "Microsoft YaHei";
		t.size = 16;
		t.text = "";
		t.verticalCenter = 0;
		t.x = 30;
		return t;
	};
	_proto.gDesc0_i = function () {
		var t = new eui.Group();
		this.gDesc0 = t;
		t.horizontalCenter = 0;
		t.visible = false;
		t.y = 240;
		t.elementsContent = [this.textDesc0_i()];
		return t;
	};
	_proto.textDesc0_i = function () {
		var t = new eui.Label();
		this.textDesc0 = t;
		t.fontFamily = "Microsoft YaHei";
		t.horizontalCenter = 0;
		t.size = 18;
		t.text = "";
		t.textColor = 0xabaaa9;
		t.y = 0;
		return t;
	};
	_proto._Group2_i = function () {
		var t = new eui.Group();
		t.x = 27;
		t.y = 275;
		t.layout = this._VerticalLayout1_i();
		t.elementsContent = [this.gDesc1_i(),this.gDesc2_i(),this.gDesc3_i(),this.gDesc4_i()];
		return t;
	};
	_proto._VerticalLayout1_i = function () {
		var t = new eui.VerticalLayout();
		t.gap = 22;
		return t;
	};
	_proto.gDesc1_i = function () {
		var t = new eui.Group();
		this.gDesc1 = t;
		t.height = 18;
		t.visible = false;
		t.x = 0;
		t.y = 0;
		t.elementsContent = [this._Image5_i(),this.textDesc1_i()];
		return t;
	};
	_proto._Image5_i = function () {
		var t = new eui.Image();
		t.source = "zhangjie_zhuangshi_png";
		t.verticalCenter = 0;
		t.x = 0;
		return t;
	};
	_proto.textDesc1_i = function () {
		var t = new eui.Label();
		this.textDesc1 = t;
		t.fontFamily = "Microsoft YaHei";
		t.size = 16;
		t.text = "";
		t.textColor = 0x686664;
		t.verticalCenter = 0;
		t.x = 32;
		return t;
	};
	_proto.gDesc2_i = function () {
		var t = new eui.Group();
		this.gDesc2 = t;
		t.height = 18;
		t.visible = false;
		t.x = 0;
		t.y = 40;
		t.elementsContent = [this._Image6_i(),this.textDesc2_i()];
		return t;
	};
	_proto._Image6_i = function () {
		var t = new eui.Image();
		t.source = "zhangjie_zhuangshi_png";
		t.x = 0;
		t.y = 2;
		return t;
	};
	_proto.textDesc2_i = function () {
		var t = new eui.Label();
		this.textDesc2 = t;
		t.fontFamily = "Microsoft YaHei";
		t.size = 16;
		t.text = "";
		t.textColor = 0x686664;
		t.verticalCenter = 0;
		t.x = 32;
		return t;
	};
	_proto.gDesc3_i = function () {
		var t = new eui.Group();
		this.gDesc3 = t;
		t.height = 18;
		t.visible = false;
		t.x = 0;
		t.y = 80;
		t.elementsContent = [this._Image7_i(),this.textDesc3_i()];
		return t;
	};
	_proto._Image7_i = function () {
		var t = new eui.Image();
		t.source = "zhangjie_zhuangshi_png";
		t.x = 0;
		t.y = 2;
		return t;
	};
	_proto.textDesc3_i = function () {
		var t = new eui.Label();
		this.textDesc3 = t;
		t.fontFamily = "Microsoft YaHei";
		t.size = 16;
		t.text = "";
		t.textColor = 0x686664;
		t.verticalCenter = 0;
		t.x = 32;
		return t;
	};
	_proto.gDesc4_i = function () {
		var t = new eui.Group();
		this.gDesc4 = t;
		t.height = 18;
		t.visible = false;
		t.x = 0;
		t.y = 120;
		t.elementsContent = [this._Image8_i(),this.textDesc4_i()];
		return t;
	};
	_proto._Image8_i = function () {
		var t = new eui.Image();
		t.source = "zhangjie_zhuangshi_png";
		t.x = 0;
		t.y = 2;
		return t;
	};
	_proto.textDesc4_i = function () {
		var t = new eui.Label();
		this.textDesc4 = t;
		t.fontFamily = "Microsoft YaHei";
		t.size = 16;
		t.text = "";
		t.textColor = 0x686664;
		t.verticalCenter = 0;
		t.x = 32;
		return t;
	};
	_proto.textHidden_i = function () {
		var t = new eui.Label();
		this.textHidden = t;
		t.fontFamily = "Microsoft YaHei";
		t.horizontalCenter = 0;
		t.size = 22;
		t.text = "隐藏剧情";
		t.textColor = 0xbbbbba;
		t.y = 435;
		return t;
	};
	_proto.listStory_i = function () {
		var t = new eui.List();
		this.listStory = t;
		t.height = 180;
		t.itemRendererSkinName = Record_HiddenStoryItemSkin;
		t.width = 350;
		t.x = 31;
		t.y = 488;
		t.layout = this._TileLayout1_i();
		return t;
	};
	_proto._TileLayout1_i = function () {
		var t = new eui.TileLayout();
		t.horizontalGap = 50;
		t.verticalGap = 18;
		return t;
	};
	_proto.gDonate_i = function () {
		var t = new eui.Group();
		this.gDonate = t;
		t.horizontalCenter = 0;
		t.y = 689;
		t.layout = this._HorizontalLayout1_i();
		t.elementsContent = [this.btnEgg_i(),this.btnFlower_i()];
		return t;
	};
	_proto._HorizontalLayout1_i = function () {
		var t = new eui.HorizontalLayout();
		t.gap = 48;
		return t;
	};
	_proto.btnEgg_i = function () {
		var t = new eui.Button();
		this.btnEgg = t;
		t.label = "砸鸡蛋";
		t.x = 0;
		t.y = 0;
		t.skinName = Record_PersonListItem$Skin73;
		return t;
	};
	_proto.btnFlower_i = function () {
		var t = new eui.Button();
		this.btnFlower = t;
		t.label = "送鲜花";
		t.x = 0;
		t.y = 0;
		t.skinName = Record_PersonListItem$Skin74;
		return t;
	};
	return Record_PersonListItem;
})(eui.Skin);generateEUI.paths['resource/eui_skins/VScrollBarSkin.exml'] = window.skins.VScrollBarSkin = (function (_super) {
	__extends(VScrollBarSkin, _super);
	function VScrollBarSkin() {
		_super.call(this);
		this.skinParts = ["thumb"];
		
		this.minHeight = 20;
		this.minWidth = 8;
		this.width = 3;
		this.elementsContent = [this._Image1_i(),this.thumb_i()];
	}
	var _proto = VScrollBarSkin.prototype;

	_proto._Image1_i = function () {
		var t = new eui.Image();
		t.bottom = 0;
		t.left = 0;
		t.right = 0;
		t.source = "dangan_gundongtiaodi_png";
		t.top = 0;
		return t;
	};
	_proto.thumb_i = function () {
		var t = new eui.Image();
		this.thumb = t;
		t.horizontalCenter = 0;
		t.scale9Grid = new egret.Rectangle(3,3,2,2);
		t.source = "dangan_gundongtiao_png";
		t.width = 3;
		return t;
	};
	return VScrollBarSkin;
})(eui.Skin);generateEUI.paths['resource/eui_skins/Record.exml'] = window.RecordSkin = (function (_super) {
	__extends(RecordSkin, _super);
	var RecordSkin$Skin75 = 	(function (_super) {
		__extends(RecordSkin$Skin75, _super);
		function RecordSkin$Skin75() {
			_super.call(this);
			this.skinParts = ["labelDisplay"];
			
			this.elementsContent = [this._Image1_i(),this.labelDisplay_i()];
			this.states = [
				new eui.State ("up",
					[
					])
				,
				new eui.State ("down",
					[
						new eui.SetProperty("_Image1","source","dangan_yeqian_btn02_png")
					])
				,
				new eui.State ("disabled",
					[
					])
				,
				new eui.State ("false",
					[
						new eui.SetProperty("_Image1","alpha",0),
						new eui.SetProperty("labelDisplay","textColor",0x999999)
					])
				,
				new eui.State ("move",
					[
						new eui.SetProperty("_Image1","alpha",0),
						new eui.SetProperty("labelDisplay","textColor",0xffffff)
					])
			];
		}
		var _proto = RecordSkin$Skin75.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			this._Image1 = t;
			t.alpha = 1;
			t.percentHeight = 100;
			t.source = "dangan_yeqian_btn00_png";
			t.percentWidth = 100;
			return t;
		};
		_proto.labelDisplay_i = function () {
			var t = new eui.Label();
			this.labelDisplay = t;
			t.fontFamily = "fangzheng";
			t.horizontalCenter = 0;
			t.size = 28;
			t.textColor = 0x141311;
			t.verticalCenter = 0;
			return t;
		};
		return RecordSkin$Skin75;
	})(eui.Skin);

	var RecordSkin$Skin76 = 	(function (_super) {
		__extends(RecordSkin$Skin76, _super);
		function RecordSkin$Skin76() {
			_super.call(this);
			this.skinParts = ["labelDisplay"];
			
			this.elementsContent = [this._Image1_i(),this.labelDisplay_i()];
			this.states = [
				new eui.State ("up",
					[
					])
				,
				new eui.State ("down",
					[
						new eui.SetProperty("_Image1","source","dangan_yeqian_btn02_png")
					])
				,
				new eui.State ("disabled",
					[
					])
				,
				new eui.State ("false",
					[
						new eui.SetProperty("_Image1","alpha",0),
						new eui.SetProperty("labelDisplay","textColor",0x999999)
					])
				,
				new eui.State ("move",
					[
						new eui.SetProperty("_Image1","alpha",0),
						new eui.SetProperty("labelDisplay","textColor",0xffffff)
					])
			];
		}
		var _proto = RecordSkin$Skin76.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			this._Image1 = t;
			t.alpha = 1;
			t.percentHeight = 100;
			t.source = "dangan_yeqian_btn00_png";
			t.percentWidth = 100;
			return t;
		};
		_proto.labelDisplay_i = function () {
			var t = new eui.Label();
			this.labelDisplay = t;
			t.fontFamily = "fangzheng";
			t.horizontalCenter = 0;
			t.size = 28;
			t.textColor = 0x141311;
			t.verticalCenter = 0;
			return t;
		};
		return RecordSkin$Skin76;
	})(eui.Skin);

	var RecordSkin$Skin77 = 	(function (_super) {
		__extends(RecordSkin$Skin77, _super);
		function RecordSkin$Skin77() {
			_super.call(this);
			this.skinParts = ["labelDisplay"];
			
			this.elementsContent = [this._Rect1_i(),this._Image1_i(),this.labelDisplay_i()];
			this.states = [
				new eui.State ("up",
					[
					])
				,
				new eui.State ("down",
					[
						new eui.SetProperty("_Image1","source","tongyong_fanhui_icon02_png")
					])
				,
				new eui.State ("disabled",
					[
					])
				,
				new eui.State ("move",
					[
						new eui.SetProperty("_Image1","source","tongyong_fanhui_icon01_png")
					])
			];
		}
		var _proto = RecordSkin$Skin77.prototype;

		_proto._Rect1_i = function () {
			var t = new eui.Rect();
			t.bottom = 0;
			t.fillAlpha = 0;
			t.left = 0;
			t.right = 0;
			t.top = 0;
			return t;
		};
		_proto._Image1_i = function () {
			var t = new eui.Image();
			this._Image1 = t;
			t.left = 29;
			t.source = "tongyong_fanhui_icon00_png";
			t.top = 3;
			return t;
		};
		_proto.labelDisplay_i = function () {
			var t = new eui.Label();
			this.labelDisplay = t;
			t.fontFamily = "fangzheng";
			t.size = 30;
			t.textColor = 0xffffff;
			t.verticalCenter = 0;
			t.x = 88;
			return t;
		};
		return RecordSkin$Skin77;
	})(eui.Skin);

	function RecordSkin() {
		_super.call(this);
		this.skinParts = ["bg","btnPerson","btnAchieve","iconPersonNew","iconAchieveNew","listPerson","sPerson","listAchieve","sAchieve","scrollbar","gContent","btnReturn"];
		
		this.height = 1080;
		this.width = 1920;
		this.elementsContent = [this._Rect1_i(),this.bg_i(),this._Image1_i(),this._Image2_i(),this.gContent_i(),this.btnReturn_i()];
	}
	var _proto = RecordSkin.prototype;

	_proto._Rect1_i = function () {
		var t = new eui.Rect();
		t.bottom = 0;
		t.left = 0;
		t.right = 0;
		t.top = 0;
		return t;
	};
	_proto.bg_i = function () {
		var t = new eui.Image();
		this.bg = t;
		t.bottom = 0;
		t.fillMode = "scale";
		t.left = 0;
		t.right = 0;
		t.source = "shezhi_bg1920_1080_jpg";
		t.top = 0;
		return t;
	};
	_proto._Image1_i = function () {
		var t = new eui.Image();
		t.left = 0;
		t.source = "tongyong_daohang_fenge_zuo_png";
		t.y = 62;
		return t;
	};
	_proto._Image2_i = function () {
		var t = new eui.Image();
		t.right = 0;
		t.source = "tongyong_daohang_fenge_you_png";
		t.y = 62;
		return t;
	};
	_proto.gContent_i = function () {
		var t = new eui.Group();
		this.gContent = t;
		t.height = 1080;
		t.horizontalCenter = 0;
		t.verticalCenter = 0;
		t.width = 1920;
		t.elementsContent = [this._Group1_i(),this.sPerson_i(),this.sAchieve_i(),this.scrollbar_i()];
		return t;
	};
	_proto._Group1_i = function () {
		var t = new eui.Group();
		t.height = 549;
		t.x = 189;
		t.y = 299;
		t.elementsContent = [this._Image3_i(),this.btnPerson_i(),this.btnAchieve_i(),this.iconPersonNew_i(),this.iconAchieveNew_i()];
		return t;
	};
	_proto._Image3_i = function () {
		var t = new eui.Image();
		t.height = 549;
		t.source = "dangan_yeqian_ditu_png";
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto.btnPerson_i = function () {
		var t = new eui.Button();
		this.btnPerson = t;
		t.currentState = "false";
		t.label = "人\n物";
		t.x = 0;
		t.y = 0;
		t.skinName = RecordSkin$Skin75;
		return t;
	};
	_proto.btnAchieve_i = function () {
		var t = new eui.Button();
		this.btnAchieve = t;
		t.bottom = 0;
		t.currentState = "false";
		t.label = "相\n册";
		t.x = 0;
		t.skinName = RecordSkin$Skin76;
		return t;
	};
	_proto.iconPersonNew_i = function () {
		var t = new eui.Image();
		this.iconPersonNew = t;
		t.source = "tongyong_xiaoxitishi_png";
		t.visible = false;
		t.x = 35;
		t.y = 67;
		return t;
	};
	_proto.iconAchieveNew_i = function () {
		var t = new eui.Image();
		this.iconAchieveNew = t;
		t.source = "tongyong_xiaoxitishi_png";
		t.visible = false;
		t.x = 35;
		t.y = 374;
		return t;
	};
	_proto.sPerson_i = function () {
		var t = new eui.Scroller();
		this.sPerson = t;
		t.bounces = false;
		t.height = 750;
		t.visible = false;
		t.width = 1442;
		t.x = 277;
		t.y = 189;
		t.viewport = this._Group2_i();
		return t;
	};
	_proto._Group2_i = function () {
		var t = new eui.Group();
		t.elementsContent = [this.listPerson_i()];
		return t;
	};
	_proto.listPerson_i = function () {
		var t = new eui.List();
		this.listPerson = t;
		t.scaleX = 1;
		t.scaleY = 1;
		t.x = 0;
		t.y = 0;
		t.layout = this._HorizontalLayout1_i();
		return t;
	};
	_proto._HorizontalLayout1_i = function () {
		var t = new eui.HorizontalLayout();
		t.gap = 44;
		t.paddingLeft = 10;
		return t;
	};
	_proto.sAchieve_i = function () {
		var t = new eui.Scroller();
		this.sAchieve = t;
		t.bounces = false;
		t.height = 765;
		t.visible = false;
		t.width = 1550;
		t.x = 285;
		t.y = 178;
		t.viewport = this._Group3_i();
		return t;
	};
	_proto._Group3_i = function () {
		var t = new eui.Group();
		t.elementsContent = [this.listAchieve_i()];
		return t;
	};
	_proto.listAchieve_i = function () {
		var t = new eui.List();
		this.listAchieve = t;
		t.scaleX = 1;
		t.scaleY = 1;
		t.x = 0;
		t.y = 0;
		t.layout = this._TileLayout1_i();
		return t;
	};
	_proto._TileLayout1_i = function () {
		var t = new eui.TileLayout();
		t.horizontalGap = 40;
		t.paddingTop = 10;
		t.verticalGap = 96;
		return t;
	};
	_proto.scrollbar_i = function () {
		var t = new eui.VScrollBar();
		this.scrollbar = t;
		t.height = 760;
		t.skinName = "skins.VScrollBarSkin";
		t.visible = false;
		t.width = 3;
		t.x = 1830;
		t.y = 185;
		return t;
	};
	_proto.btnReturn_i = function () {
		var t = new eui.Button();
		this.btnReturn = t;
		t.height = 62;
		t.label = "档案";
		t.width = 150;
		t.x = 0;
		t.y = 0;
		t.skinName = RecordSkin$Skin77;
		return t;
	};
	return RecordSkin;
})(eui.Skin);generateEUI.paths['resource/eui_skins/rewardExploreItem.exml'] = window.RewardExploreItemSkin = (function (_super) {
	__extends(RewardExploreItemSkin, _super);
	var RewardExploreItemSkin$Skin78 = 	(function (_super) {
		__extends(RewardExploreItemSkin$Skin78, _super);
		function RewardExploreItemSkin$Skin78() {
			_super.call(this);
			this.skinParts = ["labelDisplay"];
			
			this.elementsContent = [this._Image1_i(),this.labelDisplay_i()];
			this.states = [
				new eui.State ("up",
					[
					])
				,
				new eui.State ("down",
					[
						new eui.SetProperty("_Image1","source","gushixian_lingqu_btn02_png")
					])
				,
				new eui.State ("disabled",
					[
					])
				,
				new eui.State ("move",
					[
						new eui.SetProperty("_Image1","source","gushixian_lingqu_btn01_png")
					])
			];
		}
		var _proto = RewardExploreItemSkin$Skin78.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			this._Image1 = t;
			t.percentHeight = 100;
			t.source = "gushixian_lingqu_btn00_png";
			t.percentWidth = 100;
			return t;
		};
		_proto.labelDisplay_i = function () {
			var t = new eui.Label();
			this.labelDisplay = t;
			t.horizontalCenter = 0;
			t.verticalCenter = 0;
			return t;
		};
		return RewardExploreItemSkin$Skin78;
	})(eui.Skin);

	function RewardExploreItemSkin() {
		_super.call(this);
		this.skinParts = ["textExplore","icon","textReward","btnGet","textGet"];
		
		this.height = 79;
		this.minHeight = 50;
		this.minWidth = 100;
		this.width = 660;
		this.elementsContent = [this._Image1_i(),this.textExplore_i(),this._Group1_i(),this._Group2_i()];
		
		eui.Binding.$bindProperties(this, ["hostComponent.data.explore"],[0],this.textExplore,"text");
		eui.Binding.$bindProperties(this, ["hostComponent.data.reward"],[0],this.textReward,"text");
	}
	var _proto = RewardExploreItemSkin.prototype;

	_proto._Image1_i = function () {
		var t = new eui.Image();
		t.bottom = 0;
		t.left = 0;
		t.right = 0;
		t.source = "gushixian_jianglidikuang_png";
		t.top = 0;
		return t;
	};
	_proto.textExplore_i = function () {
		var t = new eui.Label();
		this.textExplore = t;
		t.fontFamily = "Microsoft YaHei";
		t.left = 0;
		t.size = 30;
		t.textAlign = "right";
		t.textColor = 0xffffff;
		t.verticalAlign = "middle";
		t.verticalCenter = 0;
		t.width = 132;
		return t;
	};
	_proto._Group1_i = function () {
		var t = new eui.Group();
		t.height = 64;
		t.width = 64;
		t.x = 175;
		t.y = 8;
		t.elementsContent = [this.icon_i(),this.textReward_i()];
		return t;
	};
	_proto.icon_i = function () {
		var t = new eui.Image();
		this.icon = t;
		t.source = "gushixian_wupinkuang_png";
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto.textReward_i = function () {
		var t = new eui.Label();
		this.textReward = t;
		t.bottom = 4;
		t.fontFamily = "Microsoft YaHei";
		t.right = 4;
		t.size = 18;
		t.stroke = 3;
		t.strokeColor = 0x000000;
		t.textColor = 0xffffff;
		t.verticalAlign = "middle";
		return t;
	};
	_proto._Group2_i = function () {
		var t = new eui.Group();
		t.x = 489;
		t.y = 18;
		t.elementsContent = [this.btnGet_i(),this.textGet_i()];
		return t;
	};
	_proto.btnGet_i = function () {
		var t = new eui.Button();
		this.btnGet = t;
		t.label = "";
		t.visible = false;
		t.x = 0;
		t.y = 0;
		t.skinName = RewardExploreItemSkin$Skin78;
		return t;
	};
	_proto.textGet_i = function () {
		var t = new eui.Label();
		this.textGet = t;
		t.fontFamily = "Microsoft YaHei";
		t.horizontalCenter = 0;
		t.size = 24;
		t.text = "";
		t.textColor = 0x625f50;
		t.verticalCenter = 0;
		t.visible = false;
		return t;
	};
	return RewardExploreItemSkin;
})(eui.Skin);generateEUI.paths['resource/eui_skins/Setting.exml'] = window.SettingSkin = (function (_super) {
	__extends(SettingSkin, _super);
	var SettingSkin$Skin79 = 	(function (_super) {
		__extends(SettingSkin$Skin79, _super);
		function SettingSkin$Skin79() {
			_super.call(this);
			this.skinParts = ["labelDisplay"];
			
			this.elementsContent = [this._Image1_i(),this.labelDisplay_i()];
			this.states = [
				new eui.State ("up",
					[
					])
				,
				new eui.State ("down",
					[
						new eui.SetProperty("_Image1","source","shezih_guanyu_btn02_png")
					])
				,
				new eui.State ("disabled",
					[
					])
				,
				new eui.State ("move",
					[
						new eui.SetProperty("_Image1","source","shezih_guanyu_btn01_png")
					])
			];
		}
		var _proto = SettingSkin$Skin79.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			this._Image1 = t;
			t.height = 84;
			t.source = "shezih_guanyu_btn00_png";
			t.width = 84;
			return t;
		};
		_proto.labelDisplay_i = function () {
			var t = new eui.Label();
			this.labelDisplay = t;
			t.fontFamily = "Microsoft YaHei";
			t.horizontalCenter = 0;
			t.size = 18;
			t.textColor = 0xb8b8b8;
			t.y = 92;
			return t;
		};
		return SettingSkin$Skin79;
	})(eui.Skin);

	var SettingSkin$Skin80 = 	(function (_super) {
		__extends(SettingSkin$Skin80, _super);
		function SettingSkin$Skin80() {
			_super.call(this);
			this.skinParts = ["labelDisplay"];
			
			this.elementsContent = [this._Rect1_i(),this._Image1_i(),this.labelDisplay_i()];
			this.states = [
				new eui.State ("up",
					[
					])
				,
				new eui.State ("down",
					[
						new eui.SetProperty("_Image1","source","tongyong_fanhui_icon02_png")
					])
				,
				new eui.State ("disabled",
					[
					])
				,
				new eui.State ("move",
					[
						new eui.SetProperty("_Image1","source","tongyong_fanhui_icon01_png")
					])
			];
		}
		var _proto = SettingSkin$Skin80.prototype;

		_proto._Rect1_i = function () {
			var t = new eui.Rect();
			t.bottom = 0;
			t.fillAlpha = 0;
			t.left = 0;
			t.right = 0;
			t.top = 0;
			return t;
		};
		_proto._Image1_i = function () {
			var t = new eui.Image();
			this._Image1 = t;
			t.left = 29;
			t.source = "tongyong_fanhui_icon00_png";
			t.top = 3;
			return t;
		};
		_proto.labelDisplay_i = function () {
			var t = new eui.Label();
			this.labelDisplay = t;
			t.fontFamily = "fangzheng";
			t.size = 30;
			t.textColor = 0xffffff;
			t.verticalCenter = 0;
			t.x = 88;
			return t;
		};
		return SettingSkin$Skin80;
	})(eui.Skin);

	function SettingSkin() {
		_super.call(this);
		this.skinParts = ["bg","soundTitle","sliderSound","gSound","btnAudioLeft","btnAudioRight","effectTitle","textAudio","gEffect","btnBgmLeft","btnBgmRight","bgmTitle","textBgm","gBgm","btnResolutionLeft","btnResolutionRight","screenTitle","textResolution","gScreen","gContent","btnAbout","btnReturn"];
		
		this.height = 1080;
		this.width = 1920;
		this.elementsContent = [this._Rect1_i(),this.bg_i(),this._Image1_i(),this._Image2_i(),this.gContent_i(),this._Group1_i(),this.btnReturn_i()];
	}
	var _proto = SettingSkin.prototype;

	_proto._Rect1_i = function () {
		var t = new eui.Rect();
		t.bottom = 0;
		t.left = 0;
		t.right = 0;
		t.top = 0;
		return t;
	};
	_proto.bg_i = function () {
		var t = new eui.Image();
		this.bg = t;
		t.bottom = 0;
		t.fillMode = "scale";
		t.left = 0;
		t.right = 0;
		t.source = "shezhi_bg1920_1080_jpg";
		t.top = 0;
		return t;
	};
	_proto._Image1_i = function () {
		var t = new eui.Image();
		t.left = 0;
		t.source = "tongyong_daohang_fenge_zuo_png";
		t.y = 62;
		return t;
	};
	_proto._Image2_i = function () {
		var t = new eui.Image();
		t.right = 0;
		t.source = "tongyong_daohang_fenge_you_png";
		t.y = 62;
		return t;
	};
	_proto.gContent_i = function () {
		var t = new eui.Group();
		this.gContent = t;
		t.height = 1080;
		t.horizontalCenter = 0;
		t.width = 1920;
		t.elementsContent = [this.gSound_i(),this.gEffect_i(),this.gBgm_i(),this.gScreen_i(),this._Image3_i(),this._Image4_i()];
		return t;
	};
	_proto.gSound_i = function () {
		var t = new eui.Group();
		this.gSound = t;
		t.height = 120;
		t.width = 600;
		t.x = 660;
		t.y = 119;
		t.elementsContent = [this.soundTitle_i(),this.sliderSound_i()];
		return t;
	};
	_proto.soundTitle_i = function () {
		var t = new eui.Label();
		this.soundTitle = t;
		t.fontFamily = "fangzheng";
		t.horizontalCenter = 0;
		t.scaleX = 1;
		t.scaleY = 1;
		t.size = 26;
		t.text = "音量";
		t.textColor = 0x8a8a8a;
		t.x = 274;
		t.y = 0;
		return t;
	};
	_proto.sliderSound_i = function () {
		var t = new eui.HSlider();
		this.sliderSound = t;
		t.horizontalCenter = 0;
		t.maximum = 100;
		t.minimum = 0;
		t.scaleX = 1;
		t.scaleY = 1;
		t.skinName = "ControlSliderSkin";
		t.width = 580;
		t.x = 10.000000000000114;
		t.y = 55.999999999999986;
		return t;
	};
	_proto.gEffect_i = function () {
		var t = new eui.Group();
		this.gEffect = t;
		t.horizontalCenter = 0;
		t.width = 600;
		t.y = 260;
		t.elementsContent = [this.btnAudioLeft_i(),this.btnAudioRight_i(),this.effectTitle_i(),this.textAudio_i()];
		return t;
	};
	_proto.btnAudioLeft_i = function () {
		var t = new Component.ButtonSettingArrow();
		this.btnAudioLeft = t;
		t.label = "";
		t.skinName = "ButtonSettingArrowSkin";
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto.btnAudioRight_i = function () {
		var t = new Component.ButtonSettingArrow();
		this.btnAudioRight = t;
		t.label = "";
		t.right = 0;
		t.skewY = 180;
		t.skinName = "ButtonSettingArrowSkin";
		t.y = 0;
		return t;
	};
	_proto.effectTitle_i = function () {
		var t = new eui.Label();
		this.effectTitle = t;
		t.fontFamily = "fangzheng";
		t.horizontalCenter = 0;
		t.size = 26;
		t.text = "音效";
		t.textColor = 0x8a8a8a;
		t.y = 3;
		return t;
	};
	_proto.textAudio_i = function () {
		var t = new eui.Label();
		this.textAudio = t;
		t.fontFamily = "Microsoft YaHei";
		t.horizontalCenter = 0;
		t.size = 20;
		t.text = "开启";
		t.y = 40;
		return t;
	};
	_proto.gBgm_i = function () {
		var t = new eui.Group();
		this.gBgm = t;
		t.horizontalCenter = 0;
		t.width = 600;
		t.y = 353;
		t.elementsContent = [this.btnBgmLeft_i(),this.btnBgmRight_i(),this.bgmTitle_i(),this.textBgm_i()];
		return t;
	};
	_proto.btnBgmLeft_i = function () {
		var t = new Component.ButtonSettingArrow();
		this.btnBgmLeft = t;
		t.label = "";
		t.skinName = "ButtonSettingArrowSkin";
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto.btnBgmRight_i = function () {
		var t = new Component.ButtonSettingArrow();
		this.btnBgmRight = t;
		t.label = "";
		t.right = 0;
		t.skewY = 180;
		t.skinName = "ButtonSettingArrowSkin";
		t.y = 0;
		return t;
	};
	_proto.bgmTitle_i = function () {
		var t = new eui.Label();
		this.bgmTitle = t;
		t.fontFamily = "fangzheng";
		t.horizontalCenter = 0;
		t.size = 26;
		t.text = "音乐";
		t.textColor = 0x8a8a8a;
		t.y = 3;
		return t;
	};
	_proto.textBgm_i = function () {
		var t = new eui.Label();
		this.textBgm = t;
		t.fontFamily = "Microsoft YaHei";
		t.horizontalCenter = 0;
		t.size = 20;
		t.text = "开启";
		t.y = 40;
		return t;
	};
	_proto.gScreen_i = function () {
		var t = new eui.Group();
		this.gScreen = t;
		t.horizontalCenter = 0;
		t.width = 600;
		t.y = 447;
		t.elementsContent = [this.btnResolutionLeft_i(),this.btnResolutionRight_i(),this.screenTitle_i(),this.textResolution_i()];
		return t;
	};
	_proto.btnResolutionLeft_i = function () {
		var t = new Component.ButtonSettingArrow();
		this.btnResolutionLeft = t;
		t.label = "";
		t.skinName = "ButtonSettingArrowSkin";
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto.btnResolutionRight_i = function () {
		var t = new Component.ButtonSettingArrow();
		this.btnResolutionRight = t;
		t.label = "";
		t.right = 0;
		t.skewY = 180;
		t.skinName = "ButtonSettingArrowSkin";
		t.y = 0;
		return t;
	};
	_proto.screenTitle_i = function () {
		var t = new eui.Label();
		this.screenTitle = t;
		t.fontFamily = "fangzheng";
		t.horizontalCenter = 0;
		t.size = 26;
		t.text = "显示模式";
		t.textColor = 0x8a8a8a;
		t.y = 3;
		return t;
	};
	_proto.textResolution_i = function () {
		var t = new eui.Label();
		this.textResolution = t;
		t.fontFamily = "Microsoft YaHei";
		t.horizontalCenter = 0;
		t.size = 20;
		t.text = "全屏";
		t.y = 40;
		return t;
	};
	_proto._Image3_i = function () {
		var t = new eui.Image();
		t.horizontalCenter = 0;
		t.scale9Grid = new egret.Rectangle(12,0,76,2);
		t.source = "jiesuan_fenge_png";
		t.width = 1740;
		t.y = 539;
		return t;
	};
	_proto._Image4_i = function () {
		var t = new eui.Image();
		t.horizontalCenter = 0;
		t.source = "shezhi_jianpankongzhi_png";
		t.y = 571;
		return t;
	};
	_proto._Group1_i = function () {
		var t = new eui.Group();
		t.visible = false;
		t.x = 1746;
		t.y = 867;
		t.elementsContent = [this.btnAbout_i()];
		return t;
	};
	_proto.btnAbout_i = function () {
		var t = new eui.Button();
		this.btnAbout = t;
		t.label = "关于";
		t.skinName = SettingSkin$Skin79;
		return t;
	};
	_proto.btnReturn_i = function () {
		var t = new eui.Button();
		this.btnReturn = t;
		t.height = 62;
		t.label = "设置";
		t.width = 150;
		t.x = 0;
		t.y = 0;
		t.skinName = SettingSkin$Skin80;
		return t;
	};
	return SettingSkin;
})(eui.Skin);generateEUI.paths['resource/eui_skins/SettingProgressBar.exml'] = window.SettingProgressBar = (function (_super) {
	__extends(SettingProgressBar, _super);
	function SettingProgressBar() {
		_super.call(this);
		this.skinParts = ["thumb","labelDisplay"];
		
		this.height = 30;
		this.width = 30;
		this.elementsContent = [this._Image1_i(),this._Group1_i(),this.labelDisplay_i()];
	}
	var _proto = SettingProgressBar.prototype;

	_proto._Image1_i = function () {
		var t = new eui.Image();
		t.percentHeight = 100;
		t.source = "dengjidi_png";
		t.verticalCenter = 0;
		t.percentWidth = 100;
		return t;
	};
	_proto._Group1_i = function () {
		var t = new eui.Group();
		t.bottom = 3;
		t.left = 3;
		t.right = 3;
		t.top = 3;
		t.elementsContent = [this.thumb_i()];
		return t;
	};
	_proto.thumb_i = function () {
		var t = new eui.Image();
		this.thumb = t;
		t.percentHeight = 100;
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "dengjitiao_png";
		t.percentWidth = 100;
		return t;
	};
	_proto.labelDisplay_i = function () {
		var t = new eui.Label();
		this.labelDisplay = t;
		t.fontFamily = "Microsoft YaHei";
		t.horizontalCenter = 0;
		t.size = 18;
		t.textAlign = "center";
		t.textColor = 0xcccccc;
		t.verticalAlign = "middle";
		t.verticalCenter = 0;
		return t;
	};
	return SettingProgressBar;
})(eui.Skin);generateEUI.paths['resource/eui_skins/start.exml'] = window.StartSkin = (function (_super) {
	__extends(StartSkin, _super);
	var StartSkin$Skin81 = 	(function (_super) {
		__extends(StartSkin$Skin81, _super);
		function StartSkin$Skin81() {
			_super.call(this);
			this.skinParts = ["labelDisplay"];
			
			this.elementsContent = [this._Image1_i(),this.labelDisplay_i()];
			this.states = [
				new eui.State ("up",
					[
					])
				,
				new eui.State ("down",
					[
					])
				,
				new eui.State ("disabled",
					[
					])
				,
				new eui.State ("move",
					[
					])
			];
		}
		var _proto = StartSkin$Skin81.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			t.percentHeight = 100;
			t.source = "zhuye_caidan_icon_png";
			t.percentWidth = 100;
			return t;
		};
		_proto.labelDisplay_i = function () {
			var t = new eui.Label();
			this.labelDisplay = t;
			t.fontFamily = "fangzheng";
			t.left = 129;
			t.size = 26;
			t.top = 45;
			return t;
		};
		return StartSkin$Skin81;
	})(eui.Skin);

	function StartSkin() {
		_super.call(this);
		this.skinParts = ["bgImage","tips","percentBar","textPercent","btnStart","btnStory","btnRecord","btnRank","btnSetting","btnExit","iconStoryNew","iconRecordNew","gNew","textTips","gTips","gDB","gEgg","btnEgg","gContent"];
		
		this.height = 1080;
		this.width = 1920;
		this.elementsContent = [this._Rect1_i(),this.bgImage_i(),this._Image1_i(),this.gContent_i()];
	}
	var _proto = StartSkin.prototype;

	_proto._Rect1_i = function () {
		var t = new eui.Rect();
		t.bottom = 0;
		t.left = 0;
		t.right = 0;
		t.top = 0;
		return t;
	};
	_proto.bgImage_i = function () {
		var t = new eui.Image();
		this.bgImage = t;
		t.fillMode = "clip";
		t.horizontalCenter = 0;
		t.source = "shouye_bg1920_1080_jpg";
		t.verticalCenter = 0;
		return t;
	};
	_proto._Image1_i = function () {
		var t = new eui.Image();
		t.right = 0;
		t.source = "tongyong_daohang_fenge_you_png";
		t.y = 62;
		return t;
	};
	_proto.gContent_i = function () {
		var t = new eui.Group();
		this.gContent = t;
		t.height = 1080;
		t.horizontalCenter = 0;
		t.touchEnabled = false;
		t.verticalCenter = 0;
		t.width = 1920;
		t.elementsContent = [this._Image2_i(),this.tips_i(),this.percentBar_i(),this.textPercent_i(),this.btnStart_i(),this.btnStory_i(),this.btnRecord_i(),this.btnRank_i(),this.btnSetting_i(),this.btnExit_i(),this.gNew_i(),this.gTips_i(),this.gEgg_i(),this.btnEgg_i()];
		return t;
	};
	_proto._Image2_i = function () {
		var t = new eui.Image();
		t.source = "shouye_logo_png";
		t.x = 48;
		t.y = 983;
		return t;
	};
	_proto.tips_i = function () {
		var t = new eui.Label();
		this.tips = t;
		t.alpha = 0.5;
		t.fontFamily = "Microsoft YaHei";
		t.size = 15;
		t.text = "";
		t.textColor = 0xababab;
		t.x = 42;
		t.y = 20;
		return t;
	};
	_proto.percentBar_i = function () {
		var t = new eui.ProgressBar();
		this.percentBar = t;
		t.height = 18;
		t.skinName = "percentBarSkin";
		t.width = 1628;
		t.x = 250;
		t.y = 1006;
		return t;
	};
	_proto.textPercent_i = function () {
		var t = new eui.Label();
		this.textPercent = t;
		t.alpha = 0.3;
		t.fontFamily = "Microsoft YaHei";
		t.size = 18;
		t.text = "探索度：";
		t.x = 278;
		t.y = 1026;
		return t;
	};
	_proto.btnStart_i = function () {
		var t = new Component.ButtonIndex();
		this.btnStart = t;
		t.label = "开始潜伏";
		t.name = "btnStart";
		t.skinName = "ButtonIndexSkin";
		t.x = 1392;
		t.y = 341;
		return t;
	};
	_proto.btnStory_i = function () {
		var t = new Component.ButtonIndex();
		this.btnStory = t;
		t.label = "故事线";
		t.name = "btnStory";
		t.skinName = "ButtonIndexSkin";
		t.x = 1296;
		t.y = 569;
		return t;
	};
	_proto.btnRecord_i = function () {
		var t = new Component.ButtonIndex();
		this.btnRecord = t;
		t.label = "档案";
		t.name = "btnRecord";
		t.skinName = "ButtonIndexSkin";
		t.x = 1392;
		t.y = 797;
		return t;
	};
	_proto.btnRank_i = function () {
		var t = new Component.ButtonIndex();
		this.btnRank = t;
		t.label = "排行榜";
		t.name = "btnRank";
		t.skinName = "ButtonIndexSkewSkin";
		t.x = 168;
		t.y = 341;
		return t;
	};
	_proto.btnSetting_i = function () {
		var t = new Component.ButtonIndex();
		this.btnSetting = t;
		t.label = "设置";
		t.name = "btnSetting";
		t.skinName = "ButtonIndexSkewSkin";
		t.x = 264;
		t.y = 569;
		return t;
	};
	_proto.btnExit_i = function () {
		var t = new Component.ButtonIndex();
		this.btnExit = t;
		t.label = "退出";
		t.name = "btnExit";
		t.skinName = "ButtonIndexSkewSkin";
		t.x = 168;
		t.y = 797;
		return t;
	};
	_proto.gNew_i = function () {
		var t = new eui.Group();
		this.gNew = t;
		t.touchEnabled = false;
		t.visible = false;
		t.x = 1331;
		t.y = 572;
		t.elementsContent = [this.iconStoryNew_i(),this.iconRecordNew_i()];
		return t;
	};
	_proto.iconStoryNew_i = function () {
		var t = new eui.Image();
		this.iconStoryNew = t;
		t.source = "tongyong_xiaoxitishi_png";
		t.touchEnabled = false;
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto.iconRecordNew_i = function () {
		var t = new eui.Image();
		this.iconRecordNew = t;
		t.source = "tongyong_xiaoxitishi_png";
		t.touchEnabled = false;
		t.x = 96;
		t.y = 228;
		return t;
	};
	_proto.gTips_i = function () {
		var t = new eui.Group();
		this.gTips = t;
		t.height = 40;
		t.visible = false;
		t.width = 120;
		t.x = 18;
		t.y = 170;
		t.elementsContent = [this._Image3_i(),this.textTips_i()];
		return t;
	};
	_proto._Image3_i = function () {
		var t = new eui.Image();
		t.bottom = 0;
		t.left = 0;
		t.right = 0;
		t.scale9Grid = new egret.Rectangle(10,10,64,64);
		t.source = "tongyong_xuanfutips_png";
		t.top = 0;
		return t;
	};
	_proto.textTips_i = function () {
		var t = new eui.Label();
		this.textTips = t;
		t.fontFamily = "Microsoft YaHei";
		t.horizontalCenter = 0;
		t.lineSpacing = 8;
		t.size = 16;
		t.text = "通关奖励视频";
		t.textColor = 0x999999;
		t.verticalCenter = 0;
		return t;
	};
	_proto.gEgg_i = function () {
		var t = new eui.Group();
		this.gEgg = t;
		t.height = 106;
		t.visible = false;
		t.width = 325;
		t.x = 64;
		t.y = 64;
		t.elementsContent = [this.gDB_i()];
		return t;
	};
	_proto.gDB_i = function () {
		var t = new eui.Group();
		this.gDB = t;
		t.verticalCenter = 0;
		t.x = 57;
		return t;
	};
	_proto.btnEgg_i = function () {
		var t = new eui.Button();
		this.btnEgg = t;
		t.label = "通关奖励";
		t.visible = false;
		t.x = 113;
		t.y = 147;
		t.skinName = StartSkin$Skin81;
		return t;
	};
	return StartSkin;
})(eui.Skin);generateEUI.paths['resource/eui_skins/Storyline_ExploreLockd.exml'] = window.Storyline_ExploreLockdSkin = (function (_super) {
	__extends(Storyline_ExploreLockdSkin, _super);
	var Storyline_ExploreLockdSkin$Skin82 = 	(function (_super) {
		__extends(Storyline_ExploreLockdSkin$Skin82, _super);
		function Storyline_ExploreLockdSkin$Skin82() {
			_super.call(this);
			this.skinParts = [];
			
			this.elementsContent = [this._Image1_i(),this._Image2_i()];
			this.states = [
				new eui.State ("up",
					[
					])
				,
				new eui.State ("down",
					[
					])
				,
				new eui.State ("disabled",
					[
					])
				,
				new eui.State ("move",
					[
					])
			];
		}
		var _proto = Storyline_ExploreLockdSkin$Skin82.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			t.percentHeight = 100;
			t.source = "tongyong_icon_dikuang_weilingqu_png";
			t.percentWidth = 100;
			return t;
		};
		_proto._Image2_i = function () {
			var t = new eui.Image();
			t.height = 56;
			t.horizontalCenter = 0;
			t.source = "gushixian_lihe_icon_weilinqu_png";
			t.verticalCenter = 0;
			t.width = 56;
			return t;
		};
		return Storyline_ExploreLockdSkin$Skin82;
	})(eui.Skin);

	function Storyline_ExploreLockdSkin() {
		_super.call(this);
		this.skinParts = ["btnReward","tips"];
		
		this.height = 72;
		this.width = 72;
		this.elementsContent = [this.btnReward_i(),this.tips_i()];
	}
	var _proto = Storyline_ExploreLockdSkin.prototype;

	_proto.btnReward_i = function () {
		var t = new eui.Button();
		this.btnReward = t;
		t.label = "";
		t.x = 0;
		t.y = 0;
		t.skinName = Storyline_ExploreLockdSkin$Skin82;
		return t;
	};
	_proto.tips_i = function () {
		var t = new Component.Storyline_Tips();
		this.tips = t;
		t.horizontalCenter = 0;
		t.skinName = "Storyline_TipsSkin";
		t.visible = false;
		t.y = -53;
		return t;
	};
	return Storyline_ExploreLockdSkin;
})(eui.Skin);generateEUI.paths['resource/eui_skins/story.exml'] = window.StorySkin = (function (_super) {
	__extends(StorySkin, _super);
	var StorySkin$Skin83 = 	(function (_super) {
		__extends(StorySkin$Skin83, _super);
		function StorySkin$Skin83() {
			_super.call(this);
			this.skinParts = ["labelDisplay"];
			
			this.elementsContent = [this._Image1_i(),this._Label1_i(),this._Image2_i(),this.labelDisplay_i()];
			this.states = [
				new eui.State ("up",
					[
					])
				,
				new eui.State ("down",
					[
						new eui.SetProperty("_Image2","source","gushixian_icon_bangzhu02_png")
					])
				,
				new eui.State ("disabled",
					[
					])
				,
				new eui.State ("move",
					[
						new eui.SetProperty("_Image1","alpha",1),
						new eui.SetProperty("_Label1","alpha",1),
						new eui.SetProperty("_Image2","source","gushixian_icon_bangzhu01_png")
					])
			];
		}
		var _proto = StorySkin$Skin83.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			this._Image1 = t;
			t.alpha = 0;
			t.height = 43;
			t.horizontalCenter = 0;
			t.scale9Grid = new egret.Rectangle(5,5,135,33);
			t.source = "tongyong_xuanfutips_xiao_png";
			t.width = 145;
			t.y = -53;
			return t;
		};
		_proto._Label1_i = function () {
			var t = new eui.Label();
			this._Label1 = t;
			t.alpha = 0;
			t.fontFamily = "Microsoft YaHei";
			t.horizontalCenter = 0;
			t.size = 16;
			t.text = "帮助";
			t.textColor = 0x999999;
			t.y = -40;
			return t;
		};
		_proto._Image2_i = function () {
			var t = new eui.Image();
			this._Image2 = t;
			t.percentHeight = 100;
			t.source = "gushixian_icon_bangzhu00_png";
			t.percentWidth = 100;
			return t;
		};
		_proto.labelDisplay_i = function () {
			var t = new eui.Label();
			this.labelDisplay = t;
			t.horizontalCenter = 0;
			t.verticalCenter = 0;
			return t;
		};
		return StorySkin$Skin83;
	})(eui.Skin);

	var StorySkin$Skin84 = 	(function (_super) {
		__extends(StorySkin$Skin84, _super);
		function StorySkin$Skin84() {
			_super.call(this);
			this.skinParts = ["labelDisplay"];
			
			this.elementsContent = [this._Image1_i(),this.labelDisplay_i()];
			this.states = [
				new eui.State ("up",
					[
					])
				,
				new eui.State ("down",
					[
						new eui.SetProperty("_Image1","source","gushixian_quanbuzhangjie_btn_02_png")
					])
				,
				new eui.State ("disabled",
					[
					])
				,
				new eui.State ("move",
					[
						new eui.SetProperty("_Image1","source","gushixian_quanbuzhangjie_btn_01_png")
					])
			];
		}
		var _proto = StorySkin$Skin84.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			this._Image1 = t;
			t.percentHeight = 100;
			t.source = "gushixian_zhangjie_dikuang_png";
			t.percentWidth = 100;
			return t;
		};
		_proto.labelDisplay_i = function () {
			var t = new eui.Label();
			this.labelDisplay = t;
			t.fontFamily = "fangzheng";
			t.horizontalCenter = 0;
			t.size = 30;
			t.verticalCenter = 0;
			return t;
		};
		return StorySkin$Skin84;
	})(eui.Skin);

	var StorySkin$Skin85 = 	(function (_super) {
		__extends(StorySkin$Skin85, _super);
		function StorySkin$Skin85() {
			_super.call(this);
			this.skinParts = ["labelDisplay"];
			
			this.elementsContent = [this._Rect1_i(),this._Image1_i(),this.labelDisplay_i()];
			this.states = [
				new eui.State ("up",
					[
					])
				,
				new eui.State ("down",
					[
						new eui.SetProperty("_Image1","source","tongyong_fanhui_icon02_png")
					])
				,
				new eui.State ("disabled",
					[
					])
				,
				new eui.State ("move",
					[
						new eui.SetProperty("_Image1","source","tongyong_fanhui_icon01_png")
					])
			];
		}
		var _proto = StorySkin$Skin85.prototype;

		_proto._Rect1_i = function () {
			var t = new eui.Rect();
			t.bottom = 0;
			t.fillAlpha = 0;
			t.left = 0;
			t.right = 0;
			t.top = 0;
			return t;
		};
		_proto._Image1_i = function () {
			var t = new eui.Image();
			this._Image1 = t;
			t.left = 29;
			t.source = "tongyong_fanhui_icon00_png";
			t.top = 3;
			return t;
		};
		_proto.labelDisplay_i = function () {
			var t = new eui.Label();
			this.labelDisplay = t;
			t.fontFamily = "fangzheng";
			t.size = 30;
			t.textColor = 0xffffff;
			t.verticalCenter = 0;
			t.x = 88;
			return t;
		};
		return StorySkin$Skin85;
	})(eui.Skin);

	function StorySkin() {
		_super.call(this);
		this.skinParts = ["titleTween","rewardTween","lightTween","image5","gNovice","personTitle","personValue","gPerson","gScroller","scrollStory","gStory","percentBar","textPercent","btnExplore50","btnExplore75","btnExplore100","textExplore50","textExplore75","textExplore100","textTitle","textEnds","gEnds","btnLocation","btnHelp","image0","image","btnAllchapter","image1","iconChapterNew","gTitle","gContent","btnReturn"];
		
		this.height = 1080;
		this.width = 1920;
		this.titleTween_i();
		this.rewardTween_i();
		this.lightTween_i();
		this.elementsContent = [this._Rect1_i(),this._Image1_i(),this._Image2_i(),this._Image3_i(),this.gContent_i(),this.btnReturn_i()];
		
		eui.Binding.$bindProperties(this, ["image"],[0],this._TweenItem1,"target");
		eui.Binding.$bindProperties(this, [0.7],[],this._Object2,"alpha");
		eui.Binding.$bindProperties(this, [0],[],this._Object3,"alpha");
		eui.Binding.$bindProperties(this, [1.4],[],this._Object3,"scaleX");
		eui.Binding.$bindProperties(this, [1.9],[],this._Object3,"scaleY");
		eui.Binding.$bindProperties(this, ["image0"],[0],this._TweenItem2,"target");
		eui.Binding.$bindProperties(this, [0],[],this._Object5,"alpha");
		eui.Binding.$bindProperties(this, [0.7],[],this._Object6,"alpha");
		eui.Binding.$bindProperties(this, [0],[],this._Object7,"alpha");
		eui.Binding.$bindProperties(this, [1.4],[],this._Object7,"scaleX");
		eui.Binding.$bindProperties(this, [1.9],[],this._Object7,"scaleY");
		eui.Binding.$bindProperties(this, ["image1"],[0],this._TweenItem3,"target");
		eui.Binding.$bindProperties(this, [0],[],this._Object9,"alpha");
		eui.Binding.$bindProperties(this, [1],[],this._Object10,"alpha");
		eui.Binding.$bindProperties(this, [0],[],this._Object11,"alpha");
		eui.Binding.$bindProperties(this, [0],[],this._Object12,"alpha");
		eui.Binding.$bindProperties(this, [1],[],this._Object13,"alpha");
		eui.Binding.$bindProperties(this, [0],[],this._Object14,"alpha");
		eui.Binding.$bindProperties(this, ["hostComponent.image2"],[0],this._TweenItem4,"target");
		eui.Binding.$bindProperties(this, [0],[],this._Object16,"alpha");
		eui.Binding.$bindProperties(this, [0.9],[],this._Object17,"alpha");
		eui.Binding.$bindProperties(this, [0],[],this._Object18,"alpha");
		eui.Binding.$bindProperties(this, ["hostComponent.image3"],[0],this._TweenItem5,"target");
		eui.Binding.$bindProperties(this, [0],[],this._Object20,"alpha");
		eui.Binding.$bindProperties(this, [1],[],this._Object21,"alpha");
		eui.Binding.$bindProperties(this, [0],[],this._Object22,"alpha");
		eui.Binding.$bindProperties(this, [1.8],[],this._Object22,"scaleX");
		eui.Binding.$bindProperties(this, [1.8],[],this._Object22,"scaleY");
		eui.Binding.$bindProperties(this, ["hostComponent.image4"],[0],this._TweenItem6,"target");
		eui.Binding.$bindProperties(this, [0],[],this._Object24,"alpha");
		eui.Binding.$bindProperties(this, [1],[],this._Object25,"alpha");
		eui.Binding.$bindProperties(this, [0],[],this._Object26,"alpha");
		eui.Binding.$bindProperties(this, [1.8],[],this._Object26,"scaleX");
		eui.Binding.$bindProperties(this, [1.8],[],this._Object26,"scaleY");
		eui.Binding.$bindProperties(this, ["image5"],[0],this._TweenItem7,"target");
		eui.Binding.$bindProperties(this, [0.2],[],this._Object27,"alpha");
		eui.Binding.$bindProperties(this, [-9.6],[],this._Object27,"x");
		eui.Binding.$bindProperties(this, [0.1],[],this._Object28,"alpha");
		eui.Binding.$bindProperties(this, [993.6],[],this._Object28,"x");
		eui.Binding.$bindProperties(this, [0],[],this._Object29,"alpha");
		eui.Binding.$bindProperties(this, [2164],[],this._Object29,"x");
		eui.Binding.$bindProperties(this, [3000],[],this._Object30,"x");
	}
	var _proto = StorySkin.prototype;

	_proto.titleTween_i = function () {
		var t = new egret.tween.TweenGroup();
		this.titleTween = t;
		t.items = [this._TweenItem1_i(),this._TweenItem2_i(),this._TweenItem3_i()];
		return t;
	};
	_proto._TweenItem1_i = function () {
		var t = new egret.tween.TweenItem();
		this._TweenItem1 = t;
		t.props = this._Object1_i();
		t.paths = [this._Set1_i(),this._To1_i(),this._To2_i()];
		return t;
	};
	_proto._Object1_i = function () {
		var t = {};
		t.loop = "true";
		return t;
	};
	_proto._Set1_i = function () {
		var t = new egret.tween.Set();
		return t;
	};
	_proto._To1_i = function () {
		var t = new egret.tween.To();
		t.duration = 500;
		t.props = this._Object2_i();
		return t;
	};
	_proto._Object2_i = function () {
		var t = {};
		this._Object2 = t;
		return t;
	};
	_proto._To2_i = function () {
		var t = new egret.tween.To();
		t.duration = 3500;
		t.props = this._Object3_i();
		return t;
	};
	_proto._Object3_i = function () {
		var t = {};
		this._Object3 = t;
		return t;
	};
	_proto._TweenItem2_i = function () {
		var t = new egret.tween.TweenItem();
		this._TweenItem2 = t;
		t.props = this._Object4_i();
		t.paths = [this._Wait1_i(),this._Set2_i(),this._To3_i(),this._To4_i()];
		return t;
	};
	_proto._Object4_i = function () {
		var t = {};
		t.loop = "true";
		return t;
	};
	_proto._Wait1_i = function () {
		var t = new egret.tween.Wait();
		t.duration = 2000;
		return t;
	};
	_proto._Set2_i = function () {
		var t = new egret.tween.Set();
		t.props = this._Object5_i();
		return t;
	};
	_proto._Object5_i = function () {
		var t = {};
		this._Object5 = t;
		return t;
	};
	_proto._To3_i = function () {
		var t = new egret.tween.To();
		t.duration = 500;
		t.props = this._Object6_i();
		return t;
	};
	_proto._Object6_i = function () {
		var t = {};
		this._Object6 = t;
		return t;
	};
	_proto._To4_i = function () {
		var t = new egret.tween.To();
		t.duration = 3200;
		t.props = this._Object7_i();
		return t;
	};
	_proto._Object7_i = function () {
		var t = {};
		this._Object7 = t;
		return t;
	};
	_proto._TweenItem3_i = function () {
		var t = new egret.tween.TweenItem();
		this._TweenItem3 = t;
		t.props = this._Object8_i();
		t.paths = [this._Set3_i(),this._To5_i(),this._To6_i(),this._To7_i(),this._To8_i(),this._To9_i()];
		return t;
	};
	_proto._Object8_i = function () {
		var t = {};
		t.loop = "true";
		return t;
	};
	_proto._Set3_i = function () {
		var t = new egret.tween.Set();
		t.props = this._Object9_i();
		return t;
	};
	_proto._Object9_i = function () {
		var t = {};
		this._Object9 = t;
		return t;
	};
	_proto._To5_i = function () {
		var t = new egret.tween.To();
		t.duration = 500;
		t.props = this._Object10_i();
		return t;
	};
	_proto._Object10_i = function () {
		var t = {};
		this._Object10 = t;
		return t;
	};
	_proto._To6_i = function () {
		var t = new egret.tween.To();
		t.duration = 800;
		t.props = this._Object11_i();
		return t;
	};
	_proto._Object11_i = function () {
		var t = {};
		this._Object11 = t;
		return t;
	};
	_proto._To7_i = function () {
		var t = new egret.tween.To();
		t.duration = 700;
		t.props = this._Object12_i();
		return t;
	};
	_proto._Object12_i = function () {
		var t = {};
		this._Object12 = t;
		return t;
	};
	_proto._To8_i = function () {
		var t = new egret.tween.To();
		t.duration = 500;
		t.props = this._Object13_i();
		return t;
	};
	_proto._Object13_i = function () {
		var t = {};
		this._Object13 = t;
		return t;
	};
	_proto._To9_i = function () {
		var t = new egret.tween.To();
		t.duration = 800;
		t.props = this._Object14_i();
		return t;
	};
	_proto._Object14_i = function () {
		var t = {};
		this._Object14 = t;
		return t;
	};
	_proto.rewardTween_i = function () {
		var t = new egret.tween.TweenGroup();
		this.rewardTween = t;
		t.items = [this._TweenItem4_i(),this._TweenItem5_i(),this._TweenItem6_i()];
		return t;
	};
	_proto._TweenItem4_i = function () {
		var t = new egret.tween.TweenItem();
		this._TweenItem4 = t;
		t.props = this._Object15_i();
		t.paths = [this._Set4_i(),this._To10_i(),this._To11_i()];
		return t;
	};
	_proto._Object15_i = function () {
		var t = {};
		t.loop = "true";
		return t;
	};
	_proto._Set4_i = function () {
		var t = new egret.tween.Set();
		t.props = this._Object16_i();
		return t;
	};
	_proto._Object16_i = function () {
		var t = {};
		this._Object16 = t;
		return t;
	};
	_proto._To10_i = function () {
		var t = new egret.tween.To();
		t.duration = 1050;
		t.props = this._Object17_i();
		return t;
	};
	_proto._Object17_i = function () {
		var t = {};
		this._Object17 = t;
		return t;
	};
	_proto._To11_i = function () {
		var t = new egret.tween.To();
		t.duration = 4900;
		t.props = this._Object18_i();
		return t;
	};
	_proto._Object18_i = function () {
		var t = {};
		this._Object18 = t;
		return t;
	};
	_proto._TweenItem5_i = function () {
		var t = new egret.tween.TweenItem();
		this._TweenItem5 = t;
		t.props = this._Object19_i();
		t.paths = [this._Set5_i(),this._To12_i(),this._To13_i()];
		return t;
	};
	_proto._Object19_i = function () {
		var t = {};
		t.loop = "true";
		return t;
	};
	_proto._Set5_i = function () {
		var t = new egret.tween.Set();
		t.props = this._Object20_i();
		return t;
	};
	_proto._Object20_i = function () {
		var t = {};
		this._Object20 = t;
		return t;
	};
	_proto._To12_i = function () {
		var t = new egret.tween.To();
		t.duration = 1050;
		t.props = this._Object21_i();
		return t;
	};
	_proto._Object21_i = function () {
		var t = {};
		this._Object21 = t;
		return t;
	};
	_proto._To13_i = function () {
		var t = new egret.tween.To();
		t.duration = 3050;
		t.props = this._Object22_i();
		return t;
	};
	_proto._Object22_i = function () {
		var t = {};
		this._Object22 = t;
		return t;
	};
	_proto._TweenItem6_i = function () {
		var t = new egret.tween.TweenItem();
		this._TweenItem6 = t;
		t.props = this._Object23_i();
		t.paths = [this._Wait2_i(),this._Set6_i(),this._To14_i(),this._To15_i()];
		return t;
	};
	_proto._Object23_i = function () {
		var t = {};
		t.loop = "true";
		return t;
	};
	_proto._Wait2_i = function () {
		var t = new egret.tween.Wait();
		t.duration = 1850;
		return t;
	};
	_proto._Set6_i = function () {
		var t = new egret.tween.Set();
		t.props = this._Object24_i();
		return t;
	};
	_proto._Object24_i = function () {
		var t = {};
		this._Object24 = t;
		return t;
	};
	_proto._To14_i = function () {
		var t = new egret.tween.To();
		t.duration = 1050;
		t.props = this._Object25_i();
		return t;
	};
	_proto._Object25_i = function () {
		var t = {};
		this._Object25 = t;
		return t;
	};
	_proto._To15_i = function () {
		var t = new egret.tween.To();
		t.duration = 3050;
		t.props = this._Object26_i();
		return t;
	};
	_proto._Object26_i = function () {
		var t = {};
		this._Object26 = t;
		return t;
	};
	_proto.lightTween_i = function () {
		var t = new egret.tween.TweenGroup();
		this.lightTween = t;
		t.items = [this._TweenItem7_i()];
		return t;
	};
	_proto._TweenItem7_i = function () {
		var t = new egret.tween.TweenItem();
		this._TweenItem7 = t;
		t.paths = [this._Set7_i(),this._To16_i(),this._To17_i(),this._To18_i(),this._To19_i()];
		return t;
	};
	_proto._Set7_i = function () {
		var t = new egret.tween.Set();
		return t;
	};
	_proto._To16_i = function () {
		var t = new egret.tween.To();
		t.duration = 350;
		t.props = this._Object27_i();
		return t;
	};
	_proto._Object27_i = function () {
		var t = {};
		this._Object27 = t;
		return t;
	};
	_proto._To17_i = function () {
		var t = new egret.tween.To();
		t.duration = 300;
		t.props = this._Object28_i();
		return t;
	};
	_proto._Object28_i = function () {
		var t = {};
		this._Object28 = t;
		return t;
	};
	_proto._To18_i = function () {
		var t = new egret.tween.To();
		t.duration = 350;
		t.props = this._Object29_i();
		return t;
	};
	_proto._Object29_i = function () {
		var t = {};
		this._Object29 = t;
		return t;
	};
	_proto._To19_i = function () {
		var t = new egret.tween.To();
		t.duration = 250;
		t.props = this._Object30_i();
		return t;
	};
	_proto._Object30_i = function () {
		var t = {};
		this._Object30 = t;
		return t;
	};
	_proto._Rect1_i = function () {
		var t = new eui.Rect();
		t.bottom = 0;
		t.left = 0;
		t.right = 0;
		t.top = 0;
		return t;
	};
	_proto._Image1_i = function () {
		var t = new eui.Image();
		t.bottom = 0;
		t.left = 0;
		t.right = 0;
		t.source = "shezhi_bg1920_1080_jpg";
		t.top = 0;
		return t;
	};
	_proto._Image2_i = function () {
		var t = new eui.Image();
		t.left = 0;
		t.source = "tongyong_daohang_fenge_zuo_png";
		t.y = 62;
		return t;
	};
	_proto._Image3_i = function () {
		var t = new eui.Image();
		t.right = 0;
		t.source = "tongyong_daohang_fenge_you_png";
		t.y = 62;
		return t;
	};
	_proto.gContent_i = function () {
		var t = new eui.Group();
		this.gContent = t;
		t.height = 1080;
		t.horizontalCenter = 0;
		t.verticalCenter = 0;
		t.width = 1920;
		t.elementsContent = [this.image5_i(),this.gNovice_i(),this.gPerson_i(),this.gStory_i(),this.percentBar_i(),this.textPercent_i(),this.btnExplore50_i(),this.btnExplore75_i(),this.btnExplore100_i(),this.textExplore50_i(),this.textExplore75_i(),this.textExplore100_i(),this.gEnds_i(),this.btnLocation_i(),this.btnHelp_i(),this.gTitle_i()];
		return t;
	};
	_proto.image5_i = function () {
		var t = new eui.Image();
		this.image5 = t;
		t.alpha = 0;
		t.height = 300;
		t.rotation = 40;
		t.scaleX = 2.16;
		t.scaleY = 5.2;
		t.source = "jianbian2_png";
		t.verticalCenter = 0;
		t.x = -1180;
		return t;
	};
	_proto.gNovice_i = function () {
		var t = new eui.Group();
		this.gNovice = t;
		t.visible = false;
		t.x = 699;
		t.y = 33;
		t.elementsContent = [this._Exclamation1_i(),this._Label1_i()];
		return t;
	};
	_proto._Exclamation1_i = function () {
		var t = new Component.Exclamation();
		t.height = 58;
		t.width = 58;
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto._Label1_i = function () {
		var t = new eui.Label();
		t.fontFamily = "Microsoft YaHei";
		t.size = 22;
		t.text = "你可以从故事线界面探索剧情，重新作出选择";
		t.verticalCenter = 0;
		t.x = 68;
		return t;
	};
	_proto.gPerson_i = function () {
		var t = new eui.Group();
		this.gPerson = t;
		t.height = 49;
		t.right = 178;
		t.y = 9;
		t.layout = this._HorizontalLayout1_i();
		t.elementsContent = [this._Image4_i(),this.personTitle_i(),this.personValue_i()];
		return t;
	};
	_proto._HorizontalLayout1_i = function () {
		var t = new eui.HorizontalLayout();
		t.horizontalAlign = "right";
		t.verticalAlign = "middle";
		return t;
	};
	_proto._Image4_i = function () {
		var t = new eui.Image();
		t.left = 0;
		t.source = "gushixian_guanjianrenwu_png";
		t.verticalCenter = 0;
		return t;
	};
	_proto.personTitle_i = function () {
		var t = new eui.Label();
		this.personTitle = t;
		t.fontFamily = "Microsoft YaHei";
		t.size = 16;
		t.text = "本章关键人物：  ";
		t.textColor = 0x797979;
		t.verticalCenter = 0;
		t.x = 45;
		return t;
	};
	_proto.personValue_i = function () {
		var t = new eui.Label();
		this.personValue = t;
		t.fontFamily = "Microsoft YaHei";
		t.right = 0;
		t.size = 16;
		t.text = "";
		t.textColor = 0xffffff;
		t.verticalCenter = 0;
		return t;
	};
	_proto.gStory_i = function () {
		var t = new eui.Group();
		this.gStory = t;
		t.height = 750;
		t.horizontalCenter = 0;
		t.scrollEnabled = false;
		t.verticalCenter = 0;
		t.width = 1850;
		t.elementsContent = [this.scrollStory_i()];
		return t;
	};
	_proto.scrollStory_i = function () {
		var t = new eui.Scroller();
		this.scrollStory = t;
		t.bottom = 0;
		t.bounces = false;
		t.left = 0;
		t.right = 0;
		t.top = 0;
		t.viewport = this._Group1_i();
		return t;
	};
	_proto._Group1_i = function () {
		var t = new eui.Group();
		t.elementsContent = [this.gScroller_i()];
		return t;
	};
	_proto.gScroller_i = function () {
		var t = new eui.Group();
		this.gScroller = t;
		t.height = 750;
		t.width = 1850;
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto.percentBar_i = function () {
		var t = new eui.ProgressBar();
		this.percentBar = t;
		t.height = 18;
		t.skinName = "percentBarSkin";
		t.width = 773;
		t.x = 43;
		t.y = 1009;
		return t;
	};
	_proto.textPercent_i = function () {
		var t = new eui.Label();
		this.textPercent = t;
		t.bottom = 28;
		t.fontFamily = "Microsoft YaHei";
		t.size = 18;
		t.text = "本章探索度：";
		t.textColor = 0x797979;
		t.x = 72;
		return t;
	};
	_proto.btnExplore50_i = function () {
		var t = new Component.Storyline_ExploreButton();
		this.btnExplore50 = t;
		t.bottom = 25;
		t.height = 72;
		t.skinName = "Storyline_ExploreLockdSkin";
		t.width = 72;
		t.x = 410;
		return t;
	};
	_proto.btnExplore75_i = function () {
		var t = new Component.Storyline_ExploreButton();
		this.btnExplore75 = t;
		t.bottom = 25;
		t.height = 72;
		t.skinName = "Storyline_ExploreLockdSkin";
		t.width = 72;
		t.x = 604;
		return t;
	};
	_proto.btnExplore100_i = function () {
		var t = new Component.Storyline_ExploreButton();
		this.btnExplore100 = t;
		t.bottom = 25;
		t.height = 72;
		t.skinName = "Storyline_ExploreLockdSkin";
		t.width = 72;
		t.x = 807;
		return t;
	};
	_proto.textExplore50_i = function () {
		var t = new eui.Label();
		this.textExplore50 = t;
		t.bottom = 24;
		t.fontFamily = "Microsoft YaHei";
		t.size = 18;
		t.text = "50%";
		t.textColor = 0x797979;
		t.x = 475;
		return t;
	};
	_proto.textExplore75_i = function () {
		var t = new eui.Label();
		this.textExplore75 = t;
		t.bottom = 24;
		t.fontFamily = "Microsoft YaHei";
		t.size = 18;
		t.text = "75%";
		t.textColor = 0x797979;
		t.x = 669;
		return t;
	};
	_proto.textExplore100_i = function () {
		var t = new eui.Label();
		this.textExplore100 = t;
		t.bottom = 24;
		t.fontFamily = "Microsoft YaHei";
		t.size = 18;
		t.text = "100%";
		t.textColor = 0x797979;
		t.x = 872;
		return t;
	};
	_proto.gEnds_i = function () {
		var t = new eui.Group();
		this.gEnds = t;
		t.anchorOffsetX = 0;
		t.bottom = 24;
		t.height = 71;
		t.right = 528;
		t.width = 310;
		t.layout = this._HorizontalLayout2_i();
		t.elementsContent = [this.textTitle_i(),this.textEnds_i()];
		return t;
	};
	_proto._HorizontalLayout2_i = function () {
		var t = new eui.HorizontalLayout();
		t.gap = 9;
		t.horizontalAlign = "right";
		t.verticalAlign = "middle";
		return t;
	};
	_proto.textTitle_i = function () {
		var t = new eui.Label();
		this.textTitle = t;
		t.fontFamily = "Microsoft YaHei";
		t.left = 0;
		t.size = 18;
		t.text = "本章结局达成：";
		t.textColor = 0x727272;
		t.verticalCenter = 0;
		return t;
	};
	_proto.textEnds_i = function () {
		var t = new eui.Label();
		this.textEnds = t;
		t.fontFamily = "Microsoft YaHei";
		t.right = 0;
		t.size = 18;
		t.text = "0/0";
		t.textColor = 0x727272;
		t.verticalCenter = 0;
		return t;
	};
	_proto.btnLocation_i = function () {
		var t = new Component.ButtonStoryLocation();
		this.btnLocation = t;
		t.bottom = 24;
		t.label = "Button";
		t.skinName = "ButtonStoryLocationSkin";
		t.x = 1479;
		return t;
	};
	_proto.btnHelp_i = function () {
		var t = new eui.Button();
		this.btnHelp = t;
		t.bottom = 24;
		t.height = 72;
		t.label = "";
		t.width = 72;
		t.x = 1402;
		t.skinName = StorySkin$Skin83;
		return t;
	};
	_proto.gTitle_i = function () {
		var t = new eui.Group();
		this.gTitle = t;
		t.bottom = 23;
		t.height = 71;
		t.right = 42;
		t.width = 321;
		t.elementsContent = [this.image0_i(),this.image_i(),this.btnAllchapter_i(),this.image1_i(),this.iconChapterNew_i()];
		return t;
	};
	_proto.image0_i = function () {
		var t = new eui.Image();
		this.image0 = t;
		t.alpha = 0;
		t.height = 71;
		t.horizontalCenter = 0;
		t.scale9Grid = new egret.Rectangle(60,9,367,59);
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "gushixian_zhangjie_effect1_png";
		t.verticalCenter = 0;
		t.width = 321;
		return t;
	};
	_proto.image_i = function () {
		var t = new eui.Image();
		this.image = t;
		t.alpha = 0;
		t.height = 71;
		t.horizontalCenter = 0;
		t.scale9Grid = new egret.Rectangle(60,9,367,59);
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "gushixian_zhangjie_effect1_png";
		t.verticalCenter = 0;
		t.width = 321;
		return t;
	};
	_proto.btnAllchapter_i = function () {
		var t = new eui.Button();
		this.btnAllchapter = t;
		t.height = 71;
		t.label = "全部章节";
		t.width = 321;
		t.skinName = StorySkin$Skin84;
		return t;
	};
	_proto.image1_i = function () {
		var t = new eui.Image();
		this.image1 = t;
		t.alpha = 0;
		t.height = 71;
		t.horizontalCenter = 0;
		t.scale9Grid = new egret.Rectangle(60,9,367,59);
		t.source = "waifaguang2_png";
		t.touchEnabled = false;
		t.verticalCenter = 0;
		t.width = 321;
		return t;
	};
	_proto.iconChapterNew_i = function () {
		var t = new eui.Image();
		this.iconChapterNew = t;
		t.source = "tongyong_xiaoxitishi_png";
		t.visible = false;
		t.x = 293;
		t.y = -2;
		return t;
	};
	_proto.btnReturn_i = function () {
		var t = new eui.Button();
		this.btnReturn = t;
		t.height = 62;
		t.label = "故事线";
		t.width = 150;
		t.x = 0;
		t.y = 0;
		t.skinName = StorySkin$Skin85;
		return t;
	};
	return StorySkin;
})(eui.Skin);generateEUI.paths['resource/eui_skins/StoryEnd.exml'] = window.StoryEndSkin = (function (_super) {
	__extends(StoryEndSkin, _super);
	var StoryEndSkin$Skin86 = 	(function (_super) {
		__extends(StoryEndSkin$Skin86, _super);
		function StoryEndSkin$Skin86() {
			_super.call(this);
			this.skinParts = ["labelDisplay"];
			
			this.elementsContent = [this._Image1_i(),this.labelDisplay_i()];
			this.states = [
				new eui.State ("up",
					[
					])
				,
				new eui.State ("down",
					[
						new eui.SetProperty("_Image1","source","jiesuan_fanhuigushixian_btn02_png")
					])
				,
				new eui.State ("disabled",
					[
					])
				,
				new eui.State ("move",
					[
						new eui.SetProperty("_Image1","source","jiesuan_fanhuigushixian_btn01_png")
					])
			];
		}
		var _proto = StoryEndSkin$Skin86.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			this._Image1 = t;
			t.percentHeight = 100;
			t.source = "jiesuan_fanhuigushixian_btn00_png";
			t.percentWidth = 100;
			return t;
		};
		_proto.labelDisplay_i = function () {
			var t = new eui.Label();
			this.labelDisplay = t;
			t.horizontalCenter = 0;
			t.verticalCenter = 0;
			return t;
		};
		return StoryEndSkin$Skin86;
	})(eui.Skin);

	var StoryEndSkin$Skin87 = 	(function (_super) {
		__extends(StoryEndSkin$Skin87, _super);
		function StoryEndSkin$Skin87() {
			_super.call(this);
			this.skinParts = ["labelDisplay"];
			
			this.elementsContent = [this._Rect1_i(),this._Image1_i(),this.labelDisplay_i()];
			this.states = [
				new eui.State ("up",
					[
					])
				,
				new eui.State ("down",
					[
						new eui.SetProperty("_Image1","source","tongyong_fanhui_icon02_png")
					])
				,
				new eui.State ("disabled",
					[
					])
				,
				new eui.State ("move",
					[
						new eui.SetProperty("_Image1","source","tongyong_fanhui_icon01_png")
					])
			];
		}
		var _proto = StoryEndSkin$Skin87.prototype;

		_proto._Rect1_i = function () {
			var t = new eui.Rect();
			t.bottom = 0;
			t.fillAlpha = 0;
			t.left = 0;
			t.right = 0;
			t.top = 0;
			return t;
		};
		_proto._Image1_i = function () {
			var t = new eui.Image();
			this._Image1 = t;
			t.left = 29;
			t.source = "tongyong_fanhui_icon00_png";
			t.top = 3;
			return t;
		};
		_proto.labelDisplay_i = function () {
			var t = new eui.Label();
			this.labelDisplay = t;
			t.fontFamily = "fangzheng";
			t.size = 30;
			t.textColor = 0xffffff;
			t.verticalCenter = 0;
			t.x = 88;
			return t;
		};
		return StoryEndSkin$Skin87;
	})(eui.Skin);

	function StoryEndSkin() {
		_super.call(this);
		this.skinParts = ["startTween","textInfo","image0","textTitle","imgMedal","image","image1","gDB","gMedal","image6","image5","btnStory","image7","gStory","group","gContent","layRect","btnReturn"];
		
		this.height = 1080;
		this.width = 1920;
		this.startTween_i();
		this.elementsContent = [this._Rect1_i(),this._Image1_i(),this.gContent_i(),this.layRect_i(),this.btnReturn_i()];
		
		eui.Binding.$bindProperties(this, ["image"],[0],this._TweenItem1,"target");
		eui.Binding.$bindProperties(this, [0],[],this._Object1,"alpha");
		eui.Binding.$bindProperties(this, [1.5],[],this._Object1,"scaleX");
		eui.Binding.$bindProperties(this, [1.5],[],this._Object1,"scaleY");
		eui.Binding.$bindProperties(this, [0.35],[],this._Object2,"alpha");
		eui.Binding.$bindProperties(this, [0],[],this._Object3,"alpha");
		eui.Binding.$bindProperties(this, [2],[],this._Object3,"scaleX");
		eui.Binding.$bindProperties(this, [1.75],[],this._Object3,"scaleY");
		eui.Binding.$bindProperties(this, ["textTitle"],[0],this._TweenItem2,"target");
		eui.Binding.$bindProperties(this, [0],[],this._Object4,"alpha");
		eui.Binding.$bindProperties(this, [1],[],this._Object5,"alpha");
		eui.Binding.$bindProperties(this, [0],[],this._Object6,"alpha");
		eui.Binding.$bindProperties(this, [1],[],this._Object7,"alpha");
		eui.Binding.$bindProperties(this, [0.3],[],this._Object8,"alpha");
		eui.Binding.$bindProperties(this, [1],[],this._Object9,"alpha");
		eui.Binding.$bindProperties(this, ["image0"],[0],this._TweenItem3,"target");
		eui.Binding.$bindProperties(this, [1],[],this._Object10,"alpha");
		eui.Binding.$bindProperties(this, [0],[],this._Object10,"scaleX");
		eui.Binding.$bindProperties(this, [0],[],this._Object10,"scaleY");
		eui.Binding.$bindProperties(this, [1],[],this._Object11,"alpha");
		eui.Binding.$bindProperties(this, [1],[],this._Object11,"scaleX");
		eui.Binding.$bindProperties(this, [1],[],this._Object11,"scaleY");
		eui.Binding.$bindProperties(this, ["group"],[0],this._TweenItem4,"target");
		eui.Binding.$bindProperties(this, [0],[],this._Object12,"alpha");
		eui.Binding.$bindProperties(this, [1],[],this._Object13,"alpha");
		eui.Binding.$bindProperties(this, ["textInfo"],[0],this._TweenItem5,"target");
		eui.Binding.$bindProperties(this, [0],[],this._Object14,"alpha");
		eui.Binding.$bindProperties(this, [1],[],this._Object15,"alpha");
		eui.Binding.$bindProperties(this, ["image1"],[0],this._TweenItem6,"target");
		eui.Binding.$bindProperties(this, [0],[],this._Object16,"alpha");
		eui.Binding.$bindProperties(this, [1],[],this._Object17,"alpha");
		eui.Binding.$bindProperties(this, [0],[],this._Object18,"alpha");
	}
	var _proto = StoryEndSkin.prototype;

	_proto.startTween_i = function () {
		var t = new egret.tween.TweenGroup();
		this.startTween = t;
		t.items = [this._TweenItem1_i(),this._TweenItem2_i(),this._TweenItem3_i(),this._TweenItem4_i(),this._TweenItem5_i(),this._TweenItem6_i()];
		return t;
	};
	_proto._TweenItem1_i = function () {
		var t = new egret.tween.TweenItem();
		this._TweenItem1 = t;
		t.paths = [this._Set1_i(),this._To1_i(),this._To2_i()];
		return t;
	};
	_proto._Set1_i = function () {
		var t = new egret.tween.Set();
		t.props = this._Object1_i();
		return t;
	};
	_proto._Object1_i = function () {
		var t = {};
		this._Object1 = t;
		return t;
	};
	_proto._To1_i = function () {
		var t = new egret.tween.To();
		t.duration = 500;
		t.props = this._Object2_i();
		return t;
	};
	_proto._Object2_i = function () {
		var t = {};
		this._Object2 = t;
		return t;
	};
	_proto._To2_i = function () {
		var t = new egret.tween.To();
		t.duration = 850;
		t.props = this._Object3_i();
		return t;
	};
	_proto._Object3_i = function () {
		var t = {};
		this._Object3 = t;
		return t;
	};
	_proto._TweenItem2_i = function () {
		var t = new egret.tween.TweenItem();
		this._TweenItem2 = t;
		t.paths = [this._Wait1_i(),this._Set2_i(),this._To3_i(),this._To4_i(),this._To5_i(),this._To6_i(),this._To7_i()];
		return t;
	};
	_proto._Wait1_i = function () {
		var t = new egret.tween.Wait();
		t.duration = 1350;
		return t;
	};
	_proto._Set2_i = function () {
		var t = new egret.tween.Set();
		t.props = this._Object4_i();
		return t;
	};
	_proto._Object4_i = function () {
		var t = {};
		this._Object4 = t;
		return t;
	};
	_proto._To3_i = function () {
		var t = new egret.tween.To();
		t.duration = 200;
		t.props = this._Object5_i();
		return t;
	};
	_proto._Object5_i = function () {
		var t = {};
		this._Object5 = t;
		return t;
	};
	_proto._To4_i = function () {
		var t = new egret.tween.To();
		t.duration = 150;
		t.props = this._Object6_i();
		return t;
	};
	_proto._Object6_i = function () {
		var t = {};
		this._Object6 = t;
		return t;
	};
	_proto._To5_i = function () {
		var t = new egret.tween.To();
		t.duration = 150;
		t.props = this._Object7_i();
		return t;
	};
	_proto._Object7_i = function () {
		var t = {};
		this._Object7 = t;
		return t;
	};
	_proto._To6_i = function () {
		var t = new egret.tween.To();
		t.duration = 100;
		t.props = this._Object8_i();
		return t;
	};
	_proto._Object8_i = function () {
		var t = {};
		this._Object8 = t;
		return t;
	};
	_proto._To7_i = function () {
		var t = new egret.tween.To();
		t.duration = 100;
		t.props = this._Object9_i();
		return t;
	};
	_proto._Object9_i = function () {
		var t = {};
		this._Object9 = t;
		return t;
	};
	_proto._TweenItem3_i = function () {
		var t = new egret.tween.TweenItem();
		this._TweenItem3 = t;
		t.paths = [this._Wait2_i(),this._Set3_i(),this._To8_i()];
		return t;
	};
	_proto._Wait2_i = function () {
		var t = new egret.tween.Wait();
		t.duration = 1150;
		return t;
	};
	_proto._Set3_i = function () {
		var t = new egret.tween.Set();
		t.props = this._Object10_i();
		return t;
	};
	_proto._Object10_i = function () {
		var t = {};
		this._Object10 = t;
		return t;
	};
	_proto._To8_i = function () {
		var t = new egret.tween.To();
		t.duration = 1000;
		t.props = this._Object11_i();
		return t;
	};
	_proto._Object11_i = function () {
		var t = {};
		this._Object11 = t;
		return t;
	};
	_proto._TweenItem4_i = function () {
		var t = new egret.tween.TweenItem();
		this._TweenItem4 = t;
		t.paths = [this._Wait3_i(),this._Set4_i(),this._To9_i()];
		return t;
	};
	_proto._Wait3_i = function () {
		var t = new egret.tween.Wait();
		t.duration = 2650;
		return t;
	};
	_proto._Set4_i = function () {
		var t = new egret.tween.Set();
		t.props = this._Object12_i();
		return t;
	};
	_proto._Object12_i = function () {
		var t = {};
		this._Object12 = t;
		return t;
	};
	_proto._To9_i = function () {
		var t = new egret.tween.To();
		t.duration = 1350;
		t.props = this._Object13_i();
		return t;
	};
	_proto._Object13_i = function () {
		var t = {};
		this._Object13 = t;
		return t;
	};
	_proto._TweenItem5_i = function () {
		var t = new egret.tween.TweenItem();
		this._TweenItem5 = t;
		t.paths = [this._Wait4_i(),this._Set5_i(),this._To10_i()];
		return t;
	};
	_proto._Wait4_i = function () {
		var t = new egret.tween.Wait();
		t.duration = 550;
		return t;
	};
	_proto._Set5_i = function () {
		var t = new egret.tween.Set();
		t.props = this._Object14_i();
		return t;
	};
	_proto._Object14_i = function () {
		var t = {};
		this._Object14 = t;
		return t;
	};
	_proto._To10_i = function () {
		var t = new egret.tween.To();
		t.duration = 1450;
		t.props = this._Object15_i();
		return t;
	};
	_proto._Object15_i = function () {
		var t = {};
		this._Object15 = t;
		return t;
	};
	_proto._TweenItem6_i = function () {
		var t = new egret.tween.TweenItem();
		this._TweenItem6 = t;
		t.paths = [this._Set6_i(),this._To11_i(),this._To12_i()];
		return t;
	};
	_proto._Set6_i = function () {
		var t = new egret.tween.Set();
		t.props = this._Object16_i();
		return t;
	};
	_proto._Object16_i = function () {
		var t = {};
		this._Object16 = t;
		return t;
	};
	_proto._To11_i = function () {
		var t = new egret.tween.To();
		t.duration = 300;
		t.props = this._Object17_i();
		return t;
	};
	_proto._Object17_i = function () {
		var t = {};
		this._Object17 = t;
		return t;
	};
	_proto._To12_i = function () {
		var t = new egret.tween.To();
		t.duration = 700;
		t.props = this._Object18_i();
		return t;
	};
	_proto._Object18_i = function () {
		var t = {};
		this._Object18 = t;
		return t;
	};
	_proto._Rect1_i = function () {
		var t = new eui.Rect();
		t.bottom = 0;
		t.left = 0;
		t.right = 0;
		t.top = 0;
		return t;
	};
	_proto._Image1_i = function () {
		var t = new eui.Image();
		t.bottom = 0;
		t.left = 0;
		t.right = 0;
		t.source = "jiesuan_ge_background_jpg";
		t.top = 0;
		return t;
	};
	_proto.gContent_i = function () {
		var t = new eui.Group();
		this.gContent = t;
		t.height = 1080;
		t.horizontalCenter = 0;
		t.verticalCenter = 0;
		t.width = 1920;
		t.elementsContent = [this._Group1_i(),this.textTitle_i(),this.gMedal_i(),this.group_i()];
		return t;
	};
	_proto._Group1_i = function () {
		var t = new eui.Group();
		t.height = 108;
		t.horizontalCenter = 0;
		t.width = 1724;
		t.y = 472;
		t.elementsContent = [this.textInfo_i(),this.image0_i()];
		return t;
	};
	_proto.textInfo_i = function () {
		var t = new eui.Label();
		this.textInfo = t;
		t.alpha = 0;
		t.bottom = 42;
		t.fontFamily = "Microsoft YaHei";
		t.horizontalCenter = 0;
		t.lineSpacing = 16;
		t.scaleX = 1;
		t.scaleY = 1;
		t.size = 26;
		t.text = "";
		t.textAlign = "center";
		t.textColor = 0xffffff;
		t.verticalAlign = "middle";
		return t;
	};
	_proto.image0_i = function () {
		var t = new eui.Image();
		this.image0 = t;
		t.alpha = 0;
		t.height = 2;
		t.horizontalCenter = 0;
		t.scale9Grid = new egret.Rectangle(12,0,76,2);
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "jiesuan_fenge_png";
		t.width = 1724;
		t.y = 106;
		return t;
	};
	_proto.textTitle_i = function () {
		var t = new eui.Label();
		this.textTitle = t;
		t.alpha = 0;
		t.fontFamily = "Microsoft YaHei";
		t.horizontalCenter = 0;
		t.scaleX = 1;
		t.scaleY = 1;
		t.size = 22;
		t.text = "";
		t.textAlign = "center";
		t.textColor = 0xd3cdbd;
		t.x = 667;
		t.y = 595;
		return t;
	};
	_proto.gMedal_i = function () {
		var t = new eui.Group();
		this.gMedal = t;
		t.height = 162;
		t.horizontalCenter = 0;
		t.width = 162;
		t.y = 217;
		t.elementsContent = [this.imgMedal_i(),this.image_i(),this.image1_i(),this.gDB_i()];
		return t;
	};
	_proto.imgMedal_i = function () {
		var t = new eui.Image();
		this.imgMedal = t;
		t.horizontalCenter = 0;
		t.source = "jiesuan_ge_png";
		t.verticalCenter = 0;
		t.visible = false;
		return t;
	};
	_proto.image_i = function () {
		var t = new eui.Image();
		this.image = t;
		t.alpha = 0;
		t.horizontalCenter = 0;
		t.source = "guangquan01_png";
		t.verticalCenter = 0;
		t.visible = false;
		return t;
	};
	_proto.image1_i = function () {
		var t = new eui.Image();
		this.image1 = t;
		t.alpha = 0;
		t.height = 182;
		t.horizontalCenter = 1;
		t.source = "yinhuizhang_light_png";
		t.verticalCenter = 2;
		t.visible = false;
		t.width = 182;
		return t;
	};
	_proto.gDB_i = function () {
		var t = new eui.Group();
		this.gDB = t;
		t.horizontalCenter = 0;
		t.verticalCenter = 0;
		return t;
	};
	_proto.group_i = function () {
		var t = new eui.Group();
		this.group = t;
		t.alpha = 0;
		t.horizontalCenter = 0;
		t.y = 696;
		t.elementsContent = [this.gStory_i()];
		return t;
	};
	_proto.gStory_i = function () {
		var t = new eui.Group();
		this.gStory = t;
		t.height = 65;
		t.width = 303;
		t.elementsContent = [this.image6_i(),this.image5_i(),this.btnStory_i(),this.image7_i()];
		return t;
	};
	_proto.image6_i = function () {
		var t = new eui.Image();
		this.image6 = t;
		t.alpha = 0;
		t.height = 65;
		t.horizontalCenter = 0;
		t.source = "tongyong_queding_effect1_png";
		t.verticalCenter = 0;
		t.width = 303;
		return t;
	};
	_proto.image5_i = function () {
		var t = new eui.Image();
		this.image5 = t;
		t.alpha = 0;
		t.height = 65;
		t.horizontalCenter = 0;
		t.source = "tongyong_queding_effect1_png";
		t.verticalCenter = 0;
		t.width = 303;
		return t;
	};
	_proto.btnStory_i = function () {
		var t = new eui.Button();
		this.btnStory = t;
		t.horizontalCenter = 0;
		t.label = "";
		t.verticalCenter = 0;
		t.skinName = StoryEndSkin$Skin86;
		return t;
	};
	_proto.image7_i = function () {
		var t = new eui.Image();
		this.image7 = t;
		t.alpha = 0;
		t.height = 65;
		t.horizontalCenter = 0;
		t.source = "waifaguang1_png";
		t.touchEnabled = false;
		t.verticalCenter = 0;
		t.width = 303;
		return t;
	};
	_proto.layRect_i = function () {
		var t = new eui.Rect();
		this.layRect = t;
		t.bottom = 0;
		t.fillAlpha = 0.4;
		t.left = 0;
		t.right = 0;
		t.top = 0;
		t.visible = false;
		return t;
	};
	_proto.btnReturn_i = function () {
		var t = new eui.Button();
		this.btnReturn = t;
		t.height = 62;
		t.label = "返回";
		t.width = 150;
		t.x = 0;
		t.y = 0;
		t.skinName = StoryEndSkin$Skin87;
		return t;
	};
	return StoryEndSkin;
})(eui.Skin);generateEUI.paths['resource/eui_skins/storyline_badend_curr.exml'] = window.storyline_badend_currSkin = (function (_super) {
	__extends(storyline_badend_currSkin, _super);
	var storyline_badend_currSkin$Skin88 = 	(function (_super) {
		__extends(storyline_badend_currSkin$Skin88, _super);
		function storyline_badend_currSkin$Skin88() {
			_super.call(this);
			this.skinParts = ["labelDisplay"];
			
			this.elementsContent = [this._Image1_i(),this.labelDisplay_i()];
			this.states = [
				new eui.State ("up",
					[
					])
				,
				new eui.State ("down",
					[
						new eui.SetProperty("_Image1","source","gushixian_be01_png")
					])
				,
				new eui.State ("disabled",
					[
					])
			];
		}
		var _proto = storyline_badend_currSkin$Skin88.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			this._Image1 = t;
			t.percentHeight = 100;
			t.source = "gushixian_be00_png";
			t.percentWidth = 100;
			return t;
		};
		_proto.labelDisplay_i = function () {
			var t = new eui.Label();
			this.labelDisplay = t;
			t.horizontalCenter = 0;
			t.verticalCenter = 0;
			return t;
		};
		return storyline_badend_currSkin$Skin88;
	})(eui.Skin);

	var storyline_badend_currSkin$Skin89 = 	(function (_super) {
		__extends(storyline_badend_currSkin$Skin89, _super);
		function storyline_badend_currSkin$Skin89() {
			_super.call(this);
			this.skinParts = ["labelDisplay"];
			
			this.elementsContent = [this._Image1_i(),this.labelDisplay_i()];
			this.states = [
				new eui.State ("up",
					[
					])
				,
				new eui.State ("down",
					[
						new eui.SetProperty("_Image1","source","gushixian_jiedian_button_zaiciqianfu02_png")
					])
				,
				new eui.State ("disabled",
					[
					])
				,
				new eui.State ("move",
					[
						new eui.SetProperty("_Image1","source","gushixian_jiedian_button_zaiciqianfu01_png")
					])
			];
		}
		var _proto = storyline_badend_currSkin$Skin89.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			this._Image1 = t;
			t.percentHeight = 100;
			t.source = "gushixian_jiedian_button_zaiciqianfu00_png";
			t.percentWidth = 100;
			return t;
		};
		_proto.labelDisplay_i = function () {
			var t = new eui.Label();
			this.labelDisplay = t;
			t.horizontalCenter = 0;
			t.verticalCenter = 0;
			return t;
		};
		return storyline_badend_currSkin$Skin89;
	})(eui.Skin);

	function storyline_badend_currSkin() {
		_super.call(this);
		this.skinParts = ["currentTween","imgThumb","btn","iconBee","image0","image1","gCurrent","btnPlay","gPlay"];
		
		this.height = 80;
		this.width = 80;
		this.currentTween_i();
		this.elementsContent = [this.imgThumb_i(),this.btn_i(),this.iconBee_i(),this.gCurrent_i(),this.gPlay_i()];
		
		eui.Binding.$bindProperties(this, ["image1"],[0],this._TweenItem1,"target");
		eui.Binding.$bindProperties(this, [11],[],this._Object2,"y");
		eui.Binding.$bindProperties(this, [15.3],[],this._Object3,"y");
		eui.Binding.$bindProperties(this, [11],[],this._Object4,"y");
		eui.Binding.$bindProperties(this, [15.3],[],this._Object5,"y");
		eui.Binding.$bindProperties(this, [11],[],this._Object6,"y");
		eui.Binding.$bindProperties(this, [15.3],[],this._Object7,"y");
		eui.Binding.$bindProperties(this, [11],[],this._Object8,"y");
		eui.Binding.$bindProperties(this, ["image0"],[0],this._TweenItem2,"target");
		eui.Binding.$bindProperties(this, [0],[],this._Object10,"alpha");
		eui.Binding.$bindProperties(this, [0.8],[],this._Object10,"scaleX");
		eui.Binding.$bindProperties(this, [0.8],[],this._Object10,"scaleY");
		eui.Binding.$bindProperties(this, [1],[],this._Object11,"alpha");
		eui.Binding.$bindProperties(this, [0],[],this._Object12,"alpha");
	}
	var _proto = storyline_badend_currSkin.prototype;

	_proto.currentTween_i = function () {
		var t = new egret.tween.TweenGroup();
		this.currentTween = t;
		t.items = [this._TweenItem1_i(),this._TweenItem2_i()];
		return t;
	};
	_proto._TweenItem1_i = function () {
		var t = new egret.tween.TweenItem();
		this._TweenItem1 = t;
		t.props = this._Object1_i();
		t.paths = [this._Set1_i(),this._To1_i(),this._To2_i(),this._To3_i(),this._To4_i(),this._To5_i(),this._To6_i()];
		return t;
	};
	_proto._Object1_i = function () {
		var t = {};
		t.loop = "true";
		return t;
	};
	_proto._Set1_i = function () {
		var t = new egret.tween.Set();
		t.props = this._Object2_i();
		return t;
	};
	_proto._Object2_i = function () {
		var t = {};
		this._Object2 = t;
		return t;
	};
	_proto._To1_i = function () {
		var t = new egret.tween.To();
		t.duration = 1000;
		t.props = this._Object3_i();
		return t;
	};
	_proto._Object3_i = function () {
		var t = {};
		this._Object3 = t;
		return t;
	};
	_proto._To2_i = function () {
		var t = new egret.tween.To();
		t.duration = 1000;
		t.props = this._Object4_i();
		return t;
	};
	_proto._Object4_i = function () {
		var t = {};
		this._Object4 = t;
		return t;
	};
	_proto._To3_i = function () {
		var t = new egret.tween.To();
		t.duration = 1000;
		t.props = this._Object5_i();
		return t;
	};
	_proto._Object5_i = function () {
		var t = {};
		this._Object5 = t;
		return t;
	};
	_proto._To4_i = function () {
		var t = new egret.tween.To();
		t.duration = 1000;
		t.props = this._Object6_i();
		return t;
	};
	_proto._Object6_i = function () {
		var t = {};
		this._Object6 = t;
		return t;
	};
	_proto._To5_i = function () {
		var t = new egret.tween.To();
		t.duration = 1000;
		t.props = this._Object7_i();
		return t;
	};
	_proto._Object7_i = function () {
		var t = {};
		this._Object7 = t;
		return t;
	};
	_proto._To6_i = function () {
		var t = new egret.tween.To();
		t.duration = 1000;
		t.props = this._Object8_i();
		return t;
	};
	_proto._Object8_i = function () {
		var t = {};
		this._Object8 = t;
		return t;
	};
	_proto._TweenItem2_i = function () {
		var t = new egret.tween.TweenItem();
		this._TweenItem2 = t;
		t.props = this._Object9_i();
		t.paths = [this._Set2_i(),this._To7_i(),this._To8_i()];
		return t;
	};
	_proto._Object9_i = function () {
		var t = {};
		t.loop = "true";
		return t;
	};
	_proto._Set2_i = function () {
		var t = new egret.tween.Set();
		t.props = this._Object10_i();
		return t;
	};
	_proto._Object10_i = function () {
		var t = {};
		this._Object10 = t;
		return t;
	};
	_proto._To7_i = function () {
		var t = new egret.tween.To();
		t.duration = 3000;
		t.props = this._Object11_i();
		return t;
	};
	_proto._Object11_i = function () {
		var t = {};
		this._Object11 = t;
		return t;
	};
	_proto._To8_i = function () {
		var t = new egret.tween.To();
		t.duration = 3000;
		t.props = this._Object12_i();
		return t;
	};
	_proto._Object12_i = function () {
		var t = {};
		this._Object12 = t;
		return t;
	};
	_proto.imgThumb_i = function () {
		var t = new eui.Image();
		this.imgThumb = t;
		t.bottom = 0;
		t.left = 0;
		t.right = 0;
		t.source = "";
		t.top = 0;
		return t;
	};
	_proto.btn_i = function () {
		var t = new eui.Button();
		this.btn = t;
		t.bottom = 0;
		t.label = "";
		t.left = 0;
		t.right = 0;
		t.top = 0;
		t.skinName = storyline_badend_currSkin$Skin88;
		return t;
	};
	_proto.iconBee_i = function () {
		var t = new eui.Group();
		this.iconBee = t;
		t.visible = false;
		t.x = 0;
		t.y = 0;
		t.elementsContent = [this._Image1_i(),this._Image2_i()];
		return t;
	};
	_proto._Image1_i = function () {
		var t = new eui.Image();
		t.horizontalCenter = 0;
		t.source = "gushixian_jiedian_zhezhao_png";
		t.verticalCenter = 0;
		return t;
	};
	_proto._Image2_i = function () {
		var t = new eui.Image();
		t.horizontalCenter = 0;
		t.source = "gushixian_badending_png";
		t.verticalCenter = 0;
		return t;
	};
	_proto.gCurrent_i = function () {
		var t = new eui.Group();
		this.gCurrent = t;
		t.height = 54;
		t.visible = false;
		t.width = 54;
		t.x = 13;
		t.y = 13;
		t.elementsContent = [this.image0_i(),this._Image3_i(),this.image1_i()];
		return t;
	};
	_proto.image0_i = function () {
		var t = new eui.Image();
		this.image0 = t;
		t.alpha = 0;
		t.horizontalCenter = 0;
		t.source = "yellow_png";
		t.verticalCenter = 0;
		return t;
	};
	_proto._Image3_i = function () {
		var t = new eui.Image();
		t.source = "tongyong_dingweidikuang_png";
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto.image1_i = function () {
		var t = new eui.Image();
		this.image1 = t;
		t.source = "tongyong_dingwei_icon32_png";
		t.x = 11;
		t.y = 11;
		return t;
	};
	_proto.gPlay_i = function () {
		var t = new eui.Group();
		this.gPlay = t;
		t.visible = false;
		t.x = 13;
		t.y = 13;
		t.elementsContent = [this.btnPlay_i()];
		return t;
	};
	_proto.btnPlay_i = function () {
		var t = new eui.Button();
		this.btnPlay = t;
		t.height = 54;
		t.label = "";
		t.width = 54;
		t.x = 0;
		t.y = 0;
		t.skinName = storyline_badend_currSkin$Skin89;
		return t;
	};
	return storyline_badend_currSkin;
})(eui.Skin);generateEUI.paths['resource/eui_skins/storyline_badend.exml'] = window.Storyline_badendSkin = (function (_super) {
	__extends(Storyline_badendSkin, _super);
	var Storyline_badendSkin$Skin90 = 	(function (_super) {
		__extends(Storyline_badendSkin$Skin90, _super);
		function Storyline_badendSkin$Skin90() {
			_super.call(this);
			this.skinParts = ["labelDisplay"];
			
			this.elementsContent = [this._Image1_i(),this.labelDisplay_i()];
			this.states = [
				new eui.State ("up",
					[
					])
				,
				new eui.State ("down",
					[
						new eui.SetProperty("_Image1","source","gushixian_be01_png")
					])
				,
				new eui.State ("disabled",
					[
					])
			];
		}
		var _proto = Storyline_badendSkin$Skin90.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			this._Image1 = t;
			t.percentHeight = 100;
			t.source = "gushixian_be_weida_png";
			t.percentWidth = 100;
			return t;
		};
		_proto.labelDisplay_i = function () {
			var t = new eui.Label();
			this.labelDisplay = t;
			t.horizontalCenter = 0;
			t.verticalCenter = 0;
			return t;
		};
		return Storyline_badendSkin$Skin90;
	})(eui.Skin);

	var Storyline_badendSkin$Skin91 = 	(function (_super) {
		__extends(Storyline_badendSkin$Skin91, _super);
		function Storyline_badendSkin$Skin91() {
			_super.call(this);
			this.skinParts = ["labelDisplay"];
			
			this.elementsContent = [this._Image1_i(),this.labelDisplay_i()];
			this.states = [
				new eui.State ("up",
					[
					])
				,
				new eui.State ("down",
					[
						new eui.SetProperty("_Image1","source","gushixian_jiedian_button_zaiciqianfu02_png")
					])
				,
				new eui.State ("disabled",
					[
					])
				,
				new eui.State ("move",
					[
						new eui.SetProperty("_Image1","source","gushixian_jiedian_button_zaiciqianfu01_png")
					])
			];
		}
		var _proto = Storyline_badendSkin$Skin91.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			this._Image1 = t;
			t.percentHeight = 100;
			t.source = "gushixian_jiedian_button_zaiciqianfu00_png";
			t.percentWidth = 100;
			return t;
		};
		_proto.labelDisplay_i = function () {
			var t = new eui.Label();
			this.labelDisplay = t;
			t.horizontalCenter = 0;
			t.verticalCenter = 0;
			return t;
		};
		return Storyline_badendSkin$Skin91;
	})(eui.Skin);

	function Storyline_badendSkin() {
		_super.call(this);
		this.skinParts = ["currentTween","imgThumb","btn","iconBee","image0","image1","gCurrent","btnPlay","gPlay"];
		
		this.height = 80;
		this.width = 80;
		this.currentTween_i();
		this.elementsContent = [this.imgThumb_i(),this.btn_i(),this.iconBee_i(),this.gCurrent_i(),this.gPlay_i()];
		
		eui.Binding.$bindProperties(this, ["image1"],[0],this._TweenItem1,"target");
		eui.Binding.$bindProperties(this, [1],[],this._Object2,"alpha");
		eui.Binding.$bindProperties(this, [11],[],this._Object2,"y");
		eui.Binding.$bindProperties(this, [15.3],[],this._Object3,"y");
		eui.Binding.$bindProperties(this, [11],[],this._Object4,"y");
		eui.Binding.$bindProperties(this, [0],[],this._Object5,"alpha");
		eui.Binding.$bindProperties(this, [15.3],[],this._Object5,"y");
		eui.Binding.$bindProperties(this, [1],[],this._Object6,"alpha");
		eui.Binding.$bindProperties(this, [11],[],this._Object6,"y");
		eui.Binding.$bindProperties(this, [15.3],[],this._Object7,"y");
		eui.Binding.$bindProperties(this, [11],[],this._Object8,"y");
		eui.Binding.$bindProperties(this, ["image0"],[0],this._TweenItem2,"target");
		eui.Binding.$bindProperties(this, [0],[],this._Object10,"alpha");
		eui.Binding.$bindProperties(this, [0.8],[],this._Object10,"scaleX");
		eui.Binding.$bindProperties(this, [0.8],[],this._Object10,"scaleY");
		eui.Binding.$bindProperties(this, [1],[],this._Object11,"alpha");
		eui.Binding.$bindProperties(this, [0],[],this._Object12,"alpha");
	}
	var _proto = Storyline_badendSkin.prototype;

	_proto.currentTween_i = function () {
		var t = new egret.tween.TweenGroup();
		this.currentTween = t;
		t.items = [this._TweenItem1_i(),this._TweenItem2_i()];
		return t;
	};
	_proto._TweenItem1_i = function () {
		var t = new egret.tween.TweenItem();
		this._TweenItem1 = t;
		t.props = this._Object1_i();
		t.paths = [this._Set1_i(),this._To1_i(),this._To2_i(),this._To3_i(),this._To4_i(),this._To5_i(),this._To6_i()];
		return t;
	};
	_proto._Object1_i = function () {
		var t = {};
		t.loop = "true";
		return t;
	};
	_proto._Set1_i = function () {
		var t = new egret.tween.Set();
		t.props = this._Object2_i();
		return t;
	};
	_proto._Object2_i = function () {
		var t = {};
		this._Object2 = t;
		return t;
	};
	_proto._To1_i = function () {
		var t = new egret.tween.To();
		t.duration = 1000;
		t.props = this._Object3_i();
		return t;
	};
	_proto._Object3_i = function () {
		var t = {};
		this._Object3 = t;
		return t;
	};
	_proto._To2_i = function () {
		var t = new egret.tween.To();
		t.duration = 1000;
		t.props = this._Object4_i();
		return t;
	};
	_proto._Object4_i = function () {
		var t = {};
		this._Object4 = t;
		return t;
	};
	_proto._To3_i = function () {
		var t = new egret.tween.To();
		t.duration = 1000;
		t.props = this._Object5_i();
		return t;
	};
	_proto._Object5_i = function () {
		var t = {};
		this._Object5 = t;
		return t;
	};
	_proto._To4_i = function () {
		var t = new egret.tween.To();
		t.duration = 1000;
		t.props = this._Object6_i();
		return t;
	};
	_proto._Object6_i = function () {
		var t = {};
		this._Object6 = t;
		return t;
	};
	_proto._To5_i = function () {
		var t = new egret.tween.To();
		t.duration = 1000;
		t.props = this._Object7_i();
		return t;
	};
	_proto._Object7_i = function () {
		var t = {};
		this._Object7 = t;
		return t;
	};
	_proto._To6_i = function () {
		var t = new egret.tween.To();
		t.duration = 1000;
		t.props = this._Object8_i();
		return t;
	};
	_proto._Object8_i = function () {
		var t = {};
		this._Object8 = t;
		return t;
	};
	_proto._TweenItem2_i = function () {
		var t = new egret.tween.TweenItem();
		this._TweenItem2 = t;
		t.props = this._Object9_i();
		t.paths = [this._Set2_i(),this._To7_i(),this._To8_i()];
		return t;
	};
	_proto._Object9_i = function () {
		var t = {};
		t.loop = "true";
		return t;
	};
	_proto._Set2_i = function () {
		var t = new egret.tween.Set();
		t.props = this._Object10_i();
		return t;
	};
	_proto._Object10_i = function () {
		var t = {};
		this._Object10 = t;
		return t;
	};
	_proto._To7_i = function () {
		var t = new egret.tween.To();
		t.duration = 3000;
		t.props = this._Object11_i();
		return t;
	};
	_proto._Object11_i = function () {
		var t = {};
		this._Object11 = t;
		return t;
	};
	_proto._To8_i = function () {
		var t = new egret.tween.To();
		t.duration = 3000;
		t.props = this._Object12_i();
		return t;
	};
	_proto._Object12_i = function () {
		var t = {};
		this._Object12 = t;
		return t;
	};
	_proto.imgThumb_i = function () {
		var t = new eui.Image();
		this.imgThumb = t;
		t.bottom = 0;
		t.left = 0;
		t.right = 0;
		t.source = "";
		t.top = 0;
		return t;
	};
	_proto.btn_i = function () {
		var t = new eui.Button();
		this.btn = t;
		t.bottom = 0;
		t.label = "";
		t.left = 0;
		t.right = 0;
		t.top = 0;
		t.skinName = Storyline_badendSkin$Skin90;
		return t;
	};
	_proto.iconBee_i = function () {
		var t = new eui.Group();
		this.iconBee = t;
		t.visible = false;
		t.x = 0;
		t.y = 0;
		t.elementsContent = [this._Image1_i(),this._Image2_i()];
		return t;
	};
	_proto._Image1_i = function () {
		var t = new eui.Image();
		t.horizontalCenter = 0;
		t.source = "gushixian_jiedian_zhezhao_png";
		t.verticalCenter = 0;
		return t;
	};
	_proto._Image2_i = function () {
		var t = new eui.Image();
		t.horizontalCenter = 0;
		t.source = "gushixian_badending_png";
		t.verticalCenter = 0;
		return t;
	};
	_proto.gCurrent_i = function () {
		var t = new eui.Group();
		this.gCurrent = t;
		t.height = 54;
		t.visible = false;
		t.width = 54;
		t.x = 13;
		t.y = 13;
		t.elementsContent = [this.image0_i(),this._Image3_i(),this.image1_i()];
		return t;
	};
	_proto.image0_i = function () {
		var t = new eui.Image();
		this.image0 = t;
		t.alpha = 0;
		t.horizontalCenter = 0;
		t.source = "yellow_png";
		t.verticalCenter = 0;
		return t;
	};
	_proto._Image3_i = function () {
		var t = new eui.Image();
		t.source = "tongyong_dingweidikuang_png";
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto.image1_i = function () {
		var t = new eui.Image();
		this.image1 = t;
		t.source = "tongyong_dingwei_icon32_png";
		t.x = 11;
		t.y = 11;
		return t;
	};
	_proto.gPlay_i = function () {
		var t = new eui.Group();
		this.gPlay = t;
		t.visible = false;
		t.x = 13;
		t.y = 13;
		t.elementsContent = [this.btnPlay_i()];
		return t;
	};
	_proto.btnPlay_i = function () {
		var t = new eui.Button();
		this.btnPlay = t;
		t.height = 54;
		t.label = "";
		t.width = 54;
		t.x = 0;
		t.y = 0;
		t.skinName = Storyline_badendSkin$Skin91;
		return t;
	};
	return Storyline_badendSkin;
})(eui.Skin);generateEUI.paths['resource/eui_skins/storyline_cannot_curr.exml'] = window.Storyline_cannot_currSkin = (function (_super) {
	__extends(Storyline_cannot_currSkin, _super);
	function Storyline_cannot_currSkin() {
		_super.call(this);
		this.skinParts = [];
		
		this.height = 18;
		this.width = 18;
		this.elementsContent = [this._Image1_i()];
	}
	var _proto = Storyline_cannot_currSkin.prototype;

	_proto._Image1_i = function () {
		var t = new eui.Image();
		t.bottom = 0;
		t.left = 0;
		t.right = 0;
		t.source = "gushixian_jiedian_png";
		t.top = 0;
		return t;
	};
	return Storyline_cannot_currSkin;
})(eui.Skin);generateEUI.paths['resource/eui_skins/storyline_cannot.exml'] = window.Storyline_cannotSkin = (function (_super) {
	__extends(Storyline_cannotSkin, _super);
	function Storyline_cannotSkin() {
		_super.call(this);
		this.skinParts = [];
		
		this.height = 18;
		this.width = 18;
		this.elementsContent = [this._Image1_i()];
	}
	var _proto = Storyline_cannotSkin.prototype;

	_proto._Image1_i = function () {
		var t = new eui.Image();
		t.bottom = 0;
		t.left = 0;
		t.right = 0;
		t.source = "gushixian_jiedian_weida_png";
		t.top = 0;
		return t;
	};
	return Storyline_cannotSkin;
})(eui.Skin);generateEUI.paths['resource/eui_skins/Storyline_ChapterEnd.exml'] = window.Storyline_ChapterEndSkin = (function (_super) {
	__extends(Storyline_ChapterEndSkin, _super);
	function Storyline_ChapterEndSkin() {
		_super.call(this);
		this.skinParts = ["tips"];
		
		this.height = 82;
		this.width = 82;
		this.elementsContent = [this._Image1_i(),this.tips_i()];
	}
	var _proto = Storyline_ChapterEndSkin.prototype;

	_proto._Image1_i = function () {
		var t = new eui.Image();
		t.horizontalCenter = 15;
		t.source = "gushixian_tansuodu_tongguanbiaoshi_png";
		t.verticalCenter = 0;
		return t;
	};
	_proto.tips_i = function () {
		var t = new eui.Label();
		this.tips = t;
		t.fontFamily = "Microsoft YaHei";
		t.horizontalCenter = 15;
		t.size = 16;
		t.text = "";
		t.textColor = 0xdecc9d;
		t.y = 85;
		return t;
	};
	return Storyline_ChapterEndSkin;
})(eui.Skin);generateEUI.paths['resource/eui_skins/storyline_curblock.exml'] = window.Storyline_curblockSkin = (function (_super) {
	__extends(Storyline_curblockSkin, _super);
	var Storyline_curblockSkin$Skin92 = 	(function (_super) {
		__extends(Storyline_curblockSkin$Skin92, _super);
		function Storyline_curblockSkin$Skin92() {
			_super.call(this);
			this.skinParts = ["labelDisplay"];
			
			this.elementsContent = [this._Image1_i(),this._Image2_i(),this.labelDisplay_i()];
			this.states = [
				new eui.State ("up",
					[
					])
				,
				new eui.State ("down",
					[
						new eui.SetProperty("_Image1","source","tongyong_dingweidikuang02_png"),
						new eui.SetProperty("_Image2","source","tongyong_dingwei_icon32_02_png")
					])
				,
				new eui.State ("disabled",
					[
					])
				,
				new eui.State ("move",
					[
						new eui.SetProperty("_Image2","source","tongyong_dingwei_icon32_01_png")
					])
			];
		}
		var _proto = Storyline_curblockSkin$Skin92.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			this._Image1 = t;
			t.horizontalCenter = 0;
			t.source = "tongyong_dingweidikuang_png";
			t.verticalCenter = 0;
			return t;
		};
		_proto._Image2_i = function () {
			var t = new eui.Image();
			this._Image2 = t;
			t.horizontalCenter = 0;
			t.source = "tongyong_dingwei_icon32_png";
			t.verticalCenter = 0;
			return t;
		};
		_proto.labelDisplay_i = function () {
			var t = new eui.Label();
			this.labelDisplay = t;
			t.horizontalCenter = 0;
			t.verticalCenter = 0;
			return t;
		};
		return Storyline_curblockSkin$Skin92;
	})(eui.Skin);

	var Storyline_curblockSkin$Skin93 = 	(function (_super) {
		__extends(Storyline_curblockSkin$Skin93, _super);
		function Storyline_curblockSkin$Skin93() {
			_super.call(this);
			this.skinParts = ["labelDisplay"];
			
			this.elementsContent = [this._Image1_i(),this._Image2_i(),this.labelDisplay_i()];
			this.states = [
				new eui.State ("up",
					[
					])
				,
				new eui.State ("down",
					[
						new eui.SetProperty("_Image1","source","tongyong_dingweidikuang02_png"),
						new eui.SetProperty("_Image2","source","tongyong_kaishi_icon32_png")
					])
				,
				new eui.State ("disabled",
					[
					])
				,
				new eui.State ("move",
					[
						new eui.SetProperty("_Image2","source","tongyong_kaishi_icon32_png")
					])
			];
		}
		var _proto = Storyline_curblockSkin$Skin93.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			this._Image1 = t;
			t.horizontalCenter = 0;
			t.source = "tongyong_dingweidikuang_png";
			t.verticalCenter = 0;
			return t;
		};
		_proto._Image2_i = function () {
			var t = new eui.Image();
			this._Image2 = t;
			t.horizontalCenter = 0;
			t.source = "tongyong_kaishi_icon32_png";
			t.verticalCenter = 0;
			return t;
		};
		_proto.labelDisplay_i = function () {
			var t = new eui.Label();
			this.labelDisplay = t;
			t.horizontalCenter = 0;
			t.verticalCenter = 0;
			return t;
		};
		return Storyline_curblockSkin$Skin93;
	})(eui.Skin);

	function Storyline_curblockSkin() {
		_super.call(this);
		this.skinParts = ["currentTween","image","btnCurrent","btnPlay"];
		
		this.height = 54;
		this.width = 54;
		this.currentTween_i();
		this.elementsContent = [this.image_i(),this.btnCurrent_i(),this.btnPlay_i()];
		
		eui.Binding.$bindProperties(this, ["btnCurrent"],[0],this._TweenItem1,"target");
		eui.Binding.$bindProperties(this, [0],[],this._Object2,"y");
		eui.Binding.$bindProperties(this, [4.3],[],this._Object3,"y");
		eui.Binding.$bindProperties(this, [0],[],this._Object4,"y");
		eui.Binding.$bindProperties(this, [4.3],[],this._Object5,"y");
		eui.Binding.$bindProperties(this, [0],[],this._Object6,"y");
		eui.Binding.$bindProperties(this, [4.3],[],this._Object7,"y");
		eui.Binding.$bindProperties(this, [0],[],this._Object8,"y");
		eui.Binding.$bindProperties(this, ["image"],[0],this._TweenItem2,"target");
		eui.Binding.$bindProperties(this, [0],[],this._Object10,"alpha");
		eui.Binding.$bindProperties(this, [0.8],[],this._Object10,"scaleX");
		eui.Binding.$bindProperties(this, [0.8],[],this._Object10,"scaleY");
		eui.Binding.$bindProperties(this, [1],[],this._Object11,"alpha");
		eui.Binding.$bindProperties(this, [0],[],this._Object12,"alpha");
	}
	var _proto = Storyline_curblockSkin.prototype;

	_proto.currentTween_i = function () {
		var t = new egret.tween.TweenGroup();
		this.currentTween = t;
		t.items = [this._TweenItem1_i(),this._TweenItem2_i()];
		return t;
	};
	_proto._TweenItem1_i = function () {
		var t = new egret.tween.TweenItem();
		this._TweenItem1 = t;
		t.props = this._Object1_i();
		t.paths = [this._Set1_i(),this._To1_i(),this._To2_i(),this._To3_i(),this._To4_i(),this._To5_i(),this._To6_i()];
		return t;
	};
	_proto._Object1_i = function () {
		var t = {};
		t.loop = "true";
		return t;
	};
	_proto._Set1_i = function () {
		var t = new egret.tween.Set();
		t.props = this._Object2_i();
		return t;
	};
	_proto._Object2_i = function () {
		var t = {};
		this._Object2 = t;
		return t;
	};
	_proto._To1_i = function () {
		var t = new egret.tween.To();
		t.duration = 1000;
		t.props = this._Object3_i();
		return t;
	};
	_proto._Object3_i = function () {
		var t = {};
		this._Object3 = t;
		return t;
	};
	_proto._To2_i = function () {
		var t = new egret.tween.To();
		t.duration = 1000;
		t.props = this._Object4_i();
		return t;
	};
	_proto._Object4_i = function () {
		var t = {};
		this._Object4 = t;
		return t;
	};
	_proto._To3_i = function () {
		var t = new egret.tween.To();
		t.duration = 1000;
		t.props = this._Object5_i();
		return t;
	};
	_proto._Object5_i = function () {
		var t = {};
		this._Object5 = t;
		return t;
	};
	_proto._To4_i = function () {
		var t = new egret.tween.To();
		t.duration = 1000;
		t.props = this._Object6_i();
		return t;
	};
	_proto._Object6_i = function () {
		var t = {};
		this._Object6 = t;
		return t;
	};
	_proto._To5_i = function () {
		var t = new egret.tween.To();
		t.duration = 1000;
		t.props = this._Object7_i();
		return t;
	};
	_proto._Object7_i = function () {
		var t = {};
		this._Object7 = t;
		return t;
	};
	_proto._To6_i = function () {
		var t = new egret.tween.To();
		t.duration = 1000;
		t.props = this._Object8_i();
		return t;
	};
	_proto._Object8_i = function () {
		var t = {};
		this._Object8 = t;
		return t;
	};
	_proto._TweenItem2_i = function () {
		var t = new egret.tween.TweenItem();
		this._TweenItem2 = t;
		t.props = this._Object9_i();
		t.paths = [this._Set2_i(),this._To7_i(),this._To8_i()];
		return t;
	};
	_proto._Object9_i = function () {
		var t = {};
		t.loop = "true";
		return t;
	};
	_proto._Set2_i = function () {
		var t = new egret.tween.Set();
		t.props = this._Object10_i();
		return t;
	};
	_proto._Object10_i = function () {
		var t = {};
		this._Object10 = t;
		return t;
	};
	_proto._To7_i = function () {
		var t = new egret.tween.To();
		t.duration = 3000;
		t.props = this._Object11_i();
		return t;
	};
	_proto._Object11_i = function () {
		var t = {};
		this._Object11 = t;
		return t;
	};
	_proto._To8_i = function () {
		var t = new egret.tween.To();
		t.duration = 3000;
		t.props = this._Object12_i();
		return t;
	};
	_proto._Object12_i = function () {
		var t = {};
		this._Object12 = t;
		return t;
	};
	_proto.image_i = function () {
		var t = new eui.Image();
		this.image = t;
		t.alpha = 0;
		t.horizontalCenter = 0;
		t.source = "yellow_png";
		t.verticalCenter = 0;
		return t;
	};
	_proto.btnCurrent_i = function () {
		var t = new eui.Button();
		this.btnCurrent = t;
		t.height = 54;
		t.label = "";
		t.width = 54;
		t.x = 0;
		t.y = 0;
		t.skinName = Storyline_curblockSkin$Skin92;
		return t;
	};
	_proto.btnPlay_i = function () {
		var t = new eui.Button();
		this.btnPlay = t;
		t.bottom = 0;
		t.label = "";
		t.left = 0;
		t.right = 0;
		t.top = 0;
		t.visible = false;
		t.skinName = Storyline_curblockSkin$Skin93;
		return t;
	};
	return Storyline_curblockSkin;
})(eui.Skin);generateEUI.paths['resource/eui_skins/Storyline_ExploreReceived.exml'] = window.Storyline_ExploreReceivedSkin = (function (_super) {
	__extends(Storyline_ExploreReceivedSkin, _super);
	var Storyline_ExploreReceivedSkin$Skin94 = 	(function (_super) {
		__extends(Storyline_ExploreReceivedSkin$Skin94, _super);
		function Storyline_ExploreReceivedSkin$Skin94() {
			_super.call(this);
			this.skinParts = [];
			
			this.elementsContent = [this._Image1_i(),this._Image2_i()];
			this.states = [
				new eui.State ("disabled",
					[
					])
			];
		}
		var _proto = Storyline_ExploreReceivedSkin$Skin94.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			t.percentHeight = 100;
			t.source = "tongyong_icon_dikuang_jin_png";
			t.percentWidth = 100;
			return t;
		};
		_proto._Image2_i = function () {
			var t = new eui.Image();
			t.height = 56;
			t.horizontalCenter = 0;
			t.source = "gushixian_lihe_icon_yilinqu_png";
			t.verticalCenter = 0;
			t.width = 56;
			return t;
		};
		return Storyline_ExploreReceivedSkin$Skin94;
	})(eui.Skin);

	function Storyline_ExploreReceivedSkin() {
		_super.call(this);
		this.skinParts = ["btnReward"];
		
		this.height = 72;
		this.width = 72;
		this.elementsContent = [this.btnReward_i()];
	}
	var _proto = Storyline_ExploreReceivedSkin.prototype;

	_proto.btnReward_i = function () {
		var t = new eui.Button();
		this.btnReward = t;
		t.label = "";
		t.x = 0;
		t.y = 0;
		t.skinName = Storyline_ExploreReceivedSkin$Skin94;
		return t;
	};
	return Storyline_ExploreReceivedSkin;
})(eui.Skin);generateEUI.paths['resource/eui_skins/Storyline_ExploreUnlock.exml'] = window.Storyline_ExploreUnlockSkin = (function (_super) {
	__extends(Storyline_ExploreUnlockSkin, _super);
	var Storyline_ExploreUnlockSkin$Skin95 = 	(function (_super) {
		__extends(Storyline_ExploreUnlockSkin$Skin95, _super);
		function Storyline_ExploreUnlockSkin$Skin95() {
			_super.call(this);
			this.skinParts = [];
			
			this.elementsContent = [this._Image1_i(),this._Image2_i()];
			this.states = [
				new eui.State ("up",
					[
					])
				,
				new eui.State ("down",
					[
						new eui.SetProperty("_Image2","source","gushixian_lihe_icon_jin_02_png")
					])
				,
				new eui.State ("disabled",
					[
					])
				,
				new eui.State ("move",
					[
						new eui.SetProperty("_Image2","source","gushixian_lihe_icon_jin_01_png")
					])
			];
		}
		var _proto = Storyline_ExploreUnlockSkin$Skin95.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			t.percentHeight = 100;
			t.source = "tongyong_icon_dikuang_jin_png";
			t.percentWidth = 100;
			return t;
		};
		_proto._Image2_i = function () {
			var t = new eui.Image();
			this._Image2 = t;
			t.height = 56;
			t.horizontalCenter = 0;
			t.source = "gushixian_lihe_icon_jin_png";
			t.verticalCenter = 0;
			t.width = 56;
			return t;
		};
		return Storyline_ExploreUnlockSkin$Skin95;
	})(eui.Skin);

	function Storyline_ExploreUnlockSkin() {
		_super.call(this);
		this.skinParts = ["image4","image3","image2","btnReward","iconRewardNew","tips"];
		
		this.height = 72;
		this.width = 72;
		this.elementsContent = [this.image4_i(),this.image3_i(),this.image2_i(),this.btnReward_i(),this.iconRewardNew_i(),this.tips_i()];
	}
	var _proto = Storyline_ExploreUnlockSkin.prototype;

	_proto.image4_i = function () {
		var t = new eui.Image();
		this.image4 = t;
		t.alpha = 0;
		t.horizontalCenter = 0;
		t.source = "tanhao_bianguang1_png";
		t.touchEnabled = false;
		t.verticalCenter = 0;
		return t;
	};
	_proto.image3_i = function () {
		var t = new eui.Image();
		this.image3 = t;
		t.alpha = 0;
		t.horizontalCenter = 0;
		t.source = "tanhao_bianguang1_png";
		t.touchEnabled = false;
		t.verticalCenter = 0;
		return t;
	};
	_proto.image2_i = function () {
		var t = new eui.Image();
		this.image2 = t;
		t.alpha = 0;
		t.horizontalCenter = 0;
		t.source = "red_png";
		t.verticalCenter = 0;
		return t;
	};
	_proto.btnReward_i = function () {
		var t = new eui.Button();
		this.btnReward = t;
		t.label = "";
		t.x = 0;
		t.y = 0;
		t.skinName = Storyline_ExploreUnlockSkin$Skin95;
		return t;
	};
	_proto.iconRewardNew_i = function () {
		var t = new eui.Image();
		this.iconRewardNew = t;
		t.source = "tongyong_xiaoxitishi_png";
		t.touchEnabled = false;
		t.x = 44;
		t.y = 0;
		return t;
	};
	_proto.tips_i = function () {
		var t = new Component.Storyline_Tips();
		this.tips = t;
		t.horizontalCenter = 0;
		t.skinName = "Storyline_TipsSkin";
		t.visible = false;
		t.y = -53;
		return t;
	};
	return Storyline_ExploreUnlockSkin;
})(eui.Skin);generateEUI.paths['resource/eui_skins/Storyline_KeyEvent.exml'] = window.Storyline_KeyEventSkin = (function (_super) {
	__extends(Storyline_KeyEventSkin, _super);
	function Storyline_KeyEventSkin() {
		_super.call(this);
		this.skinParts = ["icon"];
		
		this.height = 54;
		this.width = 54;
		this.elementsContent = [this.icon_i()];
	}
	var _proto = Storyline_KeyEventSkin.prototype;

	_proto.icon_i = function () {
		var t = new eui.Image();
		this.icon = t;
		t.source = "gushixian_guanjianshijian00_png";
		return t;
	};
	return Storyline_KeyEventSkin;
})(eui.Skin);generateEUI.paths['resource/eui_skins/storyline_notReachedButShow.exml'] = window.Storyline_notReachedButShowSkin = (function (_super) {
	__extends(Storyline_notReachedButShowSkin, _super);
	function Storyline_notReachedButShowSkin() {
		_super.call(this);
		this.skinParts = [];
		
		this.height = 32;
		this.width = 32;
		this.elementsContent = [this._Image1_i()];
	}
	var _proto = Storyline_notReachedButShowSkin.prototype;

	_proto._Image1_i = function () {
		var t = new eui.Image();
		t.bottom = 0;
		t.left = 0;
		t.right = 0;
		t.source = "gushixian_suo_icon_32_png";
		t.top = 0;
		return t;
	};
	return Storyline_notReachedButShowSkin;
})(eui.Skin);generateEUI.paths['resource/eui_skins/storyline_pop.exml'] = window.Storyline_popSkin = (function (_super) {
	__extends(Storyline_popSkin, _super);
	var Storyline_popSkin$Skin96 = 	(function (_super) {
		__extends(Storyline_popSkin$Skin96, _super);
		function Storyline_popSkin$Skin96() {
			_super.call(this);
			this.skinParts = ["labelDisplay"];
			
			this.elementsContent = [this._Image1_i(),this.labelDisplay_i()];
			this.states = [
				new eui.State ("up",
					[
					])
				,
				new eui.State ("down",
					[
						new eui.SetProperty("_Image1","source","gushixian_jiedian_button_zaiciqianfu02_png")
					])
				,
				new eui.State ("disabled",
					[
					])
				,
				new eui.State ("move",
					[
						new eui.SetProperty("_Image1","source","gushixian_jiedian_button_zaiciqianfu01_png")
					])
			];
		}
		var _proto = Storyline_popSkin$Skin96.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			this._Image1 = t;
			t.percentHeight = 100;
			t.source = "gushixian_jiedian_button_zaiciqianfu00_png";
			t.percentWidth = 100;
			return t;
		};
		_proto.labelDisplay_i = function () {
			var t = new eui.Label();
			this.labelDisplay = t;
			t.horizontalCenter = 0;
			t.verticalCenter = 0;
			return t;
		};
		return Storyline_popSkin$Skin96;
	})(eui.Skin);

	var Storyline_popSkin$Skin97 = 	(function (_super) {
		__extends(Storyline_popSkin$Skin97, _super);
		function Storyline_popSkin$Skin97() {
			_super.call(this);
			this.skinParts = ["labelDisplay"];
			
			this.elementsContent = [this._Image1_i(),this.labelDisplay_i()];
			this.states = [
				new eui.State ("up",
					[
					])
				,
				new eui.State ("down",
					[
						new eui.SetProperty("_Image1","source","tongyog_guanbi_icon02_png")
					])
				,
				new eui.State ("disabled",
					[
					])
				,
				new eui.State ("move",
					[
						new eui.SetProperty("_Image1","source","tongyog_guanbi_icon01_png")
					])
			];
		}
		var _proto = Storyline_popSkin$Skin97.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			this._Image1 = t;
			t.percentHeight = 100;
			t.source = "tongyog_guanbi_icon00_png";
			t.percentWidth = 100;
			return t;
		};
		_proto.labelDisplay_i = function () {
			var t = new eui.Label();
			this.labelDisplay = t;
			t.horizontalCenter = 0;
			t.verticalCenter = 0;
			return t;
		};
		return Storyline_popSkin$Skin97;
	})(eui.Skin);

	function Storyline_popSkin() {
		_super.call(this);
		this.skinParts = ["playTween","layMask","textTitle","textInfo","imgThumb","image","btnSeek","btnClose","gPopup"];
		
		this.playTween_i();
		this.elementsContent = [this.layMask_i(),this.gPopup_i()];
		
		eui.Binding.$bindProperties(this, ["image"],[0],this._TweenItem1,"target");
		eui.Binding.$bindProperties(this, [0],[],this._Object2,"alpha");
		eui.Binding.$bindProperties(this, [1.5],[],this._Object2,"scaleX");
		eui.Binding.$bindProperties(this, [1.5],[],this._Object2,"scaleY");
		eui.Binding.$bindProperties(this, [1],[],this._Object3,"alpha");
		eui.Binding.$bindProperties(this, [0],[],this._Object4,"alpha");
	}
	var _proto = Storyline_popSkin.prototype;

	_proto.playTween_i = function () {
		var t = new egret.tween.TweenGroup();
		this.playTween = t;
		t.items = [this._TweenItem1_i()];
		return t;
	};
	_proto._TweenItem1_i = function () {
		var t = new egret.tween.TweenItem();
		this._TweenItem1 = t;
		t.props = this._Object1_i();
		t.paths = [this._Set1_i(),this._To1_i(),this._To2_i()];
		return t;
	};
	_proto._Object1_i = function () {
		var t = {};
		t.loop = "true";
		return t;
	};
	_proto._Set1_i = function () {
		var t = new egret.tween.Set();
		t.props = this._Object2_i();
		return t;
	};
	_proto._Object2_i = function () {
		var t = {};
		this._Object2 = t;
		return t;
	};
	_proto._To1_i = function () {
		var t = new egret.tween.To();
		t.duration = 3000;
		t.props = this._Object3_i();
		return t;
	};
	_proto._Object3_i = function () {
		var t = {};
		this._Object3 = t;
		return t;
	};
	_proto._To2_i = function () {
		var t = new egret.tween.To();
		t.duration = 3000;
		t.props = this._Object4_i();
		return t;
	};
	_proto._Object4_i = function () {
		var t = {};
		this._Object4 = t;
		return t;
	};
	_proto.layMask_i = function () {
		var t = new eui.Rect();
		this.layMask = t;
		t.bottom = 0;
		t.fillAlpha = 0.4;
		t.left = 0;
		t.right = 0;
		t.top = 0;
		return t;
	};
	_proto.gPopup_i = function () {
		var t = new eui.Group();
		this.gPopup = t;
		t.height = 240;
		t.width = 536;
		t.x = 0;
		t.y = 0;
		t.elementsContent = [this._Image1_i(),this.textTitle_i(),this.textInfo_i(),this.imgThumb_i(),this._Group1_i(),this.btnClose_i()];
		return t;
	};
	_proto._Image1_i = function () {
		var t = new eui.Image();
		t.bottom = 0;
		t.left = 0;
		t.right = 0;
		t.source = "gushixian_yulan_png";
		t.top = 0;
		return t;
	};
	_proto.textTitle_i = function () {
		var t = new eui.Label();
		this.textTitle = t;
		t.fontFamily = "Microsoft YaHei";
		t.size = 24;
		t.text = "";
		t.x = 22;
		t.y = 25;
		return t;
	};
	_proto.textInfo_i = function () {
		var t = new eui.Label();
		this.textInfo = t;
		t.fontFamily = "Microsoft YaHei";
		t.lineSpacing = 6;
		t.size = 22;
		t.text = "";
		t.textColor = 0x999999;
		t.width = 230;
		t.x = 22;
		t.y = 68;
		return t;
	};
	_proto.imgThumb_i = function () {
		var t = new eui.Image();
		this.imgThumb = t;
		t.height = 218;
		t.right = 11;
		t.top = 11;
		t.width = 257;
		return t;
	};
	_proto._Group1_i = function () {
		var t = new eui.Group();
		t.height = 80;
		t.width = 80;
		t.x = 357;
		t.y = 80;
		t.elementsContent = [this.image_i(),this.btnSeek_i()];
		return t;
	};
	_proto.image_i = function () {
		var t = new eui.Image();
		this.image = t;
		t.alpha = 0;
		t.horizontalCenter = 0;
		t.source = "yellow_png";
		t.verticalCenter = 0;
		return t;
	};
	_proto.btnSeek_i = function () {
		var t = new eui.Button();
		this.btnSeek = t;
		t.label = "";
		t.x = 0;
		t.y = 0;
		t.skinName = Storyline_popSkin$Skin96;
		return t;
	};
	_proto.btnClose_i = function () {
		var t = new eui.Button();
		this.btnClose = t;
		t.label = "";
		t.right = 9;
		t.top = 9;
		t.skinName = Storyline_popSkin$Skin97;
		return t;
	};
	return Storyline_popSkin;
})(eui.Skin);generateEUI.paths['resource/eui_skins/storyline_reached_curr.exml'] = window.Storyline_reached_currSkin = (function (_super) {
	__extends(Storyline_reached_currSkin, _super);
	var Storyline_reached_currSkin$Skin98 = 	(function (_super) {
		__extends(Storyline_reached_currSkin$Skin98, _super);
		function Storyline_reached_currSkin$Skin98() {
			_super.call(this);
			this.skinParts = ["labelDisplay"];
			
			this.elementsContent = [this._Image1_i(),this.labelDisplay_i()];
			this.states = [
				new eui.State ("up",
					[
					])
				,
				new eui.State ("down",
					[
						new eui.SetProperty("_Image1","source","gushixian_huisu02_png")
					])
				,
				new eui.State ("disabled",
					[
					])
				,
				new eui.State ("move",
					[
						new eui.SetProperty("_Image1","source","gushixian_huisu01_png")
					])
			];
		}
		var _proto = Storyline_reached_currSkin$Skin98.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			this._Image1 = t;
			t.percentHeight = 100;
			t.source = "gushixian_huisu00_png";
			t.percentWidth = 100;
			return t;
		};
		_proto.labelDisplay_i = function () {
			var t = new eui.Label();
			this.labelDisplay = t;
			t.horizontalCenter = 0;
			t.verticalCenter = 0;
			return t;
		};
		return Storyline_reached_currSkin$Skin98;
	})(eui.Skin);

	function Storyline_reached_currSkin() {
		_super.call(this);
		this.skinParts = ["currentTween","imgThumb","image0","image1","gCurrent","btn","textTitle"];
		
		this.height = 148;
		this.width = 251;
		this.currentTween_i();
		this.elementsContent = [this.imgThumb_i(),this.gCurrent_i(),this.btn_i(),this.textTitle_i()];
		
		eui.Binding.$bindProperties(this, ["image1"],[0],this._TweenItem1,"target");
		eui.Binding.$bindProperties(this, [11],[],this._Object2,"y");
		eui.Binding.$bindProperties(this, [15.3],[],this._Object3,"y");
		eui.Binding.$bindProperties(this, [11],[],this._Object4,"y");
		eui.Binding.$bindProperties(this, [15.3],[],this._Object5,"y");
		eui.Binding.$bindProperties(this, [11],[],this._Object6,"y");
		eui.Binding.$bindProperties(this, [15.3],[],this._Object7,"y");
		eui.Binding.$bindProperties(this, [11],[],this._Object8,"y");
		eui.Binding.$bindProperties(this, ["image0"],[0],this._TweenItem2,"target");
		eui.Binding.$bindProperties(this, [0],[],this._Object10,"alpha");
		eui.Binding.$bindProperties(this, [0.8],[],this._Object10,"scaleX");
		eui.Binding.$bindProperties(this, [0.8],[],this._Object10,"scaleY");
		eui.Binding.$bindProperties(this, [1],[],this._Object11,"alpha");
		eui.Binding.$bindProperties(this, [0],[],this._Object12,"alpha");
	}
	var _proto = Storyline_reached_currSkin.prototype;

	_proto.currentTween_i = function () {
		var t = new egret.tween.TweenGroup();
		this.currentTween = t;
		t.items = [this._TweenItem1_i(),this._TweenItem2_i()];
		return t;
	};
	_proto._TweenItem1_i = function () {
		var t = new egret.tween.TweenItem();
		this._TweenItem1 = t;
		t.props = this._Object1_i();
		t.paths = [this._Set1_i(),this._To1_i(),this._To2_i(),this._To3_i(),this._To4_i(),this._To5_i(),this._To6_i()];
		return t;
	};
	_proto._Object1_i = function () {
		var t = {};
		t.loop = "true";
		return t;
	};
	_proto._Set1_i = function () {
		var t = new egret.tween.Set();
		t.props = this._Object2_i();
		return t;
	};
	_proto._Object2_i = function () {
		var t = {};
		this._Object2 = t;
		return t;
	};
	_proto._To1_i = function () {
		var t = new egret.tween.To();
		t.duration = 1000;
		t.props = this._Object3_i();
		return t;
	};
	_proto._Object3_i = function () {
		var t = {};
		this._Object3 = t;
		return t;
	};
	_proto._To2_i = function () {
		var t = new egret.tween.To();
		t.duration = 1000;
		t.props = this._Object4_i();
		return t;
	};
	_proto._Object4_i = function () {
		var t = {};
		this._Object4 = t;
		return t;
	};
	_proto._To3_i = function () {
		var t = new egret.tween.To();
		t.duration = 1000;
		t.props = this._Object5_i();
		return t;
	};
	_proto._Object5_i = function () {
		var t = {};
		this._Object5 = t;
		return t;
	};
	_proto._To4_i = function () {
		var t = new egret.tween.To();
		t.duration = 1000;
		t.props = this._Object6_i();
		return t;
	};
	_proto._Object6_i = function () {
		var t = {};
		this._Object6 = t;
		return t;
	};
	_proto._To5_i = function () {
		var t = new egret.tween.To();
		t.duration = 1000;
		t.props = this._Object7_i();
		return t;
	};
	_proto._Object7_i = function () {
		var t = {};
		this._Object7 = t;
		return t;
	};
	_proto._To6_i = function () {
		var t = new egret.tween.To();
		t.duration = 1000;
		t.props = this._Object8_i();
		return t;
	};
	_proto._Object8_i = function () {
		var t = {};
		this._Object8 = t;
		return t;
	};
	_proto._TweenItem2_i = function () {
		var t = new egret.tween.TweenItem();
		this._TweenItem2 = t;
		t.props = this._Object9_i();
		t.paths = [this._Set2_i(),this._To7_i(),this._To8_i()];
		return t;
	};
	_proto._Object9_i = function () {
		var t = {};
		t.loop = "true";
		return t;
	};
	_proto._Set2_i = function () {
		var t = new egret.tween.Set();
		t.props = this._Object10_i();
		return t;
	};
	_proto._Object10_i = function () {
		var t = {};
		this._Object10 = t;
		return t;
	};
	_proto._To7_i = function () {
		var t = new egret.tween.To();
		t.duration = 3000;
		t.props = this._Object11_i();
		return t;
	};
	_proto._Object11_i = function () {
		var t = {};
		this._Object11 = t;
		return t;
	};
	_proto._To8_i = function () {
		var t = new egret.tween.To();
		t.duration = 3000;
		t.props = this._Object12_i();
		return t;
	};
	_proto._Object12_i = function () {
		var t = {};
		this._Object12 = t;
		return t;
	};
	_proto.imgThumb_i = function () {
		var t = new eui.Image();
		this.imgThumb = t;
		t.height = 108;
		t.source = "";
		t.width = 215;
		t.x = 2;
		t.y = 2;
		return t;
	};
	_proto.gCurrent_i = function () {
		var t = new eui.Group();
		this.gCurrent = t;
		t.height = 54;
		t.width = 54;
		t.x = 80;
		t.y = 27;
		t.elementsContent = [this.image0_i(),this._Image1_i(),this.image1_i()];
		return t;
	};
	_proto.image0_i = function () {
		var t = new eui.Image();
		this.image0 = t;
		t.alpha = 0;
		t.horizontalCenter = 0;
		t.source = "yellow_png";
		t.verticalCenter = 0;
		return t;
	};
	_proto._Image1_i = function () {
		var t = new eui.Image();
		t.source = "tongyong_dingweidikuang_png";
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto.image1_i = function () {
		var t = new eui.Image();
		this.image1 = t;
		t.source = "tongyong_dingwei_icon32_png";
		t.x = 11;
		t.y = 11;
		return t;
	};
	_proto.btn_i = function () {
		var t = new eui.Button();
		this.btn = t;
		t.bottom = 0;
		t.label = "";
		t.left = 0;
		t.right = 0;
		t.top = 0;
		t.skinName = Storyline_reached_currSkin$Skin98;
		return t;
	};
	_proto.textTitle_i = function () {
		var t = new eui.Label();
		this.textTitle = t;
		t.bottom = 0;
		t.fontFamily = "Microsoft YaHei";
		t.height = 40;
		t.right = 0;
		t.size = 22;
		t.text = "";
		t.textAlign = "center";
		t.textColor = 0x000000;
		t.touchEnabled = false;
		t.verticalAlign = "middle";
		t.width = 235;
		return t;
	};
	return Storyline_reached_currSkin;
})(eui.Skin);generateEUI.paths['resource/eui_skins/storyline_reached.exml'] = window.Storyline_reachedSkin = (function (_super) {
	__extends(Storyline_reachedSkin, _super);
	var Storyline_reachedSkin$Skin99 = 	(function (_super) {
		__extends(Storyline_reachedSkin$Skin99, _super);
		function Storyline_reachedSkin$Skin99() {
			_super.call(this);
			this.skinParts = ["labelDisplay"];
			
			this.elementsContent = [this._Image1_i(),this.labelDisplay_i()];
			this.states = [
				new eui.State ("up",
					[
					])
				,
				new eui.State ("down",
					[
						new eui.SetProperty("_Image1","source","gushixian_huisu02_png")
					])
				,
				new eui.State ("disabled",
					[
					])
				,
				new eui.State ("move",
					[
						new eui.SetProperty("_Image1","source","gushixian_huisu_weida01_png")
					])
			];
		}
		var _proto = Storyline_reachedSkin$Skin99.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			this._Image1 = t;
			t.percentHeight = 100;
			t.source = "gushixian_huisu_weida_png";
			t.percentWidth = 100;
			return t;
		};
		_proto.labelDisplay_i = function () {
			var t = new eui.Label();
			this.labelDisplay = t;
			t.horizontalCenter = 0;
			t.verticalCenter = 0;
			return t;
		};
		return Storyline_reachedSkin$Skin99;
	})(eui.Skin);

	function Storyline_reachedSkin() {
		_super.call(this);
		this.skinParts = ["currentTween","imgThumb","image0","image1","gCurrent","btn","textTitle"];
		
		this.height = 148;
		this.width = 251;
		this.currentTween_i();
		this.elementsContent = [this.imgThumb_i(),this.gCurrent_i(),this.btn_i(),this.textTitle_i()];
		
		eui.Binding.$bindProperties(this, ["image1"],[0],this._TweenItem1,"target");
		eui.Binding.$bindProperties(this, [1],[],this._Object2,"alpha");
		eui.Binding.$bindProperties(this, [11],[],this._Object2,"y");
		eui.Binding.$bindProperties(this, [15.3],[],this._Object3,"y");
		eui.Binding.$bindProperties(this, [11],[],this._Object4,"y");
		eui.Binding.$bindProperties(this, [0],[],this._Object5,"alpha");
		eui.Binding.$bindProperties(this, [15.3],[],this._Object5,"y");
		eui.Binding.$bindProperties(this, [1],[],this._Object6,"alpha");
		eui.Binding.$bindProperties(this, [11],[],this._Object6,"y");
		eui.Binding.$bindProperties(this, [15.3],[],this._Object7,"y");
		eui.Binding.$bindProperties(this, [11],[],this._Object8,"y");
		eui.Binding.$bindProperties(this, ["image0"],[0],this._TweenItem2,"target");
		eui.Binding.$bindProperties(this, [0],[],this._Object10,"alpha");
		eui.Binding.$bindProperties(this, [0.8],[],this._Object10,"scaleX");
		eui.Binding.$bindProperties(this, [0.8],[],this._Object10,"scaleY");
		eui.Binding.$bindProperties(this, [1],[],this._Object11,"alpha");
		eui.Binding.$bindProperties(this, [0],[],this._Object12,"alpha");
	}
	var _proto = Storyline_reachedSkin.prototype;

	_proto.currentTween_i = function () {
		var t = new egret.tween.TweenGroup();
		this.currentTween = t;
		t.items = [this._TweenItem1_i(),this._TweenItem2_i()];
		return t;
	};
	_proto._TweenItem1_i = function () {
		var t = new egret.tween.TweenItem();
		this._TweenItem1 = t;
		t.props = this._Object1_i();
		t.paths = [this._Set1_i(),this._To1_i(),this._To2_i(),this._To3_i(),this._To4_i(),this._To5_i(),this._To6_i()];
		return t;
	};
	_proto._Object1_i = function () {
		var t = {};
		t.loop = "true";
		return t;
	};
	_proto._Set1_i = function () {
		var t = new egret.tween.Set();
		t.props = this._Object2_i();
		return t;
	};
	_proto._Object2_i = function () {
		var t = {};
		this._Object2 = t;
		return t;
	};
	_proto._To1_i = function () {
		var t = new egret.tween.To();
		t.duration = 1000;
		t.props = this._Object3_i();
		return t;
	};
	_proto._Object3_i = function () {
		var t = {};
		this._Object3 = t;
		return t;
	};
	_proto._To2_i = function () {
		var t = new egret.tween.To();
		t.duration = 1000;
		t.props = this._Object4_i();
		return t;
	};
	_proto._Object4_i = function () {
		var t = {};
		this._Object4 = t;
		return t;
	};
	_proto._To3_i = function () {
		var t = new egret.tween.To();
		t.duration = 1000;
		t.props = this._Object5_i();
		return t;
	};
	_proto._Object5_i = function () {
		var t = {};
		this._Object5 = t;
		return t;
	};
	_proto._To4_i = function () {
		var t = new egret.tween.To();
		t.duration = 1000;
		t.props = this._Object6_i();
		return t;
	};
	_proto._Object6_i = function () {
		var t = {};
		this._Object6 = t;
		return t;
	};
	_proto._To5_i = function () {
		var t = new egret.tween.To();
		t.duration = 1000;
		t.props = this._Object7_i();
		return t;
	};
	_proto._Object7_i = function () {
		var t = {};
		this._Object7 = t;
		return t;
	};
	_proto._To6_i = function () {
		var t = new egret.tween.To();
		t.duration = 1000;
		t.props = this._Object8_i();
		return t;
	};
	_proto._Object8_i = function () {
		var t = {};
		this._Object8 = t;
		return t;
	};
	_proto._TweenItem2_i = function () {
		var t = new egret.tween.TweenItem();
		this._TweenItem2 = t;
		t.props = this._Object9_i();
		t.paths = [this._Set2_i(),this._To7_i(),this._To8_i()];
		return t;
	};
	_proto._Object9_i = function () {
		var t = {};
		t.loop = "true";
		return t;
	};
	_proto._Set2_i = function () {
		var t = new egret.tween.Set();
		t.props = this._Object10_i();
		return t;
	};
	_proto._Object10_i = function () {
		var t = {};
		this._Object10 = t;
		return t;
	};
	_proto._To7_i = function () {
		var t = new egret.tween.To();
		t.duration = 3000;
		t.props = this._Object11_i();
		return t;
	};
	_proto._Object11_i = function () {
		var t = {};
		this._Object11 = t;
		return t;
	};
	_proto._To8_i = function () {
		var t = new egret.tween.To();
		t.duration = 3000;
		t.props = this._Object12_i();
		return t;
	};
	_proto._Object12_i = function () {
		var t = {};
		this._Object12 = t;
		return t;
	};
	_proto.imgThumb_i = function () {
		var t = new eui.Image();
		this.imgThumb = t;
		t.height = 108;
		t.source = "";
		t.width = 215;
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto.gCurrent_i = function () {
		var t = new eui.Group();
		this.gCurrent = t;
		t.height = 54;
		t.visible = false;
		t.width = 54;
		t.x = 80;
		t.y = 27;
		t.elementsContent = [this.image0_i(),this._Image1_i(),this.image1_i()];
		return t;
	};
	_proto.image0_i = function () {
		var t = new eui.Image();
		this.image0 = t;
		t.alpha = 0;
		t.horizontalCenter = 0;
		t.source = "yellow_png";
		t.verticalCenter = 0;
		return t;
	};
	_proto._Image1_i = function () {
		var t = new eui.Image();
		t.source = "tongyong_dingweidikuang_png";
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto.image1_i = function () {
		var t = new eui.Image();
		this.image1 = t;
		t.source = "tongyong_dingwei_icon32_png";
		t.x = 11;
		t.y = 11;
		return t;
	};
	_proto.btn_i = function () {
		var t = new eui.Button();
		this.btn = t;
		t.bottom = 0;
		t.label = "";
		t.left = 0;
		t.right = 0;
		t.top = 0;
		t.skinName = Storyline_reachedSkin$Skin99;
		return t;
	};
	_proto.textTitle_i = function () {
		var t = new eui.Label();
		this.textTitle = t;
		t.bottom = 0;
		t.fontFamily = "Microsoft YaHei";
		t.height = 40;
		t.right = 0;
		t.size = 22;
		t.text = "";
		t.textAlign = "center";
		t.textColor = 0x000000;
		t.touchEnabled = false;
		t.verticalAlign = "middle";
		t.width = 235;
		return t;
	};
	return Storyline_reachedSkin;
})(eui.Skin);generateEUI.paths['resource/eui_skins/Storyline_StoryEnd.exml'] = window.Storyline_StoryEndSkin = (function (_super) {
	__extends(Storyline_StoryEndSkin, _super);
	function Storyline_StoryEndSkin() {
		_super.call(this);
		this.skinParts = ["icon","gDB","tips"];
		
		this.height = 82;
		this.width = 82;
		this.elementsContent = [this._Group1_i(),this.tips_i()];
	}
	var _proto = Storyline_StoryEndSkin.prototype;

	_proto._Group1_i = function () {
		var t = new eui.Group();
		t.height = 95;
		t.width = 95;
		t.x = -6;
		t.y = -6;
		t.elementsContent = [this.icon_i(),this.gDB_i()];
		return t;
	};
	_proto.icon_i = function () {
		var t = new eui.Image();
		this.icon = t;
		t.source = "gushixian_tansuodu_gebiaoshi_png";
		t.visible = false;
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto.gDB_i = function () {
		var t = new eui.Group();
		this.gDB = t;
		t.horizontalCenter = 0;
		t.verticalCenter = 0;
		return t;
	};
	_proto.tips_i = function () {
		var t = new eui.Label();
		this.tips = t;
		t.fontFamily = "Microsoft YaHei";
		t.horizontalCenter = 0;
		t.size = 16;
		t.text = "";
		t.textColor = 0xdecc9d;
		t.y = 90;
		return t;
	};
	return Storyline_StoryEndSkin;
})(eui.Skin);generateEUI.paths['resource/eui_skins/TextButtonSkin.exml'] = window.TextButtonSkin = (function (_super) {
	__extends(TextButtonSkin, _super);
	function TextButtonSkin() {
		_super.call(this);
		this.skinParts = ["startIcon","startTween","selectIcon","selectTween","multipleTween","imgButton","labelDisplay","image","icon"];
		
		this.height = 83;
		this.minHeight = 50;
		this.minWidth = 100;
		this.width = 625;
		this.startIcon_i();
		this.startTween_i();
		this.selectIcon_i();
		this.selectTween_i();
		this.multipleTween_i();
		this.elementsContent = [this.labelDisplay_i(),this._Group1_i()];
		this.imgButton_i();
		
		this.states = [
			new eui.State ("up",
				[
					new eui.AddItems("imgButton","",2,"labelDisplay")
				])
			,
			new eui.State ("down",
				[
					new eui.AddItems("imgButton","",2,"labelDisplay"),
					new eui.SetProperty("imgButton","source","xuanxiang_btn_dikuang02_png"),
					new eui.SetProperty("labelDisplay","textColor",0xa2a2a2),
					new eui.SetProperty("image","source","shouye_rukou_zhuangshi_01_png")
				])
			,
			new eui.State ("disabled",
				[
				])
			,
			new eui.State ("move",
				[
					new eui.AddItems("imgButton","",2,"labelDisplay"),
					new eui.SetProperty("imgButton","source","xuanxiang_btn_dikuang01_png"),
					new eui.SetProperty("image","source","xuanxiang_btn_tishi_png")
				])
		];
		
		eui.Binding.$bindProperties(this, ["icon"],[0],this._TweenItem1,"target");
		eui.Binding.$bindProperties(this, [0],[],this._Object1,"alpha");
		eui.Binding.$bindProperties(this, [0],[],this._Object2,"alpha");
		eui.Binding.$bindProperties(this, [1],[],this._Object3,"alpha");
		eui.Binding.$bindProperties(this, [0],[],this._Object4,"alpha");
		eui.Binding.$bindProperties(this, [1],[],this._Object5,"alpha");
		eui.Binding.$bindProperties(this, [0.3],[],this._Object6,"alpha");
		eui.Binding.$bindProperties(this, [1],[],this._Object7,"alpha");
		eui.Binding.$bindProperties(this, ["image"],[0],this._TweenItem2,"target");
		eui.Binding.$bindProperties(this, [0],[],this._Object8,"alpha");
		eui.Binding.$bindProperties(this, [0],[],this._Object9,"alpha");
		eui.Binding.$bindProperties(this, [1],[],this._Object10,"alpha");
		eui.Binding.$bindProperties(this, [0],[],this._Object11,"alpha");
		eui.Binding.$bindProperties(this, [1],[],this._Object12,"alpha");
		eui.Binding.$bindProperties(this, [0.3],[],this._Object13,"alpha");
		eui.Binding.$bindProperties(this, [1],[],this._Object14,"alpha");
		eui.Binding.$bindProperties(this, ["imgButton"],[0],this._TweenItem3,"target");
		eui.Binding.$bindProperties(this, [0],[],this._Object15,"alpha");
		eui.Binding.$bindProperties(this, [0],[],this._Object15,"scaleX");
		eui.Binding.$bindProperties(this, [10],[],this._Object15,"x");
		eui.Binding.$bindProperties(this, [0],[],this._Object16,"alpha");
		eui.Binding.$bindProperties(this, [1],[],this._Object17,"alpha");
		eui.Binding.$bindProperties(this, [1],[],this._Object17,"scaleX");
		eui.Binding.$bindProperties(this, [0],[],this._Object17,"x");
		eui.Binding.$bindProperties(this, ["labelDisplay"],[0],this._TweenItem4,"target");
		eui.Binding.$bindProperties(this, [0],[],this._Object18,"alpha");
		eui.Binding.$bindProperties(this, [0],[],this._Object19,"alpha");
		eui.Binding.$bindProperties(this, [1],[],this._Object20,"alpha");
		eui.Binding.$bindProperties(this, ["icon"],[0],this._TweenItem5,"target");
		eui.Binding.$bindProperties(this, [0],[],this._Object21,"alpha");
		eui.Binding.$bindProperties(this, [1],[],this._Object22,"alpha");
		eui.Binding.$bindProperties(this, ["image"],[0],this._TweenItem6,"target");
		eui.Binding.$bindProperties(this, [0],[],this._Object23,"alpha");
		eui.Binding.$bindProperties(this, [1],[],this._Object24,"alpha");
		eui.Binding.$bindProperties(this, ["image"],[0],this._TweenItem7,"target");
		eui.Binding.$bindProperties(this, [0],[],this._Object25,"alpha");
		eui.Binding.$bindProperties(this, [0],[],this._Object26,"alpha");
		eui.Binding.$bindProperties(this, [1],[],this._Object27,"alpha");
		eui.Binding.$bindProperties(this, [0],[],this._Object28,"alpha");
		eui.Binding.$bindProperties(this, [1],[],this._Object29,"alpha");
		eui.Binding.$bindProperties(this, [0.3],[],this._Object30,"alpha");
		eui.Binding.$bindProperties(this, [1],[],this._Object31,"alpha");
		eui.Binding.$bindProperties(this, ["imgButton"],[0],this._TweenItem8,"target");
		eui.Binding.$bindProperties(this, [0],[],this._Object32,"alpha");
		eui.Binding.$bindProperties(this, [0],[],this._Object32,"scaleX");
		eui.Binding.$bindProperties(this, [10],[],this._Object32,"x");
		eui.Binding.$bindProperties(this, [0],[],this._Object33,"alpha");
		eui.Binding.$bindProperties(this, [1],[],this._Object34,"alpha");
		eui.Binding.$bindProperties(this, [1],[],this._Object34,"scaleX");
		eui.Binding.$bindProperties(this, [0],[],this._Object34,"x");
		eui.Binding.$bindProperties(this, ["labelDisplay"],[0],this._TweenItem9,"target");
		eui.Binding.$bindProperties(this, [0],[],this._Object35,"alpha");
		eui.Binding.$bindProperties(this, [0],[],this._Object36,"alpha");
		eui.Binding.$bindProperties(this, [0.3],[],this._Object37,"alpha");
	}
	var _proto = TextButtonSkin.prototype;

	_proto.startIcon_i = function () {
		var t = new egret.tween.TweenGroup();
		this.startIcon = t;
		t.items = [this._TweenItem1_i()];
		return t;
	};
	_proto._TweenItem1_i = function () {
		var t = new egret.tween.TweenItem();
		this._TweenItem1 = t;
		t.paths = [this._Set1_i(),this._Wait1_i(),this._Set2_i(),this._To1_i(),this._To2_i(),this._To3_i(),this._To4_i(),this._To5_i()];
		return t;
	};
	_proto._Set1_i = function () {
		var t = new egret.tween.Set();
		t.props = this._Object1_i();
		return t;
	};
	_proto._Object1_i = function () {
		var t = {};
		this._Object1 = t;
		return t;
	};
	_proto._Wait1_i = function () {
		var t = new egret.tween.Wait();
		t.duration = 1000;
		return t;
	};
	_proto._Set2_i = function () {
		var t = new egret.tween.Set();
		t.props = this._Object2_i();
		return t;
	};
	_proto._Object2_i = function () {
		var t = {};
		this._Object2 = t;
		return t;
	};
	_proto._To1_i = function () {
		var t = new egret.tween.To();
		t.duration = 100;
		t.props = this._Object3_i();
		return t;
	};
	_proto._Object3_i = function () {
		var t = {};
		this._Object3 = t;
		return t;
	};
	_proto._To2_i = function () {
		var t = new egret.tween.To();
		t.duration = 150;
		t.props = this._Object4_i();
		return t;
	};
	_proto._Object4_i = function () {
		var t = {};
		this._Object4 = t;
		return t;
	};
	_proto._To3_i = function () {
		var t = new egret.tween.To();
		t.duration = 150;
		t.props = this._Object5_i();
		return t;
	};
	_proto._Object5_i = function () {
		var t = {};
		this._Object5 = t;
		return t;
	};
	_proto._To4_i = function () {
		var t = new egret.tween.To();
		t.duration = 100;
		t.props = this._Object6_i();
		return t;
	};
	_proto._Object6_i = function () {
		var t = {};
		this._Object6 = t;
		return t;
	};
	_proto._To5_i = function () {
		var t = new egret.tween.To();
		t.duration = 200;
		t.props = this._Object7_i();
		return t;
	};
	_proto._Object7_i = function () {
		var t = {};
		this._Object7 = t;
		return t;
	};
	_proto.startTween_i = function () {
		var t = new egret.tween.TweenGroup();
		this.startTween = t;
		t.items = [this._TweenItem2_i(),this._TweenItem3_i(),this._TweenItem4_i()];
		return t;
	};
	_proto._TweenItem2_i = function () {
		var t = new egret.tween.TweenItem();
		this._TweenItem2 = t;
		t.paths = [this._Set3_i(),this._Wait2_i(),this._Set4_i(),this._To6_i(),this._To7_i(),this._To8_i(),this._To9_i(),this._To10_i()];
		return t;
	};
	_proto._Set3_i = function () {
		var t = new egret.tween.Set();
		t.props = this._Object8_i();
		return t;
	};
	_proto._Object8_i = function () {
		var t = {};
		this._Object8 = t;
		return t;
	};
	_proto._Wait2_i = function () {
		var t = new egret.tween.Wait();
		t.duration = 1000;
		return t;
	};
	_proto._Set4_i = function () {
		var t = new egret.tween.Set();
		t.props = this._Object9_i();
		return t;
	};
	_proto._Object9_i = function () {
		var t = {};
		this._Object9 = t;
		return t;
	};
	_proto._To6_i = function () {
		var t = new egret.tween.To();
		t.duration = 100;
		t.props = this._Object10_i();
		return t;
	};
	_proto._Object10_i = function () {
		var t = {};
		this._Object10 = t;
		return t;
	};
	_proto._To7_i = function () {
		var t = new egret.tween.To();
		t.duration = 150;
		t.props = this._Object11_i();
		return t;
	};
	_proto._Object11_i = function () {
		var t = {};
		this._Object11 = t;
		return t;
	};
	_proto._To8_i = function () {
		var t = new egret.tween.To();
		t.duration = 150;
		t.props = this._Object12_i();
		return t;
	};
	_proto._Object12_i = function () {
		var t = {};
		this._Object12 = t;
		return t;
	};
	_proto._To9_i = function () {
		var t = new egret.tween.To();
		t.duration = 100;
		t.props = this._Object13_i();
		return t;
	};
	_proto._Object13_i = function () {
		var t = {};
		this._Object13 = t;
		return t;
	};
	_proto._To10_i = function () {
		var t = new egret.tween.To();
		t.duration = 200;
		t.props = this._Object14_i();
		return t;
	};
	_proto._Object14_i = function () {
		var t = {};
		this._Object14 = t;
		return t;
	};
	_proto._TweenItem3_i = function () {
		var t = new egret.tween.TweenItem();
		this._TweenItem3 = t;
		t.paths = [this._Set5_i(),this._To11_i(),this._To12_i()];
		return t;
	};
	_proto._Set5_i = function () {
		var t = new egret.tween.Set();
		t.props = this._Object15_i();
		return t;
	};
	_proto._Object15_i = function () {
		var t = {};
		this._Object15 = t;
		return t;
	};
	_proto._To11_i = function () {
		var t = new egret.tween.To();
		t.duration = 450;
		t.props = this._Object16_i();
		return t;
	};
	_proto._Object16_i = function () {
		var t = {};
		this._Object16 = t;
		return t;
	};
	_proto._To12_i = function () {
		var t = new egret.tween.To();
		t.duration = 700;
		t.props = this._Object17_i();
		return t;
	};
	_proto._Object17_i = function () {
		var t = {};
		this._Object17 = t;
		return t;
	};
	_proto._TweenItem4_i = function () {
		var t = new egret.tween.TweenItem();
		this._TweenItem4 = t;
		t.paths = [this._Set6_i(),this._To13_i(),this._To14_i()];
		return t;
	};
	_proto._Set6_i = function () {
		var t = new egret.tween.Set();
		t.props = this._Object18_i();
		return t;
	};
	_proto._Object18_i = function () {
		var t = {};
		this._Object18 = t;
		return t;
	};
	_proto._To13_i = function () {
		var t = new egret.tween.To();
		t.duration = 1000;
		t.props = this._Object19_i();
		return t;
	};
	_proto._Object19_i = function () {
		var t = {};
		this._Object19 = t;
		return t;
	};
	_proto._To14_i = function () {
		var t = new egret.tween.To();
		t.duration = 1000;
		t.props = this._Object20_i();
		return t;
	};
	_proto._Object20_i = function () {
		var t = {};
		this._Object20 = t;
		return t;
	};
	_proto.selectIcon_i = function () {
		var t = new egret.tween.TweenGroup();
		this.selectIcon = t;
		t.items = [this._TweenItem5_i()];
		return t;
	};
	_proto._TweenItem5_i = function () {
		var t = new egret.tween.TweenItem();
		this._TweenItem5 = t;
		t.paths = [this._Set7_i(),this._To15_i()];
		return t;
	};
	_proto._Set7_i = function () {
		var t = new egret.tween.Set();
		t.props = this._Object21_i();
		return t;
	};
	_proto._Object21_i = function () {
		var t = {};
		this._Object21 = t;
		return t;
	};
	_proto._To15_i = function () {
		var t = new egret.tween.To();
		t.duration = 200;
		t.props = this._Object22_i();
		return t;
	};
	_proto._Object22_i = function () {
		var t = {};
		this._Object22 = t;
		return t;
	};
	_proto.selectTween_i = function () {
		var t = new egret.tween.TweenGroup();
		this.selectTween = t;
		t.items = [this._TweenItem6_i()];
		return t;
	};
	_proto._TweenItem6_i = function () {
		var t = new egret.tween.TweenItem();
		this._TweenItem6 = t;
		t.paths = [this._Set8_i(),this._To16_i()];
		return t;
	};
	_proto._Set8_i = function () {
		var t = new egret.tween.Set();
		t.props = this._Object23_i();
		return t;
	};
	_proto._Object23_i = function () {
		var t = {};
		this._Object23 = t;
		return t;
	};
	_proto._To16_i = function () {
		var t = new egret.tween.To();
		t.duration = 350;
		t.props = this._Object24_i();
		return t;
	};
	_proto._Object24_i = function () {
		var t = {};
		this._Object24 = t;
		return t;
	};
	_proto.multipleTween_i = function () {
		var t = new egret.tween.TweenGroup();
		this.multipleTween = t;
		t.items = [this._TweenItem7_i(),this._TweenItem8_i(),this._TweenItem9_i()];
		return t;
	};
	_proto._TweenItem7_i = function () {
		var t = new egret.tween.TweenItem();
		this._TweenItem7 = t;
		t.paths = [this._Set9_i(),this._Wait3_i(),this._Set10_i(),this._To17_i(),this._To18_i(),this._To19_i(),this._To20_i(),this._To21_i()];
		return t;
	};
	_proto._Set9_i = function () {
		var t = new egret.tween.Set();
		t.props = this._Object25_i();
		return t;
	};
	_proto._Object25_i = function () {
		var t = {};
		this._Object25 = t;
		return t;
	};
	_proto._Wait3_i = function () {
		var t = new egret.tween.Wait();
		t.duration = 1000;
		return t;
	};
	_proto._Set10_i = function () {
		var t = new egret.tween.Set();
		t.props = this._Object26_i();
		return t;
	};
	_proto._Object26_i = function () {
		var t = {};
		this._Object26 = t;
		return t;
	};
	_proto._To17_i = function () {
		var t = new egret.tween.To();
		t.duration = 100;
		t.props = this._Object27_i();
		return t;
	};
	_proto._Object27_i = function () {
		var t = {};
		this._Object27 = t;
		return t;
	};
	_proto._To18_i = function () {
		var t = new egret.tween.To();
		t.duration = 150;
		t.props = this._Object28_i();
		return t;
	};
	_proto._Object28_i = function () {
		var t = {};
		this._Object28 = t;
		return t;
	};
	_proto._To19_i = function () {
		var t = new egret.tween.To();
		t.duration = 150;
		t.props = this._Object29_i();
		return t;
	};
	_proto._Object29_i = function () {
		var t = {};
		this._Object29 = t;
		return t;
	};
	_proto._To20_i = function () {
		var t = new egret.tween.To();
		t.duration = 100;
		t.props = this._Object30_i();
		return t;
	};
	_proto._Object30_i = function () {
		var t = {};
		this._Object30 = t;
		return t;
	};
	_proto._To21_i = function () {
		var t = new egret.tween.To();
		t.duration = 200;
		t.props = this._Object31_i();
		return t;
	};
	_proto._Object31_i = function () {
		var t = {};
		this._Object31 = t;
		return t;
	};
	_proto._TweenItem8_i = function () {
		var t = new egret.tween.TweenItem();
		this._TweenItem8 = t;
		t.paths = [this._Set11_i(),this._To22_i(),this._To23_i()];
		return t;
	};
	_proto._Set11_i = function () {
		var t = new egret.tween.Set();
		t.props = this._Object32_i();
		return t;
	};
	_proto._Object32_i = function () {
		var t = {};
		this._Object32 = t;
		return t;
	};
	_proto._To22_i = function () {
		var t = new egret.tween.To();
		t.duration = 450;
		t.props = this._Object33_i();
		return t;
	};
	_proto._Object33_i = function () {
		var t = {};
		this._Object33 = t;
		return t;
	};
	_proto._To23_i = function () {
		var t = new egret.tween.To();
		t.duration = 700;
		t.props = this._Object34_i();
		return t;
	};
	_proto._Object34_i = function () {
		var t = {};
		this._Object34 = t;
		return t;
	};
	_proto._TweenItem9_i = function () {
		var t = new egret.tween.TweenItem();
		this._TweenItem9 = t;
		t.paths = [this._Set12_i(),this._To24_i(),this._To25_i()];
		return t;
	};
	_proto._Set12_i = function () {
		var t = new egret.tween.Set();
		t.props = this._Object35_i();
		return t;
	};
	_proto._Object35_i = function () {
		var t = {};
		this._Object35 = t;
		return t;
	};
	_proto._To24_i = function () {
		var t = new egret.tween.To();
		t.duration = 1000;
		t.props = this._Object36_i();
		return t;
	};
	_proto._Object36_i = function () {
		var t = {};
		this._Object36 = t;
		return t;
	};
	_proto._To25_i = function () {
		var t = new egret.tween.To();
		t.duration = 1000;
		t.props = this._Object37_i();
		return t;
	};
	_proto._Object37_i = function () {
		var t = {};
		this._Object37 = t;
		return t;
	};
	_proto.imgButton_i = function () {
		var t = new eui.Image();
		this.imgButton = t;
		t.fillMode = "scale";
		t.source = "xuanxiang_btn_dikuang00_png";
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto.labelDisplay_i = function () {
		var t = new eui.Label();
		this.labelDisplay = t;
		t.fontFamily = "Microsoft Yahei";
		t.size = 28;
		t.textAlign = "left";
		t.textColor = 0xffffff;
		t.verticalAlign = "middle";
		t.verticalCenter = 0;
		t.x = 106;
		return t;
	};
	_proto._Group1_i = function () {
		var t = new eui.Group();
		t.x = 18;
		t.y = 10;
		t.elementsContent = [this.image_i(),this.icon_i()];
		return t;
	};
	_proto.image_i = function () {
		var t = new eui.Image();
		this.image = t;
		t.source = "xuanxiang_btn_png";
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto.icon_i = function () {
		var t = new eui.Image();
		this.icon = t;
		t.alpha = 0;
		t.fillMode = "clip";
		t.horizontalCenter = 0;
		t.source = "xuanxiang_btn_yixuan_png";
		t.verticalCenter = 0;
		return t;
	};
	return TextButtonSkin;
})(eui.Skin);generateEUI.paths['resource/eui_skins/TextQuestionSkin.exml'] = window.TextQuestionSkin = (function (_super) {
	__extends(TextQuestionSkin, _super);
	function TextQuestionSkin() {
		_super.call(this);
		this.skinParts = ["label","line"];
		
		this.minWidth = 320;
		this.elementsContent = [this.label_i(),this.line_i()];
	}
	var _proto = TextQuestionSkin.prototype;

	_proto.label_i = function () {
		var t = new eui.Label();
		this.label = t;
		t.fontFamily = "fangzheng";
		t.horizontalCenter = 0;
		t.size = 34;
		t.text = "";
		t.top = 0;
		return t;
	};
	_proto.line_i = function () {
		var t = new eui.Image();
		this.line = t;
		t.horizontalCenter = 0;
		t.source = "xuanxiang_biaotifenge_png";
		t.y = 46;
		return t;
	};
	return TextQuestionSkin;
})(eui.Skin);generateEUI.paths['resource/eui_skins/TinyBar.exml'] = window.TinyBarSkin = (function (_super) {
	__extends(TinyBarSkin, _super);
	var TinyBarSkin$Skin100 = 	(function (_super) {
		__extends(TinyBarSkin$Skin100, _super);
		function TinyBarSkin$Skin100() {
			_super.call(this);
			this.skinParts = ["labelDisplay"];
			
			this.elementsContent = [this._Image1_i(),this.labelDisplay_i()];
			this.states = [
				new eui.State ("up",
					[
					])
				,
				new eui.State ("down",
					[
						new eui.SetProperty("_Image1","source","paihangbang_shousuo_btn01_png")
					])
				,
				new eui.State ("disabled",
					[
					])
			];
		}
		var _proto = TinyBarSkin$Skin100.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			this._Image1 = t;
			t.percentHeight = 100;
			t.source = "paihangbang_shousuo_btn00_png";
			t.percentWidth = 100;
			return t;
		};
		_proto.labelDisplay_i = function () {
			var t = new eui.Label();
			this.labelDisplay = t;
			t.horizontalCenter = 0;
			t.verticalCenter = 0;
			return t;
		};
		return TinyBarSkin$Skin100;
	})(eui.Skin);

	function TinyBarSkin() {
		_super.call(this);
		this.skinParts = ["btn"];
		
		this.height = 71;
		this.width = 51;
		this.elementsContent = [this.btn_i()];
	}
	var _proto = TinyBarSkin.prototype;

	_proto.btn_i = function () {
		var t = new eui.Button();
		this.btn = t;
		t.height = 71;
		t.label = "";
		t.width = 51;
		t.x = 0;
		t.y = 0;
		t.skinName = TinyBarSkin$Skin100;
		return t;
	};
	return TinyBarSkin;
})(eui.Skin);generateEUI.paths['resource/eui_skins/Toast.exml'] = window.ToastSkin = (function (_super) {
	__extends(ToastSkin, _super);
	function ToastSkin() {
		_super.call(this);
		this.skinParts = ["gContent","gTips"];
		
		this.elementsContent = [this.gTips_i()];
	}
	var _proto = ToastSkin.prototype;

	_proto.gTips_i = function () {
		var t = new eui.Group();
		this.gTips = t;
		t.height = 43;
		t.horizontalCenter = 0;
		t.touchEnabled = false;
		t.verticalCenter = 0;
		t.width = 523;
		t.elementsContent = [this._Image1_i(),this.gContent_i()];
		return t;
	};
	_proto._Image1_i = function () {
		var t = new eui.Image();
		t.source = "tongyong_tipsheidi_png";
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto.gContent_i = function () {
		var t = new eui.Group();
		this.gContent = t;
		t.bottom = 0;
		t.horizontalCenter = 0;
		t.top = 0;
		t.layout = this._HorizontalLayout1_i();
		return t;
	};
	_proto._HorizontalLayout1_i = function () {
		var t = new eui.HorizontalLayout();
		t.gap = 3;
		t.horizontalAlign = "center";
		t.verticalAlign = "middle";
		return t;
	};
	return ToastSkin;
})(eui.Skin);generateEUI.paths['resource/eui_skins/Topbar.exml'] = window.TopbarSkin = (function (_super) {
	__extends(TopbarSkin, _super);
	function TopbarSkin() {
		_super.call(this);
		this.skinParts = ["textGold","gGold","textTips","gTips"];
		
		this.elementsContent = [this.gGold_i(),this.gTips_i()];
	}
	var _proto = TopbarSkin.prototype;

	_proto.gGold_i = function () {
		var t = new eui.Group();
		this.gGold = t;
		t.right = 42;
		t.y = 7;
		t.layout = this._HorizontalLayout1_i();
		t.elementsContent = [this._Image1_i(),this.textGold_i()];
		return t;
	};
	_proto._HorizontalLayout1_i = function () {
		var t = new eui.HorizontalLayout();
		t.gap = 8;
		t.verticalAlign = "middle";
		return t;
	};
	_proto._Image1_i = function () {
		var t = new eui.Image();
		t.right = 110;
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "tongyong_jin_icon_png";
		t.y = 7;
		return t;
	};
	_proto.textGold_i = function () {
		var t = new eui.Label();
		this.textGold = t;
		t.fontFamily = "Microsoft YaHei";
		t.height = 16;
		t.right = 42;
		t.scaleX = 1;
		t.scaleY = 1;
		t.size = 16;
		t.text = "";
		t.textAlign = "left";
		t.textColor = 0xf7eed4;
		t.y = 26;
		return t;
	};
	_proto.gTips_i = function () {
		var t = new eui.Group();
		this.gTips = t;
		t.right = 10;
		t.visible = false;
		t.width = 225;
		t.y = 62;
		t.elementsContent = [this._Image2_i(),this.textTips_i()];
		return t;
	};
	_proto._Image2_i = function () {
		var t = new eui.Image();
		t.bottom = 0;
		t.left = 0;
		t.right = 0;
		t.scale9Grid = new egret.Rectangle(10,10,64,64);
		t.source = "tongyong_xuanfutips_png";
		t.top = 0;
		return t;
	};
	_proto.textTips_i = function () {
		var t = new eui.Label();
		this.textTips = t;
		t.bottom = 22;
		t.fontFamily = "Microsoft YaHei";
		t.left = 22;
		t.lineSpacing = 8;
		t.right = 22;
		t.size = 16;
		t.text = "";
		t.textColor = 0x999999;
		t.top = 22;
		return t;
	};
	return TopbarSkin;
})(eui.Skin);generateEUI.paths['resource/eui_skins/Topbar2.exml'] = window.Topbar2Skin = (function (_super) {
	__extends(Topbar2Skin, _super);
	function Topbar2Skin() {
		_super.call(this);
		this.skinParts = ["textFlower","gFlower","textEgg","gEgg","textTips","gTips"];
		
		this.elementsContent = [this._Group1_i(),this.gTips_i()];
	}
	var _proto = Topbar2Skin.prototype;

	_proto._Group1_i = function () {
		var t = new eui.Group();
		t.height = 49;
		t.right = 40;
		t.y = 8;
		t.layout = this._HorizontalLayout1_i();
		t.elementsContent = [this.gFlower_i(),this.gEgg_i()];
		return t;
	};
	_proto._HorizontalLayout1_i = function () {
		var t = new eui.HorizontalLayout();
		t.gap = 15;
		t.verticalAlign = "middle";
		return t;
	};
	_proto.gFlower_i = function () {
		var t = new eui.Group();
		this.gFlower = t;
		t.x = 0;
		t.y = 0;
		t.elementsContent = [this._Image1_i(),this.textFlower_i()];
		return t;
	};
	_proto._Image1_i = function () {
		var t = new eui.Image();
		t.source = "paihangbang_dahua_zengjia_icon_png";
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto.textFlower_i = function () {
		var t = new eui.Label();
		this.textFlower = t;
		t.fontFamily = "Microsoft YaHei";
		t.size = 16;
		t.text = "";
		t.textColor = 0xf7eed4;
		t.verticalAlign = "middle";
		t.verticalCenter = 0;
		t.x = 56;
		return t;
	};
	_proto.gEgg_i = function () {
		var t = new eui.Group();
		this.gEgg = t;
		t.x = 304;
		t.y = 0;
		t.elementsContent = [this._Image2_i(),this.textEgg_i()];
		return t;
	};
	_proto._Image2_i = function () {
		var t = new eui.Image();
		t.source = "paihangbang_dajidan_zengjia_icon_png";
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto.textEgg_i = function () {
		var t = new eui.Label();
		this.textEgg = t;
		t.fontFamily = "Microsoft YaHei";
		t.size = 16;
		t.text = "";
		t.textColor = 0xf7eed4;
		t.verticalAlign = "middle";
		t.verticalCenter = 0;
		t.x = 56;
		return t;
	};
	_proto.gTips_i = function () {
		var t = new eui.Group();
		this.gTips = t;
		t.right = 10;
		t.visible = false;
		t.width = 225;
		t.y = 62;
		t.elementsContent = [this._Image3_i(),this.textTips_i()];
		return t;
	};
	_proto._Image3_i = function () {
		var t = new eui.Image();
		t.bottom = 0;
		t.left = 0;
		t.right = 0;
		t.scale9Grid = new egret.Rectangle(10,10,64,64);
		t.source = "tongyong_xuanfutips_png";
		t.top = 0;
		return t;
	};
	_proto.textTips_i = function () {
		var t = new eui.Label();
		this.textTips = t;
		t.bottom = 22;
		t.fontFamily = "Microsoft YaHei";
		t.left = 22;
		t.lineSpacing = 8;
		t.right = 22;
		t.size = 16;
		t.text = "";
		t.textColor = 0x999999;
		t.top = 22;
		return t;
	};
	return Topbar2Skin;
})(eui.Skin);generateEUI.paths['resource/eui_skins/VideoVSliderSkin.exml'] = window.VideoVSliderSkin = (function (_super) {
	__extends(VideoVSliderSkin, _super);
	function VideoVSliderSkin() {
		_super.call(this);
		this.skinParts = ["track","trackHighlight","thumb"];
		
		this.height = 90;
		this.width = 43;
		this.elementsContent = [this.track_i(),this.trackHighlight_i(),this.thumb_i()];
		this.states = [
			new eui.State ("up",
				[
				])
			,
			new eui.State ("down",
				[
					new eui.SetProperty("_Image1","source","bofang_shengyingtiaokong_btn_01_png")
				])
			,
			new eui.State ("disabled",
				[
				])
		];
	}
	var _proto = VideoVSliderSkin.prototype;

	_proto.track_i = function () {
		var t = new eui.Rect();
		this.track = t;
		t.bottom = 0;
		t.fillAlpha = 0;
		t.left = 0;
		t.right = 0;
		t.top = 0;
		return t;
	};
	_proto.trackHighlight_i = function () {
		var t = new eui.Image();
		this.trackHighlight = t;
		t.bottom = 0;
		t.height = 0;
		t.horizontalCenter = 0;
		t.scale9Grid = new egret.Rectangle(0,6,4,38);
		t.source = "bofang_shengyingtiaokong_jindutiao_png";
		t.width = 4;
		return t;
	};
	_proto.thumb_i = function () {
		var t = new eui.Group();
		this.thumb = t;
		t.bottom = 0;
		t.height = 0;
		t.horizontalCenter = 0;
		t.elementsContent = [this._Image1_i()];
		return t;
	};
	_proto._Image1_i = function () {
		var t = new eui.Image();
		this._Image1 = t;
		t.horizontalCenter = 0;
		t.source = "bofang_shengyingtiaokong_btn_00_png";
		t.verticalCenter = 0;
		return t;
	};
	return VideoVSliderSkin;
})(eui.Skin);generateEUI.paths['resource/eui_skins/video.exml'] = window.VideoSkin = (function (_super) {
	__extends(VideoSkin, _super);
	var VideoSkin$Skin101 = 	(function (_super) {
		__extends(VideoSkin$Skin101, _super);
		function VideoSkin$Skin101() {
			_super.call(this);
			this.skinParts = ["labelDisplay"];
			
			this.elementsContent = [this._Image1_i(),this.labelDisplay_i()];
			this.states = [
				new eui.State ("up",
					[
					])
				,
				new eui.State ("down",
					[
						new eui.SetProperty("_Image1","source","bofang_fanhui01_png")
					])
				,
				new eui.State ("disabled",
					[
					])
			];
		}
		var _proto = VideoSkin$Skin101.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			this._Image1 = t;
			t.height = 36;
			t.source = "bofang_fanhui00_png";
			t.width = 36;
			return t;
		};
		_proto.labelDisplay_i = function () {
			var t = new eui.Label();
			this.labelDisplay = t;
			t.fontFamily = "Microsoft YaHei";
			t.size = 28;
			t.verticalAlign = "middle";
			t.x = 58;
			t.y = 4;
			return t;
		};
		return VideoSkin$Skin101;
	})(eui.Skin);

	var VideoSkin$Skin102 = 	(function (_super) {
		__extends(VideoSkin$Skin102, _super);
		function VideoSkin$Skin102() {
			_super.call(this);
			this.skinParts = ["labelDisplay"];
			
			this.elementsContent = [this._Image1_i(),this._Image2_i(),this.labelDisplay_i()];
			this.states = [
				new eui.State ("up",
					[
					])
				,
				new eui.State ("down",
					[
						new eui.SetProperty("_Image1","source","bofang_button_rukouditu01_png")
					])
				,
				new eui.State ("disabled",
					[
					])
			];
		}
		var _proto = VideoSkin$Skin102.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			this._Image1 = t;
			t.height = 65;
			t.source = "bofang_button_rukouditu00_png";
			t.width = 151;
			return t;
		};
		_proto._Image2_i = function () {
			var t = new eui.Image();
			t.height = 50;
			t.source = "bofang_gushixian_btn_00_png";
			t.verticalCenter = 0;
			t.width = 50;
			t.x = 11;
			return t;
		};
		_proto.labelDisplay_i = function () {
			var t = new eui.Label();
			this.labelDisplay = t;
			t.fontFamily = "Microsoft Yahei";
			t.size = 18;
			t.textColor = 0xffffff;
			t.x = 68;
			t.y = 25;
			return t;
		};
		return VideoSkin$Skin102;
	})(eui.Skin);

	var VideoSkin$Skin103 = 	(function (_super) {
		__extends(VideoSkin$Skin103, _super);
		function VideoSkin$Skin103() {
			_super.call(this);
			this.skinParts = ["labelDisplay"];
			
			this.elementsContent = [this._Image1_i(),this._Image2_i(),this.labelDisplay_i()];
			this.states = [
				new eui.State ("up",
					[
					])
				,
				new eui.State ("down",
					[
						new eui.SetProperty("_Image1","source","bofang_button_rukouditu01_png")
					])
				,
				new eui.State ("disabled",
					[
					])
			];
		}
		var _proto = VideoSkin$Skin103.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			this._Image1 = t;
			t.height = 65;
			t.source = "bofang_button_rukouditu00_png";
			t.width = 151;
			return t;
		};
		_proto._Image2_i = function () {
			var t = new eui.Image();
			t.height = 50;
			t.source = "bofang_dangan_btn_00_png";
			t.verticalCenter = 0;
			t.width = 50;
			t.x = 11;
			return t;
		};
		_proto.labelDisplay_i = function () {
			var t = new eui.Label();
			this.labelDisplay = t;
			t.fontFamily = "Microsoft Yahei";
			t.size = 18;
			t.textColor = 0xffffff;
			t.x = 68;
			t.y = 25;
			return t;
		};
		return VideoSkin$Skin103;
	})(eui.Skin);

	var VideoSkin$Skin104 = 	(function (_super) {
		__extends(VideoSkin$Skin104, _super);
		function VideoSkin$Skin104() {
			_super.call(this);
			this.skinParts = ["labelDisplay"];
			
			this.elementsContent = [this._Image1_i(),this.labelDisplay_i()];
			this.states = [
				new eui.State ("up",
					[
					])
				,
				new eui.State ("down",
					[
					])
				,
				new eui.State ("disabled",
					[
					])
			];
		}
		var _proto = VideoSkin$Skin104.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			t.percentHeight = 100;
			t.source = "bofang_xuanting_png";
			t.percentWidth = 100;
			return t;
		};
		_proto.labelDisplay_i = function () {
			var t = new eui.Label();
			this.labelDisplay = t;
			t.fontFamily = "Microsoft Yahei";
			t.horizontalCenter = 0;
			t.size = 18;
			t.textColor = 0x8a8a8a;
			t.verticalCenter = 0;
			return t;
		};
		return VideoSkin$Skin104;
	})(eui.Skin);

	var VideoSkin$Skin105 = 	(function (_super) {
		__extends(VideoSkin$Skin105, _super);
		function VideoSkin$Skin105() {
			_super.call(this);
			this.skinParts = ["labelDisplay"];
			
			this.elementsContent = [this._Image1_i(),this.labelDisplay_i()];
			this.states = [
				new eui.State ("play",
					[
						new eui.SetProperty("_Image1","source","bofang_zanting_icon00_png")
					])
				,
				new eui.State ("playdown",
					[
						new eui.SetProperty("_Image1","source","bofang_zanting_icon01_png")
					])
				,
				new eui.State ("pause",
					[
						new eui.SetProperty("_Image1","source","bofang_kaishi_icon00_png")
					])
				,
				new eui.State ("pausedown",
					[
						new eui.SetProperty("_Image1","source","bofang_kaishi_icon01_png")
					])
			];
		}
		var _proto = VideoSkin$Skin105.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			this._Image1 = t;
			t.percentHeight = 100;
			t.percentWidth = 100;
			return t;
		};
		_proto.labelDisplay_i = function () {
			var t = new eui.Label();
			this.labelDisplay = t;
			t.horizontalCenter = 0;
			t.verticalCenter = 0;
			return t;
		};
		return VideoSkin$Skin105;
	})(eui.Skin);

	var VideoSkin$Skin106 = 	(function (_super) {
		__extends(VideoSkin$Skin106, _super);
		function VideoSkin$Skin106() {
			_super.call(this);
			this.skinParts = ["labelDisplay"];
			
			this.elementsContent = [this._Image1_i(),this.labelDisplay_i()];
			this.states = [
				new eui.State ("up",
					[
					])
				,
				new eui.State ("down",
					[
					])
				,
				new eui.State ("disabled",
					[
					])
			];
		}
		var _proto = VideoSkin$Skin106.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			t.percentHeight = 100;
			t.source = "bofang_xuanting_png";
			t.percentWidth = 100;
			return t;
		};
		_proto.labelDisplay_i = function () {
			var t = new eui.Label();
			this.labelDisplay = t;
			t.fontFamily = "Microsoft Yahei";
			t.horizontalCenter = 0;
			t.size = 18;
			t.textColor = 0x8a8a8a;
			t.verticalCenter = 0;
			return t;
		};
		return VideoSkin$Skin106;
	})(eui.Skin);

	var VideoSkin$Skin107 = 	(function (_super) {
		__extends(VideoSkin$Skin107, _super);
		function VideoSkin$Skin107() {
			_super.call(this);
			this.skinParts = ["labelDisplay"];
			
			this.elementsContent = [this._Image1_i(),this.labelDisplay_i()];
			this.states = [
				new eui.State ("up",
					[
					])
				,
				new eui.State ("down",
					[
						new eui.SetProperty("_Image1","source","bofang_tiaoguo_icon01_png")
					])
				,
				new eui.State ("disabled",
					[
						new eui.SetProperty("_Image1","source","bofang_tiaoguo_icon_bukedian_png")
					])
			];
		}
		var _proto = VideoSkin$Skin107.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			this._Image1 = t;
			t.percentHeight = 100;
			t.source = "bofang_tiaoguo_icon00_png";
			t.percentWidth = 100;
			return t;
		};
		_proto.labelDisplay_i = function () {
			var t = new eui.Label();
			this.labelDisplay = t;
			t.horizontalCenter = 0;
			t.verticalCenter = 0;
			return t;
		};
		return VideoSkin$Skin107;
	})(eui.Skin);

	var VideoSkin$Skin108 = 	(function (_super) {
		__extends(VideoSkin$Skin108, _super);
		function VideoSkin$Skin108() {
			_super.call(this);
			this.skinParts = ["labelDisplay"];
			
			this.elementsContent = [this._Image1_i(),this.labelDisplay_i()];
			this.states = [
				new eui.State ("up",
					[
					])
				,
				new eui.State ("down",
					[
						new eui.SetProperty("_Image1","source","bofang_anniu_btn_01_png")
					])
				,
				new eui.State ("disabled",
					[
					])
			];
		}
		var _proto = VideoSkin$Skin108.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			this._Image1 = t;
			t.percentHeight = 100;
			t.source = "bofang_anniu_btn_00_png";
			t.percentWidth = 100;
			return t;
		};
		_proto.labelDisplay_i = function () {
			var t = new eui.Label();
			this.labelDisplay = t;
			t.fontFamily = "Microsoft Yahei";
			t.horizontalCenter = 0;
			t.size = 18;
			t.textColor = 0xffffff;
			t.verticalCenter = 0;
			return t;
		};
		return VideoSkin$Skin108;
	})(eui.Skin);

	var VideoSkin$Skin109 = 	(function (_super) {
		__extends(VideoSkin$Skin109, _super);
		function VideoSkin$Skin109() {
			_super.call(this);
			this.skinParts = ["labelDisplay"];
			
			this.elementsContent = [this._Image1_i(),this.labelDisplay_i()];
			this.states = [
				new eui.State ("up",
					[
					])
				,
				new eui.State ("down",
					[
						new eui.SetProperty("_Image1","source","bofang_anniu_btn_01_png")
					])
				,
				new eui.State ("disabled",
					[
					])
			];
		}
		var _proto = VideoSkin$Skin109.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			this._Image1 = t;
			t.percentHeight = 100;
			t.source = "bofang_anniu_btn_00_png";
			t.percentWidth = 100;
			return t;
		};
		_proto.labelDisplay_i = function () {
			var t = new eui.Label();
			this.labelDisplay = t;
			t.fontFamily = "Microsoft Yahei";
			t.horizontalCenter = 0;
			t.size = 18;
			t.textColor = 0xffffff;
			t.verticalCenter = 0;
			return t;
		};
		return VideoSkin$Skin109;
	})(eui.Skin);

	var VideoSkin$Skin110 = 	(function (_super) {
		__extends(VideoSkin$Skin110, _super);
		function VideoSkin$Skin110() {
			_super.call(this);
			this.skinParts = ["labelDisplay"];
			
			this.elementsContent = [this._Image1_i(),this.labelDisplay_i()];
			this.states = [
				new eui.State ("sound",
					[
						new eui.SetProperty("_Image1","source","bofang_shengyin_icon00_png")
					])
				,
				new eui.State ("sounddown",
					[
						new eui.SetProperty("_Image1","source","bofang_shengyin_icon01_png")
					])
				,
				new eui.State ("mute",
					[
						new eui.SetProperty("_Image1","source","bofang_jingyin_icon00_png")
					])
				,
				new eui.State ("mutedown",
					[
						new eui.SetProperty("_Image1","source","bofang_jingyin_icon01_png")
					])
			];
		}
		var _proto = VideoSkin$Skin110.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			this._Image1 = t;
			t.percentHeight = 100;
			t.percentWidth = 100;
			return t;
		};
		_proto.labelDisplay_i = function () {
			var t = new eui.Label();
			this.labelDisplay = t;
			t.horizontalCenter = 0;
			t.verticalCenter = 0;
			return t;
		};
		return VideoSkin$Skin110;
	})(eui.Skin);

	var VideoSkin$Skin111 = 	(function (_super) {
		__extends(VideoSkin$Skin111, _super);
		function VideoSkin$Skin111() {
			_super.call(this);
			this.skinParts = ["labelDisplay"];
			
			this.elementsContent = [this._Image1_i(),this.labelDisplay_i()];
			this.states = [
				new eui.State ("up",
					[
					])
				,
				new eui.State ("down",
					[
					])
				,
				new eui.State ("disabled",
					[
					])
			];
		}
		var _proto = VideoSkin$Skin111.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			t.percentHeight = 100;
			t.source = "bofang_xuanting_png";
			t.percentWidth = 100;
			return t;
		};
		_proto.labelDisplay_i = function () {
			var t = new eui.Label();
			this.labelDisplay = t;
			t.fontFamily = "Microsoft Yahei";
			t.horizontalCenter = 0;
			t.size = 14;
			t.textColor = 0x8a8a8a;
			t.verticalCenter = 0;
			return t;
		};
		return VideoSkin$Skin111;
	})(eui.Skin);

	var VideoSkin$Skin112 = 	(function (_super) {
		__extends(VideoSkin$Skin112, _super);
		function VideoSkin$Skin112() {
			_super.call(this);
			this.skinParts = ["labelDisplay"];
			
			this.elementsContent = [this._Image1_i(),this.labelDisplay_i()];
			this.states = [
				new eui.State ("up",
					[
					])
				,
				new eui.State ("down",
					[
						new eui.SetProperty("_Image1","source","bofang_shezhi_icon01_png")
					])
				,
				new eui.State ("disabled",
					[
					])
			];
		}
		var _proto = VideoSkin$Skin112.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			this._Image1 = t;
			t.percentHeight = 100;
			t.source = "bofang_shezhi_icon00_png";
			t.percentWidth = 100;
			return t;
		};
		_proto.labelDisplay_i = function () {
			var t = new eui.Label();
			this.labelDisplay = t;
			t.horizontalCenter = 0;
			t.verticalCenter = 0;
			return t;
		};
		return VideoSkin$Skin112;
	})(eui.Skin);

	var VideoSkin$Skin113 = 	(function (_super) {
		__extends(VideoSkin$Skin113, _super);
		function VideoSkin$Skin113() {
			_super.call(this);
			this.skinParts = ["labelDisplay"];
			
			this.elementsContent = [this._Image1_i(),this.labelDisplay_i()];
			this.states = [
				new eui.State ("up",
					[
					])
				,
				new eui.State ("down",
					[
					])
				,
				new eui.State ("disabled",
					[
					])
			];
		}
		var _proto = VideoSkin$Skin113.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			t.percentHeight = 100;
			t.source = "bofang_kaishi_icon_da_png";
			t.percentWidth = 100;
			return t;
		};
		_proto.labelDisplay_i = function () {
			var t = new eui.Label();
			this.labelDisplay = t;
			t.horizontalCenter = 0;
			t.verticalCenter = 0;
			return t;
		};
		return VideoSkin$Skin113;
	})(eui.Skin);

	var VideoSkin$Skin114 = 	(function (_super) {
		__extends(VideoSkin$Skin114, _super);
		function VideoSkin$Skin114() {
			_super.call(this);
			this.skinParts = ["labelDisplay"];
			
			this.elementsContent = [this._Image1_i(),this.labelDisplay_i()];
			this.states = [
				new eui.State ("up",
					[
					])
				,
				new eui.State ("down",
					[
						new eui.SetProperty("_Image1","source","bofang_fanhui01_png")
					])
				,
				new eui.State ("disabled",
					[
					])
			];
		}
		var _proto = VideoSkin$Skin114.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			this._Image1 = t;
			t.height = 36;
			t.source = "bofang_fanhui00_png";
			t.width = 36;
			return t;
		};
		_proto.labelDisplay_i = function () {
			var t = new eui.Label();
			this.labelDisplay = t;
			t.fontFamily = "Microsoft YaHei";
			t.size = 28;
			t.verticalAlign = "middle";
			t.x = 58;
			t.y = 4;
			return t;
		};
		return VideoSkin$Skin114;
	})(eui.Skin);

	var VideoSkin$Skin115 = 	(function (_super) {
		__extends(VideoSkin$Skin115, _super);
		function VideoSkin$Skin115() {
			_super.call(this);
			this.skinParts = ["labelDisplay"];
			
			this.elementsContent = [this._Image1_i(),this.labelDisplay_i()];
			this.states = [
				new eui.State ("up",
					[
					])
				,
				new eui.State ("down",
					[
					])
				,
				new eui.State ("disabled",
					[
					])
			];
		}
		var _proto = VideoSkin$Skin115.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			t.percentHeight = 100;
			t.source = "bofang_yichang_btn_png";
			t.percentWidth = 100;
			return t;
		};
		_proto.labelDisplay_i = function () {
			var t = new eui.Label();
			this.labelDisplay = t;
			t.fontFamily = "Microsoft Yahei";
			t.horizontalCenter = 0;
			t.size = 26;
			t.verticalCenter = 0;
			return t;
		};
		return VideoSkin$Skin115;
	})(eui.Skin);

	var VideoSkin$Skin116 = 	(function (_super) {
		__extends(VideoSkin$Skin116, _super);
		function VideoSkin$Skin116() {
			_super.call(this);
			this.skinParts = ["labelDisplay"];
			
			this.elementsContent = [this._Image1_i(),this.labelDisplay_i()];
			this.states = [
				new eui.State ("up",
					[
					])
				,
				new eui.State ("down",
					[
					])
				,
				new eui.State ("disabled",
					[
					])
			];
		}
		var _proto = VideoSkin$Skin116.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			t.percentHeight = 100;
			t.source = "bofang_yichang_btn_png";
			t.percentWidth = 100;
			return t;
		};
		_proto.labelDisplay_i = function () {
			var t = new eui.Label();
			this.labelDisplay = t;
			t.fontFamily = "Microsoft Yahei";
			t.horizontalCenter = 0;
			t.size = 26;
			t.verticalCenter = 0;
			return t;
		};
		return VideoSkin$Skin116;
	})(eui.Skin);

	function VideoSkin() {
		_super.call(this);
		this.skinParts = ["storyTween","thumbLoading","thumbMask","thumb","gThumb","posLabel","gPreview","textContinue","buttonRect","layRect","gFirstChoice","btnReturn","textCU","gCU","gNav","image0","image","gStoryTween","btnStory","image2","image1","gRecordTween","btnRecord","sliderVideo","tipsPlay","btnPlay","tipsSkip","btnSkip","textCurrent","textTime","gResButton","gRes","btnDefn","gRateButton","gRate","btnRate","sliderSound","gSound","btnSound","tipsSetting","btnSetting","gControl","gPanel","iconPause","textTips","gTips","gQTE","btnReturn2","textError","btnRetry","btnDefnRetry","gError"];
		
		this.height = 1080;
		this.width = 1920;
		this.storyTween_i();
		this.elementsContent = [this._Rect1_i(),this.gPreview_i(),this.textContinue_i(),this.buttonRect_i(),this.layRect_i(),this.gPanel_i(),this.iconPause_i(),this.gTips_i(),this.gQTE_i(),this.gError_i()];
		
		eui.Binding.$bindProperties(this, ["image"],[0],this._TweenItem1,"target");
		eui.Binding.$bindProperties(this, [0],[],this._Object1,"alpha");
		eui.Binding.$bindProperties(this, [1],[],this._Object1,"scaleX");
		eui.Binding.$bindProperties(this, [1],[],this._Object1,"scaleY");
		eui.Binding.$bindProperties(this, [0.7],[],this._Object2,"alpha");
		eui.Binding.$bindProperties(this, [1],[],this._Object3,"alpha");
		eui.Binding.$bindProperties(this, [1.4],[],this._Object3,"scaleX");
		eui.Binding.$bindProperties(this, [1.4],[],this._Object3,"scaleY");
		eui.Binding.$bindProperties(this, [0],[],this._Object4,"alpha");
		eui.Binding.$bindProperties(this, ["image0"],[0],this._TweenItem2,"target");
		eui.Binding.$bindProperties(this, [0],[],this._Object5,"alpha");
		eui.Binding.$bindProperties(this, [1],[],this._Object6,"alpha");
		eui.Binding.$bindProperties(this, [0],[],this._Object7,"alpha");
		eui.Binding.$bindProperties(this, ["image1"],[0],this._TweenItem3,"target");
		eui.Binding.$bindProperties(this, [0],[],this._Object8,"alpha");
		eui.Binding.$bindProperties(this, [1],[],this._Object8,"scaleX");
		eui.Binding.$bindProperties(this, [1],[],this._Object8,"scaleY");
		eui.Binding.$bindProperties(this, [0.7],[],this._Object9,"alpha");
		eui.Binding.$bindProperties(this, [1],[],this._Object10,"alpha");
		eui.Binding.$bindProperties(this, [1.4],[],this._Object10,"scaleX");
		eui.Binding.$bindProperties(this, [1.4],[],this._Object10,"scaleY");
		eui.Binding.$bindProperties(this, [0],[],this._Object11,"alpha");
		eui.Binding.$bindProperties(this, ["image2"],[0],this._TweenItem4,"target");
		eui.Binding.$bindProperties(this, [0],[],this._Object12,"alpha");
		eui.Binding.$bindProperties(this, [1],[],this._Object13,"alpha");
		eui.Binding.$bindProperties(this, [0],[],this._Object14,"alpha");
		eui.Binding.$bindProperties(this, ["gFirstChoice"],[0],this._TweenItem5,"target");
		eui.Binding.$bindProperties(this, [1],[],this._Object15,"alpha");
		eui.Binding.$bindProperties(this, [1],[],this._Object16,"alpha");
		eui.Binding.$bindProperties(this, [0],[],this._Object17,"alpha");
		eui.Binding.$bindProperties(this, ["thumbMask"],[0],this.thumb,"mask");
	}
	var _proto = VideoSkin.prototype;

	_proto.storyTween_i = function () {
		var t = new egret.tween.TweenGroup();
		this.storyTween = t;
		t.items = [this._TweenItem1_i(),this._TweenItem2_i(),this._TweenItem3_i(),this._TweenItem4_i(),this._TweenItem5_i()];
		return t;
	};
	_proto._TweenItem1_i = function () {
		var t = new egret.tween.TweenItem();
		this._TweenItem1 = t;
		t.paths = [this._Set1_i(),this._To1_i(),this._To2_i(),this._Wait1_i(),this._Set2_i()];
		return t;
	};
	_proto._Set1_i = function () {
		var t = new egret.tween.Set();
		t.props = this._Object1_i();
		return t;
	};
	_proto._Object1_i = function () {
		var t = {};
		this._Object1 = t;
		return t;
	};
	_proto._To1_i = function () {
		var t = new egret.tween.To();
		t.duration = 550;
		t.props = this._Object2_i();
		return t;
	};
	_proto._Object2_i = function () {
		var t = {};
		this._Object2 = t;
		return t;
	};
	_proto._To2_i = function () {
		var t = new egret.tween.To();
		t.duration = 1450;
		t.props = this._Object3_i();
		return t;
	};
	_proto._Object3_i = function () {
		var t = {};
		this._Object3 = t;
		return t;
	};
	_proto._Wait1_i = function () {
		var t = new egret.tween.Wait();
		t.duration = 50;
		return t;
	};
	_proto._Set2_i = function () {
		var t = new egret.tween.Set();
		t.props = this._Object4_i();
		return t;
	};
	_proto._Object4_i = function () {
		var t = {};
		this._Object4 = t;
		return t;
	};
	_proto._TweenItem2_i = function () {
		var t = new egret.tween.TweenItem();
		this._TweenItem2 = t;
		t.paths = [this._Set3_i(),this._To3_i(),this._To4_i()];
		return t;
	};
	_proto._Set3_i = function () {
		var t = new egret.tween.Set();
		t.props = this._Object5_i();
		return t;
	};
	_proto._Object5_i = function () {
		var t = {};
		this._Object5 = t;
		return t;
	};
	_proto._To3_i = function () {
		var t = new egret.tween.To();
		t.duration = 100;
		t.props = this._Object6_i();
		return t;
	};
	_proto._Object6_i = function () {
		var t = {};
		this._Object6 = t;
		return t;
	};
	_proto._To4_i = function () {
		var t = new egret.tween.To();
		t.duration = 650;
		t.props = this._Object7_i();
		return t;
	};
	_proto._Object7_i = function () {
		var t = {};
		this._Object7 = t;
		return t;
	};
	_proto._TweenItem3_i = function () {
		var t = new egret.tween.TweenItem();
		this._TweenItem3 = t;
		t.paths = [this._Set4_i(),this._To5_i(),this._To6_i(),this._Wait2_i(),this._Set5_i()];
		return t;
	};
	_proto._Set4_i = function () {
		var t = new egret.tween.Set();
		t.props = this._Object8_i();
		return t;
	};
	_proto._Object8_i = function () {
		var t = {};
		this._Object8 = t;
		return t;
	};
	_proto._To5_i = function () {
		var t = new egret.tween.To();
		t.duration = 550;
		t.props = this._Object9_i();
		return t;
	};
	_proto._Object9_i = function () {
		var t = {};
		this._Object9 = t;
		return t;
	};
	_proto._To6_i = function () {
		var t = new egret.tween.To();
		t.duration = 1450;
		t.props = this._Object10_i();
		return t;
	};
	_proto._Object10_i = function () {
		var t = {};
		this._Object10 = t;
		return t;
	};
	_proto._Wait2_i = function () {
		var t = new egret.tween.Wait();
		t.duration = 50;
		return t;
	};
	_proto._Set5_i = function () {
		var t = new egret.tween.Set();
		t.props = this._Object11_i();
		return t;
	};
	_proto._Object11_i = function () {
		var t = {};
		this._Object11 = t;
		return t;
	};
	_proto._TweenItem4_i = function () {
		var t = new egret.tween.TweenItem();
		this._TweenItem4 = t;
		t.paths = [this._Set6_i(),this._To7_i(),this._To8_i()];
		return t;
	};
	_proto._Set6_i = function () {
		var t = new egret.tween.Set();
		t.props = this._Object12_i();
		return t;
	};
	_proto._Object12_i = function () {
		var t = {};
		this._Object12 = t;
		return t;
	};
	_proto._To7_i = function () {
		var t = new egret.tween.To();
		t.duration = 100;
		t.props = this._Object13_i();
		return t;
	};
	_proto._Object13_i = function () {
		var t = {};
		this._Object13 = t;
		return t;
	};
	_proto._To8_i = function () {
		var t = new egret.tween.To();
		t.duration = 650;
		t.props = this._Object14_i();
		return t;
	};
	_proto._Object14_i = function () {
		var t = {};
		this._Object14 = t;
		return t;
	};
	_proto._TweenItem5_i = function () {
		var t = new egret.tween.TweenItem();
		this._TweenItem5 = t;
		t.paths = [this._Set7_i(),this._Wait3_i(),this._Set8_i(),this._Wait4_i(),this._Set9_i()];
		return t;
	};
	_proto._Set7_i = function () {
		var t = new egret.tween.Set();
		t.props = this._Object15_i();
		return t;
	};
	_proto._Object15_i = function () {
		var t = {};
		this._Object15 = t;
		return t;
	};
	_proto._Wait3_i = function () {
		var t = new egret.tween.Wait();
		t.duration = 2000;
		return t;
	};
	_proto._Set8_i = function () {
		var t = new egret.tween.Set();
		t.props = this._Object16_i();
		return t;
	};
	_proto._Object16_i = function () {
		var t = {};
		this._Object16 = t;
		return t;
	};
	_proto._Wait4_i = function () {
		var t = new egret.tween.Wait();
		t.duration = 50;
		return t;
	};
	_proto._Set9_i = function () {
		var t = new egret.tween.Set();
		t.props = this._Object17_i();
		return t;
	};
	_proto._Object17_i = function () {
		var t = {};
		this._Object17 = t;
		return t;
	};
	_proto._Rect1_i = function () {
		var t = new eui.Rect();
		t.bottom = 0;
		t.left = 0;
		t.right = 0;
		t.top = 0;
		return t;
	};
	_proto.gPreview_i = function () {
		var t = new eui.Group();
		this.gPreview = t;
		t.bottom = 0;
		t.left = 0;
		t.right = 0;
		t.top = 0;
		t.visible = false;
		t.elementsContent = [this.gThumb_i(),this.posLabel_i()];
		return t;
	};
	_proto.gThumb_i = function () {
		var t = new eui.Group();
		this.gThumb = t;
		t.horizontalCenter = 0;
		t.visible = false;
		t.y = 328;
		t.elementsContent = [this._Image1_i(),this.thumbLoading_i(),this.thumbMask_i(),this.thumb_i()];
		return t;
	};
	_proto._Image1_i = function () {
		var t = new eui.Image();
		t.height = 180;
		t.scale9Grid = new egret.Rectangle(12,12,76,76);
		t.source = "bofang_yulan_png";
		t.width = 320;
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto.thumbLoading_i = function () {
		var t = new eui.Image();
		this.thumbLoading = t;
		t.horizontalCenter = 0;
		t.source = "bofang_loading_png";
		t.verticalCenter = 0;
		t.visible = false;
		return t;
	};
	_proto.thumbMask_i = function () {
		var t = new eui.Rect();
		this.thumbMask = t;
		t.ellipseHeight = 20;
		t.ellipseWidth = 20;
		t.height = 180;
		t.visible = false;
		t.width = 320;
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto.thumb_i = function () {
		var t = new eui.Image();
		this.thumb = t;
		t.height = 180;
		t.visible = false;
		t.width = 320;
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto.posLabel_i = function () {
		var t = new eui.Label();
		this.posLabel = t;
		t.fontFamily = "Microsoft YaHei";
		t.horizontalCenter = 0;
		t.size = 70;
		t.text = "";
		t.textAlign = "center";
		t.y = 554;
		return t;
	};
	_proto.textContinue_i = function () {
		var t = new eui.Label();
		this.textContinue = t;
		t.fontFamily = "Microsoft YaHei";
		t.horizontalCenter = 0;
		t.size = 26;
		t.text = "将为您续播至上次观看位置";
		t.touchEnabled = false;
		t.verticalCenter = 50;
		t.visible = false;
		return t;
	};
	_proto.buttonRect_i = function () {
		var t = new eui.Rect();
		this.buttonRect = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.fillAlpha = 0;
		t.height = 1080;
		t.horizontalCenter = 0;
		t.verticalCenter = 0;
		t.visible = false;
		t.percentWidth = 100;
		return t;
	};
	_proto.layRect_i = function () {
		var t = new eui.Rect();
		this.layRect = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.bottom = 0;
		t.fillAlpha = 0;
		t.left = 0;
		t.right = 0;
		t.top = 0;
		return t;
	};
	_proto.gPanel_i = function () {
		var t = new eui.Group();
		this.gPanel = t;
		t.height = 1080;
		t.horizontalCenter = 0;
		t.touchEnabled = false;
		t.verticalCenter = 0;
		t.visible = false;
		t.width = 1920;
		t.elementsContent = [this.gNav_i(),this.gControl_i()];
		return t;
	};
	_proto.gNav_i = function () {
		var t = new eui.Group();
		this.gNav = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 184;
		t.left = 0;
		t.right = 0;
		t.top = 0;
		t.elementsContent = [this._Image2_i(),this.gFirstChoice_i(),this.btnReturn_i(),this.gCU_i()];
		return t;
	};
	_proto._Image2_i = function () {
		var t = new eui.Image();
		t.bottom = 0;
		t.left = 0;
		t.right = 0;
		t.scaleX = 1;
		t.scaleY = 1;
		t.skewX = 180;
		t.source = "bofang_zhezhao_png";
		t.top = 0;
		return t;
	};
	_proto.gFirstChoice_i = function () {
		var t = new eui.Group();
		this.gFirstChoice = t;
		t.alpha = 0;
		t.touchEnabled = false;
		t.x = 687;
		t.y = 34;
		t.elementsContent = [this._Exclamation1_i(),this._Label1_i()];
		return t;
	};
	_proto._Exclamation1_i = function () {
		var t = new Component.Exclamation();
		t.height = 58;
		t.width = 58;
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto._Label1_i = function () {
		var t = new eui.Label();
		t.fontFamily = "Microsoft YaHei";
		t.size = 22;
		t.text = "【故事线】已为你自动存档";
		t.textColor = 0xffffff;
		t.verticalCenter = 0;
		t.x = 68;
		return t;
	};
	_proto.btnReturn_i = function () {
		var t = new eui.Button();
		this.btnReturn = t;
		t.height = 36;
		t.label = "潜伏";
		t.x = 18;
		t.y = 42;
		t.skinName = VideoSkin$Skin101;
		return t;
	};
	_proto.gCU_i = function () {
		var t = new eui.Group();
		this.gCU = t;
		t.right = 18;
		t.y = 42;
		t.layout = this._HorizontalLayout1_i();
		t.elementsContent = [this._Image3_i(),this.textCU_i()];
		return t;
	};
	_proto._HorizontalLayout1_i = function () {
		var t = new eui.HorizontalLayout();
		t.gap = 6;
		t.verticalAlign = "middle";
		return t;
	};
	_proto._Image3_i = function () {
		var t = new eui.Image();
		t.source = "bofang_renshu_icon_png";
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto.textCU_i = function () {
		var t = new eui.Label();
		this.textCU = t;
		t.fontFamily = "Microsoft YaHei";
		t.size = 22;
		t.text = "";
		t.x = 68;
		t.y = 5;
		return t;
	};
	_proto.gControl_i = function () {
		var t = new eui.Group();
		this.gControl = t;
		t.bottom = 0;
		t.height = 150;
		t.left = 0;
		t.right = 0;
		t.scaleX = 1;
		t.scaleY = 1;
		t.elementsContent = [this._Image4_i(),this.gStoryTween_i(),this.btnStory_i(),this.gRecordTween_i(),this.btnRecord_i(),this.sliderVideo_i(),this.tipsPlay_i(),this.btnPlay_i(),this.tipsSkip_i(),this.btnSkip_i(),this.textCurrent_i(),this.textTime_i(),this.gRes_i(),this.btnDefn_i(),this.gRate_i(),this.btnRate_i(),this.gSound_i(),this.btnSound_i(),this.tipsSetting_i(),this.btnSetting_i()];
		return t;
	};
	_proto._Image4_i = function () {
		var t = new eui.Image();
		t.bottom = 0;
		t.left = 0;
		t.right = 0;
		t.source = "bofang_zhezhao_png";
		t.top = 0;
		return t;
	};
	_proto.gStoryTween_i = function () {
		var t = new eui.Group();
		this.gStoryTween = t;
		t.bottom = 415;
		t.height = 50;
		t.touchEnabled = false;
		t.width = 50;
		t.x = 1756;
		t.elementsContent = [this.image0_i(),this.image_i()];
		return t;
	};
	_proto.image0_i = function () {
		var t = new eui.Image();
		this.image0 = t;
		t.alpha = 0;
		t.height = 50;
		t.horizontalCenter = 0;
		t.source = "waifaguang0_png";
		t.touchEnabled = false;
		t.verticalCenter = 0;
		t.width = 50;
		return t;
	};
	_proto.image_i = function () {
		var t = new eui.Image();
		this.image = t;
		t.alpha = 0;
		t.horizontalCenter = 0;
		t.source = "bofang_gushixian_btn_00_png";
		t.touchEnabled = false;
		t.verticalCenter = 0;
		return t;
	};
	_proto.btnStory_i = function () {
		var t = new eui.Button();
		this.btnStory = t;
		t.bottom = 408;
		t.height = 65;
		t.label = "故事线";
		t.scaleX = 1;
		t.scaleY = 1;
		t.x = 1751;
		t.skinName = VideoSkin$Skin102;
		return t;
	};
	_proto.gRecordTween_i = function () {
		var t = new eui.Group();
		this.gRecordTween = t;
		t.bottom = 332;
		t.height = 50;
		t.touchEnabled = false;
		t.width = 50;
		t.x = 1756;
		t.elementsContent = [this.image2_i(),this.image1_i()];
		return t;
	};
	_proto.image2_i = function () {
		var t = new eui.Image();
		this.image2 = t;
		t.alpha = 0;
		t.height = 50;
		t.horizontalCenter = 0;
		t.source = "waifaguang0_png";
		t.touchEnabled = false;
		t.verticalCenter = 0;
		t.width = 50;
		return t;
	};
	_proto.image1_i = function () {
		var t = new eui.Image();
		this.image1 = t;
		t.alpha = 0;
		t.horizontalCenter = 0;
		t.source = "bofang_dangan_btn_00_png";
		t.touchEnabled = false;
		t.verticalCenter = 0;
		return t;
	};
	_proto.btnRecord_i = function () {
		var t = new eui.Button();
		this.btnRecord = t;
		t.bottom = 325;
		t.height = 65;
		t.label = "档案";
		t.x = 1751;
		t.skinName = VideoSkin$Skin103;
		return t;
	};
	_proto.sliderVideo_i = function () {
		var t = new Component.PlayerSlider();
		this.sliderVideo = t;
		t.bottom = 48;
		t.left = 0;
		t.right = 0;
		t.skinName = "PlayerSliderSkin";
		return t;
	};
	_proto.tipsPlay_i = function () {
		var t = new eui.Button();
		this.tipsPlay = t;
		t.bottom = 76;
		t.label = "";
		t.visible = false;
		t.width = 48;
		t.x = 12;
		t.skinName = VideoSkin$Skin104;
		return t;
	};
	_proto.btnPlay_i = function () {
		var t = new eui.Button();
		this.btnPlay = t;
		t.bottom = 13;
		t.label = "";
		t.x = 18;
		t.skinName = VideoSkin$Skin105;
		return t;
	};
	_proto.tipsSkip_i = function () {
		var t = new eui.Button();
		this.tipsSkip = t;
		t.bottom = 76;
		t.label = "跳过";
		t.visible = false;
		t.width = 48;
		t.x = 63;
		t.skinName = VideoSkin$Skin106;
		return t;
	};
	_proto.btnSkip_i = function () {
		var t = new eui.Button();
		this.btnSkip = t;
		t.bottom = 13;
		t.label = "";
		t.name = "Skip";
		t.x = 69;
		t.skinName = VideoSkin$Skin107;
		return t;
	};
	_proto.textCurrent_i = function () {
		var t = new eui.Label();
		this.textCurrent = t;
		t.bottom = 14;
		t.fontFamily = "Microsoft YaHei";
		t.height = 24;
		t.size = 18;
		t.text = "00:00:00";
		t.textColor = 0xdededf;
		t.verticalAlign = "middle";
		t.x = 129;
		return t;
	};
	_proto.textTime_i = function () {
		var t = new eui.Label();
		this.textTime = t;
		t.alpha = 0.5;
		t.bottom = 14;
		t.fontFamily = "Microsoft YaHei";
		t.height = 24;
		t.size = 18;
		t.text = "/00:00:00";
		t.textColor = 0xffffff;
		t.verticalAlign = "middle";
		t.x = 203;
		return t;
	};
	_proto.gRes_i = function () {
		var t = new eui.Group();
		this.gRes = t;
		t.bottom = 69;
		t.right = 163;
		t.visible = false;
		t.width = 155;
		t.elementsContent = [this._Image5_i(),this.gResButton_i()];
		return t;
	};
	_proto._Image5_i = function () {
		var t = new eui.Image();
		t.bottom = 0;
		t.left = 0;
		t.right = 0;
		t.scale9Grid = new egret.Rectangle(14,14,88,88);
		t.source = "bofang_beisu_di_png";
		t.top = 0;
		return t;
	};
	_proto.gResButton_i = function () {
		var t = new eui.Group();
		this.gResButton = t;
		t.bottom = 22;
		t.horizontalCenter = 0;
		t.top = 22;
		return t;
	};
	_proto.btnDefn_i = function () {
		var t = new eui.Button();
		this.btnDefn = t;
		t.bottom = 14;
		t.label = "超清";
		t.right = 206;
		t.skinName = VideoSkin$Skin108;
		return t;
	};
	_proto.gRate_i = function () {
		var t = new eui.Group();
		this.gRate = t;
		t.bottom = 69;
		t.right = 94;
		t.visible = false;
		t.width = 116;
		t.elementsContent = [this._Image6_i(),this.gRateButton_i()];
		return t;
	};
	_proto._Image6_i = function () {
		var t = new eui.Image();
		t.bottom = 0;
		t.left = 0;
		t.right = 0;
		t.scale9Grid = new egret.Rectangle(14,14,88,88);
		t.source = "bofang_beisu_di_png";
		t.top = 0;
		return t;
	};
	_proto.gRateButton_i = function () {
		var t = new eui.Group();
		this.gRateButton = t;
		t.bottom = 22;
		t.horizontalCenter = 0;
		t.top = 22;
		return t;
	};
	_proto.btnRate_i = function () {
		var t = new eui.Button();
		this.btnRate = t;
		t.bottom = 14;
		t.label = "倍速";
		t.right = 122;
		t.skinName = VideoSkin$Skin109;
		return t;
	};
	_proto.gSound_i = function () {
		var t = new eui.Group();
		this.gSound = t;
		t.bottom = 69;
		t.height = 110;
		t.right = 67;
		t.touchEnabled = false;
		t.visible = false;
		t.width = 43;
		t.elementsContent = [this._Image7_i(),this.sliderSound_i()];
		return t;
	};
	_proto._Image7_i = function () {
		var t = new eui.Image();
		t.bottom = 0;
		t.left = 0;
		t.right = 0;
		t.source = "bofang_shengyingtiaokong_di_png";
		t.top = 0;
		return t;
	};
	_proto.sliderSound_i = function () {
		var t = new Component.VideoVSlider();
		this.sliderSound = t;
		t.bottom = 10;
		t.maximum = 100;
		t.minimum = 0;
		t.skinName = "VideoVSliderSkin";
		t.top = 10;
		t.x = 0;
		return t;
	};
	_proto.btnSound_i = function () {
		var t = new eui.Button();
		this.btnSound = t;
		t.bottom = 13;
		t.height = 36;
		t.label = "";
		t.right = 70;
		t.width = 36;
		t.skinName = VideoSkin$Skin110;
		return t;
	};
	_proto.tipsSetting_i = function () {
		var t = new eui.Button();
		this.tipsSetting = t;
		t.bottom = 58;
		t.label = "设置";
		t.right = 13;
		t.visible = false;
		t.width = 48;
		t.skinName = VideoSkin$Skin111;
		return t;
	};
	_proto.btnSetting_i = function () {
		var t = new eui.Button();
		this.btnSetting = t;
		t.bottom = 13;
		t.label = "";
		t.name = "Setting";
		t.right = 19;
		t.skinName = VideoSkin$Skin112;
		return t;
	};
	_proto.iconPause_i = function () {
		var t = new eui.Button();
		this.iconPause = t;
		t.currentState = "disabled";
		t.horizontalCenter = 0;
		t.label = "";
		t.verticalCenter = 0;
		t.visible = false;
		t.skinName = VideoSkin$Skin113;
		return t;
	};
	_proto.gTips_i = function () {
		var t = new eui.Group();
		this.gTips = t;
		t.horizontalCenter = 0;
		t.top = 15;
		t.visible = false;
		t.elementsContent = [this._Image8_i(),this.textTips_i()];
		return t;
	};
	_proto._Image8_i = function () {
		var t = new eui.Image();
		t.bottom = 0;
		t.left = 0;
		t.right = 0;
		t.scale9Grid = new egret.Rectangle(30,30,65,66);
		t.source = "bofang_xiangqing_png";
		t.top = 0;
		t.visible = false;
		return t;
	};
	_proto.textTips_i = function () {
		var t = new eui.Label();
		this.textTips = t;
		t.bottom = 51;
		t.fontFamily = "Microsoft YaHei";
		t.left = 51;
		t.right = 51;
		t.size = 22;
		t.text = "";
		t.top = 51;
		return t;
	};
	_proto.gQTE_i = function () {
		var t = new eui.Group();
		this.gQTE = t;
		t.height = 720;
		t.horizontalCenter = 0;
		t.verticalCenter = 0;
		t.visible = false;
		t.width = 1280;
		return t;
	};
	_proto.gError_i = function () {
		var t = new eui.Group();
		this.gError = t;
		t.height = 1080;
		t.horizontalCenter = 0;
		t.verticalCenter = 0;
		t.visible = false;
		t.width = 1920;
		t.elementsContent = [this._Rect2_i(),this.btnReturn2_i(),this.textError_i(),this._Group1_i()];
		return t;
	};
	_proto._Rect2_i = function () {
		var t = new eui.Rect();
		t.bottom = 0;
		t.left = 0;
		t.right = 0;
		t.top = 0;
		return t;
	};
	_proto.btnReturn2_i = function () {
		var t = new eui.Button();
		this.btnReturn2 = t;
		t.height = 36;
		t.label = "潜伏";
		t.x = 18;
		t.y = 42;
		t.skinName = VideoSkin$Skin114;
		return t;
	};
	_proto.textError_i = function () {
		var t = new eui.Label();
		this.textError = t;
		t.fontFamily = "Microsoft YaHei";
		t.horizontalCenter = 0;
		t.size = 26;
		t.text = "";
		t.textAlign = "center";
		t.y = 455;
		return t;
	};
	_proto._Group1_i = function () {
		var t = new eui.Group();
		t.horizontalCenter = 0;
		t.verticalCenter = 0;
		t.layout = this._HorizontalLayout2_i();
		t.elementsContent = [this.btnRetry_i(),this.btnDefnRetry_i()];
		return t;
	};
	_proto._HorizontalLayout2_i = function () {
		var t = new eui.HorizontalLayout();
		t.gap = 30;
		return t;
	};
	_proto.btnRetry_i = function () {
		var t = new eui.Button();
		this.btnRetry = t;
		t.label = "点击重试";
		t.x = 0;
		t.y = 0;
		t.skinName = VideoSkin$Skin115;
		return t;
	};
	_proto.btnDefnRetry_i = function () {
		var t = new eui.Button();
		this.btnDefnRetry = t;
		t.label = "切换清晰度";
		t.x = 240;
		t.y = 0;
		t.skinName = VideoSkin$Skin116;
		return t;
	};
	return VideoSkin;
})(eui.Skin);