import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

export type Language = 'fr' | 'en';

@Injectable({
  providedIn: 'root',
})
export class TranslationService {
  private currentLang = new BehaviorSubject<Language>('fr');
  currentLang$ = this.currentLang.asObservable();

  private translations = {
    fr: {
      common: {
        yes: 'Oui',
        no: 'Non',
        close: 'Fermer',
        save: 'Enregistrer',
        cancel: 'Annuler',
        delete: 'Supprimer',
        edit: 'Modifier',
        search: 'Rechercher',
        loading: 'Chargement...',
        noData: 'Aucune donnée disponible',
        error: 'Erreur',
        success: 'Succès',
        confirmation: 'Confirmation',
        required: 'Obligatoire',
        optional: 'Optionnel',
        back: 'Retour',
        next: 'Suivant',
        actions: 'Actions',
        status: 'Statut',
        date: 'Date',
        time: 'Heure',
        description: 'Description',
        details: 'Détails',
        myAccount: 'Mon compte',
        logout: 'Se déconnecter',
        modification: 'Modification',
        cancellation: 'Annulation',
        preferences: 'Préférences',
      },
      auth: {
        login: 'Connexion',
        register: 'Inscription',
        forgotPassword: 'Mot de passe oublié',
        email: 'Email',
        password: 'Mot de passe',
        rememberMe: 'Se souvenir de moi',
        loginButton: 'Se connecter',
        registerButton: "S'inscrire",
        resetPassword: 'Réinitialiser le mot de passe',
      },
      appointment: {
        details: 'Détails du rendez-vous',
        patient: 'Patient',
        establishment: 'Établissement',
        dateTime: 'Date et heure',
        status: 'Statut',
        cancel: 'Annuler le rendez-vous',
        reschedule: 'Reprogrammer',
        book: 'Prendre rendez-vous',
        cancelConfirm: 'Êtes-vous sûr de vouloir annuler ce rendez-vous ?',
        cancelSuccess: 'Rendez-vous annulé avec succès',
        bookSuccess: 'Rendez-vous pris avec succès',
        updateSuccess: 'Rendez-vous mis à jour avec succès',
        notes: 'Notes',
        reason: 'Motif de consultation',
        duration: 'Durée',
        statuses: {
          scheduled: 'Programmé',
          confirmed: 'Confirmé',
          cancelled: 'Annulé',
          completed: 'Terminé',
          no_show: 'Non présenté',
        },
      },
      timeSlot: {
        details: 'Détails du créneau',
        establishment: 'Établissement',
        dateTime: 'Date et heure',
        availability: 'Disponibilité',
        available: 'Disponible',
        unavailable: 'Non disponible',
        makeUnavailable: 'Rendre indisponible',
        makeAvailable: 'Rendre disponible',
        updateConfirm: 'Êtes-vous sûr de vouloir {action} ce créneau ?',
        updateSuccess: 'Créneau modifié avec succès',
        create: 'Créer un créneau',
        edit: 'Modifier le créneau',
        delete: 'Supprimer le créneau',
        deleteConfirm: 'Êtes-vous sûr de vouloir supprimer ce créneau ?',
        deleteSuccess: 'Créneau supprimé avec succès',
        repeat: 'Répéter',
        repeatOptions: {
          none: 'Aucune répétition',
          daily: 'Quotidien',
          weekly: 'Hebdomadaire',
          monthly: 'Mensuel',
        },
      },
      user: {
        profile: 'Profil',
        firstName: 'Prénom',
        lastName: 'Nom',
        email: 'Email',
        phone: 'Téléphone',
        address: 'Adresse',
        role: 'Rôle',
        speciality: 'Spécialité',
        updateProfile: 'Mettre à jour le profil',
        updateSuccess: 'Profil mis à jour avec succès',
        changePassword: 'Changer le mot de passe',
        currentPassword: 'Mot de passe actuel',
        newPassword: 'Nouveau mot de passe',
        confirmPassword: 'Confirmer le mot de passe',
        passwordSuccess: 'Mot de passe modifié avec succès',
      },
      establishment: {
        name: 'Nom',
        address: 'Adresse',
        phone: 'Téléphone',
        email: 'Email',
        description: 'Description',
        openingHours: "Horaires d'ouverture",
        create: 'Créer un établissement',
        edit: "Modifier l'établissement",
        delete: "Supprimer l'établissement",
        deleteConfirm: 'Êtes-vous sûr de vouloir supprimer cet établissement ?',
        deleteSuccess: 'Établissement supprimé avec succès',
        updateSuccess: 'Établissement mis à jour avec succès',
        createSuccess: 'Établissement créé avec succès',
      },
      navigation: {
        dashboard: 'Tableau de bord',
        appointments: 'Rendez-vous',
        timeSlots: 'Créneaux',
        patients: 'Patients',
        establishments: 'Établissements',
        settings: 'Paramètres',
        reports: 'Rapports',
      },
      validation: {
        required: 'Ce champ est obligatoire',
        email: 'Email invalide',
        phone: 'Numéro de téléphone invalide',
        minLength: 'Minimum {min} caractères',
        maxLength: 'Maximum {max} caractères',
        passwordMatch: 'Les mots de passe ne correspondent pas',
      },
      preferences: {
        title: 'Préférences',
        appointments: {
          title: 'Paramètres des rendez-vous',
          autoConfirmation: 'Confirmation automatique des rendez-vous',
          autoConfirmationHelp:
            "Lorsque cette option est activée, les nouveaux rendez-vous seront automatiquement confirmés sans nécessiter d'approbation manuelle",
        },
        updateSuccess: 'Préférences mises à jour avec succès',
        subtitle: 'Paramètres de votre compte',
      },
    },
    en: {
      common: {
        yes: 'Yes',
        no: 'No',
        close: 'Close',
        save: 'Save',
        cancel: 'Cancel',
        delete: 'Delete',
        edit: 'Edit',
        search: 'Search',
        loading: 'Loading...',
        noData: 'No data available',
        error: 'Error',
        success: 'Success',
        confirmation: 'Confirmation',
        required: 'Required',
        optional: 'Optional',
        back: 'Back',
        next: 'Next',
        actions: 'Actions',
        status: 'Status',
        date: 'Date',
        time: 'Time',
        description: 'Description',
        details: 'Details',
        myAccount: 'My Account',
        logout: 'Logout',
        modification: 'Modification',
        cancellation: 'Cancellation',
        preferences: 'Preferences',
      },
      auth: {
        login: 'Login',
        register: 'Register',
        forgotPassword: 'Forgot Password',
        email: 'Email',
        password: 'Password',
        rememberMe: 'Remember me',
        loginButton: 'Login',
        registerButton: 'Register',
        resetPassword: 'Reset Password',
      },
      appointment: {
        details: 'Appointment Details',
        patient: 'Patient',
        establishment: 'Establishment',
        dateTime: 'Date and Time',
        status: 'Status',
        cancel: 'Cancel Appointment',
        reschedule: 'Reschedule',
        book: 'Book Appointment',
        cancelConfirm: 'Are you sure you want to cancel this appointment?',
        cancelSuccess: 'Appointment cancelled successfully',
        bookSuccess: 'Appointment booked successfully',
        updateSuccess: 'Appointment updated successfully',
        notes: 'Notes',
        reason: 'Consultation Reason',
        duration: 'Duration',
        statuses: {
          scheduled: 'Scheduled',
          confirmed: 'Confirmed',
          cancelled: 'Cancelled',
          completed: 'Completed',
          no_show: 'No Show',
        },
      },
      timeSlot: {
        details: 'Time Slot Details',
        establishment: 'Establishment',
        dateTime: 'Date and Time',
        availability: 'Availability',
        available: 'Available',
        unavailable: 'Unavailable',
        makeUnavailable: 'Make Unavailable',
        makeAvailable: 'Make Available',
        updateConfirm: 'Are you sure you want to {action} this time slot?',
        updateSuccess: 'Time slot updated successfully',
        create: 'Create Time Slot',
        edit: 'Edit Time Slot',
        delete: 'Delete Time Slot',
        deleteConfirm: 'Are you sure you want to delete this time slot?',
        deleteSuccess: 'Time slot deleted successfully',
        repeat: 'Repeat',
        repeatOptions: {
          none: 'No Repeat',
          daily: 'Daily',
          weekly: 'Weekly',
          monthly: 'Monthly',
        },
      },
      user: {
        profile: 'Profile',
        firstName: 'First Name',
        lastName: 'Last Name',
        email: 'Email',
        phone: 'Phone',
        address: 'Address',
        role: 'Role',
        speciality: 'Speciality',
        updateProfile: 'Update Profile',
        updateSuccess: 'Profile updated successfully',
        changePassword: 'Change Password',
        currentPassword: 'Current Password',
        newPassword: 'New Password',
        confirmPassword: 'Confirm Password',
        passwordSuccess: 'Password changed successfully',
      },
      establishment: {
        name: 'Name',
        address: 'Address',
        phone: 'Phone',
        email: 'Email',
        description: 'Description',
        openingHours: 'Opening Hours',
        create: 'Create Establishment',
        edit: 'Edit Establishment',
        delete: 'Delete Establishment',
        deleteConfirm: 'Are you sure you want to delete this establishment?',
        deleteSuccess: 'Establishment deleted successfully',
        updateSuccess: 'Establishment updated successfully',
        createSuccess: 'Establishment created successfully',
      },
      navigation: {
        dashboard: 'Dashboard',
        appointments: 'Appointments',
        timeSlots: 'Time Slots',
        patients: 'Patients',
        establishments: 'Establishments',
        settings: 'Settings',
        reports: 'Reports',
      },
      validation: {
        required: 'This field is required',
        email: 'Invalid email',
        phone: 'Invalid phone number',
        minLength: 'Minimum {min} characters',
        maxLength: 'Maximum {max} characters',
        passwordMatch: 'Passwords do not match',
      },
      preferences: {
        title: 'Preferences',
        appointments: {
          title: 'Appointment Settings',
          autoConfirmation: 'Auto-confirm appointments',
          autoConfirmationHelp:
            'When enabled, new appointments will be automatically confirmed without requiring manual approval',
        },
        updateSuccess: 'Preferences updated successfully',
        subtitle: 'Your account settings',
      },
    },
  };

  constructor() {}

  setLanguage(lang: Language) {
    this.currentLang.next(lang);
  }

  getCurrentLang(): Language {
    return this.currentLang.value;
  }

  translate(key: string): string {
    const keys = key.split('.');
    let result: any = this.translations[this.currentLang.value];

    for (const k of keys) {
      if (result && result[k]) {
        result = result[k];
      } else {
        return key; // Return the key if translation not found
      }
    }

    return result;
  }

  translateWithParams(key: string, params: { [key: string]: string | number }): string {
    let translation = this.translate(key);

    Object.keys(params).forEach((param) => {
      translation = translation.replace(`{${param}}`, params[param].toString());
    });

    return translation;
  }
}
