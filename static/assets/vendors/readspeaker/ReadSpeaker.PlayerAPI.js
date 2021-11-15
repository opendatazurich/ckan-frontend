ReadSpeaker.PlayerAPI = function () {
    var a = {audioFormat: "flv", minver: 8, check: function () {
        return rspkr.c.data.browser.flashVersion.split(",").shift() >= this.minver ? !0 : !1
    }}, b = {prioritize: !1, audioFormat: null, check: function () {
        return rspkr.c.data.browser.html5Support ? (this.audioFormat = rspkr.c.data.browser.html5AudioFormat, this.prioritize = rspkr.c.data.browser.html5Priority, !0) : !1
    }}, c = "", e = function (a, b) {
        for (var c in b)a[c] = b[c]
    }, d = {meta: {revision: "3253"}, init: function () {
        rspkr.log("[rspkr.pl] Initialized!");
        rspkr.Common.addEvent("onModsLoaded",
            function () {
                rspkr.Common.Detect.init();
                rspkr.PlayerAPI.setAdapter()
            })
    }, setAdapter: function () {
        c = b.check() && a.check() ? b.prioritize ? "html5" : "flash" : b.check() ? "html5" : a.check() ? "flash" : "fallback";
        "html5" == c ? (rspkr.log("[rspkr.pl] Using adapter " + c, 1), e(d, rspkr.pl.html5.adapter)) : "flash" == c ? (rspkr.log("[rspkr.pl] Using adapter " + c, 1), e(d, rspkr.pl.flash.adapter)) : (rspkr.log("[rspkr.pl] No adapter detected - using fallback!", 3), e(d, rspkr.pl.fallback.adapter))
    }, getProduct: function () {
        return ReadSpeaker.HL ?
            ReadSpeaker.HL : ReadSpeaker.XP ? ReadSpeaker.XP : !1
    }};
    return d
}();
ReadSpeaker.PlayerAPI.flash = function () {
    return{init: function () {
        ReadSpeaker.log("PlayerAPI.flash heartbeat!")
    }, adapter: {adapter: "flash", playerRef: null, timerCallBack: null, timerContext: null, loadTimer: null, progressStarted: !1, networkCheckCounter: 0, play: function () {
        if (this.playerRef)try {
            this.playerRef.rs_player_play(), rspkr.devt("onAPIPlay", window)
        } catch (a) {
            ReadSpeaker.log("error: " + a)
        } else this.initAdapter()
    }, pause: function () {
        if (rspkr.pl.playerRef)try {
            this.playerRef.rs_player_pause(), rspkr.devt("onAPIPause",
                window)
        } catch (a) {
            rspkr.log("error: " + a, 3)
        }
    }, stop: function () {
        if (rspkr.pl.playerRef)try {
            this.playerRef.rs_player_stop(), rspkr.devt("onAPIStop", window)
        } catch (a) {
            rspkr.log("error: " + a, 3)
        }
    }, volUp: function () {
        rspkr.pl.playerRef && (this.playerRef.rs_player_volup(), rspkr.devt("onAPIVolumeUp", window))
    }, volDown: function () {
        rspkr.pl.playerRef && (this.playerRef.rs_player_voldown(), rspkr.devt("onAPIVolumeDown", window))
    }, mute: function () {
        rspkr.pl.playerRef && (this.playerRef.rs_player_mute(), rspkr.devt("onAPIMute", window))
    },
        forward: function () {
            rspkr.pl.playerRef && (this.playerRef.rs_player_jumpff(), rspkr.devt("onAPIFastForward", window))
        }, rewind: function () {
            rspkr.pl.playerRef && (this.playerRef.rs_player_jumpbb(), rspkr.devt("onAPIRewind", window))
        }, setVolume: function (a) {
            rspkr.log("[setVolume]", 4);
            rspkr.pl.playerRef && (this.playerRef.setVolume ? (this.playerRef.setVolume(a), rspkr.devt("onAPISetVolume", window)) : window.setTimeout(function () {
                rspkr.pl.setVolume(a)
            }, 10))
        }, setProgress: function (a) {
            if (rspkr.pl.playerRef)try {
                this.playerRef.setProgress(a),
                    rspkr.devt("onAPISetProgress", window)
            } catch (b) {
            }
        }, getProgress: function (a, b, c) {
            rspkr.pl.playerRef && (this.timerCallBack = b, this.timerContext = c || b, rspkr.pl.playerRef && "function" == typeof rspkr.pl.playerRef.getProgress ? (clearTimeout(this.loadTimer), rspkr.pl.playerRef.getProgress(a, "rspkr.pl.timer", 500), this.progressStarted = !0) : this.progressStarted || (this.loadTimer = window.setTimeout(function () {
                rspkr.pl.getProgress(a, b, c)
            }, 500)), rspkr.devt("onAPIGetProgress", window))
        }, timer: function (a) {
            a = a.split("|");
            if ("function" == typeof this.timerCallBack)try {
                this.timerCallBack.apply(this.timerContext, [a])
            } catch (b) {
            }
        }, checkNetworkStatus: function () {
            3 < rspkr.pl.networkCheckCounter || setTimeout(function () {
                if (rspkr.pl.playerRef) {
                    rspkr.pl.networkCheckCounter++;
                    try {
                        rspkr.log("[rspkr.pl.checkNetworkStatus] " + rspkr.pl.playerRef.rs_player_networkStatus(), 1)
                    } catch (a) {
                        rs.pl.checkNetworkStatus();
                        return
                    }
                    3 === rspkr.pl.playerRef.rs_player_networkStatus() ? (rspkr.log("[rspkr.pl] Cannot load audio!", 3), rspkr.ui.showOverlay("loaderror"), rspkr.devt("onAudioLoadError",
                        window)) : 0 === rs.PlayerAPI.playerRef.rs_player_networkStatus() && rs.pl.checkNetworkStatus()
                }
            }, rspkr.cfg.item("general.audioTimeout") || 750)
        }, initAdapter: function () {
            var a = encodeURIComponent(rspkr.c.data.getAudioLink({audioformat: "flv"}));
            this.progressStarted = !1;
            this.releaseAdapter();
            var b = document.getElementById("rs_player_holder");
            b || (b = document.createElement("div"), $rs.setAttr(b, "id", "rs_player_holder"), document.body.appendChild(b));
            a = ['<object id="readspeaker_flash_player" ' + (document.selection ? 'classid="clsid:D27CDB6E-AE6D-11cf-96B8-444553540000"' :
                'type="application/x-shockwave-flash" data="' + ReadSpeaker.pub.Config.item("flash.flashSrc") + "?flv=" + a + '&autoplay=1" ') + 'style="height: 1px; width: 1px;">', '<param name="movie" value="' + rspkr.cfg.item("flash.flashSrc") + "?flv=" + a + '&autoplay=1" />', '<param name="quality" value="high" />', '<param name="autostart" value="true" />', '<param name="allowScriptAccess" value="' + rspkr.cfg.item("flash.allowScriptAccess") + '" />', '<param name="loop" value="false" /></object>'];
            b.innerHTML = a.join("\n");
            $rs.setAttr(b,
                "style", "position: fixed; bottom: 0px; right: 0px;");
            var c = function (a) {
                4 === a && (rspkr.pl.playerRef && rspkr.pl.playerRef.setVolume) && (rspkr.pl.playerRef.setVolume(rspkr.st.get("hlvol") || "100"), document.attachEvent ? $rs.get("#readspeaker_flash_player").detachEvent("onreadystatechange", c) : document.addEventListener && $rs.get("#readspeaker_flash_player").removeEventListener("load", function () {
                    c(4)
                }, !1))
            };
            document.attachEvent ? ($rs.get("#readspeaker_flash_player").attachEvent("onreadystatechange", c), rspkr.devt("onVolumeAdjusted",
                window)) : document.addEventListener && $rs.get("#readspeaker_flash_player").addEventListener("load", function () {
                c(4)
            }, !1);
            rspkr.pl.playerRef = document.getElementById("readspeaker_flash_player");
            rspkr.devt("onAPIInitAdapter", window);
            rspkr.pl.checkNetworkStatus()
        }, releaseAdapter: function () {
            if (rspkr.pl.playerRef) {
                try {
                    rspkr.pl.playerRef.rs_player_stop(), rspkr.devt("onAPIStop", window)
                } catch (a) {
                    ReadSpeaker.log("error: " + a)
                }
                var b = $rs.get("#rs_player_holder");
                b.removeChild(rspkr.pl.playerRef);
                document.body.removeChild(b);
                rspkr.pl.playerRef = null;
                rspkr.devt("onAPIReleaseAdapter", window)
            }
        }, reloadAdapter: function () {
            this.initAdapter();
            rspkr.devt("onAPIReloadAdapter", window)
        }}}
}();
ReadSpeaker.PlayerAPI.html5 = function () {
    return{init: function () {
        ReadSpeaker.log("PlayerAPI.html5 heartbeat!")
    }, adapter: {adapter: "html5", playerRef: null, timerCallBack: null, timerContext: null, bufferedTime: null, play: function () {
        ReadSpeaker.log("[rspkr.pl.play]");
        rspkr.HL.chunking && rspkr.HL.chunking.close();
        rspkr.HL.chunking && rspkr.HL.chunking.chunkEnded ? (rspkr.HL.chunking.chunkEnded = !1, rspkr.c.dispatchEvent("onChunkResume", window)) : this.playerRef ? (this.playerRef.play(), rspkr.devt("onAPIPlay", window)) : this.initAdapter()
    },
        pause: function () {
            this.playerRef && (rspkr.pl.playerRef.pause(), rspkr.devt("onAPIPause", window))
        }, stop: function () {
            rspkr.pl.playerRef && (rspkr.pl.playerRef.pause(), rspkr.pl.playerRef.currentTime = 0, rspkr.devt("onAPIStop", window))
        }, volUp: function () {
            this.playerRef && (this.playerRef.volume = Math.min(1, this.playerRef.volume + 0.2), rspkr.st.set("hlvol", 100 * this.playerRef.volume), rspkr.devt("onAPIVolumeUp", window))
        }, volDown: function () {
            this.playerRef && (this.playerRef.volume = Math.max(0, this.playerRef.volume - 0.2), rspkr.st.set("hlvol",
                100 * this.playerRef.volume), rspkr.devt("onAPIVolumeDown", window))
        }, mute: function () {
            this.playerRef && (this.playerRef.volume = 0, rspkr.devt("onAPIMute", window))
        }, forward: function () {
            this.playerRef && (this.playerRef.currentTime = this.playerRef.currentTime + 5 < this.playerRef.duration ? this.playerRef.currentTime + 5 : this.playerRef.duration, rspkr.devt("onAPIFastForward", window))
        }, rewind: function () {
            this.playerRef && (this.playerRef.currentTime = 0 < this.playerRef.currentTime - 5 ? this.playerRef.currentTime - 5 : 0, rspkr.devt("onAPIRewind",
                window))
        }, setVolume: function (a) {
            rspkr.log("[setVolume] " + a, 4);
            this.playerRef && (this.playerRef.volume = parseFloat(a / 100), rspkr.devt("onAPISetVolume", window))
        }, setProgress: function (a) {
            if (this.playerRef) {
                var a = parseInt(a), b = parseInt(ReadSpeaker.PlayerAPI.getProduct().html5.handlers.totalTime());
                this.playerRef.currentTime = a < b && a < this.playerRef.duration ? a : this.playerRef.duration;
                rspkr.devt("onAPISetProgress", window)
            }
        }, getProgress: function (a, b, c) {
            this.playerRef && (!1 == a ? rspkr.pl.playerRef.removeEventListener("timeupdate",
                rspkr.pl.timer, !1) : (this.timerCallBack = b, this.timerContext = c || b, rspkr.pl.playerRef.addEventListener("timeupdate", rspkr.pl.timer, !1), rspkr.devt("onAPIGetProgress", window)))
        }, timer: function () {
            if (rspkr.pl.playerRef) {
                var a = 1E3 * parseInt(rspkr.pl.playerRef.currentTime);
                rspkr.pl.bufferedTime = 1E3 * parseInt(ReadSpeaker.PlayerAPI.getProduct().html5.handlers.totalTime());
                a = [a, rspkr.pl.bufferedTime];
                if ("function" == typeof rspkr.pl.timerCallBack)try {
                    rspkr.pl.timerCallBack.apply(rspkr.pl.timerContext, [a])
                } catch (b) {
                    rspkr.log("timeupdate error",
                        2)
                }
            }
        }, checkNetworkStatus: function () {
            var a = rs.pl.playerRef;
            setTimeout(function () {
                if (a)if (3 === a.networkState)rspkr.log("[rspkr.pl] Cannot load audio!", 3), rspkr.ui.showOverlay("loaderror"), rspkr.devt("onAudioLoadError", window); else if (2 === a.networkState) {
                    var b = 0 < a.buffered.length ? a.buffered.end(a.buffered.length - 1) : 0, c = a.duration || 0;
                    (0 == c || b < c) && rspkr.pl.checkNetworkStatus()
                }
            }, rspkr.cfg.item("general.audioTimeout") || 750)
        }, initAdapter: function () {
            rspkr.devt("onAPIInitAdapter", window)
        }, releaseAdapter: function () {
            if (rspkr.pl.playerRef) {
                rspkr.pl.playerRef.pause();
                try {
                    rspkr.pl.playerRef.currentTime = 0
                } catch (a) {
                }
                rspkr.pl.playerRef = null;
                rspkr.devt("onAPIReleaseAdapter", window)
            }
        }, reloadAdapter: function () {
            this.releaseAdapter();
            this.initAdapter();
            rspkr.devt("onAPIReloadAdapter", window)
        }}}
}();
rspkr.PlayerAPI.fallback = function () {
    return{init: function () {
        ReadSpeaker.log("PlayerAPI.fallback heartbeat!")
    }, adapter: {adapter: "fallback"}}
}();
