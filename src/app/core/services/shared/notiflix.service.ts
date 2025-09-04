import { Injectable } from '@angular/core';
import Notiflix from 'notiflix';


@Injectable({
  providedIn: 'root'
})
export class NotiflixService {

  private sound: HTMLAudioElement | null = null;

  constructor() { }

  private init() {}

  playAudio(filePath: string): void {
    if (this.sound) {
      this.sound.pause(); // Arrêter tout fichier en cours de lecture
      this.sound.currentTime = 0; // Réinitialiser
    }

    this.sound = new Audio(filePath);
    this.sound.play().catch((error) => {
      console.error('Erreur lors de la lecture de l\'audio :', error);
    });
  }

  private initBlock() {
    this.init();
    Notiflix.Block.init({
      querySelectorLimit: 200,
      className: 'notiflix-block',
      position: 'absolute',
      zindex: 1000,
      backgroundColor: 'rgba(255,255,255,0.9)',
      rtl: false,
      fontFamily: 'Quicksand',
      cssAnimation: true,
      cssAnimationDuration: 300,
      svgSize: '45px',
      svgColor: '#007EB8',
      messageFontSize: '14px',
      messageMaxLength: 34,
      messageColor: '#383838',
    });
  }

  private initNotify() {
    this.init();
    this.playAudio('assets/media/sounds/popup-2.wav');
    Notiflix.Notify.init({
      width: '280px',
      position: 'right-top',
      distance: '10px',
      opacity: 1,
      borderRadius: '5px',
      rtl: false,
      timeout: 5000,
      messageMaxLength: 110,
      backOverlay: false,
      backOverlayColor: 'rgba(0,0,0,0.5)',
      plainText: true,
      showOnlyTheLastOne: false,
      clickToClose: true,
      pauseOnHover: true,
      ID: 'NotiflixNotify',
      className: 'notiflix-notify',
      zindex: 4001,
      fontFamily: 'Quicksand',
      fontSize: '14px',
      cssAnimation: true,
      cssAnimationDuration: 400,
      cssAnimationStyle: 'from-top',
      closeButton: false,
      useIcon: true,
      useFontAwesome: true,
      fontAwesomeIconStyle: 'basic',
      fontAwesomeIconSize: '34px',
      success: {
        background: '#32c682',
        textColor: '#fff',
        childClassName: 'notiflix-notify-success',
        notiflixIconColor: 'rgba(0,0,0,0.2)',
        fontAwesomeClassName: 'fas fa-check-circle',
        fontAwesomeIconColor: 'rgba(0,0,0,0.2)',
        backOverlayColor: 'rgba(50,198,130,0.2)',
      },
      failure: {
        background: '#ff5549',
        textColor: '#fff',
        childClassName: 'notiflix-notify-failure',
        notiflixIconColor: 'rgba(0,0,0,0.2)',
        fontAwesomeClassName: 'fas fa-times-circle',
        fontAwesomeIconColor: 'rgba(0,0,0,0.2)',
        backOverlayColor: 'rgba(255,85,73,0.2)',
      },
      warning: {
        background: '#eebf31',
        textColor: '#fff',
        childClassName: 'notiflix-notify-warning',
        notiflixIconColor: 'rgba(0,0,0,0.2)',
        fontAwesomeClassName: 'fas fa-exclamation-circle',
        fontAwesomeIconColor: 'rgba(0,0,0,0.2)',
        backOverlayColor: 'rgba(238,191,49,0.2)',
      },
      info: {
        background: '#26c0d3',
        textColor: '#fff',
        childClassName: 'notiflix-notify-info',
        notiflixIconColor: 'rgba(0,0,0,0.2)',
        fontAwesomeClassName: 'fas fa-info-circle',
        fontAwesomeIconColor: 'rgba(0,0,0,0.2)',
        backOverlayColor: 'rgba(38,192,211,0.2)',
      },
    });
  }

  private initConfirm() {
    this.init();
    Notiflix.Confirm.init({
      className: 'notiflix-confirm',
      width: '300px',
      zindex: 4003,
      position: 'center',
      distance: '10px',
      backgroundColor: '#f8f8f8',
      borderRadius: '4px',
      backOverlay: true,
      backOverlayColor: 'rgba(0,0,0,0.5)',
      rtl: false,
      fontFamily: 'Poppins, Quicksand',
      cssAnimation: true,
      cssAnimationDuration: 300,
      cssAnimationStyle: 'fade',
      plainText: true,
      titleColor: '#F1416C',
      titleFontSize: '16px',
      titleMaxLength: 34,
      messageColor: '#1e1e1e',
      messageFontSize: '14px',
      messageMaxLength: 110,
      buttonsFontSize: '15px',
      buttonsMaxLength: 34,
      okButtonColor: '#f8f8f8',
      okButtonBackground: '#F1416C',
      cancelButtonColor: '#f8f8f8',
      cancelButtonBackground: '#a9a9a9',
    });
  }

