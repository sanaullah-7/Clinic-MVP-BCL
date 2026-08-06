import { lazy, Suspense } from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import { Spinner } from '@/components';
import { COMING_SOON_PATHS } from '@/constants/coming-soon-pages';
import { ROUTES } from '@/constants/routes';
import { MarketingLayout } from '@/app/layouts/MarketingLayout';
import { DashboardLayout } from '@/app/layouts/DashboardLayout';
import { AuthLayout } from '@/app/layouts/AuthLayout';
import { PortalLayout } from '@/app/layouts/PortalLayout';

const LandingPage = lazy(() =>
  import('@/modules/landing/pages/LandingPage').then((m) => ({ default: m.LandingPage })),
);
const FeaturesPage = lazy(() =>
  import('@/modules/landing/pages/FeaturesPage').then((m) => ({ default: m.FeaturesPage })),
);
const PricingPage = lazy(() =>
  import('@/modules/landing/pages/PricingPage').then((m) => ({ default: m.PricingPage })),
);
const SecurityPage = lazy(() =>
  import('@/modules/landing/pages/SecurityPage').then((m) => ({ default: m.SecurityPage })),
);
const AboutPage = lazy(() =>
  import('@/modules/landing/pages/AboutPage').then((m) => ({ default: m.AboutPage })),
);
const ComingSoonPage = lazy(() =>
  import('@/modules/landing/pages/ComingSoonPage').then((m) => ({ default: m.ComingSoonPage })),
);
const SchedulingPage = lazy(() =>
  import('@/modules/landing/pages/SchedulingPage').then((m) => ({ default: m.SchedulingPage })),
);
const BillingModulePage = lazy(() =>
  import('@/modules/landing/pages/BillingModulePage').then((m) => ({ default: m.BillingModulePage })),
);
const ChartingModulePage = lazy(() =>
  import('@/modules/landing/pages/ChartingModulePage').then((m) => ({ default: m.ChartingModulePage })),
);
const OnlineBookingPage = lazy(() =>
  import('@/modules/landing/pages/OnlineBookingPage').then((m) => ({ default: m.OnlineBookingPage })),
);
const CommunicationsModulePage = lazy(() =>
  import('@/modules/landing/pages/CommunicationsModulePage').then((m) => ({
    default: m.CommunicationsModulePage,
  })),
);
const ReportingPage = lazy(() =>
  import('@/modules/landing/pages/ReportingPage').then((m) => ({ default: m.ReportingPage })),
);
const TelehealthPage = lazy(() =>
  import('@/modules/landing/pages/TelehealthPage').then((m) => ({ default: m.TelehealthPage })),
);
const IntegrationsPage = lazy(() =>
  import('@/modules/landing/pages/IntegrationsPage').then((m) => ({ default: m.IntegrationsPage })),
);
const DevelopersPage = lazy(() =>
  import('@/modules/landing/pages/DevelopersPage').then((m) => ({ default: m.DevelopersPage })),
);
const PhysicalTherapyPage = lazy(() =>
  import('@/modules/landing/pages/PhysicalTherapyPage').then((m) => ({
    default: m.PhysicalTherapyPage,
  })),
);
const ChiropracticPage = lazy(() =>
  import('@/modules/landing/pages/ChiropracticPage').then((m) => ({
    default: m.ChiropracticPage,
  })),
);
const MassageTherapyPage = lazy(() =>
  import('@/modules/landing/pages/MassageTherapyPage').then((m) => ({
    default: m.MassageTherapyPage,
  })),
);
const MentalHealthPage = lazy(() =>
  import('@/modules/landing/pages/MentalHealthPage').then((m) => ({
    default: m.MentalHealthPage,
  })),
);
const ClinicOwnerPage = lazy(() =>
  import('@/modules/landing/pages/ClinicOwnerPage').then((m) => ({
    default: m.ClinicOwnerPage,
  })),
);
const AdministratorPage = lazy(() =>
  import('@/modules/landing/pages/AdministratorPage').then((m) => ({
    default: m.AdministratorPage,
  })),
);
const PractitionerPage = lazy(() =>
  import('@/modules/landing/pages/PractitionerPage').then((m) => ({
    default: m.PractitionerPage,
  })),
);
const ContactPage = lazy(() =>
  import('@/modules/landing/pages/ContactPage').then((m) => ({
    default: m.ContactPage,
  })),
);
const DisciplinesPage = lazy(() =>
  import('@/modules/landing/pages/DisciplinesPage').then((m) => ({
    default: m.DisciplinesPage,
  })),
);
const LoginPage = lazy(() =>
  import('@/modules/auth/pages/LoginPage').then((m) => ({ default: m.LoginPage })),
);
const RegisterPage = lazy(() =>
  import('@/modules/auth/pages/RegisterPage').then((m) => ({ default: m.RegisterPage })),
);
const ForgotPasswordPage = lazy(() =>
  import('@/modules/auth/pages/ForgotPasswordPage').then((m) => ({ default: m.ForgotPasswordPage })),
);
const DashboardHomePage = lazy(() =>
  import('@/modules/dashboard/pages/DashboardHomePage').then((m) => ({ default: m.DashboardHomePage })),
);
const DesignSystemPage = lazy(() =>
  import('@/modules/dashboard/pages/DesignSystemPage').then((m) => ({ default: m.DesignSystemPage })),
);
const AppointmentsPage = lazy(() =>
  import('@/modules/appointments/pages/AppointmentsPage').then((m) => ({ default: m.AppointmentsPage })),
);
const PatientsPage = lazy(() =>
  import('@/modules/patients/pages/PatientsPage').then((m) => ({ default: m.PatientsPage })),
);
const ChartingPage = lazy(() =>
  import('@/modules/charting/pages/ChartingPage').then((m) => ({ default: m.ChartingPage })),
);
const BillingPage = lazy(() =>
  import('@/modules/billing/pages/BillingPage').then((m) => ({ default: m.BillingPage })),
);
const CommunicationsPage = lazy(() =>
  import('@/modules/communications/pages/CommunicationsPage').then((m) => ({
    default: m.CommunicationsPage,
  })),
);
const ReportsPage = lazy(() =>
  import('@/modules/reports/pages/ReportsPage').then((m) => ({ default: m.ReportsPage })),
);
const SettingsPage = lazy(() =>
  import('@/modules/settings/pages/SettingsPage').then((m) => ({ default: m.SettingsPage })),
);
const OnboardingPage = lazy(() =>
  import('@/modules/settings/pages/OnboardingPage').then((m) => ({ default: m.OnboardingPage })),
);
const CsvImportPage = lazy(() =>
  import('@/modules/settings/pages/CsvImportPage').then((m) => ({ default: m.CsvImportPage })),
);
const PortalHomePage = lazy(() =>
  import('@/modules/portal/pages/PortalPages').then((m) => ({ default: m.PortalHomePage })),
);
const PortalBookPage = lazy(() =>
  import('@/modules/portal/pages/PortalPages').then((m) => ({ default: m.PortalBookPage })),
);
const PortalAppointmentsPage = lazy(() =>
  import('@/modules/portal/pages/PortalPages').then((m) => ({ default: m.PortalAppointmentsPage })),
);
const PortalIntakePage = lazy(() =>
  import('@/modules/portal/pages/PortalPages').then((m) => ({ default: m.PortalIntakePage })),
);
const PortalInvoicesPage = lazy(() =>
  import('@/modules/portal/pages/PortalPages').then((m) => ({ default: m.PortalInvoicesPage })),
);
const PortalProfilePage = lazy(() =>
  import('@/modules/portal/pages/PortalPages').then((m) => ({ default: m.PortalProfilePage })),
);
const PortalLoginPage = lazy(() =>
  import('@/modules/portal/pages/PortalPages').then((m) => ({ default: m.PortalLoginPage })),
);

