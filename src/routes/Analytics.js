import React from "react";
import { Analytics as AnalyticsContent } from "../components/analytics/Analytics";
import { AnalyticsLayout } from "../layouts/AnalyticsLayout";

export const Analytics = ({
  match: {
    params: { type }
  }
}) => (
  <AnalyticsLayout>
    <AnalyticsContent type={type} />
  </AnalyticsLayout>
);