  private initLoading() {
    this.init();
    Notiflix.Loading.init({
      className: 'notiflix-loading',
      zindex: 4000,
      backgroundColor: 'rgba(0,0,0,0.8)',
      rtl: false,
      fontFamily: 'Quicksand',
      cssAnimation: true,
      cssAnimationDuration: 400,
      clickToClose: false,
      customSvgUrl: null,
      customSvgCode: null,
      svgSize: '80px',
      svgColor: '#32c682',
      messageID: 'NotiflixLoadingMessage',
      messageFontSize: '15px',
      messageMaxLength: 34,
      messageColor: '#dcdcdc',
    });
  }

  private initReport() {
    this.init();
    this.playAudio('assets/media/sounds/popup.wav');
    Notiflix.Report.init({
      className: 'notiflix-report',
      width: '320px',
      backgroundColor: '#f8f8f8',
      borderRadius: '6px',
      rtl: false,
      zindex: 4002,
      backOverlay: true,
      backOverlayColor: 'rgba(0,0,0,0.5)',
      backOverlayClickToClose: true,
      fontFamily: 'Quicksand',
      svgSize: '40px',
      plainText: true,
      titleFontSize: '16px',
      titleMaxLength: 34,
      messageFontSize: '13px',
      messageMaxLength: 400,
      buttonFontSize: '14px',
      buttonMaxLength: 34,
      cssAnimation: true,
      cssAnimationDuration: 360,
      cssAnimationStyle: 'zoom',
      success: {
        svgColor: '#32c682',
        titleColor: '#1e1e1e',
        messageColor: '#242424',
        buttonBackground: '#32c682',
        buttonColor: '#fff',
        backOverlayColor: 'rgba(50,198,130,0.2)',
      },
      failure: {
        svgColor: '#ff5549',
        titleColor: '#1e1e1e',
        messageColor: '#242424',
        buttonBackground: '#ff5549',
        buttonColor: '#fff',
        backOverlayColor: 'rgba(255,85,73,0.2)',
      },
      warning: {
        svgColor: '#eebf31',
        titleColor: '#1e1e1e',
        messageColor: '#242424',
        buttonBackground: '#eebf31',
        buttonColor: '#fff',
        backOverlayColor: 'rgba(238,191,49,0.2)',
      },
      info: {
        svgColor: '#26c0d3',
        titleColor: '#1e1e1e',
        messageColor: '#242424',
        buttonBackground: '#26c0d3',
        buttonColor: '#fff',
        backOverlayColor: 'rgba(38,192,211,0.2)',
      },
    });
  }

  loadingBlock(identifier: string) {
    this.initBlock();
    Notiflix.Block.circle(identifier);
  }

  removeLoadingBlock(identifier: string) {
    Notiflix.Block.remove(identifier);
  }

  loadingPage() {
    this.initLoading();
    Notiflix.Loading.circle();
  }

  confirm(
    title: string,
    message: string,
    okButtonLabel: string,
    cancelButtonLabel: string,
    confirmCallback: () => void,
    cancelCallback: () => void
  ) {
    this.playAudio('assets/media/sounds/popup.wav');
    this.initConfirm();

    Notiflix.Confirm.show(
      title,
      message,
      okButtonLabel,
      cancelButtonLabel,
      confirmCallback,
      cancelCallback
    );
  }


  successReport(title: string, message: string, buttonLabel: string = 'Fermer') {
    this.initReport();
    Notiflix.Report.success(title, message, buttonLabel)
  }

  errorReport(title: string, message: string, buttonLabel: string = 'Fermer') {
    this.initReport();
    Notiflix.Report.failure(title, message, buttonLabel)
  }

  infoReport(title: string, message: string, buttonLabel: string = 'Fermer') {
    this.initReport();
    Notiflix.Report.info(title, message, buttonLabel)
  }

  warningReport(title: string, message: string, buttonLabel: string = 'Fermer') {
    this.initReport();
    Notiflix.Report.warning(title, message, buttonLabel)
  }

  success(message: string) {
    this.initNotify()
    Notiflix.Notify.success(message)
  }

  error(message: string) {
    this.initNotify()
    Notiflix.Notify.failure(message)
  }

  warning(message: string) {
    this.initNotify()
    Notiflix.Notify.warning(message)
  }

  info(message: string) {
    this.initNotify()
    Notiflix.Notify.info(message)
  }

  loading(message: string = 'Chargement...') {
    this.initLoading();
    Notiflix.Loading.standard(message);
  }

  removeLoading() {
    Notiflix.Loading.remove();
  }


  failure(message: string): void {
    Notiflix.Notify.failure(message);
  }
}