function PageLoader() {
  return (
    <div className="flex min-h-screen items-center justify-center">
      <Spinner size="lg" label="Loading page" />
    </div>
  );
}

export function AppRouter() {
  return (
    <Suspense fallback={<PageLoader />}>
      <Routes>
        <Route element={<MarketingLayout />}>
          <Route path={ROUTES.landing.home} element={<LandingPage />} />
          <Route path={ROUTES.landing.features} element={<FeaturesPage />} />
          <Route path={ROUTES.landing.pricing} element={<PricingPage />} />
          <Route path={ROUTES.landing.security} element={<SecurityPage />} />
          <Route path={ROUTES.landing.about} element={<AboutPage />} />
          <Route path={ROUTES.landing.scheduling} element={<SchedulingPage />} />
          <Route path={ROUTES.landing.billingModule} element={<BillingModulePage />} />
          <Route path={ROUTES.landing.chartingModule} element={<ChartingModulePage />} />
          <Route path={ROUTES.landing.onlineBooking} element={<OnlineBookingPage />} />
          <Route path={ROUTES.landing.communicationsModule} element={<CommunicationsModulePage />} />
          <Route path={ROUTES.landing.reporting} element={<ReportingPage />} />
          <Route path={ROUTES.landing.telehealth} element={<TelehealthPage />} />
          <Route path={ROUTES.landing.integrationsPage} element={<IntegrationsPage />} />
          <Route path={ROUTES.landing.developers} element={<DevelopersPage />} />
          <Route path={ROUTES.landing.disciplines} element={<DisciplinesPage />} />
          <Route path={ROUTES.landing.disciplinePt} element={<PhysicalTherapyPage />} />
          <Route path={ROUTES.landing.disciplineChiro} element={<ChiropracticPage />} />
          <Route path={ROUTES.landing.disciplineRmt} element={<MassageTherapyPage />} />
          <Route path={ROUTES.landing.disciplineMh} element={<MentalHealthPage />} />
          <Route path={ROUTES.landing.roleOwner} element={<ClinicOwnerPage />} />
          <Route path={ROUTES.landing.roleAdmin} element={<AdministratorPage />} />
          <Route path={ROUTES.landing.rolePractitioner} element={<PractitionerPage />} />
          <Route path={ROUTES.landing.contact} element={<ContactPage />} />
          {COMING_SOON_PATHS.map((path) => (
            <Route key={path} path={path} element={<ComingSoonPage />} />
          ))}
        </Route>

        <Route element={<AuthLayout />}>
          <Route path={ROUTES.auth.login} element={<LoginPage />} />
          <Route path={ROUTES.auth.register} element={<RegisterPage />} />
          <Route path={ROUTES.auth.forgotPassword} element={<ForgotPasswordPage />} />
        </Route>

        <Route element={<DashboardLayout />}>
          <Route path={ROUTES.dashboard.home} element={<DashboardHomePage />} />
          <Route path={ROUTES.dashboard.designSystem} element={<DesignSystemPage />} />
          <Route path={ROUTES.dashboard.schedule} element={<AppointmentsPage />} />
          <Route path={ROUTES.dashboard.patients} element={<PatientsPage />} />
          <Route path={ROUTES.dashboard.charting} element={<ChartingPage />} />
          <Route path={ROUTES.dashboard.billing} element={<BillingPage />} />
          <Route path={ROUTES.dashboard.communications} element={<CommunicationsPage />} />
          <Route path={ROUTES.dashboard.reports} element={<ReportsPage />} />
          <Route path={ROUTES.dashboard.settings} element={<SettingsPage />} />
          <Route path={`${ROUTES.dashboard.settings}/import`} element={<CsvImportPage />} />
          <Route path={ROUTES.dashboard.onboarding} element={<OnboardingPage />} />
        </Route>

        <Route element={<PortalLayout />}>
          <Route path={ROUTES.portal.home} element={<PortalHomePage />} />
          <Route path={ROUTES.portal.book} element={<PortalBookPage />} />
          <Route path={ROUTES.portal.appointments} element={<PortalAppointmentsPage />} />
          <Route path={ROUTES.portal.intake} element={<PortalIntakePage />} />
          <Route path={ROUTES.portal.invoices} element={<PortalInvoicesPage />} />
          <Route path={ROUTES.portal.profile} element={<PortalProfilePage />} />
          <Route path={ROUTES.portal.login} element={<PortalLoginPage />} />
        </Route>

        <Route path="*" element={<Navigate to={ROUTES.landing.home} replace />} />
      </Routes>
    </Suspense>
  );
}
