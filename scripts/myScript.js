function changerButton() {
                                document.getElementById("test").innerHTML="My first JavaScript function."
                        }
                        (function() {
                        var cx = '015815927529908742737:--sckcgh1km';
                        var gcse = document.createElement('script');
                        gcse.type = 'text/javascript';
                        gcse.async = true;
                        gcse.src = (document.location.protocol == 'https:' ? 'https:' : 'http:') +
                                '//www.google.com/cse/cse.js?cx=' + cx;
                        var s = document.getElementsByTagName('script')[0];
                        s.parentNode.insertBefore(gcse, s);
                        })();
}
