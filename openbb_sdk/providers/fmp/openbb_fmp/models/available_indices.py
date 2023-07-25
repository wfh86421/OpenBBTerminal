"""FMP Available Indices fetcher."""


from typing import Dict, List, Optional

from openbb_provider.abstract.fetcher import Fetcher
from openbb_provider.helpers import data_transformer
from openbb_provider.models.available_indices import (
    AvailableIndicesData,
    AvailableIndicesQueryParams,
)

from openbb_fmp.utils.helpers import get_data_many


class FMPAvailableIndicesQueryParams(AvailableIndicesQueryParams):
    """FMP Available Indices Query.

    Source: https://site.financialmodelingprep.com/developer/docs/#Historical-stock-index-prices
    """


class FMPAvailableIndicesData(AvailableIndicesData):
    """FMP Available Indices Data."""

    class Config:
        fields = {
            "stock_exchange": "stockExchange",
            "exchange_short_name": "exchangeShortName",
        }


class FMPAvailableIndicesFetcher(
    Fetcher[
        AvailableIndicesQueryParams,
        AvailableIndicesData,
        FMPAvailableIndicesQueryParams,
        FMPAvailableIndicesData,
    ]
):
    @staticmethod
    def transform_query(
        query: AvailableIndicesQueryParams, extra_params: Optional[Dict] = None
    ) -> FMPAvailableIndicesQueryParams:
        return FMPAvailableIndicesQueryParams()

    @staticmethod
    def extract_data(
        query: FMPAvailableIndicesQueryParams, credentials: Optional[Dict[str, str]]
    ) -> List[FMPAvailableIndicesData]:
        if credentials:
            api_key = credentials.get("fmp_api_key")

        base_url = "https://financialmodelingprep.com/api/v3"
        url = f"{base_url}/symbol/available-indexes?apikey={api_key}"
        return get_data_many(url, FMPAvailableIndicesData)

    @staticmethod
    def transform_data(
        data: List[FMPAvailableIndicesData],
    ) -> List[AvailableIndicesData]:
        return data_transformer(data, AvailableIndicesData)
